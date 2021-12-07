import { List, Container } from '@chakra-ui/react';

import EventItem from './event-item';

const EventList = props => {
  return (
    <Container maxW='container.md'>
      <List>
        {props.items.map(item => (
          <EventItem key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

export default EventList;
