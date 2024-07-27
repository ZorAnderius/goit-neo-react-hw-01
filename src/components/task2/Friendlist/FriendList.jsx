import styles from './FriendList.module.css';

import FriendListItem from '../FriendListitem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsContainer}>
      {friends &&
        friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
    </ul>
  );
};

export default FriendList;
