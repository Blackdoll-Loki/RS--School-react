interface cardData {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface propsData {
  data: cardData;
  key: number;
}

export { cardData, propsData };
