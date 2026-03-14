import { sizes } from "@/styles/sizes";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: ${sizes["7xl"]};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brightBlue};
  margin-top: 1000px;
  padding: ${sizes.sm};
  gap: ${sizes.lg};
`;

export const LinksWrapper = styled.ul`
  display: grid;
  grid-template-columns: 40px 64px 64px 112px;
  column-gap: 20px;
`;
export const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${sizes.xs};
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
`;
