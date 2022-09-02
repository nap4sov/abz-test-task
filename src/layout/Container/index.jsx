import styles from './styles.module.scss';

const Container = ({ className, children }) => {
    const classNames = className
        ? `${styles.container} ${className}`
        : styles.container;

    return <div className={classNames}>{children}</div>;
};

export default Container;
