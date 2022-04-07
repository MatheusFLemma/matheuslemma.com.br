import { FormEvent, useState } from 'react';

import { FormContainer, Input, TextArea } from './styles';
import { toast } from 'react-hot-toast';
import theme from '../../styles/theme';
import { sendContactMail } from '../../services/sendMail';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast('Preencha todos os campos para enviar seu E-mail', {
        style: {
          background: theme.colors.red['00'],
          color: theme.colors.light['30'],
        },
      });

      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast('E-mail enviada com sucesso!', {
        style: {
          background: theme.colors.green['10'],
          color: theme.colors.light['30'],
        },
      });
    } catch {
      toast('Ocorreu um erro ao tentar enviar seu E-mail. Tente novamente!', {
        style: {
          background: theme.colors.red['00'],
          color: theme.colors.light['30'],
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        type="name"
        onChange={({ target }) => setName(target.value)}
        value={name}
      />
      <Input
        placeholder="E-mail"
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
      />
      <TextArea
        placeholder="Mensagem"
        onChange={({ target }) => setMessage(target.value)}
        value={message}
      />
      <button type="submit" disabled={loading}>
        Enviar
      </button>
    </FormContainer>
  );
}
