import React from "react";

export function ImageSelector(){

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    
    function getImageUrls() {
        let urls = "";
    
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls+=`<img src="https://picsum.photos/id/6${imageNumberString}/200/300.jpg"/>`;
            }
        }
        return urls;
    }

    const imageUrls = getImageUrls();

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: imageUrls }} />
        </div>
    );
}

// function getImageUrls() {
//     const urls = [];

//     for (let i = 0; i < 50; i++) {
//         if (!brokenImages.includes(i)) {
//             const imageNumberString = i.toString().padStart(2, '0');
//             urls.push(`https://picsum.photos/id/6${imageNumberString}/200/300.jpg`)
//         }
//     }

//     return urls;
// }

// const imageUrls = getImageUrls();

// return (
//     <div>
//         <img src={imageUrls[0]}/>
//     </div>
// );