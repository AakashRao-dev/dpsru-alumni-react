import Card from './Card';

function CouncilMembers() {
  const members = [
    {
      name: 'sachin rajpal',
      position: 'Bachelor of Science in Nursing',
      graduated: 1999,
      url: 'https://images.unsplash.com/photo-1562693315-23c0b35cacd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Nitin Vajapyee',
      position: 'Doctor of Medicine',
      graduated: 2000,
      url: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Priya Singh',
      position: 'Doctor of Physical Therapy',
      graduated: 2001,
      url: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2Zlc3NvcnN8ZW58MHx8MHx8',
    },
    {
      name: 'Nitya Rao',
      position: 'Master of Public Health',
      graduated: 2003,
      url: 'https://images.unsplash.com/photo-1602133187081-4874fdbd555c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Arjun Menon',
      position: 'Bachelor of Ayurvedic Medicine and Surgery',
      graduated: 2010,
      url: 'https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
    {
      name: 'Anika Gupta',
      position: 'Master of Science in Occupational Therapy',
      graduated: 2009,
      url: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-10 p-2 md:mt-12 mt-6 flex-wrap items-center md:justify-between justify-center">
      {members.map((member, index) => {
        return (
          <div
            className="bg-dark-blue text-card-text w-full p-6 rounded-2xl max-w-xs"
            key={index}
          >
            <Card
              imageURL={member.url}
              title={member.name}
              description={member.position}
              ctaTitle="Connect"
              textAlign="left"
            />
          </div>
        );
      })}
    </div>
  );
}
export default CouncilMembers;
