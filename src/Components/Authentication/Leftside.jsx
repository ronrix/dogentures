import React, { useRef, useEffect, useState } from "react";
import iphone from "../../assets/iphone.png";
import dog1 from "../../assets/dog-01.jpeg";
import dog2 from "../../assets/dog-02.jpeg";
import dog3 from "../../assets/dog-03.jpeg";
import dogFootMark from "../../assets/foot-mark.png";

export const Leftside = () => {
    const imageRef = useRef(null);
    const [showWhatImage, setShowWhatImage] = useState({
        one: true,
        two: false,
        three: false,
    });
    useEffect(() => {
        const forClearingInterval = setInterval(() => {
            if (showWhatImage.one) {
                setShowWhatImage({ ...showWhatImage, one: false, two: true });
                return;
            }

            if (showWhatImage.two) {
                setShowWhatImage({ ...showWhatImage, two: false, three: true });
                return;
            }

            if (showWhatImage.three) {
                setShowWhatImage({ ...showWhatImage, one: true, three: false });
                return;
            }
        }, 1000);

        return () => {
            if (
                window.location.href !== "/login" ||
                window.location.href !== "/signup"
            )
                clearInterval(forClearingInterval);
        };
    }, [showWhatImage, setShowWhatImage]);
//
    return (
        <div className="flex-1 sm:hidden md:hidden lg:flex flex md:mt-0 items-center relative lg:bg-l h-screen">
            <div className="relative w-full flex justify-center box-border">

                <div className="relative">
                    <div className="absolute -left-40 top-10">
                        <img src={iphone} alt="iphone" className="w-52" />
                        <div className="w-full flex absolute items-center justify-center left-0 top-0 px-4 bottom-0">
                            <img
                                src={ dogFootMark }
                                alt="dog 1"
                                className="w-max h-max relative"
                                ref={imageRef}
                            />
                        </div>

                    </div>
                    <div className="relative z-20">
                    <img src={iphone} alt="iphone" className="w-64" />
                    <div className="w-full flex absolute items-center justify-center left-0 top-0 px-4 bottom-0">
                        <img
                            src={
                                showWhatImage.one
                                    ? dog1
                                    : showWhatImage.two
                                    ? dog2
                                    : dog3
                            }
                            alt="dog 1"
                            className="w-max h-max relative"
                            ref={imageRef}
                        />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
