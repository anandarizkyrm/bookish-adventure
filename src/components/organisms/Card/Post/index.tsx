import clsx from "clsx";
import React from "react";

type Props = {
    title: string;
    body: string;
    className?: string;
};

const PostCard = ({ title, body, className }: Props) => {
    return (
        <div className={clsx("group cursor-pointer", className)}>
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <a
                    className="relative block aspect-video"
                    href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
                >
                    <img
                        alt="Thumbnail"
                        // fetchPriority="high"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-all"
                        sizes="(max-width: 768px) 30vw, 33vw"
                        src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                        }}
                    />
                </a>
            </div>
            <div className="">
                <div>
                    <div className="flex gap-3">
                        <a href="/category/technology">
                            <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                                Technology
                            </span>
                        </a>
                    </div>
                    <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                        <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
                            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                                {title}
                            </span>
                        </a>
                    </h2>

                    <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-3">
                            <span className="truncate text-sm">
                                Mario Sanchez i
                            </span>
                        </div>
                        <span className="text-xs text-gray-300 dark:text-gray-600">
                            •
                        </span>
                        <time className="truncate text-sm">
                            October 21, 2022
                        </time>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
