import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const oldContacts = await readContacts().catch((error) => {
    console.error(error);
  });

  const newContact = createFakeContact();
  const newListContacts = [...oldContacts, newContact];
  writeContacts(newListContacts);
};

addOneContact();
