import { Stack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import infobox_1 from "../../assets/images/home_images/infobox_1.png";

const Infobox1 = () => {
  return (
    <Stack p={{ base: 8, lg: 16 }} direction={{ base: "column", lg: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"infobox_1"}
          objectFit={"cover"}
          src={infobox_1}
          borderRadius={"2xl"}
        />
      </Flex>
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            id="amatic-header"
            fontSize={{ base: "3rem", md: "4rem", lg: "5rem" }}
          >
            <Text>Info</Text>
          </Heading>
          <Text id="amatic-paragraph" fontSize={"1.5rem"}>
            Wszystkie produkty , które tu zobaczysz stworzone są zgodnie z ideą
            #upcykling , czyli zmniejszeniem zużycia surowców naturalnych oraz
            wytwarzanych odpadów poprzez tworzenie produktów z materiałów z
            drugiej ręki o wyższej wartości niż pojedyncze tworzywo użyte do
            stworzenia danej rzeczy.
          </Text>
          <Text id="amatic-paragraph" fontSize={"1.5rem"}>
            To rędzieło, które powstaje z ciągłych poszukiwań oryginalnych
            materiałów z drugiego obiegu i jest kreatywnie przekształcane w
            zupełnie nową rzecz.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Infobox1;
