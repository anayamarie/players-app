import { useState, useEffect } from "react";
import GetPlayerDetails from "@services/GetPlayerDetails";

const useFetchPlayerDetails = ({ personId }: { personId: any }) => {
    const [playerDetails, setPlayerDetails] = useState<{}>({});
    const [playerDetailsLength, setPlayerDetailsLength] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isServerError, setIsServerError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPlayerDetails = async () => {
            try {
                const res = await GetPlayerDetails({ personId });
                if (res) {
                    const length = res.length;
                    setPlayerDetailsLength(length);
                    setPlayerDetails(length > 0 ? res[0] : {});
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

    return {
        playerDetailsLength,
        playerDetails,
        isLoading,
        isServerError,
    };
};

export default useFetchPlayerDetails;
