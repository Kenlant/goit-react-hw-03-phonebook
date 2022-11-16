import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import ContactList from 'components/ContactList/ContactList';
import styles from './ContactsBook.module.css';
import Filter from 'components/Filter/Filter';

export default class ContactsBook extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: ``,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  handleFormSubmit(values) {
    const { name, number } = values;

    const hasContactWithSameName = this.state.contacts.some(
      x => x.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContactWithSameName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          id: `id-${shortid.generate()}`,
          name,
          number,
        },
      ],
    }));
  }

  handleFilterChange(value) {
    this.setState({
      filter: value,
    });
  }

  handleDeleteContact(id) {
    this.setState(prev => ({
      contacts: prev.contacts.filter(x => x.id !== id),
    }));
  }

  render() {
    const { contacts, filter } = this.state;
    const { 'contact-book': contactsBookClassName } = styles;
    const filteredContacts = contacts.filter(x =>
      x.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={contactsBookClassName}>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />

        <Section title="Contacts">
          <Filter onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </div>
    );
  }
}
