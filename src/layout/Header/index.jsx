import { ReactComponent as Logo } from '../../images/Logo.svg';
import HeaderMenu from '../../components/HeaderMenu';
import Container from '../Container';
import styles from './styles.module.scss';

const Header = () => {
    return (
        <header>
            <Container className={styles.container}>
                <Logo className={styles.logo} />
                <HeaderMenu />
            </Container>
        </header>
    );
};

export default Header;
