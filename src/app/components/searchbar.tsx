import { EllipsisHorizontalIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
import React, { ChangeEventHandler, MouseEventHandler } from 'react';

type Props = {
  value: string,
  OnChange: ChangeEventHandler,
  talk: MouseEventHandler,
  listening:boolean,
}

const Searchbar = ({ value, OnChange, talk,listening }: Props) => {
  return (
    <div className="relative searchbar-container my-5">
      <textarea
        id="search"
        className="w-full h-20 rounded-md px-2.5 py-1 text-pink-600 pr-10 resize-none"
        value={value}
        onChange={OnChange}
        placeholder="Enter your prompt..."
        rows={1} // Adjust the number of rows as needed
      />
      <button
        onClick={talk}
        className="absolute bottom-2 right-2 p-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-all disabled:opacity-50"
        type="button"
      >
        {listening ? (
          <EllipsisHorizontalIcon className="h-5 w-5" />
        ) : (
          <MicrophoneIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}

export default Searchbar;