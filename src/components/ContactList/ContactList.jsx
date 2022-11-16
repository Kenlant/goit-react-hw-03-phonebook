import { Component } from 'react';
import propTypes from './ContactListPropTypes';
import styles from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    const {
      'contact-list': contactListClassName,
      'contact-list-item-rm-btn': contactlistItemRmBtnClassName,
    } = styles;

    return (
      <ul className={contactListClassName}>
        {contacts.map(x => (
          <li key={x.id}>
            <span>{x.name} : </span>
            <span>{x.number}</span>
            <button
              className={contactlistItemRmBtnClassName}
              onClick={() => onDeleteContact(x.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = propTypes;
