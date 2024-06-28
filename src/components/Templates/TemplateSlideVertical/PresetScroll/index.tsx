import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Bars from "@/components/Other/Bars";
import AnimatedCharactersNumber from "@/components/Animations/AnimatedTextNumber";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";
import { TemplateSlideVerticalProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";
import {
  StyledTemplateSlideVerticalPresetScroll,
  Slide,
  ContentLeft,
  ContentRight,
  Title,
  Details,
  Button,
  Img,
  FirstSweepEffect,
  SecondSweepEffect,
  Number,
  Link,
  IconLink,
  ContainerIcon,
  DetailsHome,
  ContainerDetails,
  ImgHome,
  ContentRightHome,
  TitleHome,
} from "./style";
const TemplateSlideVertical = ({
  title,
  details,
  textButton,
  number,
  link,
  email,
  github,
  linkedin,
  instagram,
  img,
  home,
  cursor,
  section,
}: TemplateSlideVerticalProps) => {
  const { setAnimationImage, ismobile, router } = useContext(GlobalContext);
  return (
    <StyledTemplateSlideVerticalPresetScroll>
      {" "}
      <Slide
        initial={{ height: "100%", width: "100%" }}
        whileInView={{
          width: home ? "90%" : ismobile ? "100%" : "78%",
          height: home ? "90%" : ismobile ? "65%" : "75%",
        }}
        transition={{
          duration: home ? 1.3 : 1,
          type: home ? "none" : "spring",
          damping: home ? 0 : 15,
        }}
      >
        {" "}
        <ContentLeft>
          {" "}
          {!home && details && !link ? (
            <>
              {" "}
              <AnimatedCharactersDetailsLeft duration={1}>
                {" "}
                <Title> {title} </Title>{" "}
              </AnimatedCharactersDetailsLeft>{" "}
              <Bars />{" "}
              <AnimatedCharactersDetailsLeft duration={1.1}>
                {" "}
                <ContainerDetails>
                  {" "}
                  <Details> {details} </Details>{" "}
                </ContainerDetails>{" "}
              </AnimatedCharactersDetailsLeft>{" "}
            </>
          ) : !home && link ? (
            <>
              {" "}
              <AnimatedCharactersDetailsLeft duration={1}>
                {" "}
                <Title> {title} </Title>{" "}
              </AnimatedCharactersDetailsLeft>{" "}
              <Bars />{" "}
            </>
          ) : (
            <>
              {" "}
              <AnimatedCharactersDetailsLeft duration={1}>
                {" "}
                <TitleHome> {title} </TitleHome>{" "}
              </AnimatedCharactersDetailsLeft>{" "}
              <Bars />{" "}
              <AnimatedCharactersDetailsLeft duration={1.1}>
                {" "}
                <DetailsHome> {details} </DetailsHome>{" "}
              </AnimatedCharactersDetailsLeft>{" "}
            </>
          )}{" "}
          {home ? null : !link ? (
            <AnimatedTextButton duration={1.2} width="calc(100vw - 1.25rem)">
              {" "}
              <Button
                onClick={() => {
                  router.push(`/${section}`);
                  setAnimationImage(true);
                }}
              >
                {" "}
                {textButton}{" "}
              </Button>{" "}
            </AnimatedTextButton>
          ) : (
            <>
              {" "}
              {email && (
                <AnimatedCharactersDetailsLeft duration={1.3}>
                  {" "}
                  <Link href={`mailto:${email}`} target="_blank">
                    {" "}
                    {email}{" "}
                  </Link>{" "}
                </AnimatedCharactersDetailsLeft>
              )}{" "}
              {github && (
                <AnimatedCharactersDetailsLeft duration={1.4}>
                  {" "}
                  <Link href={`${github}`} target="_blank">
                    {" "}
                    GitHub{" "}
                  </Link>{" "}
                </AnimatedCharactersDetailsLeft>
              )}{" "}
              <AnimatedCharactersDetailsLeft duration={1.5}>
                {" "}
                <ContainerIcon>
                  {" "}
                  {linkedin && (
                    <IconLink
                      href={`${linkedin}`}
                      target="_blank"
                      aria-label="linkedin"
                    >
                      {" "}
                      <FaLinkedinIn />{" "}
                    </IconLink>
                  )}{" "}
                  {instagram && (
                    <IconLink
                      href={`${instagram}`}
                      target="_blank"
                      aria-label="instagram"
                    >
                      {" "}
                      <FaInstagram />{" "}
                    </IconLink>
                  )}{" "}
                  {}{" "}
                </ContainerIcon>{" "}
              </AnimatedCharactersDetailsLeft>{" "}
            </>
          )}{" "}
        </ContentLeft>{" "}
        {home ? (
          <>
            {" "}
            <ContentRightHome>
              {" "}
              <ImgHome image={img} />{" "}
            </ContentRightHome>{" "}
          </>
        ) : (
          <>
            {" "}
            <ContentRight
              initial={{
                scale: ismobile ? 1 : 0.7,
                width: ismobile ? "80%" : "67%",
                right: ismobile ? "0" : "10%",
              }}
              whileInView={{
                scale: 1,
                right: ismobile ? "0" : "10%",
                width: ismobile ? "80%" : "67%",
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                type: "spring",
                damping: 35,
              }}
            >
              {" "}
              {!home ? (
                <>
                  {" "}
                  <Img
                    image={img}
                    cursor={cursor}
                    onClick={() => {
                      router.push(`/${section}`);
                      setAnimationImage(true);
                    }}
                  >
                    {" "}
                    <FirstSweepEffect
                      initial={{ height: "100%", width: "calc(100vw - 33%)" }}
                      whileInView={{ height: "100%", width: "0vw" }}
                      transition={{
                        ease: "anticipate",
                        duration: 0.9,
                        delay: 0.2,
                      }}
                    />{" "}
                    <SecondSweepEffect
                      initial={{ height: "100%", width: "calc(100vw - 33%)" }}
                      whileInView={{ height: "100%", width: "0vw" }}
                      transition={{
                        ease: "anticipate",
                        duration: 0.9,
                        delay: 0.1,
                      }}
                    />{" "}
                  </Img>{" "}
                  <AnimatedCharactersNumber>
                    {" "}
                    <Number
                      cursor={cursor}
                      onClick={() => {
                        router.push(`/${section}`);
                        setAnimationImage(true);
                      }}
                    >
                      {" "}
                      {number}{" "}
                    </Number>{" "}
                  </AnimatedCharactersNumber>{" "}
                </>
              ) : null}{" "}
            </ContentRight>{" "}
          </>
        )}{" "}
      </Slide>{" "}
    </StyledTemplateSlideVerticalPresetScroll>
  );
};
export default TemplateSlideVertical;
