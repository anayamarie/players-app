import { useState, useEffect } from "react";
import GetPlayerDetails from "@services/GetPlayerDetails";

const useFetchPlayerDetails = ({ personId }: { personId: any }) => {
    const [playerDetails, setPlayerDetails] = useState<{}>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorInAPI, setErrorInAPI] = useState<boolean>(false);
    const [isServerError, setIsServerError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPlayerDetails = async () => {
            try {
                const res = await GetPlayerDetails({ personId });
                if (res) {
                    const length = res.length;
                    if (length === 0) {
                        setErrorInAPI(true);
                    }
                    setPlayerDetails(length > 0 ? res[0] : {});
                } else {
                    setErrorInAPI(true);
                }
            } catch (err) {
                console.error("Empty Players", err);
                setIsServerError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlayerDetails();
    }, []);

    // return { playerDetails, isLoading, errorInAPI, isServerError };
    return { playerDetails, isLoading };
};

export default useFetchPlayerDetails;
