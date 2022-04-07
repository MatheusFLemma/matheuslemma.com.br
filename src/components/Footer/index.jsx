import { Container } from './styles';

import { FaGithub, FaLinkedin, FaTwitter, FaTwitch } from 'react-icons/fa';

function Footer() {
  function handleRedirect(url) {
    window.open(url);
  }

  function handleScrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollToTop}>
          Voltar ao topo
        </button>

        <section>
          <FaGithub onClick={() => handleRedirect('https://github.com/MatheusFLemma')} />
          <FaTwitter onClick={() => handleRedirect('https://twitter.com/_atenasgs')} />
          <FaLinkedin onClick={() => handleRedirect('https://linkedin.com/in/matheusflemma/')} />
          <FaTwitch onClick={() => handleRedirect('https://twitch.tv/atenasgs')} />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
