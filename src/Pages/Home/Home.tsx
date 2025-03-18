import Header from './components/Header'
import Section1 from './components/Section1'



const Home = () => {
  return (
    <div className="relative">
    <div className="fixed w-full z-30">
        <Header />
    </div>
    <div id="heroSection">
       <Section1 />
    </div>
    
</div>
  )
}

export default Home