import saturn from "@/assets/imgs/saturn.png";

import * as S from "./style";

export default function Header() {
  return (
    <S.Container>
      <S.Logo>
        <S.Image src={saturn} />
        <S.Title>Gustavo.Gomes()</S.Title>
      </S.Logo>

      <S.ItemsMenu>
        <S.Items>
          <a href="#about">.about()</a>
        </S.Items>
        <S.Items>
          <a href="#experience">.experience()</a>
        </S.Items>
        <S.Items>
          <a href="">.projects()</a>
        </S.Items>
        <S.Items>
          <a href="">.knowledge()</a>
        </S.Items>
      </S.ItemsMenu>
    </S.Container>
  );
}
