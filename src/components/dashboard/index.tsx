
import Header from "./Header"
import Main from "./Main"


const DashboardComponent = () => {
  return (
    <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
            <Header />
            <Main />
        </div>
    </div>
  )
}

export default DashboardComponent