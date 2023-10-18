import { useState } from "react";
import { Header, Main } from "@/container";
import { BsRocket } from "react-icons/bs";

import { About, Experience, Knowledge, Projects } from "../Partials/index";

import * as S from "./style";

function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 900) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 900) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScroll);
  return (
    <S.Container>
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Knowledge />

      <S.Icon>
        <BsRocket
          className="scrollTop"
          onClick={scrollTop}
          style={{
            height: 40,
            color: "#fff",
            display: showScroll ? "flex" : "none",
          }}
        />
      </S.Icon>
    </S.Container>
  );
}

export default Home;
