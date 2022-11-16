import { Component } from 'react';
import { Form, Field, Formik } from 'formik';
import shortid from 'shortid';
import styles from './ContactForm.module.css';
import propTypes from './ContactFormPropTypes';

export default class ContactForm extends Component {
  render() {
    const { onSubmit } = this.props;
    const nameFieldId = shortid.generate();
    const nameFieldTitle = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
    const phoneFieldId = shortid.generate();
    const phoneFieldTitle = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;
    const {
      form: formClassName,
      'field-group': fieldGroupClassName,
      'submit-btn': submitBtnClassName,
    } = styles;

    return (
      <Formik
        initialValues={{
          name: ``,
          number: ``,
        }}
        onSubmit={onSubmit}
      >
        <Form className={formClassName}>
          <label htmlFor={nameFieldId}>
            Name
            <Field
              className={fieldGroupClassName}
              id={nameFieldId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title={nameFieldTitle}
              required
            />
          </label>
          <label htmlFor={phoneFieldId}>
            Number
            <Field
              className={fieldGroupClassName}
              id={phoneFieldId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title={phoneFieldTitle}
              required
            />
          </label>
          <button className={submitBtnClassName} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = propTypes;
