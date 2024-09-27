





import MainHeader from './components/MainHeader'
import BannerSection from './components/BannerSection'
import AboutSection from './components/AboutSection';
import PopularServicesSection from './components/PopularServicesSection';
import OtherServicesSection from "./components/OtherServicesSection";
import MainFooter from './components/MainFooter';

function App() {
 
  return (
    <main className="w-full relative">
      <MainHeader />
      <BannerSection/>
      <AboutSection/>
      <PopularServicesSection/>
      <OtherServicesSection/>
     <MainFooter/>
    </main>
  )
}

export default App
