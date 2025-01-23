"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import CommonHeader from "@components/CommonHeader";
import CommonSpinner from "@components/CommonSpinner";
import useFetchPlayerDetails from "hooks/useFetchPlayerDetails";

const Details = (): JSX.Element => {
    const param = useParams();
    const {
        playerDetails,
        isLoading,
    }: {
        playerDetails: any; // eslint-disable-line
        isLoading: boolean;
    } = useFetchPlayerDetails({
        personId: param?.slug,
    });
    return (
        <div className="min-h-full">
            <CommonHeader title={"Player Details"} hasBreadCrumbs={true} />
            {isLoading ? (
                <CommonSpinner />
            ) : (
                <main>
                    <div className="body-container">
                        <div className="body-container-styled text-center">
                            <div className="body-container-border">
                                <figure>
                                    <Image
                                        className="h-auto max-w-full rounded-lg mx-auto border-4 border-gray-500/50"
                                        src={
                                            playerDetails?.images?.[0]?.url ||
                                            "/fallback.png"
                                        }
                                        alt="player image"
                                        width="100"
                                        height="100"
                                    />
                                </figure>
                                <dl className="max-w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 p-5">
                                    <div className="flex flex-col pb-3">
                                        <dt className="detail-label-styled">
                                            Name
                                        </dt>
                                        <dd className="detail-value-styled">
                                            {playerDetails?.nameFullLocal}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="detail-label-styled">
                                            Gender
                                        </dt>
                                        <dd className="detail-value-styled">
                                            {playerDetails?.gender}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col pt-3">
                                        <dt className="detail-label-styled">
                                            Nationality
                                        </dt>
                                        <dd className="detail-value-styled">
                                            {playerDetails?.nationality}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};

export default Details;
