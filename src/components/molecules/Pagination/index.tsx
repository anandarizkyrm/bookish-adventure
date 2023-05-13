import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = {
    page: string;
};

const Pagination = ({ page }: Props) => {
    return (
        <div className="flex  w-full items-center justify-center   py-12">
            <Link href={`?page=${parseInt(page) > 1 ? parseInt(page) - 1 : 2}`}>
                <button className=" flex items-center justify-center rounded-l-lg border-y border-l border-gray-300 p-2 text-sm dark:border-gray-600 dark:text-gray-500">
                    <ChevronLeftIcon className="mr-2 inline h-4 w-4" /> Previous
                </button>
            </Link>
            <Link href={`?page=${parseInt(page) ? parseInt(page) + 1 : 2}`}>
                <button className="flex items-center justify-center rounded-r-lg border border-gray-300 p-2 text-sm dark:border-gray-600 dark:text-gray-500">
                    Next <ChevronRightIcon className="ml-2 inline h-4 w-4" />
                </button>
            </Link>
        </div>
    );
};

export default Pagination;
