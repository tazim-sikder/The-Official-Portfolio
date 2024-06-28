import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import AnimatedTextSidebar from "@/components/Animations/AnimatedTextSidebar";
import {
  StyledSidebar,
  Menu,
  SelectSlide,
  ContentIcon,
  IconLink,
} from "./style";
import { SidebarProps } from "@/interfaces/SidebarProps/SidebarProps";
const Sidebar = ({ linkedin, github, instagram }: SidebarProps) => {
  const {
    setIsSideBarVisible,
    issidebarvisible,
    setAnimationImage,
    router,
    ismobile,
    isTabletSmall,
  } = useContext(GlobalContext);
  return (
    <StyledSidebar
      initial={{ width: "100%", height: "0%" }}
      animate={{ width: "100%", height: issidebarvisible ? "100%" : "0%" }}
      transition={{ ease: "anticipate", delay: -5 }}
    >
      {" "}
      <Menu
        initial={{ top: "-500px" }}
        animate={{
          top: issidebarvisible ? "50%" : "-500px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        transition={{ ease: "anticipate" }}
      >
        {" "}
        <AnimatedTextSidebar>
          {" "}
          <SelectSlide
            href={"/#main"}
            onClick={() =>
              setTimeout(() => {
                setIsSideBarVisible(false);
              }, 700)
            }
          >
            {" "}
            Página inicial{" "}
          </SelectSlide>{" "}
        </AnimatedTextSidebar>{" "}
        <AnimatedTextSidebar>
          {" "}
          <SelectSlide
            href={"/work"}
            onClick={() => {
              router.push("/work");
              setIsSideBarVisible(false);
              setAnimationImage(true);
            }}
          >
            {" "}
            Trabalhos{" "}
          </SelectSlide>{" "}
        </AnimatedTextSidebar>{" "}
        <AnimatedTextSidebar>
          {" "}
          <SelectSlide
            href={"/about"}
            onClick={() => {
              router.push("/about");
              setIsSideBarVisible(false);
              setAnimationImage(true);
            }}
          >
            {" "}
            Sobre mim{" "}
          </SelectSlide>{" "}
        </AnimatedTextSidebar>{" "}
        <AnimatedTextSidebar>
          {" "}
          <SelectSlide
            href={"/#contact"}
            onClick={() =>
              setTimeout(() => {
                setIsSideBarVisible(false);
              }, 500)
            }
          >
            {" "}
            Contato{" "}
          </SelectSlide>{" "}
        </AnimatedTextSidebar>{" "}
        {ismobile && (
          <AnimatedTextSidebar>
            {" "}
            <ContentIcon>
              {" "}
              <IconLink
                href={`${linkedin}`}
                target="_blank"
                aria-label="linkedin"
              >
                {" "}
                <FaLinkedinIn />{" "}
              </IconLink>{" "}
              <IconLink
                href={`${instagram}`}
                target="_blank"
                aria-label="instagram"
              >
                {" "}
                <FaInstagram />{" "}
              </IconLink>{" "}
              <IconLink href={`${github}`} target="_blank" aria-label="gitbub">
                {" "}
                <FaGithub />{" "}
              </IconLink>{" "}
            </ContentIcon>{" "}
          </AnimatedTextSidebar>
        )}{" "}
        {isTabletSmall && (
          <AnimatedTextSidebar>
            {" "}
            <ContentIcon>
              {" "}
              <IconLink
                href={`${linkedin}`}
                target="_blank"
                aria-label="linkedin"
              >
                {" "}
                <FaLinkedinIn />{" "}
              </IconLink>{" "}
              <IconLink
                href={`${instagram}`}
                target="_blank"
                aria-label="instagram"
              >
                {" "}
                <FaInstagram />{" "}
              </IconLink>{" "}
              <IconLink href={`${github}`} target="_blank" aria-label="github">
                {" "}
                <FaGithub />{" "}
              </IconLink>{" "}
            </ContentIcon>{" "}
          </AnimatedTextSidebar>
        )}{" "}
      </Menu>{" "}
    </StyledSidebar>
  );
};
export default Sidebar;
