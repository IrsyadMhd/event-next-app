import Link from 'next/link';
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Link as ChLink,
  List,
  ListItem,
  ListIcon,
  Container,
} from '@chakra-ui/react';
import { BsCalendar4Event } from 'react-icons/bs';
import { HiThumbUp } from 'react-icons/hi';

const MainHeader = () => {
  return (
    <Box as='header' bg='facebook.600' color='white' mb={2}>
      <Container maxW='container.lg'>
        <Flex height='60px' align='center'>
          <Link href='/' passHref>
            <ChLink>
              <Heading as='div' size='lg'>
                Logo
              </Heading>
            </ChLink>
          </Link>
          <Spacer />
          <Box as='nav'>
            <List
              display='flex'
              alignItems='center'
              fontSize={['sm', 'md', 'lg', 'xl']}
            >
              <ListItem mr={8}>
                <Link href='/events' passHref>
                  <ChLink>
                    <ListIcon as={BsCalendar4Event} />
                    All Events
                  </ChLink>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;
