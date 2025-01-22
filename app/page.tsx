import CommonHeader from "@components/CommonHeader";
import CommonList from "@components/CommonList";
import CommonPagination from "@components/CommonPagination";

const Home = (): JSX.Element => {
    return (
        <div className="min-h-full">
            <CommonHeader title={"Players List"} hasBreadCrumbs={false} />
            <main>
                <div className="body-container">
                    <div className="body-container-styled">
                        <CommonList id="test" />
                    </div>
                    <CommonPagination limit={0} offset={0} />
                </div>
            </main>
        </div>
    );
};

export default Home;
