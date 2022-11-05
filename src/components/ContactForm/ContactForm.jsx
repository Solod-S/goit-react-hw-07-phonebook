import React, { useState } from 'react';

import { Formik } from 'formik';
import schema from './schema';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ContactsForm,
  ListForContactsForm,
  ItemsForContactsForm,
  LabelForContactsForm,
  InputForContactsForm,
  ButtonForContactsForm,
  ErrorForContactsForm,
} from './ContactForm.styled';

import { useGetContactsQuery, useAddContactMutation } from 'redux/contactSlice';

function ContactForm() {
  const [name] = useState('');
  const [number] = useState('');
  const { data: storeContact, error } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const creatingContact = data => {
    const namesInContacts = storeContact.map(contact => contact.name);
    if (namesInContacts.includes(data.name)) {
      alert(` ${data.name} is already in contacts`);
      // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
    } else {
      try {
        notify('addContact');
        return addContact(data);
      } catch (errorMsg) {
        console.log(error);
      }
    }
  };

  const handleSubmit = (values, actions) => {
    creatingContact(values);

    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
    >
      <ContactsForm autoComplete="off">
        <ListForContactsForm>
          <ItemsForContactsForm>
            <LabelForContactsForm>Name</LabelForContactsForm>

            <InputForContactsForm type="text" name="name" required />
            <ErrorForContactsForm name="name" component="div" />
          </ItemsForContactsForm>
          <ItemsForContactsForm>
            <LabelForContactsForm>Number</LabelForContactsForm>
            <InputForContactsForm type="tel" name="number" required />
            <ErrorForContactsForm name="number" component="div" />
          </ItemsForContactsForm>
        </ListForContactsForm>
        <ButtonForContactsForm type="submit">
          {isLoading ? 'Loading...' : 'Add contact'}
        </ButtonForContactsForm>
        <ToastContainer
          transition={Flip}
          theme="dark"
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
      </ContactsForm>
    </Formik>
  );
}

export default ContactForm;
