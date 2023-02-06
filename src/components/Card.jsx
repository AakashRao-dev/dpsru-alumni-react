import Button from './Button';

function Card({
  title,
  description,
  imageURL,
  textAlign,
  ctaTitle,
  graduated,
}) {
  return (
    <>
      {!imageURL ? (
        'URL Not Found'
      ) : (
        <div className="h-64 md:max-w-lg max-w-xs overflow-hidden md:flex justify-end rounded-xl">
          <img src={imageURL} alt={title} className="object-cover w-full" />
        </div>
      )}
      {!title ? (
        'Title Not Found'
      ) : (
        <h4
          className={`text-${textAlign} text-sm mt-4 uppercase tracking-widest flex justify-between`}
        >
          <span>{title}</span>
          {graduated ? (
            <span className="font-semibold">{graduated}</span>
          ) : null}
        </h4>
      )}
      {!description ? (
        'Description Not Found'
      ) : (
        <p className="mt-4 text-md">{description}</p>
      )}
      <Button ctaTitle={ctaTitle} paddingY="2" width="full" />
    </>
  );
}
export default Card;
