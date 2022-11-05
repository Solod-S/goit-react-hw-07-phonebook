import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { ContactsList, ListForContactsList } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactSlice';
import { LoaderSpiner } from 'components/Loader/Loader';
const ContactList = () => {
  const { data, isError, isFetching } = useGetContactsQuery();
  const storeFilter = useSelector(state => state.filter);
  const getContacts = () => {
    const normalizedFilter = storeFilter.toLocaleLowerCase();
    const filtered = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filtered;
  };

  return (
    <ContactsList>
      {isFetching && <LoaderSpiner />}

      <ListForContactsList>
        {data &&
          !isFetching &&
          !isError &&
          getContacts().map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </ListForContactsList>
    </ContactsList>
  );
};

export default ContactList;
