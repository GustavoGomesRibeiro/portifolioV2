import { Container, AreaButtons, ContentButton, Button } from "./styled";

interface Props {
  open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
  return (
    <Container>
      <AreaButtons open={open}>
        <ContentButton>
          <Button href="#about">.about()</Button>
        </ContentButton>

        <ContentButton>
          <Button href="#experience">.experience()</Button>
        </ContentButton>

        <ContentButton>
          <Button href="#knowledge">.knowledge()</Button>
        </ContentButton>

        <ContentButton>
          <Button href="#projects">.projects()</Button>
        </ContentButton>
      </AreaButtons>
    </Container>
  );
};

export default RightNav;
