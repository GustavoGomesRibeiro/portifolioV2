import Space_2 from "@/assets/imgs/space_2.jpg";

import * as S from "./styled";

export default function About() {
  return (
    <S.Section id="about">
      <S.ContentAboutMe>
        <S.Image src={Space_2} />
        <S.AboutMe>
          <S.Title>Quem sou</S.Title>
          <S.ContentSubTitle>
            <S.SubTitle>Gustavo Gomes</S.SubTitle>
            <S.Stack>Front End Developer</S.Stack>
            <S.Description>
              Meu nome é Gustavo Ribeiro Gomes, desenvolvedor Front-End com
              experiência em React.js, React Native, JavaScript, TypeScript
              entre outras stacks já trabalhadas. Sou formado em Sistemas de
              Informação e sempre buscando aprimoramento.
            </S.Description>
          </S.ContentSubTitle>
        </S.AboutMe>
      </S.ContentAboutMe>
    </S.Section>
  );
}
