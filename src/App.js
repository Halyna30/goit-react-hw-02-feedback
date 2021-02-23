import React from 'react';
import user from './componentProfile/user.json';
import Profile from './componentProfile/Profile';

import statisticalData from './componentStatistics/statistical-data.json';
import TitleStat from './componentStatistics/TitleStat';
import Statistics from './componentStatistics/Statistics';

import friends from './componentFriendList/friends.json';
import FriendList from './componentFriendList/FriendList';

import transactions from './componentTransaction-history/transactions.json';
import TransactionHistory from './componentTransaction-history/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TitleStat title="Upload stats">
        <Statistics stats={statisticalData} />
      </TitleStat>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
