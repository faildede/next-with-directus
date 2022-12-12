import AllUser from "../components/SecondPage/AllUser";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Candidate() {
    return ( 
        <div>
            <Header />
                <div className="container mx-auto flex">
                <AllUser />
                </div>
            <Footer/>
        </div>
     );
}

export default Candidate;