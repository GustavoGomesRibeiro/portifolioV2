import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

import { Stars, ExternalLinks } from "@/components";

import MeSpace from "@/assets/imgs/meSpace.jpg";
import * as S from "./styled";

export default function Main() {
  useEffect(() => {
    const getIdFrontEnd = document.getElementById("front-end");

    const typeWriter = (id: HTMLElement | null) => {
      const splitText = id?.innerHTML.split("");

      id!.innerHTML = "";

      splitText!.forEach((letters, index) => {
        setTimeout(function () {
          id!.innerHTML += letters;
        }, 75 * index);
      });
    };

    typeWriter(getIdFrontEnd);
  }, []);

  return (
    <S.Container>
      <S.ContainerApresentation>
        <S.ContainerController>
          <S.Apresentation>
            <S.Nome>
              Gustavo<S.SobreNome>.Gomes()</S.SobreNome>
            </S.Nome>

            <S.SubTitle>
              <S.GustavoGomes> Gustavo Gomes</S.GustavoGomes>
            </S.SubTitle>

            <S.SubTitle>
              <S.FrontEnd id="front-end">Front-End Developer</S.FrontEnd>
            </S.SubTitle>
          </S.Apresentation>
          <S.Image src={MeSpace} />
        </S.ContainerController>
      </S.ContainerApresentation>

      <S.ContainerButton>
        <S.Button>
          <FaGithub size={20} color="#fff" />
          <S.Text>GitHub</S.Text>
        </S.Button>
      </S.ContainerButton>
      <Stars />
      <ExternalLinks />
    </S.Container>
  );
}
