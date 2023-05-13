const ApiRoutes = {
    get: {
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        all_posts(page: string = "1", per_page: string = "10") {
            return `/public/v2/posts?page=${page}&per_page=${per_page}`;
        },
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        all_users(page: string = "1", per_page: string = "10") {
            return `/public/v2/users?page=${page}&per_page=${per_page}`;
        },
        post(id: string) {
            return `"/public/v2/posts/${id}"`;
        },
    },
    create: {
        post: "/public/v2/posts",
        user: "/public/v2/users",
        comment: "/public/v2/comments",
    },
    update: {
        post(id: string) {
            return `/public/v2/posts/${id}`;
        },
        user(id: string) {
            return `/public/v2/users/${id}`;
        },
    },
    delete: {
        post(id: string) {
            return `/public/v2/posts/${id}`;
        },
        user(id: string) {
            return `/public/v2/users/${id}`;
        },
    },
};

export default ApiRoutes;
