import './App.css';

const App = () => {
  const products = [
    {
      name: 'Tablet X',
      description: 'Powerful tablet with a stunning display.',      
      price: 299, 
      imageUrl: 'https://via.placeholder.com/150', 
    },
    {
      name: 'Smartphone Y',
      description: 'High-performance smartphone with a great camera.',
      price: 499,      
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Headset Z',
      description: 'Immersive audio experience with noise cancellation.',
      price: 149,      
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Headset Z',
    description: 'Immersive audio experience with noise cancellation.',
    price: 149,      
    imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Headset Z',
      description: 'Immersive audio experience with noise cancellation.',
      price: 149,      
      imageUrl: 'https://via.placeholder.com/150',
    }, 
  
  ];

  return (
    <div className="app-container">
      <h1>Online Store</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="product-price">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
