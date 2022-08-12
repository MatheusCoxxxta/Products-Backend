interface IProducts {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  measure: 'g' | 'cm';
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
}

const products: IProducts[] = [
  {
    id: '1493f4f6-3685-45ae-97c1-ffe649dea0df',
    name: 'Coelho de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/5WtXJKM.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Geral',
    },
  },
  {
    id: '15c973f0-0e97-400f-88d3-6af1cadff668',
    name: 'Coelho de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/QeLfk5b.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Geral',
    },
  },
  {
    id: '621e7fba-7cb6-4c55-be40-eb91b6d605f1',
    name: 'Coelho de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/GZYvOgL.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Geral',
    },
  },
  {
    id: '85671e5f-8ed9-4de5-89cc-a844bb151e8b',
    name: 'Urso de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/8fdkal6.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Geral',
    },
  },
  {
    id: '8748e7d4-deef-41c2-a015-633fa660b126',
    name: 'Coelho de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/HTdJfVD.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Geral',
    },
  },
  {
    id: '928c25c5-ec9d-4b04-a800-18a44911761b',
    name: 'Coelho de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/860iCy3.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Diversos',
    },
  },
  {
    id: 'da618cb6-fea3-423b-9ecc-ab7087b9ca7e',
    name: 'Mickey de Pelucia',
    price: 39.9,
    imageUrl: 'https://i.imgur.com/hqGWqHX.png',
    size: 30,
    measure: 'cm',
    categoryId: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
    category: {
      id: 'c3eec139-9a83-41a3-bae7-c9131b06a3b4',
      name: 'Diversos',
    },
  },
];

export default products;
