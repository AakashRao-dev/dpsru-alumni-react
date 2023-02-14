import { useEffect, useState } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database';

function Profile() {
  const [users, setUsers] = useState('');

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'users/'))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setUsers(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Edit Profile</h1>
      {users && (
        <div className="text-error md:text-xl text-sm w-full px-4 py-2 mt-6 transition ease-in-out delay-150 text-center rounded-lg bg-error-light">
          {JSON.stringify({ users })}
        </div>
      )}
    </div>
  );
}
export default Profile;
