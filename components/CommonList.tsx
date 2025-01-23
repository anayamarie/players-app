"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface CommonListProps {
    currentOffset: number;
    limit: number;
    players: [];
}

const CommonList = ({
    currentOffset = 1,
    limit = 10,
    players = [],
}: CommonListProps): JSX.Element => {
    const router = useRouter();

    const filterData = () => {
        const startIndex = (currentOffset - 1) * limit;
        return players?.slice(startIndex, startIndex + limit);
    };
    const renderRow = (
        rowData: any, // eslint-disable-line
        index: number,
    ) => {
        return (
            <li className="py-3 sm:py-4" key={index}>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Image
                            className="w-8 h-8 rounded-full border-1 border-blue-500/50"
                            src={rowData?.images?.[0]?.url || "/fallback.png"}
                            alt="player image"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {rowData?.nameFullLocal}
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
        <div className="body-container-border">
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
