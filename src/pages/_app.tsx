import type { AppProps } from "next/app";
import { Abril_Fatface, Jost } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle, css } from "styled-components";
import GlobalContext from "@/context/globalContext";
import DarkDiv from "@/components/Other/DarkDiv";
const ResetStyles = createGlobalStyle` ${() =>
  css`
    html,
    main,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      font-family: ${jost.style.fontFamily};
      vertical-align: baseline;
      scroll-behavior: smooth;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-track {
      background: var(--grey-4);
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--grey-2);
      border-radius: 20px;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `} `;
const GlobalStyles = createGlobalStyle` ${() =>
  css`
    :root {
      --brand1: #fe0a45;
      --brand2: #000000;
      --brand3: #101010;
      --brand4: linear-gradient(90deg, #990024 0%, #d00031 50%, #990024 100%);
      --brand5: #828c96;
      --brand6: linear-gradient(#101010 0%, #000000 100%);
      --brand7: #ff1a56;
      --brand8: #d80b4b;
      --brand9: #d00031;
      --brand10: #990024;
      --white: #ffffff;
      --black: #000000;
      --transparent: transparent;
      --jost-bold: ${jost.style.fontFamily};
      --jost-medium: ${jost.style.fontFamily};
      --jost-light: ${jost.style.fontFamily};
      --abril-fatface: ${abril.style.fontFamily};
      html,
      body,
      #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: var(--white);
        background-color: var(--brand3);
      }
      *::selection {
        background-color: var(--primary-color);
        color: var(--white);
        text-shadow: none;
      }
      a {
        cursor: pointer;
      }
      * {
        box-sizing: border-box;
      }
    }
  `} `;
const abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const jost = Jost({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <AnimatePresence mode="wait">
        {" "}
        <GlobalContext>
          {" "}
          <GlobalStyles /> <ResetStyles /> <Component {...pageProps} />{" "}
          <DarkDiv />{" "}
        </GlobalContext>{" "}
      </AnimatePresence>{" "}
    </>
  );
}
