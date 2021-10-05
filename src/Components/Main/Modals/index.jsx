import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { CloseBtn } from "./CloseBtn.jsx";
import { PreviewImage } from "./PreviewImage.jsx";
import { TopInfo } from "./TopInfo.jsx";
import { Reactions } from "./Reactions.jsx";
import { Comments } from "./Comments.jsx";
import { CommentInput } from "./CommentInput.jsx";

export const Preview = ({ open, close }) => {
    const bodyref = useRef(null);
    const focusRef = useRef(null);

    useEffect(() => {
        if (open.preview) {
            if (open.fromButton) {
                focusRef.current.focus();
            }
            bodyref.current.parentElement.parentElement.style.overflow =
                "hidden";
        } else
            bodyref.current.parentElement.parentElement.style.overflow = "auto";
    });

    return ReactDOM.createPortal(
        <div
            ref={bodyref}
            className={`fixed top-0 bottom-0 right-0 left-0 overflow-hidden flex justify-center items-center px-10 bg-black bg-opacity-75 ${
                open.preview ? "block" : "hidden"
            } z-20`}
        >
            {/* close button */}
            <CloseBtn close={close} />
            {/* image */}
            <PreviewImage />
            <div className="w-2/5 h-5/6 bg-white  ml-4 items-center p-2 relative ">
                <TopInfo />
                <Reactions />
                <Comments />
                <CommentInput focusRef={focusRef} />
            </div>
        </div>,
        document.getElementById("preview-post")
    );
};
