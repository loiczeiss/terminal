import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>Loïc</User>@<WebsiteName>consciousness</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
