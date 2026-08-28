'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Download,
  Image as ImageIcon,
  Sparkles,
  WandSparkles,
  Zap,
} from 'lucide-react';
// @ts-ignore
import './assets/css/new.css';
import { useHome } from './hooks/useHome';

import generatedimage from './assets/generated-image.png';
import { Step } from './components/step';

export default function HomePage() {
  const { moveToGenerate } = useHome();

  return (
    <main className="min-h-screen overflow-hidden bg-[#09080f] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-[450px] w-[450px] rounded-full bg-pink-600/10 blur-[150px]" />
        <div className="absolute right-[5%] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[160px]" />
        <div className="absolute bottom-[-200px] left-[40%] h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[160px]" />
      </div>

      <section className="relative z-10 px-5 pb-20 pt-20 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/[0.06] px-4 py-2 text-sm text-pink-300">
                <WandSparkles size={15} />
                AI-powered image generation
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Turn your words into <span className="gradient-text">stunning images.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Describe anything you can imagine and let PhrasePic transform your words into beautiful AI-generated artwork.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button type="button" onClick={moveToGenerate} className="hero-primary-button">
                  <Sparkles size={18} />
                  Start Creating
                  <ArrowRight size={17} />
                </button>
                <a href="#how-it-works" className="hero-secondary-button">How it works</a>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium"><Zap size={16} className="text-pink-400" />AI Powered</div>
                  <p className="mt-1 text-xs text-gray-600">Transform ideas instantly</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium"><ImageIcon size={16} className="text-purple-400" />High Quality</div>
                  <p className="mt-1 text-xs text-gray-600">Beautiful generated artwork</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-10 rounded-full bg-pink-600/20 blur-[100px]" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 via-black to-pink-900/30">
                  <Image src={generatedimage} alt="AI generated artwork" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Generated with PhrasePic</p>
                        <p className="mt-1 text-sm font-medium">Where imagination becomes art.</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-md"><Sparkles size={18} className="text-pink-400" /></div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/30 px-4 py-3">
                  <div className="flex-1 overflow-hidden">
                    <p className="truncate text-xs text-gray-500">Prompt</p>
                    <p className="truncate text-sm text-gray-300">A futuristic city floating above the clouds...</p>
                  </div>
                  <button type="button" onClick={moveToGenerate} aria-label="Start generating" className="rounded-lg bg-pink-500 p-2.5 text-white transition hover:bg-pink-400"><ArrowRight size={16} /></button>
                </div>
              </div>

              <div className="absolute -bottom-20 -left-5 hidden rounded-2xl border border-white/10 bg-[#111017]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400"><Sparkles size={18} /></div>
                  <div><p className="text-sm font-medium">AI Generation</p><p className="text-xs text-gray-500">Ready to create</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 border-t border-white/[0.06] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-pink-400">SIMPLE WORKFLOW</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From idea to image in seconds.</h2>
            <p className="mt-4 text-gray-500">Creating AI artwork with PhrasePic is simple.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Step number="01" icon={<WandSparkles size={21} />} title="Describe" description="Write a simple description of the image you want to create." />
            <Step number="02" icon={<Sparkles size={21} />} title="Generate" description="PhrasePic sends your idea to an AI image generation model." />
            <Step number="03" icon={<Download size={21} />} title="Download" description="Preview your artwork and save the generated image." />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-pink-500/10 bg-gradient-to-br from-pink-500/[0.08] via-purple-500/[0.06] to-transparent p-10 text-center sm:p-16">
          <Sparkles className="mx-auto text-pink-400" size={28} />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Your imagination is the only limit.</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">Start creating unique AI-generated artwork from your own words.</p>
          <button type="button" onClick={moveToGenerate} className="hero-primary-button mx-auto mt-8 w-fit">Create an Image <ArrowRight size={17} /></button>
        </div>
      </section>
    </main>
  );
}

