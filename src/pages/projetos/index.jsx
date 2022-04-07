import Head from 'next/head';

import Header from '../../components/Header';
import { ProjectContainer } from '../../styles/ProjectsStyles';
import ProjectItem from '../../components/ProjectItem';

import getPrismicClient from '../../services/prismic';
import Prismic from '@prismicio/client';

export default function Projetos({ projects }) {
  return (
    <ProjectContainer>
      <Head>
        <title>Projetos | Matheus Lemma - Desenvolvedor Front-end</title>

        <meta
          name="description"
          content="Vitrine dos meus projetos pessoais, e alguns profissionais"
        />
        <meta name="author" content="Matheus Fávaro Lemma" />
        <meta
          name="keywords"
          content="criação de sites personalizados, criação de sites profissionais, criação de sites, sites profissionais, sites responsivos, responsivo sites, sites mobile, mobile sites, desenvolvimento de web site, criar sites, criação de websites, site barato, meu site, quero um site, agencia de sites, sites sao paulo, desenvolvimento de site,são paulo sites sao paulo, criacao de site sao paulo, sites em sao paulo, desenvolvimento de site, desenvolvimento de site em são paulo, desenvolvimento de site em sao paulo, desenvolvimento de site em brasília, desenvolvimento de site, desenvolvimento de site em são paulo, desenvolvimento de sites, desenvolvimento de sites em são paulo, desenvolvimento de sites em sao paulo, desenvolvimento de sites em são paulo, desenvolvimento de sites em são paulo, desenvolvimento de sites em são paulo, desenvolvedor web, web designer, html, css, css3, reactjs, web standards, seo, acessibilidade, website, freela, freelancer"
        />
        <meta
          name="copyright"
          content="Copyright 2022 Matheus Fávaro Lemma. Todos os direitos reservados"
        />
        <meta property="canonical" content="https://matheuslemma.dev.br/projetos" />

        <meta property="og:url" content="https://matheuslemma.dev.br/projetos" />
        <meta
          property="og:description"
          content="Vitrine dos meus projetos pessoais, e alguns profissionais"
        />
        <meta property="og:site_name" content="Matheus Fávaro Lemma | Desenvolvedor Front-End" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matheus Lemma - Desenvolvedor Front-end | Home" />
        <meta property="og:image" content="/og_image.png" />
        <meta property="og:image:src" content="/og_image.png" />
        <meta property="og:image:secure_url" content="/og_image.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="403" />
        <meta property="og:image:type" content="image/png" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Matheus Fávaro Lemma | Desenvolvedor Front-End" />
        <meta
          property="twitter:description"
          content="Vitrine dos meus projetos pessoais, e alguns profissionais"
        />
        <meta property="twitter:image" content="/og_image.png" />
        <meta property="twitter:image:src" content="/og_image.png" />
        <meta property="twitter:image:secure_url" content="/og_image.png" />

        <meta name="geo.placename" content="São Paulo, Brasil" />
      </Head>

      <Header />
      <main className="container">
        {projects.map((project) => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            imgUrl={project.thumbnail}
            slug={project.slug}
          />
        ))}
      </main>
    </ProjectContainer>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query([Prismic.Predicates.at('document.type', 'project')], {
    orderings: '[document.first_publication_date desc]',
  });

  const projects = projectResponse.results.map((project) => ({
    slug: project.uid,
    title: project.data.title,
    description: project.data.description,
    onlineLink: project.data.online_project,
    sourceLink: project.data.source_project,
    thumbnail: project.data.thumbnail.url,
  }));

  return {
    props: { projects },
    revalidate: 432000,
  };
};
