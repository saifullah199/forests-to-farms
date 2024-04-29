import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    const [theme,setTheme]= useState('light')

    useEffect(()=>{
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

  const handleToggle = e => {
    if(e.target.checked){
      setTheme('synthwave')
    }else {
      setTheme('light')
    }
  }
    const navlinks = <>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/'>
              Home
          </NavLink></li>

        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      } to='/art-craft'>
            Art & Craft Items
          </NavLink></li>

        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      } to='/addart'>
             Add Craft Item
          </NavLink></li>

        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      } to='/mylist'>
              My Art&Craft List
          </NavLink></li>
        
        
    </>
    return (
        <div className=" ">
           <div className="navbar bg-base-100 shadow-lg z-10 px-10">
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
   <div className="navbar-end flex gap-2 ">
    
    

{
      user ?
      <div className="flex gap-2">
        
        <Link >
           <img className="w-[50px] rounded-full" 
             title={user?.displayName} src={user?.photoURL} alt="" /> 
        </Link>
        
        
        <button onClick={handleSignOut} className="btn btn-outline btn-secondary"> Sign Out </button>
      </div>
      :
      <div className="flex gap-4">
          <Link to='/login'>
            <button className="btn btn-outline btn-success"> Login</button>
          </Link>
          <Link to='/register'>
            <button className="btn btn-outline btn-success">Register</button>
          </Link>
      </div>
    }

  <div>
    <label className="cursor-pointer grid place-items-center">
      <input 
      onChange={handleToggle} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </label>  
    </div>


  </div> 

</div>
        </div>
    );
};

export default Navbar;