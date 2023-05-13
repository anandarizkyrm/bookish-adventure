import React from "react";

const Avatar = () => {
    return (
        <div className="relative h-10 w-10 shrink-0">
            <img
                alt="Avatar Image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 h-full w-full rounded-full object-cover "
                sizes="40px"
                src="https://i.pravatar.cc/128"
            />
        </div>
    );
};

export default Avatar;
