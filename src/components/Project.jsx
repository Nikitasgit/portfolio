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
}) => {
  return (
    <div className="project">
      <a href={url} className="prj-img" target="_blank" rel="noreferrer">
        <img src={img} alt="" />
      </a>

      <div className="project-description">
        <h3 className="project-title">
          {title}
          <p>
            <a href={url} target="_blank" rel="noreferrer">
              ({url})
            </a>
          </p>
        </h3>
        <div className="technologies">
          <h4>Technologies:</h4>
          <div className="technologies-list">
            {frontendTech.length ? (
              <div className="technologies-group">
                <h5>Front-end:</h5>
                <ul>
                  {frontendTech.map((techno, index) => (
                    <li key={index}>{techno}</li>
                  ))}
                </ul>
              </div>
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
        </div>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
