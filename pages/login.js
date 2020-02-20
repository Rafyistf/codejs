import React, { useState } from 'react'
import Nav from '../components/nav'
import Router from 'next/router'

const login = () => {
    const [username, setName ] = useState('');
    const [password, setPass]  = useState('');
    const [loading , setLoad] = useState(false);
    const Login = async() =>{
      setLoad(true);
      await fetch('https://us-central1-blog-cb8dc.cloudfunctions.net/login',{
          method : 'PUT',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify({username, password})
      }).then(res => res.status == 200 ? res.json().then(snap=>{
        setLoad(false);
        // console.log(snap)
          Router.push({
              pathname : '/dashboard',
              query : {uid : snap.id}
          })
      }) ? res.status == 201 : res.json().then(snapPass => {
            setLoad(false);
            alert(snapPass.pesan)
      }) : res.json().then(snap =>{
            setLoad(false);
            alert(snap.pesan)
    }))
    }
    return (
        <div>
            <Nav title="Login Page"/>
            <div className="bg-dark flex-center py-5" style={{minHeight : '150px'}}>
                <h3 className="font-weight-normal text-center yellow-text mt-3 pb-2 display-4"><strong>JS</strong></h3>
            </div>
        
                <div className="container my-5">
                    <section>
                        <h3 className="font-weight-normal text-center dark-grey-text pb-2 display-4"><strong>30 Hari Masa Percobaan</strong></h3>
                        <hr className="w-header my-2"/>
                        <div className="col-md-5 mx-auto">
                    {loading ? <div className="d-flex align-items-center yellow-ic">
                                <strong>Autentikasi User...</strong>
                                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                            </div> : <p className="lead text-center text-muted pt-2 mb-3">Login Member</p> }
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label id="form2">Username</label>
                                    <input type="text" value={username} onChange={e=> setName(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label id="form3">Password</label>
                                    <input type="password" value={password} onChange={e=> setPass(e.target.value)} className=" form-control"/>
                                </div>
                                    <button className="btn btn-block btn-warning" type="button" onClick={Login}>Sign up</button>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
        )
}
export default login