import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import Header from "@/components/Other/Header";
import TemplateRoute from "@/components/Templates/TemplateRoute";
import TemplateSlide from "@/components/Templates/TemplateSlideVertical/FreeScroll";
import WhoAmI from "@/components/Other/WhoAmI";
import Passion from "@/components/Other/Passion";
import SkillSet from "@/components/Other/SkillSet";
import { StyledAbout } from "./style";
const About = () => {
  const { ismobile, isTablet } = useContext(GlobalContext);
  return (
    <StyledAbout>
      {" "}
      <Header
        github={"https://github.com/vagnermengali"}
        linkedin={"https://www.linkedin.com/in/vagnermengali/"}
        instagram={"https://www.instagram.com/vagner.mengali/"}
        name={"Vagner Mengali"}
        route={"about"}
      />{" "}
      <TemplateRoute
        image={
          ismobile
            ? "/about-mobile.webp"
            : isTablet
            ? "/-mobile.webp"
            : "/about.webp"
        }
        title={"Sobre Mim"}
        details={"Eu amo Design, Tecnologia e Histórias."}
        textButton={"Mais sobre mim"}
        link={"https://www.linkedin.com/in/vagnermengali/"}
        email={"contatovagnermengali@gmail.com"}
        github={"https://github.com/vagnermengali"}
      >
        {" "}
        <TemplateSlide number={1}>
          {" "}
          <WhoAmI />{" "}
        </TemplateSlide>{" "}
        <TemplateSlide number={2}>
          {" "}
          <Passion />{" "}
        </TemplateSlide>{" "}
        <TemplateSlide number={3}>
          {" "}
          <SkillSet />{" "}
        </TemplateSlide>{" "}
      </TemplateRoute>{" "}
    </StyledAbout>
  );
};
export default About;
