import Avatar from "@/components/atoms/Avatar";
import { UserProps } from "@/types";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
    name: string;
    gender: "male" | "female";
    email: string;
    id: string;
    status: "active" | "inactive";
    setDefaultEditValue: React.Dispatch<
        React.SetStateAction<UserProps | undefined>
    >;
    handleDelete: (id: string) => void;
};

const CardUser = ({
    gender,
    name,
    email,
    setDefaultEditValue,
    id,
    status,
    handleDelete,
}: Props) => {
    return (
        <div>
            <div className="flex justify-between gap-4">
                <a>
                    <span className="mt-5 inline-block text-xs font-medium uppercase   tracking-wider text-blue-600">
                        {gender}
                    </span>
                </a>
                <div className="flex gap-4 self-end pb-1 pr-4">
                    <TrashIcon
                        onClick={() => handleDelete(id)}
                        className="h-4 w-4 cursor-pointer text-gray-500"
                    />
                    <PencilSquareIcon
                        onClick={() => {
                            setDefaultEditValue({
                                name: name,
                                id: id,
                                email: email,
                                gender: gender,
                                status: status,
                            });
                        }}
                        className="h-4 w-4 cursor-pointer text-gray-500"
                    />
                </div>
            </div>

            <div className="mt-3 flex items-center space-x-3 p-2 text-gray-500 shadow-md dark:text-gray-400">
                <Avatar />
                <div className="flex items-center gap-3">
                    <span className="truncate text-sm">{name}</span>
                    <span
                        className={`${
                            status == "active" ? "bg-green-700" : "bg-red-500"
                        } h-2 w-2 rounded-full`}
                    ></span>
                </div>
                <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                </span>
                <span className="truncate text-sm">{email}</span>
            </div>
        </div>
    );
};

export default CardUser;
