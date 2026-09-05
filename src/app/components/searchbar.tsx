import React from 'react';
import { SearchProps } from '../utils/types';
import { Ellipsis, Mic } from 'lucide-react';


const Searchbar = ({ value, OnChange, talk, listening }: SearchProps) => {
  return (
    <div className="w-full">
      {/* Prompt input */}
      <div className="relative">
        <textarea
          id="prompt"
          value={value}
          onChange={OnChange}
          placeholder="Describe the image you want to create..."
          rows={4}
          maxLength={1000}
          disabled={listening}
          className="
            w-full
            min-h-[150px]
            rounded-2xl
            border
            border-pink-500/20
            bg-white/5
            px-5
            py-4
            pr-16
            pb-10
            text-pink-100
            placeholder:text-pink-200/40
            resize-none
            outline-none
            transition-all
            duration-200
            focus:border-pink-500/60
            focus:ring-2
            focus:ring-pink-500/20
            hover:border-pink-500/30
            disabled:opacity-60
          "
        />

        {/* Character count */}
        <span
          className="
            absolute
            bottom-4
            left-5
            text-xs
            text-pink-200/40
          "
        >
          {value.length}/1000
        </span>

        {/* Microphone */}
        <button
          onClick={talk}
          type="button"
          aria-label={
            listening
              ? "Stop listening"
              : "Use microphone"
          }
          className="
            absolute
            bottom-3
            right-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-pink-600
            text-white
            shadow-lg
            shadow-pink-500/20
            transition-all
            duration-200
            hover:bg-pink-700
            hover:scale-105
            active:scale-95
            disabled:opacity-50
          "
        >
          {listening ? (
            <Ellipsis className="h-5 w-5" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Searchbar;