import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const oldListContacts = await readContacts();
  oldListContacts.pop();
  writeContacts(oldListContacts);
};

removeLastContact();
