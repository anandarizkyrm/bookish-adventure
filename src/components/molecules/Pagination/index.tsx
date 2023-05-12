import Link from "next/link";
import React from "react";

type Props = {
    page: string;
};

const Pagination = ({ page }: Props) => {
    return (
        <div className="">
            <Link href={`?page=${parseInt(page) > 1 ? parseInt(page) - 1 : 2}`}>
                <button>Prev</button>
            </Link>
            <Link href={`?page=${parseInt(page) ? parseInt(page) + 1 : 2}`}>
                <button>Next</button>
            </Link>
        </div>
    );
};

export default Pagination;
