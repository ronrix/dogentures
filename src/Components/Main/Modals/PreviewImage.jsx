import React from "react";

import sampleImg from "../../../assets/sample-img.webp";

export const PreviewImage = () => {
    return (
        <div className="w-full h-full relative flex items-center">
            <img src={sampleImg} alt="dogs" className="w-full " />
        </div>
    );
};
