import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';

function ContactsList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(elem => (
        <ContactsItem
          key={elem.id}
          contact={elem}
          onRemoveContact={onRemoveContact}
        ></ContactsItem>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactsList;
