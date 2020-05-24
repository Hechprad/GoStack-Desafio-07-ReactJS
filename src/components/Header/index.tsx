import React from 'react';

import { Link } from 'react-router-dom';

import { Container, LinkWrapper } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <LinkWrapper currentPath={window.location.pathname === '/'}>
          <Link to="/">Listagem</Link>
        </LinkWrapper>
        <LinkWrapper currentPath={window.location.pathname === '/import'}>
          <Link to="/import">Importar</Link>
        </LinkWrapper>
        {
          console.log(window.location.pathname)
          // Todo
        }
      </nav>
    </header>
  </Container>
);

export default Header;
