import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#00b4d8]",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg hover:bg-[#6fcdde] shadow-md font-medium duration-200 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
