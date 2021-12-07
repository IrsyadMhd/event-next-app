import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const Events = () => {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
};

export default Events;
