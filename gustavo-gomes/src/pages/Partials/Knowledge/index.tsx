import {
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiTestinglibrary,
  SiNuxtdotjs,
  SiVuedotjs,
  SiExpo,
  SiSass,
  SiCypress,
  SiNextdotjs,
} from "react-icons/si";

import * as S from "./styled";

export default function Knowledge() {
  return (
    <S.Section id="knowledge">
      <S.GeneralContainer>
        <S.ContainerTitle>
          <S.Title>Tech Stack</S.Title>
          <S.SubTitle>Techonologies I've been working with recently</S.SubTitle>
        </S.ContainerTitle>

        <S.ContainerStacks>
          <S.Stack>
            <SiJavascript size={65} color="#F5DE19" />
            <S.Text>JavaScript</S.Text>
          </S.Stack>

          <S.Stack>
            <SiTypescript size={65} color="#3178C6" />
            <S.Text>TypeScript</S.Text>
          </S.Stack>

          <S.Stack>
            <SiReact size={65} color="#00D8FF" />
            <S.Text>React.Js</S.Text>
          </S.Stack>

          <S.Stack>
            <SiNextdotjs size={65} color="#000" />
            <S.Text>Next.Js</S.Text>
          </S.Stack>

          <S.Stack>
            <SiExpo size={65} color="#fff" />
            <S.Text>Expo</S.Text>
          </S.Stack>

          <S.Stack>
            <SiStyledcomponents size={65} color="#986dff" />
            <S.Text>Styled-Components</S.Text>
          </S.Stack>

          <S.Stack>
            <SiTailwindcss size={65} color="#38BDF8" />
            <S.Text>TailWind</S.Text>
          </S.Stack>

          <S.Stack>
            <SiSass size={65} color="#C76494" />
            <S.Text>Sass</S.Text>
          </S.Stack>

          <S.Stack>
            <SiTestinglibrary size={65} color="#E03231" />
            <S.Text>React Testing</S.Text>
          </S.Stack>

          <S.Stack>
            <SiCypress size={65} color="#fff" />
            <S.Text>Cypress</S.Text>
          </S.Stack>

          <S.Stack>
            <SiNuxtdotjs size={65} color="#00DC82" />
            <S.Text>Nuxt</S.Text>
          </S.Stack>

          <S.Stack>
            <SiVuedotjs size={65} color="#00DC82" />
            <S.Text>Vue</S.Text>
          </S.Stack>
        </S.ContainerStacks>
      </S.GeneralContainer>
    </S.Section>
  );
}
