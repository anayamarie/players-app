import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async () => {
    const cancelToken = axios.CancelToken;
    const sourceToken = cancelToken.source();
    const URL = `${API_URL}?format=true&route=persons&fields=personId,nameFullLocal,nameAbbreviated&hideNull=true`;
    try {
        const res = await axios
            .get(URL, {
                cancelToken: sourceToken.token,
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log(
                        `Request Cancelled from API Request: ${URL}`,
                        error.message,
                    );
                    sourceToken.cancel(
                        "Operation Cancelled due to request is cancelled",
                    );
                    throw error;
                } else {
                    console.log(`"Error in API Request: ${URL}`, error.message);
                    sourceToken.cancel("Operation Cancelled due to error");
                    throw error;
                }
            });

        if (res?.status !== 200) {
            console.error("Unexpected result.");
            sourceToken.cancel("Operation Cancelled due to Unexpected Result");
            return;
        }

        return res?.data?.data;
    } catch (err) {
        sourceToken.cancel("Operation Cancelled due to error");
        console.error(err);
    }
};
