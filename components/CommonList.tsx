"use client";

import { useRouter } from "next/navigation";

const CommonList = ({ id = "" }: { id: string }): JSX.Element => {
    const router = useRouter();

    //to be refactore during API integration
    return (
        <div className="w-full max-w-full p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
                <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Neil
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() =>
                                        router.push(`/details/${id}`)
                                    }
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Bon
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => router.push("/details/id")}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Mike
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => router.push("/details/id")}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lana
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => router.push("/details/id")}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center ">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    TCommonLists Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Tom
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => router.push("/details/id")}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CommonList;
