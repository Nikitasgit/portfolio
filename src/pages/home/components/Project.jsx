import React from "react";

const Project = ({
  url,
  description,
  img,
  frontendTech,
  backendTech,
  title,
  deployTech,
  stockageTech,
  index,
}) => {
  return (
    <div className={index % 2 !== 0 ? "project-card-even" : "project-card"}>
      <a href={url} className="img-container" target="_blank" rel="noreferrer">
        <img src={img} alt="project image" />
      </a>

      <div className="project-card-text">
        <h3 className="project-title">
          {title}
          <p>
            <a href={url} target="_blank" rel="noreferrer">
              ({url})
            </a>
          </p>
        </h3>
        <div className="technologies-container">
          {frontendTech.length ? (
            <ul className="technologies-group">
              <h5>Front-end:</h5>
              <ul>
                {frontendTech.map((techno, index) => (
                  <li key={index}>{techno}</li>
                ))}
              </ul>
            </ul>
          ) : null}
          {backendTech.length ? (
            <div className="technologies-group">
              <h5>Back-end:</h5>
              <ul>
                {backendTech.map((techno, index) => (
                  <li key={index}>{techno}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {deployTech.length ? (
            <div className="technologies-group">
              <h5>Deployement:</h5>
              <ul>
                {deployTech.map((techno, index) => (
                  <li key={index}>{techno}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {stockageTech.length ? (
            <div className="technologies-group">
              <h5>Stockage:</h5>
              <ul>
                {stockageTech.map((techno, index) => (
                  <li key={index}>{techno}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
