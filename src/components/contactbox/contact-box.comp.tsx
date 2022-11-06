import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import {
  Stack,
  Flex,
  Heading,
  Image,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Textarea,
  Button
} from '@chakra-ui/react';

import { FiUser, FiMail } from 'react-icons/fi';
import { RiQuestionMark } from 'react-icons/ri';

import contactbox from '../../assets/images/home_images/contactbox.jpg';

const Contactbox = () => {
  const form = useRef<HTMLDivElement | undefined | string>();

  const sendEmail = (e: React.FormEvent): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(e.target.reset());
  };
  return (
    <Stack
      p={{ base: 6, md: 12, lg: 16 }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Flex p={4} flex={1} align={'center'} justify={'center'}>
        <VStack
          w={['100%', '100%', '80%']}
          as={'form'}
          ref={form}
          onSubmit={sendEmail}
          spacing={8}
          id="contact-form"
        >
          <Heading
            id="amatic-header"
            fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }}
          >
            Kontaktuj się!
          </Heading>
          <FormControl isRequired>
            <FormLabel id="amatic-paragraph" fontSize={'1.5rem'}>
              Imię
            </FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiUser />} />
              <Input type={'text'} id={'name'} name={'name'} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel id="amatic-paragraph" fontSize={'1.5rem'}>
              Email
            </FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiMail />} />
              <Input type={'email'} id={'email'} name={'email'} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel id="amatic-paragraph" fontSize={'1.5rem'}>
              Temat
            </FormLabel>
            <InputGroup>
              <InputLeftElement children={<RiQuestionMark />} />
              <Input type={'text'} id={'subject'} name={'subject'} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel id="amatic-paragraph" fontSize={'1.5rem'}>
              Wiadomość
            </FormLabel>
            <Textarea id={'message'} name={'message'} />
          </FormControl>
          <Button
            id="amatic-header"
            fontSize={'2rem'}
            value={'send'}
            w={'100%'}
            size={'lg'}
            type={'submit'}
            background={'blackAlpha.900'}
            color={'whiteAlpha.900'}
            _hover={{
              background: 'whiteAlpha.900',
              color: 'blackAlpha.900',
              border: '1px solid black'
            }}
          >
            Wyślij
          </Button>
        </VStack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'infobox_1'}
          objectFit={'cover'}
          src={contactbox}
          borderRadius={'2xl'}
        />
      </Flex>
    </Stack>
  );
};

export default Contactbox;
