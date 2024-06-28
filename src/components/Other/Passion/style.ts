import { motion } from "framer-motion";
import styled from "styled-components";
export const StyledPassion = styled(motion.div)`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 90px 0 40px 0;
  @media (max-width: 950px) {
    padding: 90px 0 40px 0;
    height: min-content;
  }
  @media (max-width: 600px) {
    padding: 90px 0 40px 0;
    height: min-content;
  }
  .imagePassion {
    position: relative !important;
    width: 150px !important;
    min-height: 150px;
    @media (max-width: 950px) {
      width: 90px !important;
      min-height: 90px;
    }
    @media (max-width: 600px) {
      width: 60px !important;
      min-height: 60px;
    }
  }
`;
export const ContainerPassion = styled(motion.div)`
  width: 83%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 1rem;
    width: 70%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    width: 85%;
  }
`;
export const ContentLeft = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.6rem;
  @media (max-width: 950px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;
export const ContentCenter = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.6rem;
  @media (max-width: 950px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;
export const ContentRight = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.6rem;
  @media (max-width: 950px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;
export const Title = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.4rem;
  line-height: 1.2;
  word-break: break-all;
  @media (max-width: 950px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;
export const Text = styled(motion.p)`
  text-align: start;
  letter-spacing: 0.1rem;
  line-height: 1.2;
  font-family: var(--jost-light);
  word-break: break-all;
  @media (max-width: 950px) {
    font-size: 0.75rem;
  }
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;
