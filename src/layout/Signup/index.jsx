import SignupForm from '../../components/SignupForm';
import Container from '../Container';
import SuccessView from '../../components/SuccessView';
import styles from './styles.module.scss';

const Signup = ({ successfulSubmit, setSuccessfulSubmit, setIsLoading }) => {
    return (
        <section className={styles.section}>
            {successfulSubmit ? (
                <SuccessView />
            ) : (
                <Container>
                    <h2 className="heading">Working with POST request</h2>
                    <SignupForm
                        setSuccessfulSubmit={setSuccessfulSubmit}
                        setIsLoading={setIsLoading}
                    />
                </Container>
            )}
        </section>
    );
};
export default Signup;
