import styled from "styled-components";

interface FlexProps {
  direction?: "row" | "column";
  flexWrap?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "inherit")};
`;
