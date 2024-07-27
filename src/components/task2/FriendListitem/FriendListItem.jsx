import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={styles.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? styles.online : styles.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
