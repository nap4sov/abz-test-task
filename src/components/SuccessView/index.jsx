import { ReactComponent as SuccessImage } from '../../images/success-image.svg';
import Container from '../../layout/Container';
import styles from './styles.module.scss';

const SuccessView = () => {
    return (
        <>
            <Container className={styles.container}>
                <h2 className="heading">User successfully registered</h2>
                <SuccessImage className={styles.image} />
            </Container>
        </>
    );
};

export default SuccessView;
