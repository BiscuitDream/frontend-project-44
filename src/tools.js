// eslint-disable-next-line import/prefer-default-export
export const getRandomIntNumber = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
