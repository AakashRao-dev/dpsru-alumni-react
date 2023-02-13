function FormRegisteration() {
  return (
    <>
      <div className="text-center text-light-gray md:mt-12 mt-20">
        <h1 className="font-Roboto md:text-5xl text-3xl tracking-wider font-black text-center ">
          Registeration
        </h1>
        <p className="mt-4">Please fill in the details below</p>
      </div>

      <form
        action=""
        className="mt-16 max-w-2xl bg-[#1224509f] w-full rounded-xl p-12 flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Name
          </label>
          <input
            type="text"
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Full Name: E.g (Salman Khan)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Designation
          </label>
          <input
            type="text"
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Job Designation: E.g (Software Engineer)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Full Address
          </label>
          <input
            type="text"
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Home Address: E.g (Plot no 44/45 Sagar colony)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Phone No.
          </label>
          <input
            type=""
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Phone No.: E.g (9840329760)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Course
          </label>
          <input
            type="text"
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Course Name: E.g (M.Pharm Cosmaceutics)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Batch
          </label>
          <input
            type="text"
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Batch: E.g (2019-2021)"
          />
        </div>

        <button
          type="submit"
          className="bg-custom-yellow text-black hover:bg-very-custom-yellow px-8 w-full py-3 rounded-full font-bold shadow-xl shadow-black/20 text-lg"
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default FormRegisteration;
