import { Outlet } from "react-router-dom"
import { CustomizeHeader, DefaultHeader } from "./headers"
import Footer from "./footer"

export const MainLayout = () => {
    return(
        <>
            <DefaultHeader/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export const AdminLayout = () => {
    return(
        <>
            <CustomizeHeader/>
                <Outlet/>
        </>
    )
}