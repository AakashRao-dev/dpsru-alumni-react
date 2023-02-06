import Card from './Card';

function AlumniMembers() {
  const members = [
    {
      name: 'Aryan Sharma',
      degree: 'Bachelor of Science in Nursing',
      graduated: 1999,
      url: 'https://images.unsplash.com/photo-1597272420671-4252a163b0df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D',
    },
    {
      name: 'Roshni Patel',
      degree: 'Doctor of Medicine',
      graduated: 2000,
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMHN0dWRlbnR8ZW58MHx8MHx8',
    },
    {
      name: 'Priya Singh',
      degree: 'Doctor of Physical Therapy',
      graduated: 2001,
      url: 'https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D',
    },
    {
      name: 'Anika Gupta',
      degree: 'Master of Public Health',
      graduated: 2003,
      url: 'https://images.unsplash.com/photo-1529470839332-78ad660a6a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D',
    },
    {
      name: 'Arjun Menon',
      degree: 'Bachelor of Ayurvedic Medicine and Surgery',
      graduated: 2010,
      url: 'https://images.unsplash.com/photo-1522010265321-fd346cc64d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D',
    },
    {
      name: 'Nitya Rao',
      degree: 'Master of Science in Occupational Therapy',
      graduated: 2009,
      url: 'https://images.unsplash.com/photo-1592085550638-e6bc180a731e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D',
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
              description={member.degree}
              subtitle={member.graduated}
              ctaTitle="Connect"
              textAlign="left"
            />
          </div>
        );
      })}
    </div>
  );
}
export default AlumniMembers;
