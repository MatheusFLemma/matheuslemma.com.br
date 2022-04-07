import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';

import { Container } from './styles';

function Projects({ projects }) {
  return (
    <Container>
      <SectionTitle title="// Últimos projetos" />

      <section>
        {projects.slice(0, 3).map((project) => (
          <ProjectItem
            key={project.slug}
            description={project.description}
            img={project.thumbnail}
            slug={project.slug}
          />
        ))}
      </section>
    </Container>
  );
}

export default Projects;
