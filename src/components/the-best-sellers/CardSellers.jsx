import BestSellersCards from "./BestSellersCards";



const CardSellers = () => {
  // Puedes definir la información para cada tarjeta
  const cardData = [
    {
      title: 'Rib-Eye',
      description: 'El rib eye es un corte de carne de res jugoso y bien marmoleado, apreciado por su sabor y terneza excepcionales.',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/rib-eye-removebg-preview%20(1).png?alt=media&token=9ce81b20-ba82-428d-81c5-17ac8ecb0d62',
      price: 186,
    },
    {
      title: 'Tex-Mex',
      description: 'La arrachera Tex-Mex es un corte de carne de res conocido por su textura tierna y su sabor intenso a la parrilla',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/tex-mex-removebg-preview.png?alt=media&token=b5915407-adce-425e-b81c-17367cf991c3',
      price: 400,
    },
    {
      title: 'Filete de Res',
      description: 'El filete de res es un corte magro y tierno de carne de res, ideal para platos gourmet y comidas elegantes.',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/filete-res-removebg-preview.png?alt=media&token=912a65d4-b911-4c1d-a5f6-528582ad039c',
      price: 220,
    },
    {
      title: 'Diezmillo',
      description: 'El diezmillo, también conocido como chuck eye steak, es un corte jugoso y sabroso de carne de res para parrilladas.',
      image: 'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/diezmillo-removebg-preview.png?alt=media&token=4835d339-5916-417c-8d1e-cb00388a3211',
      price: 176,
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