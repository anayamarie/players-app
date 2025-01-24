"use client";

import { useParams } from "next/navigation";
//common components
import CommonHeader from "@components/CommonHeader";
import CommonSpinner from "@components/CommonSpinner";
import Common404 from "@components/Common404";
import CommonError from "@components/CommonError";
import CommonDetails from "@components/CommonDetails";
//hooks
import useFetchPlayerDetails from "hooks/useFetchPlayerDetails";

const Details = (): JSX.Element => {
    const param = useParams();
    const {
        playerDetails,
        playerDetailsLength,
        isLoading,
        isServerError,
    }: {
        playerDetails: any; // eslint-disable-line
        playerDetailsLength: number;
        isLoading: boolean;
        isServerError: boolean;
    } = useFetchPlayerDetails({
        personId: param?.slug,
    });
    return (
        <div className="min-h-full">
            <CommonHeader title={"Player Details"} hasBreadCrumbs={true} />
            {isLoading ? (
                <CommonSpinner />
            ) : (
                <main aria-label="Player Details">
                    <div className="body-container">
                        <div className="body-container-styled text-center">
                            {isServerError && <CommonError />}
                            {playerDetailsLength === 0 ? (
                                <Common404 />
                            ) : (
                                <CommonDetails playerDetails={playerDetails} />
                            )}
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};

export default Details;
