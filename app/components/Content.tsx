"use client";

import styled from "styled-components";

export default function Content() {
  return (
    <ContentWrapper>
      <span>Content</span>
    </ContentWrapper>
  );
}
const ContentWrapper = styled.div`
  height: 200px;
  background-color: #a5cef1;
`;
