import DonationList from "../components/DonationList";
import PageNavigator from "../components/PageNavigator";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <div className="flex">
            <div className="basis-[10%]"></div>
            <div className="basis-[80%] flex flex-col items-center">
                <SearchBar/>
                <DonationList/>
                <PageNavigator/>
            </div>
            <div className="basis-[10%]"></div>
        </div>
    )
};