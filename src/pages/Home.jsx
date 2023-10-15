import { useState } from "react";
import { InfoModal } from "../components";

import {
  StyledContainer,
  Content,
  Button,
  Title,
  InfoButton,
} from "./StyledComponents";

function Home() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  return (
    <StyledContainer>
      <Title>TO-DO LIST</Title>
      <Content>
        <Button href="/login">LOGIN</Button>
        <InfoButton onClick={handleClick} />
        {modal && (
          <div>
            <InfoModal onClose={() => setModal(false)} />
          </div>
        )}
        <Button href="/new-user">NEW USER</Button>
      </Content>
    </StyledContainer>
  );
}

export default Home;
