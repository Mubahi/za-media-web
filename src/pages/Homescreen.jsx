import Nav from "./components/Nav";
import Shop from "./components/Shop";

const Homescreen = () => {
   
    return (
       <div className="min-h-screen bg-orange-200">
            <Nav/>
            <div className="container mx-auto flex justify-center flex-wrap mt-5 pb-5">
                {/* Card 1 */}
                <Shop />
                {/* Card 2 */}
                <Shop/>
                {/* Card 3 */}
                <Shop/>
                {/* Card 4 */}
                <Shop/>
                {/* Card 5 */}
                <Shop/>
                {/* Card 6 */}
                <Shop/>
                {/* Card 7 */}
                <Shop/>
                {/* Card 8 */}
                <Shop/>
                {/* Card 9 */}
                <Shop/>
                {/* Card 10 */}
                <Shop/>
                {/* Card 11 */}
                <Shop/>
                {/* Card 12 */}
                <Shop/>
            </div>
       </div>
    );
}
export default Homescreen;