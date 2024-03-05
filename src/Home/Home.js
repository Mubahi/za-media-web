import React, { useState } from 'react';
import ShopsTable from '../pages/ShopsTable';
import Data from '../pages/cardsdata/Data';
import Homescreen from '../pages/Homescreen';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
const Home = (Shops,Countries ,ViewShop,Brands,Categories,Areas) => {
  const [View, setView] = useState("Homescreen");
    
  console.log(Shops)
  
    return (
        <>
            <Nav/>
            {/* {View === 'Homescreen' && (<Homescreen shops={Shops} Countries={Countries}  />)} */}
            {View === 'Data' && (
                <Data 
                />
            )}
            {View === 'AllShops' && (
                <ShopsTable 
                Shops={Shops} 
                Countries={Countries} 
                Areas={Areas} 
                Categories={Categories} 
                Brands={Brands}
            />
            )}
            <Footer/>
        </>
    );
}
export default Home;