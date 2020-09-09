import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';

function ContactsItem({ contact: { name, number, id }, onRemoveContact }) {
  return (
    <li className={styles.contactsList}>
      <span>
        {name}: {number}
      </span>
      <button
        className={styles.btn}
        type="button"
        data-id={id}
        onClick={e => {
          onRemoveContact(e.target.dataset.id);
        }}
      >
        delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};
export default ContactsItem;
