import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-weight: 700;
  padding: 20px;
  color: ${p => p.theme.colors.primaryText};

  transition: color 0.2s ease-in-out;
  ::after {
    content: '';
    width: 65%;
    height: 3px;
    opacity: 0;
    background-color: ${p => p.theme.colors.secondaryText};
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover {
    color: ${p => p.theme.colors.secondaryText};
  }
  &.active {
    color: ${p => p.theme.colors.secondaryText};
    ::after {
      opacity: 1;
    }
  }
`;

export const StyledHeader = styled.header`
  margin-bottom: 20px;
  height: 60px;
  padding: 0 10px;
  background-color: #444444;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
