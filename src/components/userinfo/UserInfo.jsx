import React from 'react';
// import styles from '../styles/UserInfo.module.css';

const UserInfo = ({ userData }) => {
  return (
    <div className='card'>
      <h2>User Information</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserInfo;
