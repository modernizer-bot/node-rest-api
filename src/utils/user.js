import { join } from 'path';
import fs from 'fs';

const filePath = join(__dirname, '../db/users.json');

const save = users => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));
}

const getUsers = () => {
  const data = fs.existsSync(filePath)
      ? fs.readFileSync(filePath)
      : [];

    try {
      return JSON.parse(data);
    }
    catch (error) {
      return [];
    }
}

export default {
  save,
  getUsers,
}
