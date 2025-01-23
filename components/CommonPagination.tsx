"use client";

import { offsetFnProp } from "@app/page";
interface CommonPaginationProps {
    page: number;
    totalPages: number;
    getCurrentPage: ({}: offsetFnProp) => void;
}

const CommonPagination = ({
    page,
    totalPages,
    getCurrentPage,
}: CommonPaginationProps): JSX.Element => {
    return (
        <nav aria-label="Page navigation" className="pt-4 text-center">
            <span className="pr-5">{`Page ${page} out of ${totalPages}`}</span>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button
                        className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg dark:border-gray-700 dark:text-gray-400 ${
                            page !== 1 &&
                            "hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white"
                        }  ${
                            page !== 1
                                ? "button-enabled-pagination"
                                : "button-disabled-pagination"
                        }`}
                        onClick={() =>
                            getCurrentPage({
                                decrement: true,
                            })
                        }
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                </li>
                <li>
                    <button
                        className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-e-lg dark:border-gray-700 dark:text-gray-400 ${
                            page !== totalPages &&
                            "hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white"
                        } ${
                            page !== totalPages
                                ? "button-enabled-pagination"
                                : "button-disabled-pagination"
                        }`}
                        onClick={() =>
                            getCurrentPage({
                                decrement: false,
                            })
                        }
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default CommonPagination;
