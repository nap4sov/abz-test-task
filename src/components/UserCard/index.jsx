import styles from './styles.module.scss';

const UserCard = ({ email, name, phone, photo, position }) => {
    const imageUrl = photo ? photo : './assets/images/photo-cover.svg';

    return (
        <div className={styles.card}>
            <div className={styles.thumb}>
                <img src={imageUrl} alt={name} />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p>{position}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserCard;
