import { useState } from 'react';
import { computeName } from '../../utils/utils';
import styles from './styles.module.scss';

const UserCard = ({ email, name, phone, photo, position }) => {
    const [helperStyles, setHelperStyles] = useState(styles.isHidden);

    const imageUrl = photo ? photo : './assets/images/photo-cover.svg';
    // trimming if value is too long, otherwise leaving as is
    const userName = computeName(name, 31);
    const userPosition = computeName(position, 31);
    const userEmail = computeName(email, 31);

    // shows and hides full length email if it's trimmed
    const showHelper = () => {
        if (name.length < 31) return;
        setHelperStyles(styles.helper);
    };
    const hideHelper = () => {
        if (name.length < 31) return;
        setHelperStyles(styles.isHidden);
    };

    return (
        <div className={styles.card}>
            <div className={styles.thumb}>
                <img src={imageUrl} alt={name} height="70" />
            </div>
            <h3 className={styles.name}>{userName}</h3>
            <p>{userPosition}</p>
            <a
                href={`mailto:${email}`}
                className={styles.email}
                onMouseOver={showHelper}
                onMouseLeave={hideHelper}
            >
                {userEmail}
            </a>
            <p>{phone}</p>
            <div className={helperStyles}>{email}</div>
        </div>
    );
};

export default UserCard;
