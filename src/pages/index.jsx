import React, { useState } from 'react';
import ShopsTable from '../pages/ShopsTable';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
import Homescreen from '../pages/Homescreen';
import ShopData from '../pages/ShopData/ShopData';
import RolesandUsers from '../pages/RolesandUsers';
import Modules from '../pages/Modules';
const Pages = ({Shops,Countries,Brands,Categories,Areas,onLogout}) => {
  const [View, setView] = useState("Home");
  const [Shop, setShop] = useState([]);
  const HandleActivePage =(page)=>{
    setView(page);
  }
  const HandleViewShop = (shop) => {
    setShop(shop);
    HandleActivePage("ShopData");
  }
    return (
        <>
            <Nav setActive={HandleActivePage}  View={View} onLogout={onLogout}/>
            {View === 'Home' && (
                <Homescreen 
                    shops={Shops} 
                    Countries={Countries}
                    ViewShop={HandleViewShop} 
                />
            )}
            {View === 'ShopData' && (
                <ShopData 
                    shop={Shop}
                    Countries={Countries} 
                    Areas={Areas} 
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
            {View === 'RolesandUsers' && (
                <RolesandUsers onClick={RolesandUsers}/>
            )}
            {View === 'Modules' && (
                <Modules onClick={Modules}/>
            )}
            <Footer/>
        </>
    );
}
export default Pages;