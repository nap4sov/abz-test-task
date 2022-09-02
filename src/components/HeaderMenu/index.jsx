import Button from '../Button';
import styles from './styles.module.scss';

const HeaderMenu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <Button label="Users" />
            </li>
            <li>
                <Button label="Sign up" />
            </li>
        </ul>
    );
};

export default HeaderMenu;
