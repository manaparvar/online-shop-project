import styled from "styled-components";

const Badge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.sizes?.xs};
  left: ${({ theme }) => theme.sizes?.xs};
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ theme }) => theme.sizes?.md};
  height: ${({ theme }) => theme.sizes?.sm};

  padding: 0 5px;
  border-radius: 2px;

  background: ${({ theme }) => theme.colors?.accent};
  color: ${({ theme }) => theme.colors?.background};

  font-size: 9px;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints?.md}) {
    width: ${({ theme }) => theme.sizes?.lg};
    min-height: ${({ theme }) => theme.sizes?.md};
    font-size: 12px;
    border-radius: 3px;
    top: ${({ theme }) => theme.sizes?.sm};
    left: ${({ theme }) => theme.sizes?.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints?.lg}) {
    width: ${({ theme }) => theme.sizes?.xl};
    min-height: ${({ theme }) => theme.sizes?.lg};
    font-size: 14px;
    top: 10px;
  }
`;

export default Badge;
