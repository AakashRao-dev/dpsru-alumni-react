/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from 'react-responsive-carousel';

function MemberHighlight() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1529470839332-78ad660a6a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1522010265321-fd346cc64d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1592085550638-e6bc180a731e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1597272420671-4252a163b0df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const texts = [
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    'The only way to do great work is to love what you do.',
    'Success is not how high you have climbed, but how you make a positive difference to the world.',
    'The future belongs to those who believe in the beauty of their dreams.',
  ];

  return (
    <>
      <Carousel showArrows={true}>
        {images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.url} alt="carousel images" />
              <p>{texts[index]}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
export default MemberHighlight;
