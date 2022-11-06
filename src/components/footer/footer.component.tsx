import { Link as RRLink } from 'react-router-dom';
import {
  Stack,
  Link,
  HStack,
  Tooltip,
  IconButton,
  Button
} from '@chakra-ui/react';
import { FiMail, FiPhoneCall, FiInstagram, FiGithub } from 'react-icons/fi';
import Logo from '../global/logo.sub-comp';
import CopyBtn from './copy-btn.sub-comp';

const Footer = () => {
  return (
    <Stack
      display="flex"
      direction={['column', 'row']}
      justify={'space-between'}
      align={'center'}
      p={4}
      borderTop={'1px'}
    >
      <Link as={RRLink} to="/">
        <Logo boxSize={'5rem'} />
      </Link>
      <HStack>
        <CopyBtn
          copyValue="wildbags@wildbags.pl"
          copyLabel="E-mail"
          icon={<FiMail />}
          ariaLabel="copy email"
        />
        <CopyBtn
          copyValue="+48 537 254 320"
          copyLabel="Numer telefonu"
          icon={<FiPhoneCall />}
          ariaLabel="copy phone number"
        />
        <Tooltip label={'Sprawdź mojego Instagrama!'} hasArrow>
          <Link
            href="https://www.instagram.com/_wildbags/?hl=pl"
            target="_blank"
          >
            <IconButton
              icon={<FiInstagram />}
              background={'blackAlpha.900'}
              color={'whiteAlpha.900'}
              _hover={{
                background: 'whiteAlpha.900',
                color: 'blackAlpha.900',
                border: '1px solid black'
              }}
              aria-label="visit instagram"
            />
          </Link>
        </Tooltip>
      </HStack>
      <Link href="https://github.com/Hjalmar-K-sson" target={'_blank'}>
        <Button
          leftIcon={<FiGithub />}
          background={'blackAlpha.900'}
          color={'whiteAlpha.900'}
          _hover={{
            background: 'whiteAlpha.900',
            color: 'blackAlpha.900',
            border: '1px solid black'
          }}
        >
          ©Hjalmar-K-sson 2022
        </Button>
      </Link>
    </Stack>
  );
};

export default Footer;
