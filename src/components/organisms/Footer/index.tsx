import ThemeSwitch from "@/components/molecules/Pagination/ThemeSwitch";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="container mx-auto mt-10 max-w-screen-lg  border-t border-gray-100 px-8 py-5 dark:border-gray-800 lg:py-8 xl:px-5">
            <div className="text-center text-sm">
                ©2023 Ananda Rizky Ramadhan
            </div>
            <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
                <span>·</span>
                <span>
                    <Link
                        target={"_blank"}
                        href="https://github.com/anandarizkyrm"
                    >
                        Github
                    </Link>
                </span>
            </div>
            <div className="mt-2 flex items-center justify-end">
                <div className="inline-flex items-center ">
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    );
};

export default Footer;
