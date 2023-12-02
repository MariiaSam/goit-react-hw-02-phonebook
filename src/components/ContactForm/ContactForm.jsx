import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';

import { FormStyled, FieldStyled, Message, Label, Button } from './ContactForm.styled';

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

export const ContactForm = ({ onAddContact }) => {
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
   <FormStyled>
   <div>  
    <Label htmlFor="name">Please, enter name</Label>

    <FieldStyled type="text" name="name" placeholder=" "/>
    <Message name='name' component='div'></Message>
   </div>
   <div>   
     <Label htmlFor="name">Please, enter number</Label>

    <FieldStyled type="text" name="number" placeholder=" "/>
    <Message name='number' component='div'></Message>
   </div>
    <Button type="submit">Add contact</Button> 
    </FormStyled>  
    </Formik>
  );
};

ContactForm.propType = {
    onSubmit: PropTypes.func.isRequired,
  };