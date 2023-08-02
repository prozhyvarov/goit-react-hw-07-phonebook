import React, { useEffect, useState } from 'react';

import { Form, Input, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from 'redux/contactsThunk';
import Notiflix from 'notiflix';


const ContactForm = () => {
  const dispatch = useDispatch();
  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const reset = () => {
    setcontactName('');
    setNumber('');
  };

  const handleChange = evt => {
    // console.log(evt)
    const { name, value } = evt.target;
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

  const handleSubmit = e => {
    // console.log(e.target.number.value)
    const { name , number} = e.target;
    const contact = {
      name: name.value,
      phone: number.value,
    };
    // console.log(contact);
    e.preventDefault();
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(
        `Contact "${contactName}" is already in your contacts list`
      );
      return;
      //   }
    } else {
      dispatch(addContactsThunk(contact));
      reset();
    }
  };

  const contacts = useSelector(state => state.contacts.items);

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

