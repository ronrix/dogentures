import React from "react";

export const CloseBtn = ({ close }) => {
    const handleClose = () => {
        close({ preview: false, fromButton: false });
    };
    return (
        <i
            onClick={handleClose}
            className="fas fa-times text-white text-4xl absolute z-50 top-0 right-8 cursor-pointer hover:text-opacity-70"
        ></i>
    );
};
