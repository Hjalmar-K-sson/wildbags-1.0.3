import { Image } from "@chakra-ui/react";
import LogoImg from "../../assets/images/logo.png";

const Logo = ({ boxSize }) => {
  return <Image src={LogoImg} boxSize={boxSize} />;
};

export default Logo;
