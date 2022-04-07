import SectionTitle from '../SectionTitle';
import Form from './Form';

import { Container } from './styles';

function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            {'\u002F'}
            {'\u002A'} Precisa dos meus <br /> serviços? {'\u002A'}
            {'\u002F'}
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default ContactForm;
