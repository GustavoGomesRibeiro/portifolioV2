import { Header, Main } from "@/container";
import { About, Experience, Knowledge, Projects } from "../Partials/index";
import * as S from "./style";

function Home() {
  return (
    <S.Container>
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Knowledge />
    </S.Container>
  );
}

export default Home;
