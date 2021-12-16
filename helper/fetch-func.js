const baseUrl =
  'https://next-course-311ad-default-rtdb.asia-southeast1.firebasedatabase.app/events.json';

export const getAllEvents = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getFeaturedEvents = async () => {
  const response = await fetch(baseUrl + '?orderBy="isFeatured"&equalTo=true');
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getEventById = async eventId => {
  const response = await fetch(
    `${baseUrl}?orderBy="$key"&equalTo="${eventId}"`
  );
  const data = await response.json();

  return data[eventId];
};
