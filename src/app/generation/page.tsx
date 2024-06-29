'use client'
import Image from "next/image";
import Button from "../components/button";
import React from "react";
import Spinner from "../components/spinner";
import Searchbar from "../components/searchbar";
import { useGenerate } from "../hooks/useGenerate";

const page = () => {
  const { text,loading, error, imgSrc, handleDownload, generate, refresh, handleChange,talk,listening }=useGenerate();
  
  return (
    <main className="">
        <h2 className="text-2xl font-bold mb-4 text-center my-6 text-pink-200">Text to Image Generation</h2>
        <div className="container mx-auto">
          <Searchbar talk={talk} value={text} listening={listening} OnChange={(e) => { handleChange(e)}}/> 
          <div className="flex justify-center space-x-4 ">
            <Button title="Generate" OnClick={generate} />
            <Button title="Refresh" OnClick={refresh} />
            {imgSrc && <Button title="Download" OnClick={handleDownload} />}
          </div>
          <div className="image-container my-5">
            {imgSrc && <div className="mx-auto relative" style={{ width: '300px', height: '300px'}}>
                <Image src={imgSrc} alt="Generated" fill style={{objectFit:"contain"}} />
              </div>}
              {!imgSrc && loading && <div className="flex justify-center"><Spinner/></div>}
              {error?<p className="text-red-600">{error}</p>:null}
          </div>
        </div>
      </main>
  )
}

export default page