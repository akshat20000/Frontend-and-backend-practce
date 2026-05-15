import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>

    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>,
        loader:fun

    }
])

function fun()
{
    console.log("Function called");
    
    return "Hi from function";

}
function AppTest(){


    return (

        <>
        
        <RouterProvider router={routes}/>

        
        </>
    )


}
export default AppTest;
