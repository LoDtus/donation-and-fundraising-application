import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import DonationDetail from "./pages/DonationDetail";
import PostEditor from "./pages/PostEditor";

export default function App() {
	return (
		<div className="App bg-darken-white flex flex-col justify-center items-center">
			<Header/>
			<SignIn/>
			<SignUp/>
			<main className="container-main min-h-[89vh] mb-5">
				<Routes>
					<Route
						path="/"
						element={<Home/>}
					/>
					<Route
						path="/editor"
						element={<PostEditor/>}
					/>
					<Route
						path="/detail"
						element={<DonationDetail/>}
					/>
				</Routes>
            </main>
			<Footer/>
		</div>
	);
};