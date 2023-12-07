import CorporateServiceDetails from "@/features/CorporateServiceDetails/CorporateServiceDetails"
import Accordions from "@/features/accordion/Accordion"
import Banner from "@/features/banner/Banner"
import Footer from "@/features/common/footer/Footer"
import Header from "@/features/common/header/Header"

const Home=()=>{
    return(
        <div>
        <Header/>
        <Banner/>
        <CorporateServiceDetails/>
        <Accordions/>
        <Footer/>
        </div>
    )
}
export default Home