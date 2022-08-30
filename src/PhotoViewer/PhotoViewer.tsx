import React from "react";

export function PhotoViewer(prop: { picture_url: string; border_color: string;}){
    return (
        <div>
            <img className="main_picture" src={prop.picture_url} alt="lorem picsum" width="50%" border-color={prop.border_color}/>
        </div>
    );
}