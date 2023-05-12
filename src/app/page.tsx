import Pagination from "@/components/molecules/Pagination";
import Container from "@/components/organisms/Container";
import ListPosts from "@/components/organisms/ListPosts";
import apiServices from "@/services/post.service";
import { Post } from "@/types";

async function getData(page: string) {
    const res = await apiServices.getPosts(page);
    const data = await res;
    return data;
}

export default async function Home({ searchParams }: any) {
    const { page } = searchParams;
    const posts = await getData(page);

    return (
        <Container>
            <ListPosts posts={posts as Post[]} page={page} />
            <Pagination page={page} />
        </Container>
    );
}
