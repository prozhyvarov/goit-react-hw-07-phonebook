import React from 'react';
import PropTypes from 'prop-types';

import { List, Item, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/contactsThunk';

const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {listContact.map(({ id, name, phone }) => (
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

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
