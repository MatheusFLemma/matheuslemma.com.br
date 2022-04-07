import Link from 'next/link';
import { Container } from './styles';

function ProjectItem({ title, imgUrl, slug }) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <section>
            <h1>{title}</h1>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjectItem;
