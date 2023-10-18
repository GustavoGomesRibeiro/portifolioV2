import { SiNuxtdotjs, SiVuedotjs, SiSass } from "react-icons/si";

import Thumb from "@/assets/imgs/thumb.png";
import Geo from "@/assets/imgs/geoservice.png";
import Black from "@/assets/imgs/black.png";
import * as S from "./styled";

export default function Projects() {
  return (
    <S.Section id="projects">
      <S.Title>Projetos</S.Title>

      <S.ContainerLive>
        <S.Card>
          <S.Image src={Black} style={{ background: "#000" }} />
          <S.Content>
            <S.TitleCard>Black Friday - Tecmundo</S.TitleCard>
            <S.Description>
              Esse projeto tem como objetivo de exibir produtos, cupons e
              comparadores relacionado a Black Friday para o Tecmundo.
            </S.Description>
            <S.Stack>
              Tech Stack:
              <S.Divider>
                <SiNuxtdotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiVuedotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiSass size={20} color="#C76494" />
              </S.Divider>
            </S.Stack>
            <S.Button>
              <S.Live>
                <a
                  href="https://www.tecmundo.com.br/blackfriday/hub/"
                  target="_blank"
                >
                  Live Preview
                </a>
              </S.Live>
            </S.Button>
          </S.Content>
        </S.Card>

        <S.Card>
          <S.Image src={Geo} style={{ background: "#000" }} />
          <S.Content>
            <S.TitleCard>GeoService</S.TitleCard>
            <S.Description>
              Aplicação feita para facilitar a identificação oficinas pela
              geolocalização.
            </S.Description>
            <S.Stack>
              Tech Stack:
              <S.Divider>
                <SiNuxtdotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiVuedotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiSass size={20} color="#C76494" />
              </S.Divider>
            </S.Stack>
            <S.Button>
              <S.Live>
                <a href="#" target="_blank">
                  Live Preview
                </a>
              </S.Live>
              <S.Live>
                <a
                  href="https://github.com/GustavoGomesRibeiro/geoServices/tree/develop"
                  target="_blank"
                >
                  View Code
                </a>
              </S.Live>
            </S.Button>
          </S.Content>
        </S.Card>

        <S.Card>
          <S.Image src={Thumb} />
          <S.Content>
            <S.TitleCard>Crypto Wallet</S.TitleCard>
            <S.Description>
              Aplicação feita para cadastrar e acompanhar ativos, Criptomoeda,
              Ações, Fundos Imobiliarios;
            </S.Description>
            <S.Stack>
              Tech Stack:
              <S.Divider>
                <SiNuxtdotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiVuedotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiSass size={20} color="#C76494" />
              </S.Divider>
            </S.Stack>
            <S.Button>
              <S.Live>
                <a href="#" target="_blank">
                  Live Preview
                </a>
              </S.Live>
              <S.Live>
                <a
                  href="https://github.com/GustavoGomesRibeiro/minhas-financas"
                  target="_blank"
                >
                  View Code
                </a>
              </S.Live>
            </S.Button>
          </S.Content>
        </S.Card>

        <S.Card>
          <S.Image src={Thumb} />
          <S.Content>
            <S.TitleCard>iHeros</S.TitleCard>
            <S.Description>
              Painel que simula chamados para super-herois em tempo real.{" "}
            </S.Description>
            <S.Stack>
              Tech Stack:
              <S.Divider>
                <SiNuxtdotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiVuedotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiSass size={20} color="#C76494" />
              </S.Divider>
            </S.Stack>
            <S.Button>
              <S.Live>
                <a href="#" target="_blank">
                  Live Preview
                </a>
              </S.Live>
              <S.Live>
                <a
                  href="https://github.com/GustavoGomesRibeiro/iheros"
                  target="_blank"
                >
                  View Code
                </a>
              </S.Live>
            </S.Button>
          </S.Content>
        </S.Card>

        <S.Card>
          <S.Image src={Thumb} />
          <S.Content>
            <S.TitleCard>Clone PicPay</S.TitleCard>
            <S.Description>Clone do app PicPay</S.Description>
            <S.Stack>
              Tech Stack:
              <S.Divider>
                <SiNuxtdotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiVuedotjs size={20} color="#00DC82" />
              </S.Divider>
              <S.Divider>
                <SiSass size={20} color="#C76494" />
              </S.Divider>
            </S.Stack>
            <S.Button>
              <S.Live>
                <a href="#" target="_blank">
                  Live Preview
                </a>
              </S.Live>
              <S.Live>
                <a
                  href="https://github.com/GustavoGomesRibeiro/crypto-wallet"
                  target="_blank"
                >
                  View Code
                </a>
              </S.Live>
            </S.Button>
          </S.Content>
        </S.Card>
      </S.ContainerLive>
    </S.Section>
  );
}
