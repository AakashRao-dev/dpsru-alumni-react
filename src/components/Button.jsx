function Button({ ctaTitle, paddingY, width }) {
  return (
    <>
      <button
        className={`mt-5 bg-custom-yellow text-black hover:bg-very-custom-yellow px-8 w-${width} py-${paddingY} rounded-full font-bold shadow-xl shadow-black/20`}
      >
        {ctaTitle}
      </button>
    </>
  );
}
export default Button;
