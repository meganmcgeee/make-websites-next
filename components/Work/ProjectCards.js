import React, { PropTypes } from 'react';

import ProjectCard from './ProjectCard';

const isEven = n => n % 2 === 0;
const projectToCard = (project, idx) => {
  const Card = isEven(idx) ?
    ProjectCard.Left :
    ProjectCard.Right;
  return (
    <Card
      imgSrc={project.imgSrc}
      key={project.name}
      link={project.link}
      name={project.name}
    >
      {project.description}
    </Card>
  );
};

const ProjectCards = ({ projects }) => (
  <div className="project-cards">
    {projects.map(projectToCard)}
  </div>
);

ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ProjectCards;
