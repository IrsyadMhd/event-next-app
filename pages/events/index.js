import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

const Events = () => {
  const featuredEvents = getAllEvents();
  return <EventList items={featuredEvents} />;
};

export default Events;
