import { NextRequest, NextResponse } from "next/server";
import { query } from "../../utils/fetch";
import { rateLimiter } from "../../utils/ratelimit";
import { blobToBase64 } from "@/app/utils/generate";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const authHeader = request.headers.get("authorization");

    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }
      );
    }

    const accessToken = authHeader.substring(7);

    const { text } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json(
        { message: "Text is required" },
        { status: 400 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    await rateLimiter.consume(ip);

    const response = await query(text, accessToken);

    const base64Image = await blobToBase64(response);

    return NextResponse.json(
      { imageUrl: base64Image },
      { status: 200 }
    );
  } catch (error: any) {
    if (error?.name === "RateLimiterRes") {
      return NextResponse.json(
        {
          message: "Too many requests, please try again later.",
        },
        { status: 429 }
      );
    }

    console.error("Internal server error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}