// Portfolio.jsx
import './Portfolio.css';

import Parallaxor from './Parallaxor/Parallaxor';

import SideBar from './sidebar/sidebar';
import UserBlock from './userBlock/UserBlock';
import TechStack from "./Skills/TechStacks/TechStack.jsx";

const Portfolio = () => {

  return (
    <>
      {/* Profile Icon @top-right-corner */}
      <UserBlock />
      {/* Fixed Aside Menu */}
      <SideBar />

      <Parallaxor />
      <TechStack />
          
    </>
  );
};

export default Portfolio;
