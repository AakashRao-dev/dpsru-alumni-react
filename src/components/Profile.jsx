import { useEffect, useState } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database';
import { Skeleton } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { ref as sRef, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

function Profile() {
  const [users, setUsers] = useState('');
  const [imageDown, setImageDown] = useState('');
  const { uid } = useAuth();

  const imageDownRef = sRef(storage, 'images/');

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'users/' + uid))
      .then(snapshot => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          setUsers(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });

    // TO DOWNLOAD THE IMAGE
    listAll(imageDownRef).then(response => {
      response.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setImageDown(url);
        });
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-center text-light-gray mt-10">
        <h1 className="font-Roboto md:text-5xl text-3xl tracking-wider font-black text-center ">
          Your Profile
        </h1>
        <p className="mt-4">Please check your profile details below</p>
        {!users && (
          <div className="text-error md:text-xl text-sm w-full px-4 py-2 mt-6 transition ease-in-out delay-150 text-center rounded-lg bg-error-light">
            Error loading data, please try to reload the page.
          </div>
        )}
      </div>

      {/* PROFILE CARD */}
      <div className="bg-[#1224509f] max-w-md w-full p-8 rounded-xl">
        {!imageDown ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            className="w-full"
            height={200}
          />
        ) : (
          <img src={imageDown} alt="" />
        )}

        <div className="mt-7 text-light-gray flex flex-col gap-2 text-lg">
          <p className="font-medium">
            Full Name:{' '}
            <span className="font-light">
              {!users.fullname ? 'Problem loading data' : users.fullname}
            </span>
          </p>

          <p className="font-medium">
            Job Designation:{' '}
            <span className="font-light">
              {!users.designation ? 'Problem loading data' : users.designation}
            </span>
          </p>

          <p className="font-medium">
            Home Address:{' '}
            <span className="font-light">
              {!users.address ? 'Problem loading data' : users.address}
            </span>
          </p>

          <p className="font-medium">
            Phone No.:{' '}
            <span className="font-light">
              {!users.phone ? 'Problem loading data' : users.phone}
            </span>
          </p>

          <p className="font-medium">
            Course:{' '}
            <span className="font-light">
              {!users.course ? 'Problem loading data' : users.course}
            </span>
          </p>

          <p className="font-medium">
            Batch:{' '}
            <span className="font-light">
              {!users.batch ? 'Problem loading data' : users.batch}
            </span>
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link to="/payment">
            <button className="bg-success text-light-gray px-4 py-2 font-medium rounded">
              Confirm
            </button>
          </Link>

          <Link to="/registeration">
            <button className="bg-error text-light-gray px-4 py-2 font-medium rounded">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Profile;
