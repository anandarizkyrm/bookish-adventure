import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
    title: string;

    className?: string;
    id: string;
};

const PostCard = ({ title, className, id }: Props) => {
    return (
        <div className={clsx("group cursor-pointer", className)}>
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                <Link
                    className="relative block aspect-video"
                    href={`/detail/${id}`}
                >
                    <img
                        alt="Thumbnail"
                        // fetchPriority="high"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition-all"
                        sizes="(max-width: 768px) 30vw, 33vw"
                        src="https://picsum.photos/700/800"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                        }}
                    />
                </Link>
            </div>
            <div className="">
                <div>
                    <div className="flex gap-3">
                        <a>
                            <span className="mt-5 inline-block text-xs font-medium uppercase   tracking-wider text-blue-600">
                                Technology
                            </span>
                        </a>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold leading-snug tracking-tight    dark:text-white">
                        <Link href={`/detail/${id}`}>
                            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                                {title}
                            </span>
                        </Link>
                    </h2>

                    <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-3">
                            <span className="truncate text-sm">
                                Ananda Rizky Ramadhan
                            </span>
                        </div>
                        <span className="text-xs text-gray-300 dark:text-gray-600">
                            •
                        </span>
                        <time className="truncate text-sm">
                            Agustus 17, 1945
                        </time>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
