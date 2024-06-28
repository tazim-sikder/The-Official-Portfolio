import styled from "styled-components";
import { motion } from "framer-motion";
import { ImgHomeProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";
export const StyledTemplateRoute = styled(motion.section)`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--brand6);
`;
export const Content = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: var(--brand2);
  @media (max-width: 950px) {
  }
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
export const ContentLeft = styled(motion.div)`
  width: 50%;
  height: 100%;
  left: 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: 95;
  @media (max-width: 950px) {
    left: 40px;
  }
  @media (max-width: 600px) {
    top: 25%;
    left: 1.25rem;
  }
`;
export const Title = styled(motion.h2)`
  width: 62.5rem;
  font-size: 6.875rem;
  color: var(--white);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.1em;
  @media (max-width: 950px) {
    font-size: 3.875rem;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
`;
export const ContainerDetails = styled(motion.div)`
  min-width: 590px;
  width: 90%;
  height: 5.25rem;
  padding: 0rem 15rem 0rem 0rem;
  margin-bottom: 2rem;
  @media (max-width: 950px) {
    width: 100%;
    padding: 0rem;
    margin-bottom: 1rem;
    height: 3.25rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    min-width: 200px;
    padding: 0rem;
    margin-bottom: 0.1rem;
    height: 3.25rem;
  }
`;
export const Details = styled(motion.h3)`
  width: 100%;
  color: var(--white);
  font-size: 1.75rem;
  line-height: 2.625rem;
  font-family: var(--jost-light);
  letter-spacing: 0.1rem;
  word-wrap: break-word;
  white-space: normal;
  @media (max-width: 950px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
export const Button = styled(motion.a)`
  display: flex;
  text-align: center;
  padding: 1.125rem 2rem 1.125rem 2rem;
  width: 11.75rem;
  height: 3.375rem;
  background: var(--transparent);
  border: 0.125rem solid var(--brand1);
  font-family: var(--jost-medium);
  font-style: normal;
  font-weight: 800;
  font-size: 0.9375rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1125rem;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  :hover {
    background: var(--brand1);
    border: 2px solid var(--brand1);
  }
  @media (max-width: 950px) {
    width: 10rem;
    height: 3rem;
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    width: 9.6875rem;
    height: 2.75rem;
    font-size: 0.75rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    margin: 0;
  }
`;
export const ContentRight = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  @media (max-width: 950px) {
  }
  @media (max-width: 600px) {
    right: auto;
    top: 0;
    height: 50%;
    width: 100%;
  }
`;
export const Img = styled(motion.div)<ImgHomeProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 950px) {
  }
  @media (max-width: 600px) {
    height: 65vh;
  }
`;
