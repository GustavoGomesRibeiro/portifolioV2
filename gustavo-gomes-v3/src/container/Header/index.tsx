import saturn from "@/assets/imgs/saturn.png";

import * as S from "./style";
import Burger from "@/components/Burger";

export default function Header() {
  return (
    <S.Container>
      <S.Logo>
        <S.Image src={saturn} />
        <S.Title>Gustavo.Gomes()</S.Title>
      </S.Logo>

      <Burger />
    </S.Container>
  );
}
