import styles from './styles.module.scss';

const Button = ({ type, label, className, disabled, onClick }) => {
    const buttonType = type ? type : 'button';
    const classes = className ? `${styles.button} ${className}` : styles.button;
    return (
        <button
            onClick={onClick}
            type={buttonType}
            className={classes}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
