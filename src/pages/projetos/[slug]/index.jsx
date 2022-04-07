import { useRouter } from 'next/router';
import Head from 'next/head';

import getPrismicClient from '../../../services/prismic';

import Prismic from '@prismicio/client';
import LoadingScreen from '../../../components/LoadingScreen/index';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer/index';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import ProjectBanner from '../../../components/ProjectBanner/index';

export default function Project({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | Matheus Lemma - Desenvolvedor Front-end</title>

        <meta name="description" content={project.description} />
        <meta name="author" content="Matheus Fávaro Lemma" />
        <meta
          name="keywords"
          content="criação de sites personalizados, criação de sites profissionais, criação de sites, sites profissionais, sites responsivos, responsivo sites, sites mobile, mobile sites, desenvolvimento de web site, criar sites, criação de websites, site barato, meu site, quero um site, agencia de sites, sites sao paulo, desenvolvimento de site,são paulo sites sao paulo, criacao de site sao paulo, sites em sao paulo, desenvolvimento de site, desenvolvimento de site em são paulo, desenvolvimento de site em sao paulo, desenvolvimento de site em brasília, desenvolvimento de site, desenvolvimento de site em são paulo, desenvolvimento de sites, desenvolvimento de sites em são paulo, desenvolvimento de sites em sao paulo, desenvolvimento de sites em são paulo, desenvolvimento de sites em são paulo, desenvolvimento de sites em são paulo, desenvolvedor web, web designer, html, css, css3, reactjs, web standards, seo, acessibilidade, website, freela, freelancer"
        />
        <meta
          name="copyright"
          content="Copyright 2022 Matheus Fávaro Lemma. Todos os direitos reservados"
        />
        <meta
          property="canonical"
          content={`https://matheuslemma.dev.br/projetos/${project.title}`}
        />

        <meta property="og:url" content={`https://matheuslemma.dev.br/projetos/${project.title}`} />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:site_name"
          content={`${project.title} Matheus Fávaro Lemma | Desenvolvedor Front-End`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matheus Lemma - Desenvolvedor Front-end | Home" />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:src" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="403" />
        <meta property="og:image:type" content="image/png" />

        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={`${project.title} Matheus Fávaro Lemma | Desenvolvedor Front-End`}
        />
        <meta property="twitter:description" content={project.description} />
        <meta property="twitter:image" content={project.thumbnail} />
        <meta property="twitter:image:src" content={project.thumbnail} />
        <meta property="twitter:image:secure_url" content={project.thumbnail} />

        <meta name="geo.placename" content="São Paulo, Brasil" />
      </Head>

      <Header />

      <ProjectBanner title={project.title} imgUrl={project.thumbnail} />

      <main className="container">
        <p>{project.description}</p>
        <section>
          <button type="button">
            <a href={project.onlineLink} rel="external noreferrer" target="_blank">
              Ver projeto online
            </a>
          </button>
          <button type="button">
            <a href={project.sourceLink} rel="external noreferrer" target="_blank">
              Ver source do projeto
            </a>
          </button>
        </section>
      </main>

      <Footer />
    </ProjectContainer>
  );
}

export async function getStaticPaths() {
  const prismic = getPrismicClient();
  const projects = await prismic.query([Prismic.predicates.at('document.type', 'project')]);

  const paths = projects.results.map((project) => ({
    params: {
      slug: project.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    onlineLink: response.data.online_project.url,
    sourceLink: response.data.source_project.url,
    thumbnail: response.data.thumbnail.url,
  };

  return {
    props: { project },
    revalidate: 86400,
  };
}
