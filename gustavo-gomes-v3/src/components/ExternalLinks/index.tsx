import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import * as S from "./styled";

export default function ExternalLinks() {
  return (
    <S.ExternalLink>
      <S.Content>
        <ul>
          <li>
            <a href="https://github.com/GustavoGomesRibeiro" target="_blank">
              <FaGithub size={20} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gustavoribeirogomes/"
              target="_blank"
            >
              <FaLinkedin size={20} color="#fff" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_guhsje/" target="_blank">
              <FaInstagram size={20} color="#fff" />
            </a>
          </li>
          <S.Bar />
        </ul>
      </S.Content>
    </S.ExternalLink>
  );
}
