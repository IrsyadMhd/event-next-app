import Link from 'next/link';
import {
  Box,
  ListItem,
  Image,
  Text,
  Heading,
  Flex,
  Button,
} from '@chakra-ui/react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const EventItem = props => (
  <ListItem
    display='flex'
    flexDirection={['column', 'row']}
    my={5}
    alignItems='center'
    justifyContent='space-between'
    rounded='lg'
    shadow='2xl'
    borderWidth='2px'
    borderColor='facebook.300'
    _hover={{
      borderColor: 'facebook.600',
    }}
    overflow='hidden'
  >
    <Image
      boxSize={['180px', '250px']}
      objectFit='cover'
      src={`/${props.item.image}`}
      alt={props.item.title}
    />
    <Box p={3}>
      <Heading mb={1} size='md' textTransform='uppercase' color='facebook.600'>
        {props.item.title}
      </Heading>
      <Text as='p' fontSize={['sm', 'md', 'lg']}>
        {props.item.description}
      </Text>
      <Flex justify='flex-end' mt={3} pr={3}>
        <Link href={`/events/${props.item.id}`} passHref>
          <Button
            rightIcon={<HiArrowNarrowRight />}
            colorScheme='blue'
            variant='outline'
          >
            Detail
          </Button>
        </Link>
      </Flex>
    </Box>
  </ListItem>
);

export default EventItem;
