function Button({ ctaTitle, paddingY }) {
  return (
    <>
      <button
        className={`mt-5 bg-custom-yellow text-black mx-auto md:mx-0 hover:bg-very-custom-yellow px-8 w-full py-${paddingY} rounded-full font-bold shadow-xl shadow-black/20`}
      >
        {ctaTitle}
      </button>
    </>
  );
}
export default Button;
