import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: ; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  padding: 24px;
  box-shadow: -7px 7px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%);
  background-color: ${p => p.theme.colors.backGroundColor};
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: block;

  padding: 6px;

  cursor: pointer;
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.l};
  transition: color 250ms linear;
  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverBtnColor};
  }
`;
