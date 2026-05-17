import styled from "styled-components";

const ViewportWrapper = styled.div`
  height: 442px;
  width: 320px;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 432px;
    height: 410px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 432px;
    height: 560px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 552px;
    height: 640px;
  }
`;
const SliderColumnWrapper = styled.div`
  align-items: center;
  background-color: rgb(242, 240, 234);
  border-radius: 4px;
  display: flex;
  height: 264px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 392px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 440px;
  }
`;
const Wrapper = styled.div`
  margin-top: 1rem;
`;

const ScrollContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(164, 164, 164);
    border-radius: 4px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 104px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 120px;
  }
`;

const Item = styled.div`
  background-color: rgb(242, 240, 234);
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  height: 56px;
  margin: 10px;
  position: relative;
  width: 56px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 82px;
    width: 82px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 100px;
    width: 100px;
  }
`;

export { Item, ScrollContainer, SliderColumnWrapper, ViewportWrapper, Wrapper };
