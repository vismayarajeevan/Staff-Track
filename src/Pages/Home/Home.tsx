import Footer from './components/Footer'
import Header from './components/Header'
import Section1 from './components/Section1'
import UseCase from './components/UseCase'



const Home = () => {
  return (
    <div className="relative">
    <div className="fixed w-full z-30">
        <Header />
    </div>
    <div id="heroSection">
       <Section1 />
    </div>
    <div id="useCase">
      <UseCase />
    </div>

    <div >
     <Footer />           
    </div>
    
</div>
  )
}

export default Home