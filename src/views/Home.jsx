import { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import CreateProject from "../components/CreateProject";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useWeb3 } from "../services/useWeb3";
import Faqs from "../components/Faqs/Faqs";

const Home = () => {
	const { loadProjects } = useWeb3();

	useEffect(async () => {
		await loadProjects();
	}, []);

	return (
		<div className="bg-green1">
			<Hero />
			<Projects />
			<CreateProject />
			<AddButton />
			<Faqs />
		</div>
	);
};

export default Home;
