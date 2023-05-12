import api from "@/api/api";
import ApiRoutes from "@/api/routes/routes.api";
import { UserProps } from "@/types";

const apiServices = {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    getPosts: async (page: string = "1", limit: string = "8") => {
        const url = ApiRoutes.get.all_posts(page, limit);
        const response = await api.get(url);

        return response.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    getUsers: async (page: string = "1", limit: string = "20") => {
        const url = ApiRoutes.get.all_users(page, limit);
        const response = await api.get(url);

        return response.data;
    },

    getDetailPost: async (postId: string) => {
        const url = ApiRoutes.get.post(postId);
        const response = await api.get(url);

        return response.data;
    },

    createPost: async (post: UserProps) => {
        const url = ApiRoutes.create.user;
        const response = await api.post(url, post);

        return response.data;
    },

    // updatePost: async (post: any, postId: number) => {
    //     try {
    //         const url = ApiRoutes.posts.update(postId);
    //         const response = await api.put(url, post);

    //         return response.data;
    //     } catch (err) {
    //         throw err;
    //     }
    // },

    // deletePost: async (postId: number) => {
    //     try {
    //         const url = ApiRoutes.posts.destroy(postId);
    //         const response = await api.delete(url);

    //         return response.data;
    //     } catch (err) {
    //         throw err;
    //     }
    // },
};

export default apiServices;
