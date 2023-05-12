"use client";
import Loading from "@/components/atoms/Loading";
import apiServices from "@/services/post.service";
import { UserProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CardUser from "../Card/User";
import ModalFormCreateUser from "../Modal/FormCreateUser";

const UserPage = ({ page }: { page: string }) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () => apiServices.getUsers(page),
    });
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [defaultEditValue, setDefaultEditValue] = useState<UserProps>();
    const [modalType, setModalType] = useState<"create" | "edit">("create");

    const handleFilter = (data: UserProps[]) => {
        if (search.length > 0) {
            return data.filter((item) =>
                Object.values(item).some((item) =>
                    item.toString().toLowerCase().includes(search.toLowerCase())
                )
            );
        }
        return data;
    };

    useEffect(() => {
        if (defaultEditValue) {
            setIsOpen(true);
            return setModalType("edit");
        }
    }, [defaultEditValue]);

    return (
        <div className="p-6">
            <div className="my-6 flex justify-between">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Filter User . . ."
                    className="rounded-lg border border-gray-600 bg-transparent p-1 px-4 text-xs text-gray-500 "
                ></input>
                <button
                    className="rounded-lg border border-gray-600 p-2 text-xs text-gray-400"
                    onClick={() => {
                        setIsOpen(true);
                        setModalType("create");
                    }}
                >
                    Create User
                </button>
            </div>
            <ModalFormCreateUser
                refetch={refetch}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                type={modalType}
                defaultEditValues={defaultEditValue}
            />
            {isLoading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-2 gap-2">
                    {handleFilter(data)?.map((item: UserProps) => (
                        <CardUser
                            key={item.id}
                            gender={item.gender}
                            active={item.active}
                            id={item.id}
                            name={item.name}
                            email={item.email}
                            setDefaultEditValue={setDefaultEditValue}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserPage;
