import React from "react";

export function PhotoViewer({imageUrl}: {imageUrl:string}){
    return (
        <div>
            <img className="main_picture" src={imageUrl} alt="lorem picsum" width="50%" />
        </div>
    );
}