
import Education from "./commands/Education";

import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";


const Output = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {

          education: <Education />,
          whoami: <p>me nigga</p>       }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
