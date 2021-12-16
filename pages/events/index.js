import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../helper/fetch-func';

const Events = props => {
  return <EventList items={props.events} />;
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
  };
}

export default Events;
