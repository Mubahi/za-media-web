import ShopCard from "./components/ShopCard";

const Homescreen = ({shops,Countries ,ViewShop}) => {
   
    return (
        <>
        <div className="max-h-screen bg-orange-200 ">
                <div className="flex justify-center items-center flex-wrap pt-16 pb-20">
                    {
                        shops.map(function(shop,index){
                            return(
                            <ShopCard key={shop.shop_id} shop={shop} Countries={Countries} ViewShop={ViewShop}/>
                            );
                        })
                    }
                </div>
        </div>
       </>
    );
}
export default Homescreen;