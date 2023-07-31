import React from 'react';
import ContactFrom from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { Container, Title, SubTitle } from './App.styled';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';

const App = () => {
  
const contacts = useSelector(state => state.contacts.items);
const filtered = useSelector(state => state.filter);
const filterContact = e => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );
  return filteredContacts;
};

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactFrom />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList listContact={filterContact()} />
    </Container>
  );
};
export default App;
