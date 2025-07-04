import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  return await readContacts().catch((error) => {
    console.error(error);
  });
};

console.log(await getAllContacts());
