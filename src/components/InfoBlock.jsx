function InfoBlock({ title, block }) {
  return (
    <div className="m-auto w-full max-w-[1220px] md:mt-36 mt-20">
      <h2 className="md:text-2xl text-xl text-center tracking-widest uppercase">
        {title}
      </h2>
      {block}
    </div>
  );
}
export default InfoBlock;
