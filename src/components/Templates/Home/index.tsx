import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import Header from "@/components/Other/Header";
import Fullpage from "@/components/Other/Fullpage/Vertical";
import TemplateSlide from "@/components/Templates/TemplateSlideVertical/PresetScroll";
import { StyledHome } from "./style";
const Home = () => {
  const { ismobile, isTablet } = useContext(GlobalContext);
  return (
    <StyledHome>
      {" "}
      <Header
        github={"https://github.com/vagnermengali"}
        linkedin={"https://www.linkedin.com/in/vagnermengali/"}
        instagram={"https://www.instagram.com/vagner.mengali/"}
        name={"Vagner Mengali"}
        route={"/"}
      />{" "}
      <Fullpage
        main={
          <TemplateSlide
            title={"TAZIM SIKDER"}
            details={"Software Developer."}
            section={"main"}
            number={""}
            img={"/vagner-mengali.webp"}
            home
            cursor={"false"}
          />
        }
        work={
          <TemplateSlide
            title={"Meus Trabalhos"}
            details={"Lista de todos os trabalhos e projetos feitos por mim."}
            textButton={"Mostre-me mais"}
            section={"work"}
            number={"01"}
            img={
              ismobile
                ? "/work-mobile.webp"
                : isTablet
                ? "/work-mobile.webp"
                : "/work.webp"
            }
            cursor={"true"}
          />
        }
        about={
          <TemplateSlide
            title={"Sobre Mim"}
            details={"Eu amo Design, Tecnologia e Histórias."}
            textButton={"Mostre-me mais"}
            section={"about"}
            number={"02"}
            img={
              ismobile
                ? "/about-mobile.webp"
                : isTablet
                ? "/about-mobile.webp"
                : "/about.webp"
            }
            cursor={"true"}
          />
        }
        contact={
          <TemplateSlide
            title={"Entre em Contato"}
            section={"contact"}
            number={"03"}
            link
            email={"contatovagnermengali@gmail.com"}
            github={"https://github.com/vagnermengali"}
            linkedin={"https://www.linkedin.com/in/vagnermengali/"}
            instagram={"https://www.instagram.com/vagner.mengali/"}
            img={
              ismobile
                ? "/contact-mobile.webp"
                : isTablet
                ? "/contact-mobile.webp"
                : "/contact.webp"
            }
            cursor={"false"}
          />
        }
      />{" "}
    </StyledHome>
  );
};
export default Home;
