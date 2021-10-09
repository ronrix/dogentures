import React, {useState, useRef, useEffect} from "react";
import { SERVER_PATH } from "../../../config/index.js";

export const TopInfo = ({ data }) => {
    const [imgErr, setImgErr] = useState(false);
    const [desc, setDesc] = useState(localStorage.getItem("desc") || "");
    const [descReadOnly, setDescReadOnly] = useState(true);
    const refInput = useRef(null);

    useEffect(() => {
        refInput.current.readOnly = descReadOnly;
    }, [descReadOnly]);

    function handleBlur() {
        setDescReadOnly(!descReadOnly);
        refInput.current.readOnly = descReadOnly;
    }

    function handleInput(e) {
        setDesc(e.target.value);
        localStorage.setItem("desc", JSON.stringify(desc));
    }

    return (
        <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="font-bold text-2xl text-d">
                    {data?.getInfo?.name}
                </h2>
                <span className="text-md">@{data?.getInfo?.name}</span>
    
                <div className="m-4 font-medium text-lg relative flex items-center">
                    <div className="bg-d text-l text-xs absolute -top-3 left-0">not complete</div>
                    <input className="border-none outline-none" type="text" value={desc || localStorage.getItem("desc")} onChange={e => handleInput(e)} ref={refInput} onBlur={handleBlur} />
                    <span onClick={() => refInput.current.focus()} className="text-facebook text-xs absolute -bottom-2 right-0 cursor-pointer hover:text-lbtn">edit</span>
                </div>
            </div>
                { !imgErr ? (
                    <div className="sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                        <img
                            src={`${SERVER_PATH}images/profile/${data?.getInfo.name}/${data?.getInfo.avatar}`}
                            alt="avatar"
                            className="rounded-full"
                            onError={() => setImgErr(true)}
                        />
                    </div>) : <i className="fas fa-user-circle sm:text-5xl md:text-7xl text-d"></i>
                }
        </div>
    );
};
