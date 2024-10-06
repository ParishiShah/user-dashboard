import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./NotificationBell.scss";


const NotificationBell = ({ notifications }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='notificationBell'>
            <NotificationsIcon onClick={toggleDropdown} className="bellIcon"/>
            {isOpen && (
                <div className='dropdown'>
                    <h2>Notifications</h2>
                    <ul>
                        {notifications.length > 0 ? (
                            notifications.map((notification, index) => (
                                <li key={index}>{notification}</li>
                            ))
                        ) : (
                            <li>No notifications</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
