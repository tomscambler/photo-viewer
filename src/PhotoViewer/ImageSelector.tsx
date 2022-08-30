import React, { useState } from "react";

export function ImageSelector(){

    const [selectedImage, updateImage] = useState("https://picsum.photos/id/600/1600/900.jpg")

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    
    function getImageUrls() {
        const urls = [];
    
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
    
        return urls;
    }
    
     return <div>
        
     {getImageUrls().map(urls =>(
     <button onClick = {() =>updateImage(urls)}>
         <img src={urls} key= {urls} width="300"/></button>))}
       
        </div>
}

    
