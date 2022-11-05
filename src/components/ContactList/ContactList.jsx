import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import {
  ContactsList,
  ListForContactsList,
  ErrorMsg,
} from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactSlice';
import { LoaderSpiner } from 'components/Loader/Loader';

const ContactList = () => {
  const { data, isError, isFetching, isSuccess } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const storeFilter = useSelector(state => state.filter);
  const getContacts = () => {
    const normalizedFilter = storeFilter.toLocaleLowerCase();
    const filtered = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filtered;
  };

  const contactsIsFetched = data && !isFetching && !isError;
  const contactsIsNotFetched = isSuccess && !data.length;
  return (
    <ContactsList>
      {isFetching && <LoaderSpiner />}

      <ListForContactsList>
        {contactsIsFetched &&
          getContacts().map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}

        {contactsIsNotFetched && <ErrorMsg>There're no contacts...</ErrorMsg>}
      </ListForContactsList>
    </ContactsList>
  );
};

export default ContactList;
