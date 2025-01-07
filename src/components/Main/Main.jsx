import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const Main = () => {
  return (
    <div className="bg-gray-500 py-8">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Main