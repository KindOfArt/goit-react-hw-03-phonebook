export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>

            <button type="button">delete</button>
          </li>
        );
      })}
    </ul>
  );
};
