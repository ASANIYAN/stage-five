import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import HowItWorks from "../../components/works/how-it-works";

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <div className='h-[50px] bg-color5 w-full'></div>
                <Features />
                <div className='h-[50px] bg-color5 w-full'></div>
                <HowItWorks />
                <Footer />
            </main>
        </>
    );
}
 
export default Home;