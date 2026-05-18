import Heading from "@/components/atoms/heading/heading";
import styled from "styled-components";

type SectionBlockProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <StyledSection>
      <HeadingWrapper>
        <Heading tag="h2" textColor="primary" align="center">
          {title}
        </Heading>
      </HeadingWrapper>

      <ComponentWrapper>{children}</ComponentWrapper>
    </StyledSection>
  );
}

const HeadingWrapper = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.SPACING(32, 3)};
`;

const StyledSection = styled.section`
  margin: ${({ theme }) => theme.SPACING(62, 12)};
`;

const ComponentWrapper = styled.div``;
