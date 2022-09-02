import UserCard from '../../components/UserCard';
import Container from '../Container';
import Button from '../../components/Button';

import styles from './styles.module.scss';

const Users = ({ usersList, totalPages, currentPage, handleLoadMoreClick }) => {
    return (
        <section className={styles.section}>
            <Container>
                <h2 className="heading">Working with GET request</h2>
                <ul className={styles.list}>
                    {usersList?.map(
                        ({ id, email, name, phone, photo, position }) => (
                            <li className={styles.listItem} key={id}>
                                <UserCard
                                    email={email}
                                    name={name}
                                    phone={phone}
                                    photo={photo}
                                    position={position}
                                />
                            </li>
                        ),
                    )}
                </ul>
                {currentPage < totalPages && (
                    <Button
                        onClick={handleLoadMoreClick}
                        className={styles.button}
                        label="Show more"
                    />
                )}
            </Container>
        </section>
    );
};

export default Users;
