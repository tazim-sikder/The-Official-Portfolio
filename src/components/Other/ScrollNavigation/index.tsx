import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { StyledScrollNavigation, Menu, SelectSlide, Button } from "./style";
const ScrollNavigation = () => {
  const { router } = useContext(GlobalContext);
  const [activeMain, setActiveMain] = useState<boolean>(false);
  const [activeWork, setActiveWork] = useState<boolean>(false);
  const [activeAbout, setActiveAbout] = useState<boolean>(false);
  const [activeContact, setActiveContact] = useState<boolean>(false);
  useEffect(() => {
    if (router.pathname === "/") {
      const handleHashChange = () => {
        setActiveMain(
          window.location.hash === "#main" ||
            (router.pathname === "/" && window.location.hash === "")
        );
        setActiveAbout(window.location.hash === "#about");
        setActiveWork(window.location.hash === "#work");
        setActiveContact(window.location.hash === "#contact");
      };
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, [router.pathname]);
  return (
    <>
      {" "}
      {router.pathname === "/" && (
        <StyledScrollNavigation>
          {" "}
          <Menu>
            {" "}
            <Button>
              {" "}
              <SelectSlide
                aria-label="main"
                href={"#main"}
                className={activeMain ? "active" : ""}
              />{" "}
            </Button>{" "}
            <Button>
              {" "}
              <SelectSlide
                aria-label="work"
                href={"#work"}
                className={activeWork ? "active" : ""}
              />{" "}
            </Button>{" "}
            <Button>
              {" "}
              <SelectSlide
                aria-label="about"
                href={"#about"}
                className={activeAbout ? "active" : ""}
              />{" "}
            </Button>{" "}
            <Button>
              {" "}
              <SelectSlide
                aria-label="contact"
                href={"#contact"}
                className={activeContact ? "active" : ""}
              />{" "}
            </Button>{" "}
          </Menu>{" "}
        </StyledScrollNavigation>
      )}{" "}
    </>
  );
};
export default ScrollNavigation;
