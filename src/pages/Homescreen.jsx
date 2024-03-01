import Nav from "./components/Nav";
import Shop from "./components/Shop";

const Homescreen = ({onDetailedView, shops,Countries}) => {
   
    return (
       <div className="min-h-screen bg-orange-200">
            <Nav onDetailedView={onDetailedView}/>
            <div className="container mx-auto flex justify-center flex-wrap mt-5 pb-5">
                {
                    shops.map(function(shop,index){
                        return(<Shop key={shop.shop_id} shop={shop} Countries={Countries}/>);
                    })
                }
            </div>
       </div>
    );
}
export default Homescreen;