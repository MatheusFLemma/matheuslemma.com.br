import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkContainer } from './styles';

function NavLink({ title, path, includes = false }) {
  const router = useRouter();

  function verifyIfActive() {
    if (includes) {
      return router.pathname.includes(path);
    }

    return path === router.pathname;
  }

  const isActive = verifyIfActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}

export default NavLink;
