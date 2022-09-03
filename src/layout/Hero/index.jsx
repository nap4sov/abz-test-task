import Button from '../../components/Button';
import Container from '../Container';
import styles from './styles.module.scss';

const backgroundFull = `${process.env.PUBLIC_URL}/assets/images/pexels-alexandr-podvalny-1227513.jpeg`;
const backgroundCompressed = `${process.env.PUBLIC_URL}/assets/images/pexels-alexandr-podvalny-1227513-min.jpeg`;
const background = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
        window.innerWidth >= 1024 ? backgroundFull : backgroundCompressed
    })`,
};
const Hero = () => {
    return (
        <div style={background} className={styles.container}>
            <Container>
                <div className={styles.wrapper}>
                    <h1 className="heading">
                        Test assignment for front-end developer
                    </h1>
                    <p className={styles.text}>
                        What defines a good front-end developer is one that has
                        skilled knowledge of HTML, CSS, JS with a vast
                        understanding of User design thinking as they'll be
                        building web interfaces with accessibility in mind. They
                        should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </p>
                </div>
                <Button label="Sign up" />
            </Container>
        </div>
    );
};

export default Hero;
