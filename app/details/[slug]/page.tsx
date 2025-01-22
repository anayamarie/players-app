"use client";

import { useRouter } from "next/navigation";

const Details = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="header-container">
                    <h1 className="header-styled md:mb-5">Player Details</h1>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li
                                className="inline-flex items-center"
                                onClick={() => router.push("/")}
                            >
                                <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg
                                        className="w-3 h-3 me-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Players List
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <span>Details</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>
            <main>
                <div className="body-container">
                    <div className="body-container-styled text-center">
                        <figure className="p-5">
                            <img
                                className="h-auto max-w-full rounded-lg w-40 h-40 mx-auto border-4 border-gray-500/50"
                                src="https://images.dc.prod.cloud.atriumsports.com/b1n81/e277782e704b4b25a02075e16d690684"
                                alt="image description"
                            />
                        </figure>
                        <dl className="max-w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 p-5">
                            <div className="flex flex-col pb-3">
                                <dt className="detail-label-styled">Name</dt>
                                <dd className="detail-value-styled">
                                    Neil Sims
                                </dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="detail-label-styled">Gender</dt>
                                <dd className="detail-value-styled">Male</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="detail-label-styled">
                                    Nationality
                                </dt>
                                <dd className="detail-value-styled">
                                    Australian
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Details;
