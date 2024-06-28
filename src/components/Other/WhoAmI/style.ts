import { motion } from "framer-motion";
import styled from "styled-components";
export const StyledWhoAmI = styled(motion.div)`
  width: 100%;
  height: 100vh;
  margin: 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 600px) {
    margin: 0;
    padding: 90px 0 40px 0;
    height: min-content;
  }
`;
export const ContainerWhoAmI = styled(motion.div)`
  width: 83%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.5rem;
  @media (max-width: 600px) {
    width: 85%;
    gap: 2rem;
  }
`;
export const Content = styled(motion.div)`
  width: 50%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  @media (max-width: 950px) {
    width: 80%;
    min-height: 90%;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    width: 100%;
    min-height: 90%;
    flex-direction: column;
    gap: 2rem;
  }
`;
export const Div = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 950px) {
    gap: 20px;
  }
  @media (max-width: 600px) {
    gap: 2rem;
  }
`;
export const Title = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.4rem;
  line-height: 1.2;
  word-break: break-all;
  text-transform: uppercase;
  @media (max-width: 950px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Text = styled(motion.p)`
  text-align: start;
  letter-spacing: 0.1rem;
  line-height: 1.2;
  word-break: break-all;
  font-family: var(--jost-light);
  @media (max-width: 950px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
