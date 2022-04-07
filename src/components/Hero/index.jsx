import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

import picture from '../../assets/hero.svg';
import Image from 'next/image';

function Hero() {
  return (
    <Container>
      <div>
        <TextContainer>
          <h1>Olá!</h1>
          <h2>Me chamo Matheus</h2>
        </TextContainer>
      </div>

      <InfosContainer>
        <CodeItem>
          <span className="comment">
            {'\u002F'}
            {'\u002F'} Minha apresentação
          </span>
          <br />
          <br />
          <span className="pink">infos:</span> <span className="string">{'\u007B'}</span>
          <div>
            &nbsp;nome: <span className="string">&apos;Matheus&lsquo;</span>,
          </div>
          <div>
            &nbsp;sobrenome: <span className="string">&apos;Favaro Lemma&lsquo;</span>,
          </div>
          <div>
            &nbsp;idade: <span className="number">24</span>,
          </div>
          <div>
            &nbsp;graduacao: <span className="string">&apos;Eng. da computacao&lsquo;</span>,
          </div>
          <span className="string">{'\u007D'}</span>
          <br />
          <br />
          <span className="pink">areaDeAtuacao:</span> <span className="string">{'\u007B'}</span>
          <div>
            &nbsp;funcao: <span className="string">&apos;Desenvolvedor Front-End&lsquo;</span>,
          </div>
          <div>
            &nbsp;conhecimento: <span className="pink">{'\u007B'}</span>
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;HTML&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;CSS&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;Sass/Scss&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;TailwindCSS&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;styled-components&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;JavaScript&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;TypeScript&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;ReactJS&lsquo;</span>,
          </div>
          <div>
            <span className="string">&nbsp;&nbsp;&apos;NextJS&lsquo;</span>,
          </div>
          <span className="pink">&nbsp;{'\u007D'}</span>
          <br />
          <span className="string">{'\u007D'}</span>
        </CodeItem>
      </InfosContainer>

      <Image
        src={picture}
        alt="Personagem de costas, no seu lado direito, uma caneca e um notebook com representação de linhas de código, e, a sua esquerda, um monitor grande com uma representação da aplicação que está sendo criada"
      />
    </Container>
  );
}

export default Hero;
