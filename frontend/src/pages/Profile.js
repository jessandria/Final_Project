import React, { useEffect, useState } from 'react';
import API from '../api';
import { Container } from 'react-bootstrap';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/profile');
        setProfile(res.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container className="profile-container">
      <h2>User Profile</h2>
      {profile ? (
        <div>
          <p>ID: {profile.id}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </Container>
  );
};

export default Profile;

