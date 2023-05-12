const ApiRoutes = {
    get: {
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        all_posts(page: string = "1", per_page: string = "10") {
            return `/public/v2/posts?page=${page}&per_page=${per_page}`;
        },
        post(id: string) {
            return `"/public/v2/posts/${id}"`;
        },
    },
    create: {
        post: "/public/v2/posts",
        comment: "/public/v2/comments",
    },
    update: {
        post(id: string) {
            return `"/public/v2/posts/${id}"`;
        },
    },
    delete: {
        post(id: string) {
            return `"/public/v2/posts/${id}"`;
        },
    },
};

export default ApiRoutes;