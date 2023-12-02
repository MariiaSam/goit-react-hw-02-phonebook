// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';

const schema = object().shape({
  name: string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, 'Invalid name format')
    .required('This field is required'),
  number: string()
    .trim()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('This field is required'),
});

export const Form = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resertForm }) => {
        onAddContact({ id: nanoid(), ...values });
        resertForm();
      }}
    > 
        
    </Formik>
  );
};
