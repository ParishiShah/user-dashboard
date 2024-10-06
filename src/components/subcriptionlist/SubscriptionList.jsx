import React from 'react';
import "./SubscriptionList.scss";

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div className='card subscriptionList'>
      <h2>Active Subscriptions</h2>
      {subscriptions.length > 0 ? (
        <ul>
          {subscriptions.map(subscription => (
            <li key={subscription.id}>
              {subscription.name} - {subscription.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No active subscriptions found.</p>
      )}
    </div>
  );
};

export default SubscriptionList;
