import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import Input from "../../Atoms/input/input";
import { textVariants } from "@/styles/variants";

export const FooterWrapper = styled.div`
  height: ${sizes["7xl"]};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brightBlue};
  margin-top: 800px;
  padding: ${sizes.sm};
  gap: ${sizes.lg};
`;

export const LinksWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  column-gap: 20px;
`;
export const WidgetsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  column-gap: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
`;

export const SocialLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${sizes.xs};
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
`;
export const StyledInput = styled(Input)`
  width: ${sizes["3xl"]};
  height: ${sizes.md};
  border-radius: 3px 0 0 3px;
  background-color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    text-align: center;
    font-size: ${textVariants.caption.fontSize.mobile};
  }
`;
