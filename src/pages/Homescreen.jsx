import Footer from "./components/Footer";
import ShopCard from "./components/ShopCard";

const Homescreen = ({shops,Countries ,ViewShop}) => {
   
    return (
        <>
        <div className="max-h-screen bg-orange-200 h-auto pb-2">
                <div className="flex justify-center flex-wrap ">
                    {
                        shops.map(function(shop,index){
                            return(
                            <ShopCard key={shop.shop_id} shop={shop} Countries={Countries} ViewShop={ViewShop}/>
                            );
                        })
                    }
                </div>
        </div>
        <Footer/>
       </>
    );
}
export default Homescreen;