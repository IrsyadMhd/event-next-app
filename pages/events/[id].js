import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Center, Heading } from '@chakra-ui/react';

import EventDetail from '../../components/events/event-detail';

const DetailEvent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [event, setEvent] = useState('');

  const router = useRouter();
  const eventId = router.query.id;

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://next-course-311ad-default-rtdb.asia-southeast1.firebasedatabase.app/events.json?orderBy="$key"&equalTo="${eventId}"`
        );
        const data = await response.json();
        setEvent(data[eventId]);
      } catch (error) {
        console.log('Failed!');
        setError(true);
      }

      setIsLoading(false);
    };
    sendRequest();
  }, [eventId]);

  return (
    <Container maxW='container.lg'>
      {!event && (
        <Center
          mt='10vh'
          fontWeight='bold'
          fontSize='xl'
          rounded='xl'
          h='100px'
          bg='facebook.200'
        >
          <Heading as='p' size='xl'>
            {isLoading
              ? 'Loading...'
              : error
              ? 'Failed to fetching data'
              : 'Data tidak ditemukan !'}
          </Heading>
        </Center>
      )}
      {event && <EventDetail event={event} />}
    </Container>
  );
};

export default DetailEvent;
