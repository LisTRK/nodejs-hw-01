import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  let dataReadFile = await fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((res) => {
      console.log('Read Status: OK');
      return JSON.parse(res);
    })
    .catch((error) => {
      console.error(error);
    });

  return dataReadFile;
};
