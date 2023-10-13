import { StyledContainer, Content, Button, Title } from "./StyledComponents";

function Home() {
  return (
    <StyledContainer>
      <Title>TO-DO LIST</Title>
      <Content>
        <Button href="/login">LOGIN</Button>
        <Button href="/new-user">NEW USER</Button>
      </Content>
    </StyledContainer>
  );
}

export default Home;
