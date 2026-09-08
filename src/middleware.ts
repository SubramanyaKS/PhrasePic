// Refresh Supabase auth cookies before requests reach layouts and route handlers.
export { proxy as middleware, config } from "@/lib/supabase/proxy";