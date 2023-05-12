import Container from "@/components/organisms/Container";
import UserPage from "@/components/organisms/UserPage";
import React from "react";

const Createpost = async ({ searchParams }: any) => {
    const { page } = searchParams;

    return (
        <Container>
            <UserPage page={page} />
        </Container>
    );
};

export default Createpost;
