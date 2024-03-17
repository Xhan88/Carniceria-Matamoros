import BestSellersCards from "./BestSellersCards";



const CardSellers = () => {
  // Puedes definir la información para cada tarjeta
  const cardData = [
    {
      title: 'Rib-Eye',
      description: 'Description for Card 1',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/rib-eye-removebg-preview%20(1).png?alt=media&token=9ce81b20-ba82-428d-81c5-17ac8ecb0d62',
      price: 200,
    },
    {
      title: 'Tex-Mex',
      description: 'Description for Card 2',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/tex-mex-removebg-preview.png?alt=media&token=b5915407-adce-425e-b81c-17367cf991c3',
      price: 200,
    },
    {
      title: 'Filete de Res',
      description: 'Description for Card 3',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/filete-res-removebg-preview.png?alt=media&token=912a65d4-b911-4c1d-a5f6-528582ad039c',
      price: 200,
    },
    {
      title: 'Diezmillo',
      description: 'Description for Card 4',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/diezmillo-removebg-preview.png?alt=media&token=4835d339-5916-417c-8d1e-cb00388a3211',
      price: 200,
    },
  ];
  
  return (
    
    <div className="card-component">
      {cardData.map((card, index) => (
        <BestSellersCards key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSellers;