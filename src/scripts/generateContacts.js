import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const oldListContacts = await readContacts().catch((error) => {
    console.error(error);
  });

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  const newListContacts = [...oldListContacts, ...newContacts];
  await writeContacts(newListContacts);
};

generateContacts(5);
