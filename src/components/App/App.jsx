import React from 'react';
import ContactFrom from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { Container, Title, SubTitle } from './App.styled';
import Filter from '../Filter/Filter';

const App = () => {


  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactFrom />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default App;
