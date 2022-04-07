import { Container } from './styles';

function SectionTitle({ title, description }) {
  return (
    <Container data-aos="fade-right">
      <h1>{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
