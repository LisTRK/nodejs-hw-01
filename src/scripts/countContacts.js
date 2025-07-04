import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const arrContacts = await readContacts();

  return arrContacts.length;
};

console.log('Count contacts list: ', await countContacts());
