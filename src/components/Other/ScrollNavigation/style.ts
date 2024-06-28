import { motion } from "framer-motion";
import styled from "styled-components";
export const StyledScrollNavigation = styled(motion.div)`
  position: fixed;
  width: 40px;
  height: 132px;
  left: 40px;
  z-index: 97;
  top: 40%;
  .active {
    width: 100%;
  }
  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40px;
    height: 100%;
    top: 93%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(270deg);
  }
  @media (max-width: 600px) {
    width: 32px;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(270deg);
  }
`;
export const Menu = styled(motion.ul)`
  list-style: none;
  width: 100%;
  height: 100%;
  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;
export const Button = styled(motion.li)`
  width: 100%;
  height: 100%;
  margin: 0 0 40px;
  display: block;
  height: 0.1875rem;
  position: relative;
  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    height: 1.5rem;
    margin: 15px 0;
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    height: 1.5rem;
    margin: 10px 0;
  }
`;
export const SelectSlide = styled(motion.a)`
  width: 1.5rem;
  display: block;
  position: relative;
  z-index: 98;
  height: 100%;
  margin: 0 0 40px;
  cursor: pointer;
  text-decoration: none;
  background-color: var(--white);
  transition: width 1s ease;
  @media (max-width: 950px) {
    width: 1rem;
    height: 0.2rem;
    position: absolute;
    top: 50%;
  }
  @media (max-width: 600px) {
    width: 1rem;
    height: 0.15rem;
    position: absolute;
    top: 50%;
  }
`;
