/* eslint-disable @typescript-eslint/no-unused-vars */
import Avatar from "@/components/atoms/Avatar";
import Container from "@/components/organisms/Container";
import apiServices from "@/services/post.service";
import React from "react";

const Detail = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const data = await apiServices.getDetailPost(id);
    const comments = await apiServices.getComment(id);

    console.log(comments);

    return (
        <Container>
            <div className="container mx-auto max-w-screen-lg px-8  py-5 !pt-0 lg:py-8 xl:px-5">
                <div className="mx-auto max-w-screen-md ">
                    <div className="flex justify-center">
                        <div className="flex gap-3">
                            <a href="/category/technology">
                                <span className="tracking-wparamser mt-5 inline-block text-xs font-medium   uppercase text-blue-600">
                                    Technology
                                </span>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                        {data.title}
                    </h1>
                    <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
                        <div className="flex items-center gap-3">
                            <Avatar />
                            <div>
                                <p className="text-gray-800 dark:text-gray-400">
                                    <a href="/author/erika-oliver">
                                        Ananda Rizky Ramadhan
                                    </a>
                                </p>
                                <div className="flex items-center space-x-2 text-sm">
                                    <time className="text-gray-500 dark:text-gray-400">
                                        September 30, 2022
                                    </time>
                                    <span>· 14 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
                <img
                    alt="Thumbnail"
                    loading="eager"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="100vw"
                    src="https://picsum.photos/1080/1080"
                />
            </div>
            <div className="container mx-auto max-w-screen-lg px-8  py-5 lg:py-8 xl:px-5">
                <article className="mx-auto max-w-screen-md ">
                    <div className="prose">
                        {new Array(10).fill("").map((x, i) => (
                            <p key={i} className="my-4 text-justify">
                                {data.body}
                            </p>
                        ))}
                    </div>
                </article>
                <div className="mx-auto max-w-screen-md border-b border-gray-800" />

                <div className="mx-auto my-4 max-w-screen-md text-xs">
                    <p>{comments.length} Comments</p>
                </div>

                {comments?.map((comment: any, idx: number) => (
                    <div
                        key={comment?.id}
                        className="mx-auto  mt-3 max-w-screen-md rounded-2xl bg-gray-50 p-2 text-gray-500 dark:bg-gray-600 dark:text-gray-400"
                    >
                        <div className="flex flex-wrap items-start text-xs sm:flex-nowrap sm:space-x-6">
                            <Avatar />
                            <div>
                                <div className="mb-3">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                                        {comment?.name}
                                    </h3>
                                </div>
                                <div>
                                    <p>{comment?.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Detail;
