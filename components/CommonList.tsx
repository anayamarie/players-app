"use client";

import { useRouter } from "next/navigation";

interface CommonListProps {
    currentOffset: number;
    limit: number;
    players: any;
}

const CommonList = ({
    currentOffset = 1,
    limit = 10,
    players = [],
}: CommonListProps): JSX.Element => {
    const router = useRouter();

    const filterData = () => {
        const startIndex = (currentOffset - 1) * limit;
        return players.slice(startIndex, startIndex + limit);
    };

    type rowDataProps = { [key: string]: string };
    const renderRow = (rowData: rowDataProps, index: number) => {
        return (
            <li className="py-3 sm:py-4" key={index}>
                <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 trunc`ate dark:text-white">
                            {rowData?.nameFullLocal}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {rowData?.nameAbbreviated}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() =>
                                router.push(`/details/${rowData?.personId}`)
                            }
                        >
                            Details
                        </a>
                    </div>
                </div>
            </li>
        );
    };
    return (
        <div className="w-full max-w-5xl p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
                <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    {filterData().map((datum, index) =>
                        renderRow(datum, index),
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CommonList;
