import { hashSync } from 'bcryptjs';
import { v4 as uuid } from 'uuid';

const now = new Date();

const UserSeed = {
  id: uuid(),
  email: 'admin@email.com',
  name: 'Administrador',
  password: hashSync('123123', 8),
  createdAt: now,
  updatedAt: now,
};

export default UserSeed;
