import { Post } from "@/types";
import clsx from "clsx";
import React from "react";
import PostCard from "../Card/Post";

type Props = {
    posts: Post[];
    page: string;
};

const ListPosts = ({ posts, page }: Props) => {
    return (
        <div
            className={clsx(
                "grid gap-6",
                Number(page) > 1
                    ? "grid-cols-2 md:grid-cols-4"
                    : "grid-cols-2 md:grid-cols-6"
            )}
        >
            {posts.map((item: Post, index: number) => (
                <PostCard
                    className={`${
                        (!page && index <= 1) || (page == "1" && index <= 1)
                            ? "col-span-2 md:col-span-3"
                            : "col-span-2"
                    }`}
                    key={item.id}
                    id={item.id}
                    title={item.title}
                />
            ))}
        </div>
    );
};

export default ListPosts;
