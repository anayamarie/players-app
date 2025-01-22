"use client";

import { useRouter } from "next/navigation";

const Home = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="header-container">
                    <h1 className="header-styled">Players List</h1>
                </div>
            </header>
            <main>
                <div className="body-container">
                    <div className="body-container-styled">
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
                                                        router.push(
                                                            "/details/id",
                                                        )
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
                                                    onClick={() =>
                                                        router.push(
                                                            "/details/id",
                                                        )
                                                    }
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
                                                    onClick={() =>
                                                        router.push(
                                                            "/details/id",
                                                        )
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
                                                    Lana Byrd
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    Lana
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <a
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    onClick={() =>
                                                        router.push(
                                                            "/details/id",
                                                        )
                                                    }
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
                                                    Thomes Lean
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    Tom
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <a
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    onClick={() =>
                                                        router.push(
                                                            "/details/id",
                                                        )
                                                    }
                                                >
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <nav
                        aria-label="Page navigation"
                        className="pt-4 text-center"
                    >
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
                </div>
            </main>
        </div>
    );
};

export default Home;
