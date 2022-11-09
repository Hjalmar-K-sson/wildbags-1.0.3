import { Image } from "@chakra-ui/react";
import LogoImg from "../../assets/images/logo.png";

interface Props {
  boxSize: string;
};

const Logo = (props: Props) => {
  return <Image src={LogoImg} boxSize={props.boxSize} />;
};

export default Logo;
