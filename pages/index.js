import { getFeaturedEvents } from '../helper/fetch-func';
import EventList from '../components/events/event-list';

const Events = props => {
  return <EventList items={props.featuredEvents} />;
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}

export default Events;
