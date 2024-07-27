import "modern-normalize";

import Profile from "./components/task1/Profile";
import FriendList from "./components/task2/Friendlist/FriendList";
import TransactionHistory from "./components/task3/TransactionHistory";

import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats} />
    
    <FriendList friends={friends} />
    
    <TransactionHistory items={transactions} />
  </>
}

export default App