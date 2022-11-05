import styled from 'styled-components';

export const ContactsList = styled.div`
  width: 90%;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const ListForContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const ErrorMsg = styled.h2`
  text-align: center;
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
`;
