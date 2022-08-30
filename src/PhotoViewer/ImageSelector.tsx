import React, { useState } from "react";

export function ImageSelector({setImageUrl}: {setImageUrl: (imageUrl:string) => void}){

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
    
     return (
        <div>
            {getImageUrls().map(url =>(
                <button onClick={ () => setImageUrl(url)}>
                    <img src={url} key= {url} width="100px"/>
                </button>
                )
            )}
        </div>
     );
}

    
