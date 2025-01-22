// "use client";

// import { useRouter } from "next/navigation";

interface CommonPaginationProps {
    limit: number;
    offset: number;
}

const CommonPagination = ({
    limit = 0,
    offset = 0,
}: CommonPaginationProps): JSX.Element => {
    // const router = useRouter();
    console.log(limit, offset);
    //to be refactore during API integration
    return (
        <nav aria-label="Page navigation" className="pt-4 text-center">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </a>
                </li>
                <li>
                    <a className="unselected-page-styled">1</a>
                </li>
                <li>
                    <a className="unselected-page-styled">2</a>
                </li>
                <li>
                    <a
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a className="unselected-page-styled">4</a>
                </li>
                <li>
                    <a className="unselected-page-styled">5</a>
                </li>
                <li>
                    <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default CommonPagination;
