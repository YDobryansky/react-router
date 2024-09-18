import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{user.name || user.login}</span>
        <span className="user__location">{user.location}</span>
      </div>
    </div>
  );
};

export default User;
