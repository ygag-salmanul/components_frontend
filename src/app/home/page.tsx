import Accordions from "@/features/mWeb/accordion/Accordion"
import Banner from "@/features/mWeb/banner/Banner"
import CorporateService from "@/features/mWeb/corporateService/CorporateService"
import Footer from "@/features/mWeb/footer/Footer"
import Header from "@/features/mWeb/header/Header"

const Home=()=>{
    return(
        <>
        <Header/>
        <Banner/>
        <CorporateService/>
        <Accordions/>
        <Footer/>
        </>
    )
}
export default Home