import React, {useState, useRef} from 'react';
import Header from './header.js';
import SectionOne from './section_one.js'
import OurPartners from './partners.js'
import AboutProduct from './aboutProduct.js'
import OurProduct from './ourProduct.js'
import ProductTypes from './productTypes.js'
import CleansingProcedure from './cleansingProcedure.js'
import Reviews from './reviews.js'
import Footer from './footer.js'
import UseProductQuantity from './UI/useProductQuantity.js';

function App() {

  const blockRefProducts = useRef(null);

  const handleScroll = () => {
    blockRefProducts.current.scrollIntoView({ behavior: 'smooth' });
  }

  const [productQuantity, incrementProductQuantity, uninstallProduct] = UseProductQuantity();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <Header scrollToBlock={handleScroll} productQuantity={productQuantity} onSelectProduct={selectedProduct} uninstallProduct={uninstallProduct}/>
      <SectionOne scrollToBlock={handleScroll} />
      <OurPartners />
      <AboutProduct />
      <OurProduct />
      <ProductTypes blockRef={blockRefProducts} onSelectProduct={handleProductSelection} incrementProductQuantity={incrementProductQuantity}/>
      <CleansingProcedure />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
