import Button from '../Button';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { signUpUser } from '../../api/usersApi';
import styles from './styles.module.scss';

const SignupForm = ({ setSuccessfulSubmit }) => {
    const rebuildData = values => {
        let formData = new FormData();
        Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
        });
        return formData;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            position_id: 0,
            photo: null,
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required('Required')
                .min(2, 'Name must be 2 characters or more')
                .max(60, 'Name must be 60 characters or less'),
            email: yup
                .string()
                .required('Required')
                .min(2, 'Email must be 2 characters or more')
                .max(100, 'Email must be 100 characters or less')
                .matches(
                    // eslint-disable-next-line no-control-regex
                    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]$)/,
                    'Email must be valid',
                ),
            phone: yup
                .string()
                .required('Required')
                .matches(
                    /^[+]{0,1}380([0-9]{9})$/,
                    'Number should start with code of Ukraine +380',
                )
                .min(13)
                .max(13),
            photo: yup.mixed().required('Image is required'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            const data = rebuildData(values);

            try {
                await signUpUser(data);
                setSuccessfulSubmit(true);
            } catch (error) {
                console.error(error);
            }

            setSubmitting(false);
        },
    });

    const makeFileName = () => {
        if (!formik.values.photo) {
            return null;
        }
        return formik.values.photo?.name.length < 22
            ? formik.values.photo.name
            : `${formik.values.photo.name.slice(0, 20)}...`;
    };
    const fileName = makeFileName();

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <TextField
                name="name"
                type="text"
                label="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ marginBottom: '50px' }}
            />
            <TextField
                name="email"
                type="email"
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ marginBottom: '50px' }}
            />
            <TextField
                id="phone"
                name="phone"
                type="tel"
                label="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={
                    formik.touched.phone
                        ? formik.errors.phone
                        : '+38 (XXX) XXX - XX - XX'
                }
                sx={{ marginBottom: '25px' }}
            />
            <p>Select your position</p>

            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    name="position_id"
                    value={1}
                    onClick={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={styles.radioInput}
                />
                Frontend developer
            </label>
            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    name="position_id"
                    value={2}
                    onClick={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={styles.radioInput}
                />
                Backend developer
            </label>
            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    name="position_id"
                    value={3}
                    onClick={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={styles.radioInput}
                />
                Designer
            </label>
            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    name="position_id"
                    value={4}
                    onClick={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={styles.radioInput}
                />
                QA
            </label>

            <div
                className={
                    fileName ? styles.uploadFieldActive : styles.uploadField
                }
            >
                <label className={styles.uploadButton}>
                    Upload
                    <input
                        name="photo"
                        type="file"
                        accept=".jpg, .jpeg"
                        onChange={event => {
                            formik.setFieldValue(
                                'photo',
                                event.currentTarget.files[0],
                            );
                        }}
                    />
                </label>
                {fileName || 'Upload your photo'}
            </div>
            <Button
                disabled={formik.isSubmitting}
                className={styles.button}
                type="submit"
                label="Sign up"
            />
        </form>
    );
};

export default SignupForm;
