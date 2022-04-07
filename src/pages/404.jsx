import Link from 'next/link';

import { Container } from '../styles/FourOhFour';

export default function FourOhFour() {
  return (
    <Container>
      <div>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
      </div>
      <span>😱</span>
      <Link href="/">
        <a>Voltar para a Home</a>
      </Link>
    </Container>
  );
}
