import Nav from "./components/Nav";
import Part1 from "./components/Tab1";

const Homescreen = () => {
    return (
       <div className="min-h-screen bg-blue-200">
            <Nav/>
            <div class="container mx-auto flex justify-center flex-wrap mt-5">
                {/* Card 1 */}
                <Part1/>
                {/* Card 2 */}
                <Part1/>
                {/* Card 3 */}
                <Part1/>
                {/* Card 4 */}
                <Part1/>
                {/* Card 5 */}
                <Part1/>
                {/* Card 6 */}
                <Part1/>
                
            </div>
            <div class="container mx-auto flex justify-center flex-wrap mt-5">
                {/* Card 1 */}
                <Part1/>
                {/* Card 2 */}
                <Part1/>
                {/* Card 3 */}
                <Part1/>
                {/* Card 4 */}
                <Part1/>
                {/* Card 5 */}
                <Part1/>
                {/* Card 6 */}
                <Part1/>
                
            </div>
       </div>
    );
}
export default Homescreen;