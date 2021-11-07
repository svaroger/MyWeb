import React, { useEffect  } from 'react';
import { useLocation } from "react-router-dom";
import ProjectInfo from '../../content/ProjectsContent'
import NavbarContent from '../../content/NavbarContent';
import { projectEasyStock, projectBlockchainId, projectRexNote } from '../../content/ProjectsContent/Data';


const AllProjects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavbarContent />
      <ProjectInfo {...projectBlockchainId}/>
      <ProjectInfo {...projectEasyStock}/>
      <ProjectInfo {...projectRexNote}/>
    </>
  )

}

export default AllProjects
