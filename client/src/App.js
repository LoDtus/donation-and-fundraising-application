import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar";
import DonationList from "./components/DonationList";
import PageNavigator from "./components/PageNavigator";

export default function App() {
	return (
		<div className="App bg-darken-white flex flex-col justify-center items-center">
			<Header/>
			<main className="container-main flex min-h-[89vh] mb-5">
				<div className="basis-[10%]"></div>
				<div className="basis-[80%] flex flex-col items-center">
					<SearchBar/>
					<DonationList/>
					<PageNavigator/>
				</div>
				<div className="basis-[10%]"></div>
            </main>
			<Footer/>
		</div>
	);
};