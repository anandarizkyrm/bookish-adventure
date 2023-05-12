/* eslint-disable tailwindcss/classnames-order */
"use client";
import React, { useEffect, useMemo } from "react";
import { Dialog } from "@headlessui/react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@/components/atoms/Input";
import SelectInput from "@/components/atoms/SelectInput";
import UsePost from "@/hooks/usePost";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";
import { UserProps } from "@/types";

type Props = {
    isOpen: boolean;
    setIsOpen: any;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>;
    type: "edit" | "create";
    defaultEditValues: UserProps | undefined;
};

const ModalFormCreateUser = ({
    isOpen,
    setIsOpen,
    refetch,
    type,
    defaultEditValues,
}: Props) => {
    const methods = useForm({
        mode: "onTouched",
        defaultValues: {
            name: "",
        },
    });
    const { handleSubmit } = methods;

    const { onSubmit } = UsePost(setIsOpen, refetch);

    const methodsEdit = useForm({
        mode: "onTouched",
        defaultValues: useMemo(() => {
            return defaultEditValues;
        }, [defaultEditValues]),
    });
    const { handleSubmit: handleEdit, reset } = methodsEdit;

    useEffect(() => {
        reset(defaultEditValues);
    }, [defaultEditValues, reset]);

    const { onSubmit: editSubmit } = UsePost(setIsOpen, refetch);

    console.log(defaultEditValues);
    return (
        <Dialog
            className="relative z-50"
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 ">
                <Dialog.Panel className="bg-red-500 md:w-2/6 w-full p-6 rounded-lg dark:bg-black dark:border dark:border-gray-600">
                    <>
                        {type === "create" ? (
                            <div>
                                <Dialog.Title className="text-gray-500 text-xl">
                                    Create User
                                </Dialog.Title>

                                <FormProvider {...methods}>
                                    <form
                                        className="my-4 flex flex-col gap-2"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <Input
                                            id="name"
                                            validation={{
                                                required: "Name must be filled",
                                            }}
                                            placeholder="Fill User Name"
                                            containerClassName="text-xs"
                                        />
                                        <Input
                                            id="email"
                                            type={"email"}
                                            validation={{
                                                required:
                                                    "Email must be filled",
                                            }}
                                            placeholder="Email *"
                                            containerClassName="text-xs"
                                        />
                                        <SelectInput
                                            selectList={["Male", "Female"]}
                                            id="gender"
                                            validation={{
                                                required:
                                                    "Gender must be filled",
                                            }}
                                            placeholder="Gender *"
                                            containerClassName="text-xs"
                                        />
                                        <SelectInput
                                            selectList={["Active", "Inactive"]}
                                            id="status"
                                            validation={{
                                                required:
                                                    "Status must be filled",
                                            }}
                                            placeholder="Status *"
                                            containerClassName="text-xs"
                                        />
                                        <div className="flex justify-between">
                                            <button
                                                className="text-xs border border-gray-600 p-2 rounded-lg"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                className="text-xs border border-gray-600 p-2 rounded-lg"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </FormProvider>
                            </div>
                        ) : (
                            <div>
                                <Dialog.Title className="text-gray-500 text-xl">
                                    Edit User
                                </Dialog.Title>

                                <FormProvider {...methodsEdit}>
                                    <form
                                        className="my-4 flex flex-col gap-2"
                                        onSubmit={handleEdit(editSubmit)}
                                    >
                                        <Input
                                            id="name"
                                            validation={{
                                                required: "Name must be filled",
                                            }}
                                            placeholder="Fill User Name"
                                            containerClassName="text-xs"
                                        />
                                        <Input
                                            id="email"
                                            type={"email"}
                                            validation={{
                                                required:
                                                    "Email must be filled",
                                            }}
                                            placeholder="Email *"
                                            containerClassName="text-xs"
                                        />
                                        <SelectInput
                                            selectList={["Male", "Female"]}
                                            id="gender"
                                            validation={{
                                                required:
                                                    "Gender must be filled",
                                            }}
                                            placeholder="Gender *"
                                            containerClassName="text-xs"
                                        />
                                        <SelectInput
                                            selectList={["Active", "Inactive"]}
                                            id="status"
                                            validation={{
                                                required:
                                                    "Status must be filled",
                                            }}
                                            placeholder="Status *"
                                            containerClassName="text-xs"
                                        />
                                        <div className="flex justify-between">
                                            <button
                                                className="text-xs border border-gray-600 p-2 rounded-lg"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                className="text-xs border border-gray-600 p-2 rounded-lg"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </FormProvider>
                            </div>
                        )}
                    </>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default ModalFormCreateUser;
