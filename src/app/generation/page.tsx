"use client";

import Image from "next/image";
import Button from "../components/button";
import Spinner from "../components/spinner";
import Searchbar from "../components/searchbar";
import { useGenerate } from "../hooks/useGenerate";
import { suggestions } from "../utils/constant";


export default function GeneratePage() {
  const { text,loading, error, imgSrc, handleDownload, generate, refresh, handleChange,talk,listening,handlePromptChange }=useGenerate();

  return (
    <main className="min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold text-pink-200 md:text-5xl">
            Create Something Amazing
          </h1>

          <p className="text-lg text-pink-400 md:text-xl">
            Turn your imagination into an image
          </p>
        </div>

        {/* Prompt */}
        <Searchbar
          talk={talk}
          value={text}
          listening={listening}
          OnChange={handleChange}
        />

        {/* Suggestions */}
        <div className="mt-4">
          <p className="mb-3 text-sm text-pink-200/50">
            Try an example:
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  handlePromptChange(item.prompt)
                }
                className="
                  rounded-full
                  border
                  border-pink-500/20
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  text-pink-200/70
                  transition
                  hover:border-pink-500/40
                  hover:bg-pink-500/10
                  hover:text-pink-200
                "
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            title={loading ? "Generating..." : "✨ Generate Image"}
            OnClick={generate}
          />

          <Button
            title="Clear"
            OnClick={refresh}
          />

          {imgSrc && !loading && (
            <Button
              title="Download"
              OnClick={handleDownload}
            />
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 flex flex-col items-center justify-center">
            <Spinner />

            <p className="mt-4 text-pink-200/70">
              Creating your image...
            </p>

            <p className="mt-1 text-sm text-pink-200/40">
              This may take a moment
            </p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="mt-6 text-center">
            <p className="text-sm text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* Generated Image */}
        {imgSrc && !loading && (
          <section className="mt-12">
            <h2 className="mb-5 text-center text-2xl font-semibold text-pink-200">
              Your Creation
            </h2>

            <div
              className="
                relative
                mx-auto
                aspect-square
                w-full
                max-w-[600px]
                overflow-hidden
                rounded-2xl
                border
                border-pink-500/20
                bg-black/20
                shadow-2xl
                shadow-pink-500/10
              "
            >
              <Image
                src={imgSrc}
                alt="AI generated image"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            {/* Image actions */}
            <div className="mt-5 flex justify-center gap-3">
              <Button
                title="Download"
                OnClick={handleDownload}
              />

              <Button
                title="Generate Again"
                OnClick={generate}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}