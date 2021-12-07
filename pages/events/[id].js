import { useRouter } from 'next/router';
import { Container, List, Center, Heading } from '@chakra-ui/react';

import { getEventById } from '../../dummy-data';
import EventDetail from '../../components/events/event-detail';

const DetailEvent = () => {
  const router = useRouter();

  const event = getEventById(router.query.id);

  return (
    <Container maxW='container.lg'>
      {!event && (
        <Center
          mt='10vh'
          fontWeight='bold'
          fontSize='xl'
          rounded='xl'
          // color='red.300'
          h='100px'
          bg='facebook.200'
        >
          <Heading as='p' size='xl'>
            Data tidak ditemukan !
          </Heading>
        </Center>
      )}
      {event && <EventDetail event={event} />}
    </Container>
  );
};

export default DetailEvent;
