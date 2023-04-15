import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
