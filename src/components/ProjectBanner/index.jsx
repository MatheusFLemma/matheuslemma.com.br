import { Container } from './styles';

function ProjectBanner({ title, imgUrl }) {
  return (
    <Container imgUrl={imgUrl}>
      <section>
        <h1>{title}</h1>
      </section>
    </Container>
  );
}

export default ProjectBanner;
