import React from 'react';

import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContactsThunk } from 'redux/contactsThunk';

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);

  const filterContact = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    // console.log(filteredContacts);
    return filteredContacts;
  };

  return (
    <List>
      {filterContact().map(({ id, name, phone }) => (
        <Item key={id}>
          {name + ' : ' + phone}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => {
                dispatch(delContactsThunk(id));
              }}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;