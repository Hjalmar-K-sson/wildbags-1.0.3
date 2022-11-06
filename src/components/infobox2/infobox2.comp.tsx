import { Stack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import infobox_2 from "../../assets/images/home_images/infobox_2.png";

const Infobox2 = () => {
  return (
    <Stack p={{ base: 8, lg: 16 }} direction={{ base: "column", lg: "row" }}>
      <Flex
        p={4}
        flex={1}
        align={"center"}
        justify={"center"}
        order={{ base: 2, md: 1 }}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            id="amatic-header"
            fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
          >
            <Text>
              Chciałabyś mieć wyjątkową torbę lub kosmetyczkę z wymarzonego
              materiału w ulubionym kolorze?
            </Text>
          </Heading>
          <Text id="amatic-paragraph" fontSize={"1.5rem"}>
            Napisz do mnie - dogramy wspólnie szczegóły :)
          </Text>
          <Text id="amatic-paragraph" fontSize={"1.5rem"}>
            wildbags@wildbags.pl
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1} order={{ base: 1, md: 2 }}>
        <Image
          alt={"infobox_1"}
          objectFit={"cover"}
          src={infobox_2}
          borderRadius={"2xl"}
        />
      </Flex>
    </Stack>
  );
};

export default Infobox2;
