import React from "react";

export function PhotoViewer(prop: { picture_url: string;}){
    return (
        <div>
            <img className="main_picture" src={prop.picture_url} alt="lorem picsum" width="50%" />
        </div>
    );
}