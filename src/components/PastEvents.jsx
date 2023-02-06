import Card from './Card';

function PastEvents() {
  const eventInfo = [
    {
      name: 'class of 2000 reunion',
      location: 'University Campus',
      date: 'August 14, 2021',
      description:
        'Join your classmates for a fun-filled weekend of reminiscing and catching up. The reunion will include a tour of the new campus facilities, a BBQ dinner, and a dance party',
      url: 'https://images.unsplash.com/photo-1510590124886-dc2653b48bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Networking Night',
      location: 'XYZ Hotel, City',
      date: 'September 25, 2021',
      description:
        'Connect with fellow alumni and industry professionals in your field during this evening of networking and professional development. Enjoy drinks and appetizers while making new connections.',
      url: 'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Young Alumni Social',
      location: 'University Campus',
      date: 'October 16, 2021',
      description:
        'Recent graduates are invited to this casual social event. Meet and network with other young alumni while enjoying food and drinks from the local brewery.',
      url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Alumni Career Fair',
      location: 'Conference Center',
      date: 'December 4, 2021',
      description:
        'Explore career opportunities and connect with recruiters from a variety of companies during this day-long career fair. Attendees can also participate in networking sessions and resume workshops.',
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Homecoming Tailgate',
      location: 'Football Field',
      date: 'November 6, 2021',
      description:
        'Get in the spirit of the game and join fellow alumni for a tailgate party before the big homecoming game. Food and beverages will be provided.',
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Scholarship Fundraiser',
      location: 'University Alumni Center',
      date: 'January 15, 2022',
      description:
        'Help support current students by attending this fundraiser event. The evening will include a silent auction, raffle, and live music. Proceeds will go towards the Alumni Scholarship Fund.',
      url: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-20 p-2 md:mt-16 mt-6 flex-wrap items-center md:justify-between justify-center">
        {eventInfo.map((event, index) => {
          return (
            <div
              className="bg-dark-blue text-card-text w-full p-8 rounded-2xl max-w-lg"
              key={index}
            >
              <Card
                imageURL={event.url}
                mainTitle={event.name}
                title={event.location}
                description={event.description}
                subTitle={event.date}
                ctaTitle="Read More"
                textAlign="left"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default PastEvents;
