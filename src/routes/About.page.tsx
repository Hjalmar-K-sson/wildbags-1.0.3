import { Image, Heading, Text, VStack } from '@chakra-ui/react';

import Footer from '../components/footer/footer.component';

import aboutImg from '../assets/images/about_images/about_1.jpg';

const About = () => {
  return (
    <>
      <VStack justify={'space-between'} align={'center'}>
        <Heading id="amatic-header" size={'2xl'} p={16}>
          O mnie
        </Heading>

        <Image
          src={aboutImg}
          borderRadius={'full'}
          boxSize={['50vw', '25vw']}
        />

        <Text
          id="amatic-paragraph"
          mt={24}
          px={{ base: 12, md: 24, lg: 64 }}
          pt={12}
          pb={8}
          fontSize={{ base: '1.2rem', lg: '1.5rem' }}
        >
          Nie będę Ciebie zanudzać historyjkami o marzeniach z dzieciństwa i
          pasji do szycia czy wzornictwa... :) Swoją pierwszą maszynę kupiłam 3
          lata temu i nie wiedziałam nawet jak zamontować igłę... Wiele (
          naprawdę wiele) godzin dni, miesięcy spędziłam na nauce z czym to się
          w ogóle je. Prawda jest taka, że wszystkiego uczyłam się sama z
          miliona filmików na zagranicznym YouTubie i stron w obcych językach (
          w tym koreańskim! ) Teraz śmiało mogę powiedzieć, że zaprzyjaźniłam
          się z moją maszyną i umiem rozpoznawać jej fochy :)
        </Text>
        <Text
          id="amatic-paragraph"
          px={{ base: 12, md: 24, lg: 64 }}
          py={8}
          fontSize={{ base: '1.2rem', lg: '1.5rem' }}
        >
          Szyję dla Ciebie (i dla siebie też!) rzeczy z upcyklingu. Szyje ze
          wszystkiego co mam aktualnie pod ręką… Raz jest to ZASŁONA, którą
          przerobię na torbę czy kosmetyczkę, a niekiedy są to dywaniki, bluzki,
          spódniczki, sukienki, szaliki które znajdę w SECOND HANDZIE lub
          dostanę w spadku po porządkach w szafie czyjejś babci, mamy, koleżanki
          – każdego kto chce mi oddać COŚ co na pewno pójdzie na śmietnik.
        </Text>
        <Text
          id="amatic-paragraph"
          px={{ base: 12, md: 24, lg: 64 }}
          py={8}
          fontSize={{ base: '1.2rem', lg: '1.5rem' }}
        >
          W wieku 17-18 lat praktycznie zrezygnowałam na dłuższą metę z kupna w
          sieciówkach i chcąc nie chcąc – świadomie lub nie, przestałam wspierać
          postępujący konsumpcjonizm. Ubrania z drugiej ręki , tak samo jak te z
          drogich luksusowych sklepów mogą służyć nam dłuuuuugie lata.
          <br />
          BA! Mogę się pokusić nawet o stwierdzenie, że wszystko co z drugiej
          ręki jest fajniejsze!
        </Text>
        <Text
          id="amatic-paragraph"
          px={{ base: 12, md: 24, lg: 64 }}
          pt={8}
          pb={12}
          fontSize={{ base: '1.2rem', lg: '1.5rem' }}
        >
          Bardzo cieszy mnie fakt, że mogę przerobić niepotrzebne już komuś
          wyroby na niepowtarzalne i wyjątkowe produkty ZERO WASTE a przy okazji
          dbam o naszą Mamę Ziemię.
        </Text>
      </VStack>
      <Footer />
    </>
  );
};

export default About;
