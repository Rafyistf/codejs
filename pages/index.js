import React, { useState } from 'react'
import Router from 'next/router'
import Nav from '../components/nav'
import Artikel from '../components/artikel'

const proges = () =>{
  let i = 0;
  let normalWidth = 1;
  if (i == 0) {
    i = 1;
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        normalWidth = width + "%";
        console.log(normalWidth);
      }
    }
  }
  return(
    <div className="progress md-progress" style={{height: '5px'}}>
        <div className="progress-bar bg-warning" role="progressbar" style={{width: normalWidth, transition:'all ease 0.5s'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  )
}
export default class Home extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    loading : false
  };
  alret = '';
  Register = async() => {
    this.state.loading = true;
    this.setState({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
    let data = JSON.stringify(this.state);
    await fetch('https://us-central1-blog-cb8dc.cloudfunctions.net/register', {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body : data
    }).then(res=> res.json().then(hasil=>{
      console.log(hasil.pesan);
      this.setState({
        loading : false
      });
        Router.push('/login');
      }));
  }
  render() {
    const { username, password, email } = this.state;
    return (
      <div>
        <Nav title="Home Page" />
        <header>
          <div className="view bh-home">

            <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="row pt-lg-5 mt-lg-5">
                  <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left wow fadeInLeft"
                    data-wow-delay="0.3s">
                    <h1 className="display-4 font-weight-bold animated fadeInLeft fast">Next JS Framework</h1>
                    <hr className="hr-light" />
                    <h6 className="mb-3">Media blog pembelajaran framework <strong>Javascript</strong> terkini. </h6>
                    <a className="btn btn-outline-white btn-rounded">Mulai Baca</a>
                  </div>
                  <div className="col-md-6 col-xl-5 mb-4">
                    {/* <div className="progress md-progress" style={{height: '15px'}}>
                      <div className="progress-bar" role="progressbar" style={{width: nilai+'%', height: '20px'}}  aria-valuemin="0" aria-valuemax="100">{nilai+'%'}</div>
                  </div> */}
                    <div className="rgba-white-strong wow fadeInRight" data-wow-delay="0.3s">
                      <div className="card-body z-depth-2">
                        <div className="text-center">
                          <h3 className="cyan-lighter-hover">
                            <strong>Register</strong>
                          </h3>
                          <hr />
                        </div>
                        <div className="md-form">
                          <i className="fas fa-user prefix cyan-lighter-hover"></i>
                          <input type="text" value={username}
                            onChange={(e) => this.setState({ username: e.target.value })}
                            className="form-control" placeholder={username ? '' : 'Username'} />
                        </div>
                        <div className="md-form">
                        <i className="fas fa-at prefix cyan-lighter-hover"></i>
                          <input type="email" value={email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            className="form-control" placeholder={email ? '' : 'Email'}/>
                        </div>
                        <div className="md-form">
                          <i className="fas fa-key prefix cyan-lighter-hover"></i>
                          <input type="password" value={password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            className="form-control" placeholder={password ? '' : 'Password'}/>
                        </div>

                        <div className="text-center mt-3">
                          <button className="btn btn-indigo btn-rounded" type="button" onClick={() => this.Register()} >Send</button>
                          <hr />
                          {this.state.loading ? <div className="d-flex align-items-center indigo-text">
                            <strong>Tunggu sebentar....</strong>
                            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                          </div> : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </header>
        <Artikel />
        {/* <img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" className="animated bounce infinite" alt="Transparent MDB Logo" id="animated-img1"></img> */}
      </div>
    )
  }
}

// const Home = () => (
//   <div>
//     <Head>
//       <title>Home</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <Nav />

//     <div className="hero">
//       <h1 className="title">Welcome to Next.js!</h1>
//       <p className="description">
//         To get started, edit <code>pages/index.js</code> and save to reload.
//       </p>

//       <div className="row">
//         <a href="https://nextjs.org/docs" className="card">
//           <h3>Documentation &rarr;</h3>
//           <p>Learn more about Next.js in the documentation.</p>
//         </a>
//         <a href="https://nextjs.org/learn" className="card">
//           <h3>Next.js Learn &rarr;</h3>
//           <p>Learn about Next.js by following an interactive tutorial!</p>
//         </a>
//         <a
//           href="https://github.com/zeit/next.js/tree/master/examples"
//           className="card"
//         >
//           <h3>Examples &rarr;</h3>
//           <p>Find other example boilerplates on the Next.js GitHub.</p>
//         </a>
//       </div>
//     </div>

//     <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9b9b9b;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//     `}</style>
//   </div>
// )

// export default Home
