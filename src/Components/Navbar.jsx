import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    // const {user,logOut} = useContext(AuthContext)

//   const handleSignOut = () => {
//     logOut()
//     .then()
//     .catch()
//   }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/art-craft'>Art & Craft Items</NavLink></li>
        <li><NavLink to='/addart'>Add Craft Item</NavLink></li>
        <li><NavLink to='/mylist'>My Art&Craft List</NavLink></li>
        
        
    </>
    return (
        <div className="container mx-auto">
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-outline btn-primary text-xl">Forests To Farms</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
   <div className="navbar-end flex gap-4">
    <Link to='/login'> 
      <button className="btn">Login</button>
    </Link>
    
    <Link to='/register'>
      <button className="btn">Register</button>
    </Link>


  </div> 

</div>
        </div>
    );
};

export default Navbar;