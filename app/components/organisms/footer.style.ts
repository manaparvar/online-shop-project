import styled from "styled-components";

export const LinksWrapper = styled.ul`
  display: grid;
  grid-template-columns: 40px 64px 64px 112px;
  column-gap: 20px;
  margin-top: 32px;
`;
export const FooterWrapper = styled.div`
  height: 336px;
  background-color: ${({ theme }) => theme.colors.brightBlue};
  margin-top: 1000px;
  padding: 16px;
`;
