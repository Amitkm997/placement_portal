
import { Link,useNavigate } from "react-router-dom";
function Navbar(){
    const navigate=useNavigate();
    return(
        <>
           <nav className="bg-blue-600 text-white shadow-md">
             <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer">Placement Portal</h1>
                <ul className="flex gap-8 font-medium">
                    <Link to='/' lassName="hover:text-yellow-300 ">Home</Link>
                    <Link to="/company" className="hover:text-yellow-300 ">Companies</Link>
                    <li className="hover:text-yellow-300 ">Students</li>
                    <li className="hover:text-yellow-300 ">AboutUs</li>
                    <li className="hover:text-yellow-300 ">Contact</li>
                </ul>
                <div className="flex gap-4">
                    <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-700">Login</button>
                    <button onClick={()=>navigate('/register')} className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-700">Register</button>
                </div>
             </div>
           </nav>
        </>
    )
    
}

export default Navbar;