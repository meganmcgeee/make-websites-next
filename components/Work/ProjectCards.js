import React, { PropTypes } from 'react';

import ProjectCard from './ProjectCard';

const isEven = n => n % 2 === 0;
const projectToCard = slug => (project, idx) => {
  const Card = isEven(idx) ?
    ProjectCard.Left :
    ProjectCard.Right;
  return (
    <Card
      imgSrc={project.imgSrc}
      key={project.name}
      link={project.link}
      name={project.name}
      slug={slug}
    >
      {project.description}
    </Card>
  );
};

const ProjectCards = ({ projects, slug }) => (
  <div className="project-cards">
    {projects.map(projectToCard(slug))}
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
  slug: PropTypes.string.isRequired,
};

export default ProjectCards;
