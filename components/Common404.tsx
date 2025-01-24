"use client";

import { useRouter } from "next/navigation";
const Common404 = (): JSX.Element => {
    const router = useRouter();
    return (
        <div className="body-container-border">
            <div className="p-8">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="text-gray-600 pb-5">
                    Oops! The player detail you are looking for could not be
                    found.
                </p>
                <a
                    onClick={() => router.push(`/`)}
                    className="mt-4 inline-blocsk rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                >
                    {" "}
                    Go back to Home{" "}
                </a>
            </div>
        </div>
    );
};

export default Common404;
