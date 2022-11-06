import {
  Flex,
  VStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import hero_img from "../../assets/images/home_images/hero_img.jpg";

const Hero = () => {
  return (
    <Flex
      bgImage={hero_img}
      h={"90vh"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"100%"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.500, blackAlpha.500)"}
      >
        <Stack maxW={"2xl"} align={"center"} justify={"center"} spacing={6}>
          <Text
            id="amatic-header"
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3rem", md: "6rem" })}
          >
            ODKRYJ ABSOLUTNIE NIEPOSPOLITY ŚWIAT UPCYCLINGU I NOŚ SIĘ WYJĄTKOWO!
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
