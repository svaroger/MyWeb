import React, { useEffect  } from 'react';
import { useLocation } from "react-router-dom";
import ProjectInfo from '../ProjectsContent';
import NavbarContent from '../NavbarContent';
import { projectEasyStock, projectBlockchainId, projectRexNote } from '../ProjectsContent/Data';


const WebProjects = () => {
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

export default WebProjects
