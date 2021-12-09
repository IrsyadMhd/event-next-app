import {
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Text,
  Icon,
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';

const EventDetail = props => {
  const { event } = props;

  return (
    <>
      <Box
        mt={7}
        bg='cyan.800'
        h='200px'
        textAlign='center'
        rounded='xl'
        p={7}
        color='white'
      >
        <Heading size='xl'>{event.title}</Heading>
      </Box>
      <Center>
        <Box
          mt={['-4rem', '-6rem']}
          w='md'
          bg='gray.800'
          rounded={[null, null, 'lg']}
          color='white'
          p={3}
        >
          <Flex
            align='center'
            direction={['column', 'row']}
            justify='space-between'
          >
            <Image
              boxSize='150px'
              borderRadius='full'
              src={`/${event.image}`}
              alt='Dan Abramov'
              mb={3}
            />
            <Box ml={3} as='p'>
              {event.description}
            </Box>
          </Flex>
          <Flex justify='space-between' direction='column'>
            <Text as='p' mb={3}>
              <Icon as={GoLocation} color='teal.500' /> {event.location}
            </Text>
            <Text as='p'>
              <Icon as={AiOutlineCalendar} color='teal.500' /> {event.date}
            </Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default EventDetail;
