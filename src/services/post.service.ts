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

    createUser: async (post: UserProps) => {
        const url = ApiRoutes.create.user;
        const response = await api.post(url, post);

        return response.data;
    },

    updateUser: async (post: UserProps) => {
        const url = ApiRoutes.update.user(post.id);
        const response = await api.put(url, post);

        return response.data;
    },

    deletePost: async (id: string) => {
        const url = ApiRoutes.delete.user(id);
        const response = await api.delete(url);

        return response.data;
    },
};

export default apiServices;
