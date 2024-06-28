import Image from "next/image";
import {
  StyledPassion,
  ContainerPassion,
  ContentLeft,
  ContentCenter,
  ContentRight,
  Title,
  Text,
} from "./style";
import Icon from "@/components/Other/Icon";
const Passion = () => {
  return (
    <StyledPassion>
      {" "}
      <ContainerPassion>
        {" "}
        <ContentLeft>
          {" "}
          <Icon id="Computer" className="imagePassion" />{" "}
          <Title>PROGRAMAÇÃO</Title>{" "}
          <Text>
            {" "}
            Acredito que a programação é como uma{`${"varinha mágica"}`} para
            resolver problemas. Como programadores, nosso papel é criar soluções
            funcionais e eficientes para atender às necessidades dos usuários.
            Trabalhamos duro todos os dias para desenvolver código que
            corresponda às expectativas e requisitos dos clientes e que torne a
            experiência do usuário mais intuitiva e agradável. Em última
            análise, nosso objetivo é usar a programação como uma ferramenta
            para melhorar a vida das pessoas e tornar o mundo um lugar melhor.{" "}
          </Text>{" "}
        </ContentLeft>{" "}
        <ContentCenter>
          {" "}
          <Icon id="Chip" className="imagePassion" /> <Title>TECNOLOGIA</Title>{" "}
          <Text>
            {" "}
            A tecnologia tem o poder de mudar o mundo e a vida das pessoas, como
            diz o ditado:{" "}
            {`${"Qualquer tecnologia suficientemente avançada é indistinguível de magia"}`}
            . Como desenvolvedor de software, sempre me esforço para me manter
            atualizado com as últimas tecnologias e me adaptar às mudanças.
            Acredito que difundir a inovação é uma missão compartilhada por
            todos os envolvidos na criação de tecnologia, desde programadores e
            designers até engenheiros. Juntos, podemos desenvolver soluções
            criativas e funcionais que melhorem a vida das pessoas e impulsionem
            a sociedade para frente.{" "}
          </Text>{" "}
        </ContentCenter>{" "}
        <ContentRight>
          {" "}
          <Icon id="Book" className="imagePassion" /> <Title>HISTÓRIA</Title>{" "}
          <Text>
            {" "}
            Acredito que a leitura pode ter um grande impacto na vida das
            pessoas, pois as histórias têm o poder de chamar a atenção e tornar
            as coisas mais fáceis de entender e lembrar. Quando lemos, somos
            transportados para outros mundos e realidades, aprendemos novas
            perspectivas e nos tornamos mais empáticos e compreensivos. Acredito
            que a literatura é uma ferramenta poderosa para mudar vidas e moldar
            o pensamento humano. Por isso, procuro sempre estudar diferentes
            padrões narrativos e aplicá-los em minha própria produção, para
            contar histórias com significado e impacto.{" "}
          </Text>{" "}
        </ContentRight>{" "}
      </ContainerPassion>{" "}
    </StyledPassion>
  );
};
export default Passion;
