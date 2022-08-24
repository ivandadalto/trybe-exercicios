const firstObject = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

  const getNamedBook = () => firstObject.find((book) => book.name.length === 26);

console.log(getNamedBook())