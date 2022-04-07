import Link from 'next/link';

import { ProjectContainer } from './styles';

export default function ProjectItem({ description, slug, img }) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <picture />
        <span>
          <Link href={`/projetos/${slug}`}>
            <a>{slug}</a>
          </Link>
        </span>
        <p>{description}</p>
      </section>
    </ProjectContainer>
  );
}
