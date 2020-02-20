import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
// const togleSet = (show)=>{
//   this.state.set
// }
const Admin = () =>{
  const router = useRouter();
  return (
    <ul className="navbar-nav ml-auto">
      <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
          <Link href="/">
            <a className="nav-link">Dasboard </a>
          </Link>
      </li>
      {/* <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
        <Link href="/">
            <a className="nav-link">About</a>
        </Link>
      </li> */}
      <li className={router.pathname == "/login" ? "nav-item active" : "nav-item"}>
        <Link href="/login">
            <a className="nav-link">Logout</a>
        </Link>
      </li>
    </ul>
  
  )
}
const Menu = () =>{
  const router = useRouter();
  return (
    <ul className="navbar-nav ml-auto">
      <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
          <Link href="/">
            <a className="nav-link">Home </a>
          </Link>
      </li>
      <li className={router.pathname == "/about" ? "nav-item active" : "nav-item"}>
        <Link href="/about">
            <a className="nav-link">About</a>
        </Link>
      </li>
      <li className={router.pathname == "/login" ? "nav-item active" : "nav-item"}>
        <Link href="/login">
            <a className="nav-link">Login</a>
        </Link>
      </li>
    </ul>
  
  )
}
class Navigation extends React.Component {
 
    state = {
      togle : false,
      user : {
        jab : 'member'
      }
    };
  render(){
    let renderNavbar;
    if(this.state.user.jab == 'admin'){
      renderNavbar = <Admin/>
    }else if(this.state.user.jab == 'member'){
      renderNavbar = <Menu/>
    }
    
    const {togle} = this.state;
    let className = 'elegant-color-dark py-5 position-absolute custom-menu';
    let togleMenu = 'fas fa-align-center';
    if (togle) {
      className += ' sidebar-show';
      togleMenu += ' text-warning';
    }
    return(
      
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <strong>LASTCODE</strong>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" onClick={()=> this.setState({togle : !this.state.togle})}
               aria-label="Toggle navigation">
              <i className={togleMenu}></i>
            </button>
            <div className="collapse navbar-collapse">
              {renderNavbar}
              <form className="form-inline ml-3">
                <div className=" my-0 border-bottom">
                  <input className="bg-transparent border-0 mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <i className="fas fa-search white-text"></i>

                </div>
              </form>
            </div>
          </div>
          <div className={className}>
            <div className="my-4 p-3">
              <Menu/>
            </div>
          </div>
        </nav>
        
    )
  }
}
export default  Navigation