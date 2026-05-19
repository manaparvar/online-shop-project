import Text from "@/components/atoms/text/text";
import Image from "@/components/atoms/image/image";
import styled from "styled-components";

type BenefitItemProps = {
  title: string;
  img: string;
};

const BenefitItem = ({ title, img }: BenefitItemProps) => {
  return (
    <StyledWrapper>
      <StyledImage src={img} alt={title} width={16} height={16} />
      <Text variant="caption" color="background">
        {title}
      </Text>
    </StyledWrapper>
  );
};

const StyledImage = styled(Image)`
  width: 16px;
  height: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ theme }) => theme.SPACING(1)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 54px;
    height: 54px;
    margin-right: ${({ theme }) => theme.SPACING(1.5)};
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.SPACING(2, 1)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    width: auto;
    padding: ${({ theme }) => theme.SPACING(1.5, 2)};
  }
`;

export default BenefitItem;
