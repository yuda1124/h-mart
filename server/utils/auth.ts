import bcrypt from 'bcrypt';

export const generateHash = async (password: string) => {
  const rounds = parseInt(process.env.SALT_ROUNDS as string);
  const hash = await bcrypt.hash(password, rounds);
  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
