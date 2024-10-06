import React from 'react';
// import styles from '../styles/NotificationPanel.module.css';

const NotificationPanel = ({ notifications }) => {
  return (

    
    <div>
     {/* className={styles.notificationPanel} */}
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications at this time.</p>
      )}
    </div>
  );
};

export default NotificationPanel;
