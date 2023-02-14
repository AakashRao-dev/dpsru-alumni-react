import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { database } from '../firebase';
import { getDatabase, ref, push, child, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import { IoMdCloudUpload } from 'react-icons/io';

function FormRegisteration() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  // Write data to database
  const onSubmit = data => {
    const db = getDatabase();
    const newPostKey = push(child(ref(database), 'posts')).key;
    const { address, batch, course, designation, fullname, phone } = data;
    set(ref(db, 'users/' + newPostKey), {
      address,
      batch,
      course,
      designation,
      fullname,
      phone,
    })
      .then(() => {
        // log data to console and Redirect to another component after form submission
        setError('');
        setSubmitting(true);
        setTimeout(() => {
          navigate('/edit-profile');
        }, '5000');
      })
      .catch(() => {
        setError('Failed to submit the form');
        throw new Error(
          `Sorry!! It looks like there is some problem with submitting the form`
        );
      });
  };

  return (
    <>
      <div className="text-center text-light-gray md:mt-12 mt-20">
        <h1 className="font-Roboto md:text-5xl text-3xl tracking-wider font-black text-center ">
          Registeration
        </h1>
        <p className="mt-4">Please fill in the details below</p>
        {error && (
          <div className="text-error md:text-xl text-sm w-full px-4 py-2 mt-6 transition ease-in-out delay-150 text-center rounded-lg bg-error-light">
            {error}
          </div>
        )}

        {submitting && (
          <div className="text-success md:text-xl text-sm w-full px-4 py-2 text-center mt-6 transition ease-in-out delay-150 rounded-lg bg-success-light">
            Form Successfully Submitted
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 max-w-2xl bg-[#1224509f] w-full rounded-xl p-12 flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Name
          </label>
          <input
            type="text"
            {...register('fullname', { required: true })}
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
            {...register('designation', { required: true })}
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
            {...register('address', { required: true })}
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Home Address: E.g (Plot no 44/45 Sagar colony)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Enter your Phone No.
          </label>
          <input
            type="number"
            {...register('phone', { required: true })}
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
            {...register('course', { required: true })}
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
            {...register('batch', { required: true })}
            className="w-full bg-none py-3 text-sm pl-2 outline-none placeholder:text-black/60 placeholder:font-medium bg-light-gray rounded"
            placeholder="Batch: E.g (2019-2021)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-base text-light-gray">
            Upload your image
          </label>
          <ImageUploading
            multiple={false}
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                  className="bg-upload text-light-gray hover:bg-upload-light px-8 w-full py-3 rounded font-medium shadow-xl shadow-black/20 text-md max-w-[16rem] flex justify-evenly items-center"
                >
                  <IoMdCloudUpload className="text-2xl" /> Click or Drop here
                </button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item mt-7">
                    <img src={image['data_url']} alt="" width="200" />
                    <div className="image-item__btn-wrapper max-w-[200px] mt-2 flex items-center justify-between">
                      <button
                        onClick={() => onImageUpdate(index)}
                        className="bg-error px-3 py-2 rounded text-light-gray"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => onImageRemove(index)}
                        className="bg-error px-3 py-2 rounded text-light-gray"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>

        <button
          type="submit"
          className="bg-custom-yellow text-black hover:bg-very-custom-yellow px-8 w-full py-3 rounded-full font-bold shadow-xl shadow-black/20 text-lg mt-6"
          disabled={submitting}
        >
          Submit
        </button>
        {error && (
          <div className="text-error md:text-xl text-sm w-full px-4 py-2 text-center transition ease-in-out delay-150 rounded-lg bg-error-light">
            {error}
          </div>
        )}

        {submitting && (
          <div className="text-success md:text-xl text-sm w-full px-4 py-2 text-center transition ease-in-out delay-150 rounded-lg bg-success-light">
            Form Successfully Submitted
          </div>
        )}
      </form>
    </>
  );
}
export default FormRegisteration;
