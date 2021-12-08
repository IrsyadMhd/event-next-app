import { Box, Flex, Center, Heading, Image, Text } from '@chakra-ui/react';
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
            <Box ml={3}>{event.description}</Box>
          </Flex>
          <Flex m={3} justify='space-around' direction={['column', 'row']}>
            <Text as='p' mb={3}>
              <GoLocation /> {event.location}
            </Text>
            <Text as='p'>
              <AiOutlineCalendar /> {event.date}
            </Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default EventDetail;
