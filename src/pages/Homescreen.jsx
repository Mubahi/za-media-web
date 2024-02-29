import Nav from "./components/Nav";
import Shop from "./components/Shop";

const Homescreen = ({onDetailedView, shops}) => {
   
    return (
       <div className="min-h-screen bg-orange-200">
            <Nav onDetailedView={onDetailedView}/>
            <div className="container mx-auto flex justify-center flex-wrap mt-5 pb-5">
                {
                    shops.map(function(shop,index){
                        console.log(shop);
                        return(<Shop shop={shop}/>);
                    })
                }
            </div>
       </div>
    );
}
export default Homescreen;