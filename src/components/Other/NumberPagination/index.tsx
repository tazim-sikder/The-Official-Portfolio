import { useContext } from "react"; import { GlobalContext } from "@/context/globalContext"; import { NumberPaginationProps } from "@/interfaces/HeaderProps/HeaderProps"; import { StyledNumberPagination, Text, Title } from "./style"; const NumberPagination = ({ number }: NumberPaginationProps) => { const { router } = useContext(GlobalContext); return ( <> { router.pathname === "/about" && <StyledNumberPagination> <Text> {`0${number}`} </Text> <Title> {`${number === 1 ? "quem sou eu" : number === 2 ? "paixão" : "conjunto de habilidades"}`} </Title> </StyledNumberPagination> } </> ); }; export default NumberPagination; 