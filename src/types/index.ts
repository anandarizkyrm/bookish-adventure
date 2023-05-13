export type Post = {
    id: string;
    user_id: string;
    title: string;
    body: string;
};

export type UserProps = {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any;
    email: string;
    gender: "male" | "female";
    status: "active" | "inactive";
};
