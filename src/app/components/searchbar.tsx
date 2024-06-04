import React, { ChangeEventHandler } from 'react';

type Props={
    value:string,
    OnChange:ChangeEventHandler,
}

const Searchbar = ({value,OnChange}:Props) => {
  return (
    <div className="searchbar-container my-5">
            <textarea 
              id="search" 
              className="w-full h-9 rounded-md px-2.5 py-1 text-pink-600" 
              value={value} 
              onChange={OnChange} 
              placeholder="Enter your prompt.."
            />
          </div>
  )
}

export default Searchbar