import { motion } from "framer-motion";
import styled from "styled-components";
export const StyledWork = styled(motion.div)`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  @media (max-width: 950px) {
    padding: 18% 0 40px 0;
  }
  @media (max-width: 600px) {
    padding: 18% 0 40px 0;
  }
`;
export const Content = styled(motion.ul)`
  width: 83%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  @media (max-width: 950px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
`;
