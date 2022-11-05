// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledNav } from './AppBar.styled.jsx';

import { Box } from 'components/Box/Box';

export const AppBar = () => {
  return (
    <Box m="0 auto">
      <StyledHeader id="up">
        <StyledNav>
          <StyledLink end="true" to="/">
            Home
          </StyledLink>
          {/* <StyledLink to="/favorite">Favorite</StyledLink> */}
        </StyledNav>
      </StyledHeader>
      <Outlet />
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
    </Box>
  );
};
