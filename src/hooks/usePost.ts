/* eslint-disable prettier/prettier */
import apiServices from "@/services/post.service";
import { UserProps } from "@/types";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
    useMutation,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

function UsePost(
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>
) {
    const { mutate } = useMutation(
        (data: UserProps) => {
            return apiServices.createUser(data);
        },
        {
            onSuccess() {
                toast.success("Successfully Post data!");
                setIsOpen(false);
                refetch();
            },
            onError(error: Error | any) {
                if (error.response) {
                    return toast.error(
                        error?.response.data[0].field +
                            ": " +
                            error?.response.data[0].message
                    );
                }
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

function useUpdateUser(
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>
) {
    const { mutate } = useMutation(
        (data: UserProps) => {
            return apiServices.updateUser(data);
        },
        {
            onSuccess() {
                toast.success("Successfully Update data!");
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

function useDeleteUser(
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>
) {
    const { mutate } = useMutation(
        (id: string) => {
            return apiServices.deletePost(id);
        },
        {
            onSuccess() {
                toast.success("Successfully delete data!");
                refetch();
            },
            onError(error: Error) {
                toast.error(error.message);
            },
        }
    );
    const onSubmit = (id: string) => {
        mutate(id);
    };

    return {
        onSubmit,
    };
}

export { UsePost, useDeleteUser, useUpdateUser };
