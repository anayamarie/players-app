"use client";

import { useState } from "react";
//common components
import CommonHeader from "@components/CommonHeader";
import CommonList from "@components/CommonList";
import CommonPagination from "@components/CommonPagination";
import CommonSpinner from "@components/CommonSpinner";
//hooks
import useFetchPlayers from "hooks/useFetchPlayers";
export interface offsetFnProp {
    decrement: boolean;
}

const Home = (): JSX.Element => {
    const [offset, setOffset] = useState<number>(1);
    const [limit] = useState<number>(10);
    const { playersLength, players, isLoading } = useFetchPlayers();

    const getTotalPages = () => {
        let pages = Number(playersLength / limit);
        const remainder = playersLength % limit;

        pages = Number(pages) + (remainder > 0 ? 1 : 0);
        return pages;
    };

    const getCurrentPage = ({ decrement }: offsetFnProp): void => {
        if (decrement && offset > 1) {
            setOffset((n) => n - 1);
        } else {
            setOffset((n) => n + 1);
        }
    };
    return (
        <div className="min-h-full">
            <CommonHeader title={"Players List"} hasBreadCrumbs={false} />
            <main aria-label="Players Table">
                <div className="body-container">
                    {isLoading ? (
                        <CommonSpinner />
                    ) : (
                        <div>
                            <div className="body-container-styled">
                                <CommonList
                                    currentOffset={offset}
                                    limit={limit}
                                    players={players}
                                />
                            </div>
                            <CommonPagination
                                page={offset}
                                totalPages={getTotalPages()}
                                getCurrentPage={getCurrentPage}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Home;
