import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItems from "./WorksItems";
const Works = () => {
  const [item, setItems] = useState({ name: "all" });
  const [projects, setprojects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setprojects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setprojects(newProjects)
    }
  }, [item]);

  const handleClick=(e,index)=>{
    setItems({name:e.target.textContent});
    setActive(index)
  }
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e)=> {
                handleClick(e, index);
            }} className={`${active === index ? 'active-work':''} work__item`} key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
