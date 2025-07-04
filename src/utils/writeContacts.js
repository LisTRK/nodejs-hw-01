import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const updatedContactsJSON = JSON.stringify(updatedContacts);
  await fs
    .writeFile(PATH_DB, updatedContactsJSON, { encoding: 'utf-8' })
    .then(() => {
      console.log('Write Status: OK');
    })
    .catch((error) => {
      console.error('error', error);
    });

  return updatedContacts;
};
