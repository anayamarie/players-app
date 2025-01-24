import { useState, useEffect } from "react";
import GetPlayersList from "@services/GetPlayersList";

const useFetchPlayers = () => {
    const [players, setPlayers] = useState<[]>([]);
    const [playersLength, setPlayersLength] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isServerError, setIsServerError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const res = await GetPlayersList();
                if (res) {
                    const length = res.length;
                    setPlayersLength(length);
                    setPlayers(res);
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

    return { playersLength, players, isLoading, isServerError };
};

export default useFetchPlayers;
