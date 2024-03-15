import BestSellersCards from "./components/the-best-sellers/BestSellersCards";



const CardSellers = () => {
  // Puedes definir la información para cada tarjeta
  const cardData = [
    {
      title: 'Rib-Eye',
      description: 'Description for Card 1',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/rib-eye.jpg?alt=media&token=b68eef1c-dd5b-49bf-badc-a4fd3533029c',
      price: 200,
    },
    {
      title: 'Tex-Mex',
      description: 'Description for Card 2',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/tex-mex.jpeg?alt=media&token=3f806ee0-d91e-4ab2-acf6-d8086067fca9',
      price: 200,
    },
    {
      title: 'Filete de Res',
      description: 'Description for Card 3',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/filete-res.jpeg?alt=media&token=3c39f518-cf80-4b4c-a918-f0c355c9d7e1',
      price: 200,
    },
    {
      title: 'Diezmillo',
      description: 'Description for Card 4',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/diezmillo.jpeg?alt=media&token=2c5bb9f8-e4db-4a55-bb95-8b1b26bbf81d',
      price: 200,
    },
  ];
  console.log(cardData)
  return (
    
    <div>
      {cardData.map((card, index) => (
        <BestSellersCards key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSellers;