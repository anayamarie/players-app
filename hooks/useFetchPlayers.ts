import { useState, useEffect } from "react";
import GetPlayersList from "@services/GetPlayersList";

const useFetchPlayers = () => {
    const [players, setPlayers] = useState<{}[]>([]);
    const [playersLength, setPlayersLength] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorInAPI, setErrorInAPI] = useState<boolean>(false);
    const [isServerError, setIsServerError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const res = await GetPlayersList();
                if (res) {
                    const length = res.length;
                    if (length === 0) {
                        setErrorInAPI(true);
                    }
                    setPlayersLength(length);
                    setPlayers(res);
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

        fetchPlayers();
    }, []);

    return { playersLength, players, isLoading, errorInAPI, isServerError };
};

export default useFetchPlayers;
