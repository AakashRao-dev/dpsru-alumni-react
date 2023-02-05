import Button from './Button';

function Card({ title, description, imageURL, textAlign, ctaTitle }) {
  return (
    <>
      {!imageURL ? (
        'URL Not Found'
      ) : (
        <img src={imageURL} alt={title} className="rounded-xl" />
      )}
      {!title ? (
        'Title Not Found'
      ) : (
        <h4
          className={`text-${textAlign} text-sm mt-4 uppercase tracking-widest`}
        >
          {title}
        </h4>
      )}
      {!description ? (
        'Description Not Found'
      ) : (
        <p className="mt-4 text-lg">{description}</p>
      )}
      <Button ctaTitle={ctaTitle} paddingY="2" width="full" />
    </>
  );
}
export default Card;
