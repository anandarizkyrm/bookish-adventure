/* eslint-disable prettier/prettier */
import apiServices from "@/services/post.service";
import { UserProps } from "@/types";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
    useMutation,
} from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";

import toast from "react-hot-toast";

// TODO : display validation error
function UsePost(
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>
) {
    const { mutate } = useMutation(
        (data: UserProps) => {
            return apiServices.createPost(data);
        },
        {
            onSuccess() {
                toast.success("Successfully Post data!");
                setIsOpen(false);
                refetch();
            },
            onError(error: Error) {
                toast.error(error.message);
            },
        }
    );
    const onSubmit = (data: unknown) => {
        mutate(data as UserProps);
    };

    return {
        onSubmit,
    };
}

export default UsePost;
