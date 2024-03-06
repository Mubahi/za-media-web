// import ShopCard from "./components/ShopCard";

const Homescreen = ({shops,Countries ,ViewShop}) => {
   
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
                    {/* {
                        shops.map(function(shop,index){
                            return(
                            <ShopCard key={shop.shop_id} shop={shop} Countries={Countries} ViewShop={ViewShop}/>
                            );
                        })
                    } */}
                <div class="text-center">
                    <h1 class="text-8xl font-bold font-serif text-white ">Welcome To  
                        <span className="text-black ml-2">
                            Za:Media
                        </span>
                    </h1>
                </div>
            </div>
       </>
    );
}
export default Homescreen;