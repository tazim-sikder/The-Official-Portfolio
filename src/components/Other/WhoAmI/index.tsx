import Image from "next/image";
import {
  StyledWhoAmI,
  ContainerWhoAmI,
  Content,
  Text,
  Title,
  Div,
} from "./style";
const WhoAmI = () => {
  return (
    <StyledWhoAmI>
      {" "}
      <ContainerWhoAmI>
        {" "}
        <Content>
          {" "}
          <Div>
            {" "}
            <Title>Vagner Mengali</Title>{" "}
            <Text>
              Desde criança, sou fascinado por tecnologia, sempre alimentando
              minha curiosidade nessa área. O que começou como um hobby
              rapidamente se tornou uma paixão, levando-me a buscar
              constantemente conhecimento e a explorar diferentes aspectos,
              inclusive identificando falhas relacionadas a recursos e moedas
              virtuais em jogos.
              <br />
              Ao longo do tempo, tive a oportunidade de me envolver em uma
              variedade de projetos que me permitiram crescer profissionalmente.
              Com uma trajetória de 3 anos como desenvolvedor, também tenho
              interesse em UX (experiência do usuário) e sou um entusiasta dos
              jogos.
            </Text>{" "}
            <Image
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
              src={"/vagner-mengali-landscape.webp"}
              alt="Vagner Mengali"
            />{" "}
          </Div>{" "}
        </Content>{" "}
      </ContainerWhoAmI>{" "}
    </StyledWhoAmI>
  );
};
export default WhoAmI;
