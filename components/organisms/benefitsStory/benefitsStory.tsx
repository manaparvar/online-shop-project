import styled from "styled-components";
import BenefitItem from "./components/benefitItem";

export type BenefitStoryItem = {
  id: string | number;
  title: string;
  image: string;
};

type BenefitsStoryProps = {
  benefitStories: BenefitStoryItem[];
};

const BenefitsStory = ({ benefitStories }: BenefitsStoryProps) => {
  return (
    <StyledWrapper>
      {benefitStories.map((benefit) => (
        <BenefitItem
          img={benefit.image}
          key={benefit.id}
          title={benefit.title}
        />
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 56px;
  padding: ${({ theme }) => theme.SPACING(3)};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: ${({ theme }) => theme.SPACING(2.5, 0)};
  }
`;

export default BenefitsStory;
