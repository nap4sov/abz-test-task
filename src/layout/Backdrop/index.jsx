import { createPortal } from 'react-dom';
import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';

const modalRoot = document.getElementById('modal-root');

const Backdrop = () => {
    return createPortal(
        <div className={styles.backdrop}>
            <CircularProgress sx={{ width: '48px', height: '48px' }} />
        </div>,
        modalRoot,
    );
};

export default Backdrop;
