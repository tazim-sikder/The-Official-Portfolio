import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import Header from "@/components/Other/Header";
import TemplateRoute from "@/components/Templates/TemplateRoute";
import { StyledWork } from "./style";
import Works from "@/components/Other/Work";
const Work = () => {
  const { ismobile, isTablet } = useContext(GlobalContext);
  return (
    <StyledWork>
      {" "}
      <Header
        github={"https://github.com/vagnermengali"}
        linkedin={"https://www.linkedin.com/in/vagnermengali/"}
        instagram={"https://www.instagram.com/vagner.mengali/"}
        name={"VagnerMengali"}
        route={"work"}
      />{" "}
      <TemplateRoute
        image={
          ismobile
            ? "/work-mobile.webp"
            : isTablet
            ? "/work-mobile.webp"
            : "/work.webp"
        }
        title={"Meus Trabalhos"}
        details={"Lista de todos os trabalhos e projetos feitos por mim."}
        textButton={"Todos os trabalhos"}
        link={"https://github.com/vagnermengali?tab=repositories"}
        email={"contatovagnermengali@gmail.com"}
        github={"https://github.com/vagnermengali"}
      >
        {" "}
        <Works />{" "}
      </TemplateRoute>{" "}
    </StyledWork>
  );
};
export default Work;
