import { Component } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';

import { ContactsTitle } from './ContactsTitle/ContactsTitle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name}: is already in contacts`);
      return;
    }
    this.state(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact}></ContactForm>
          <ContactsTitle title="Contacts"></ContactsTitle>
        </Section>
      </div>
    );
  }
}
