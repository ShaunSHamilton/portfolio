import { useState } from "react";

export const ProjectCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleUnhover = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={"project-card" + (isHovered ? " hovered-img" : "")}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div className="card-holder">
        <img className="card-img-top" src={props.img()} alt="Card Cap"></img>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <a href={props.href} className="link-to-project">
          View
        </a>
      </div>
    </div>
  );
};
