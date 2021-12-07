import { Box, Flex, Center, Heading, Image } from '@chakra-ui/react';

const EventDetail = props => {
  const { event } = props;

  return (
    <>
      <Box
        mt={5}
        bg='cyan.800'
        h='200px'
        textAlign='center'
        rounded='xl'
        p={5}
        color='white'
      >
        <Heading size='xl'>{event.title}</Heading>
      </Box>
      <Center>
        <Box
          mt='-5rem'
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
        </Box>
      </Center>
    </>
  );
};

export default EventDetail;
