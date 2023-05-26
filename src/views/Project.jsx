import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BackProject from '../components/BackProject'
import DeleteProject from '../components/DeleteProject'
import ProjectBackers from '../components/ProjectBackers'
import ProjectDetails from '../components/ProjectDetails'
import UpdateProject from '../components/UpdateProject'
import { useWeb3 } from "../services/useWeb3"
import { useGlobalState } from '../store'
import Footer from '../components/Footer'

const Project = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')
  const [backers] = useGlobalState('backers')
  const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			navigate("/");
		}
	}, []);


  const { getBackers, loadProject, loadProjects } = useWeb3();

  useEffect(async () => {
    await loadProjects()
    await loadProject(id)
    await getBackers(id)
    setLoaded(true)
  }, [])
  
  return loaded ? (
    <div>
      <ProjectDetails project={project} />
      <UpdateProject project={project} />
      <DeleteProject project={project} />
      <BackProject project={project} />
      <ProjectBackers backers={backers} />
      <Footer />
    </div>
  ) : null
}

export default Project
