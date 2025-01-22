import Image from "next/image";
import CommonHeader from "@components/CommonHeader";

const Details = (): JSX.Element => {
    //to be refactored during API integration
    return (
        <div className="min-h-full">
            <CommonHeader title={"Player Details"} hasBreadCrumbs={true} />
            <main>
                <div className="body-container">
                    <div className="body-container-styled text-center">
                        <figure className="p-5">
                            <Image
                                className="h-auto max-w-full rounded-lg w-40 h-40 mx-auto border-4 border-gray-500/50"
                                src="https://images.dc.prod.cloud.atriumsports.com/b1n81/e277782e704b4b25a02075e16d690684"
                                alt="player image"
                                width="40"
                                height="40"
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
