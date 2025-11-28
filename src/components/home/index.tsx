import HomeHeader from "./HomeHeader"
import HomeMain from "./HomeMain"
import MiddleSection from "./MiddleSection"


const HomeCollection = () => {
  return (
    <div className="min-h-screen bg-background">
        <HomeHeader />
        <MiddleSection />
        <HomeMain />
    </div>
  )
}

export default HomeCollection