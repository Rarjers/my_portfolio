import React from 'react';
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
  const [productQuantity, incrementProductQuantity] = UseProductQuantity();

  return (
    <div>
      <Header productQuantity={productQuantity}/>
      <SectionOne />
      <OurPartners />
      <AboutProduct />
      <OurProduct />
      <ProductTypes incrementProductQuantity={incrementProductQuantity}/>
      <CleansingProcedure />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
