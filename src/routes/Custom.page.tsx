import { Heading, Text, Image, VStack } from "@chakra-ui/react";

import Footer from "../components/footer/footer.component";

import customImg from "../assets/images/custom_images/custom_1.jpg";

const Custom = () => {
  return (
    <>
      <VStack justify={"space-between"} align={"center"}>
        <Heading
          id="amatic-header"
          fontSize={"3rem"}
          px={{ base: 12, md: 32, lg: 64 }}
          py={8}
        >
          Haute couture, czyli torby i kosmetyczki szyte na zamówienie -
          specjalnie dla Ciebie :)
        </Heading>

        <Text
          mt={24}
          px={{ base: 12, md: 24, lg: 64 }}
          pt={12}
          pb={8}
          id="amatic-paragraph"
          fontSize={"1.5rem"}
        >
          1. Powiedz mi jakie kolory najbardziej lubisz i jaki materiał do
          Ciebie przemawia? Czy jesteś fanką stylu retro czy raczej wolisz
          nowoczesne wzory? Określ mi swoją wymarzoną torbę lub kosmetyczkę w
          jak najdrobniejszych szczegółach
        </Text>
        <Text
          px={{ base: 12, md: 24, lg: 64 }}
          py={8}
          id="amatic-paragraph"
          fontSize={"1.5rem"}
        >
          2. Po ustaleniu wszelkich detali otrzymasz ode mnie zdjęcie materiałów
          jakie udało mi się dla Ciebie znaleźć ( a może masz jakiś kawałek
          tkaniny, lub ubrania, który chciałabyś wykorzystać - pisz śmiało -
          może uda się go wykorzystać )
        </Text>
        <Text
          px={{ base: 12, md: 24, lg: 64 }}
          pt={8}
          pb={12}
          id="amatic-paragraph"
          fontSize={"1.5rem"}
          alignSelf={"flex-start"}
        >
          3. Czas realizacji zależy od indywidualnych ustaleń i tego jakie
          materiały mam aktualnie na stanie :)
        </Text>
        <Image src={customImg} p={12} borderRadius={"xl"} />
      </VStack>
      <Footer />
    </>
  );
};

export default Custom;
