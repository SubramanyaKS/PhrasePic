
export const downloadImage = (imgSrc:string)=>{
    if (imgSrc) {
        const link = document.createElement('a');
        link.href = imgSrc;
        link.download = 'phasepic-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
}