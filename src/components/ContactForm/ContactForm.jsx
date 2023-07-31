import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { Form, Input, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

const [contactName, setcontactName] = useState('');
const [number, setNumber] = useState('');

const handleSubmit = e => {
  e.preventDefault();

  if (contacts.some(({ name }) => name === contactName.toLowerCase())) {
    Notiflix.Notify.warning(`Contact "${contactName}" is already in your contacts list`);
    return;
  }
  dispatch(
    addContact({
      name: contactName,
      number,
      id: nanoid(),
    })
  );

  setcontactName('');
  setNumber('');
};

const handleChange = e => {
  const { value, name } = e.target;

  switch (name) {
    case 'name':
      setcontactName(value);
      break;
    case 'number':
      setNumber(value);
      break;

    default:
      return;
  }
};

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
