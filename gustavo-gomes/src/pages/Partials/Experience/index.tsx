import { useState } from "react";

import companys from "@/mock/companys/index";

import * as S from "./styled";

export default function Experience() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [check, setCheck] = useState(true);
  const [value, setValue] = useState(1);

  const showDescription = (id: number) => {
    setValue(id);
    setCheck((event) => !event);
  };

  return (
    <S.Section id="experience">
      <S.Container>
        <S.Title>Experiências</S.Title>
        {companys.map((i) => {
          return (
            <S.ContentExperience key={i.id}>
              <S.ContainerJobs>
                <S.Jobs
                  onClick={() => showDescription(i.id)}
                  active={i.id === value ? "true" : "false"}
                >
                  {i.company}
                </S.Jobs>
              </S.ContainerJobs>

              {i.id === value ? (
                <S.DescriptionJobs>
                  <S.ContentAboutCompany>
                    <S.Ocuppation>{i.ocuppation}</S.Ocuppation>
                    <S.Time>{i.timeline}</S.Time>
                  </S.ContentAboutCompany>

                  <S.NameCompany>{i.company}</S.NameCompany>
                  <S.Description>{i.description}</S.Description>
                </S.DescriptionJobs>
              ) : null}
            </S.ContentExperience>
          );
        })}
      </S.Container>
    </S.Section>
  );
}
