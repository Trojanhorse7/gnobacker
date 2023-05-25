import { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import CreateProject from "../components/CreateProject";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useWeb3 } from "../services/useWeb3";
import { useGlobalState, setGlobalState } from "../store";
import {fetchSigner} from "@wagmi/core";

const Home = () => {
	const { loadProjects } = useWeb3();

	useEffect(async () => {
		await loadProjects();
	}, []);

	return (
		<>
			<Hero />
			<Projects />
			<CreateProject />
			<AddButton />
		</>
	);
};

export default Home;
