import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  stats: { followers, views, likes },
  avatar,
}) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userInfo}>
        <img src={avatar} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={styles.statsContainer}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
