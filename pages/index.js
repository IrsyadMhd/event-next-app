import { Center } from '@chakra-ui/react';

import EventList from '../components/events/event-list';

const Events = props => {
  return <EventList items={props.featuredEvents} />;
};

export async function getStaticProps() {
  const response = await fetch(
    'https://next-course-311ad-default-rtdb.asia-southeast1.firebasedatabase.app/events.json?orderBy="isFeatured"&equalTo=true'
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return {
    props: {
      featuredEvents: events,
    },
  };
}

export default Events;
