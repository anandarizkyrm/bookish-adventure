import clsx from "clsx";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={clsx(
                "container mx-auto px-8 xl:px-5",
                "max-w-screen-lg"
            )}
        >
            {children}
        </div>
    );
};

export default Container;
