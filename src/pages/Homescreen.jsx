import Footer from "./components/Footer";
import Shop from "./components/Shop";

const Homescreen = ({shops,Countries ,ViewShop}) => {
   
    return (
        <>
        <div className="max-h-screen bg-orange-200 h-auto pb-2">
                <div className="flex justify-center flex-wrap ">
                    {
                        shops.map(function(shop,index){
                            return(
                            <Shop key={shop.shop_id} shop={shop} Countries={Countries} ViewShop={ViewShop}/>
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