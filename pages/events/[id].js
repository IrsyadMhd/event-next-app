import { Container, Center, Text } from '@chakra-ui/react';

import { getEventById, getFeaturedEvents } from '../../helper/fetch-func';
import EventDetail from '../../components/events/event-detail';

const DetailEvent = props => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [event, setEvent] = useState('');

  // const router = useRouter();
  // const eventId = router.query.id;

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://next-course-311ad-default-rtdb.asia-southeast1.firebasedatabase.app/events.json?orderBy="$key"&equalTo="${eventId}"`
  //       );
  //       const data = await response.json();
  //       setEvent(data[eventId]);
  //     } catch (error) {
  //       console.log('Failed!');
  //       setError(true);
  //     }

  //     setIsLoading(false);
  //   };
  //   sendRequest();
  // }, [eventId]);

  const event = props.event;

  return (
    <Container maxW='container.lg'>
      {!event && (
        <Center bg='teal.600' h='10vh' mt={3} rounded={5} color='white'>
          <Text fontWeight='bold'>Loading...</Text>
        </Center>
      )}
      {event && <EventDetail event={event} />}
    </Container>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { id: event.id } }));

  return {
    paths,
    fallback: true,
  };
}

export default DetailEvent;
