import Card from './Card';

function Events() {
  const events = [
    {
      title: 'Live stage event',
      description:
        'Event is going to be performed live in the main Auditorium Everyone is invited to join this event.',
      imageURL:
        'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Open Mic Stage',
      description:
        'Event is going to be performed live in the main Auditorium Everyone is invited to join this event.',
      imageURL:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Community Meetup',
      description:
        'Event is going to be performed live in the main Auditorium Everyone is invited to join this event.',
      imageURL:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-20 p-2 md:mt-12 mt-6">
      {events.map((event, index) => {
        return (
          <div
            className="bg-dark-blue text-card-text w-full p-6 rounded-2xl"
            key={index}
          >
            <Card
              title={event.title}
              description={event.description}
              imageURL={event.imageURL}
              textAlign="center"
              ctaTitle="Read More"
            />
          </div>
        );
      })}
    </div>
  );
}
export default Events;
