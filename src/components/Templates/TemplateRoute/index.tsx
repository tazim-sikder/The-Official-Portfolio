import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/globalContext";
import Bars from "@/components/Other/Bars";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";
import { TemplateRouteProps } from "@/interfaces/TemplateRouteProps/TemplateRouteProps";
import {
  StyledTemplateRoute,
  Content,
  Img,
  ContentLeft,
  ContentRight,
  Button,
  ContainerDetails,
  Details,
  Title,
} from "./style";
import Footer from "@/components/Other/Footer";
const TemplateRoute = ({
  image,
  children,
  title,
  details,
  textButton,
  email,
  github,
  link,
}: TemplateRouteProps) => {
  const { ismobile, isTablet } = useContext(GlobalContext);
  useEffect(() => {
    window.scrollTo(-100, -110);
  }, []);
  return (
    <StyledTemplateRoute>
      {" "}
      <Content>
        {" "}
        <ContentLeft>
          {" "}
          <AnimatedCharactersDetailsLeft duration={1} animate>
            {" "}
            <Title> {title} </Title>{" "}
          </AnimatedCharactersDetailsLeft>{" "}
          <Bars animate />{" "}
          <AnimatedCharactersDetailsLeft duration={1.1} animate>
            {" "}
            <ContainerDetails>
              {" "}
              <Details> {details} </Details>{" "}
            </ContainerDetails>{" "}
          </AnimatedCharactersDetailsLeft>{" "}
          <AnimatedTextButton
            duration={1.2}
            width="calc(100vw - 1.25rem)"
            animate
          >
            {" "}
            <Button href={`${link}`} target="_blank">
              {" "}
              {textButton}{" "}
            </Button>{" "}
          </AnimatedTextButton>{" "}
        </ContentLeft>{" "}
        <ContentRight
          initial={{ width: "0%" }}
          animate={{ width: ismobile ? "100%" : isTablet ? "65%" : "50%" }}
          exit={{ transition: { duration: 100 } }}
          transition={{
            duration: 1,
            type: "spring",
            delay: 0.2,
            damping: 15,
            staggerChildren: 0.5,
          }}
        >
          {" "}
          <Img image={image} />{" "}
        </ContentRight>{" "}
      </Content>{" "}
      {children} <Footer github={github} email={email} />{" "}
    </StyledTemplateRoute>
  );
};
export default TemplateRoute;
