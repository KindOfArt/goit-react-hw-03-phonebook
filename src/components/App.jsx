import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Section/Form/Form';
import { ContactsList } from './Section/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToContactList = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  filterContacts = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });

    // this.findNumber();
  };

  findNumber = () => {};

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form addToContactList={this.addToContactList} />
        </Section>
        <Section title="Contacts">
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.filterContacts}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ContactsList contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
