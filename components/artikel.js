import React from 'react'
import Nav from './nav'

export default class Artikel extends React.Component{
    render(){
        return(
        <div>
            <div className="container mt-5">
                <section className="dark-grey-text">

                    <h2 className="text-center font-weight-bold mb-4 pb-2">Recent posts</h2>
                    <p className="text-center mx-auto w-responsive mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

                    <div className="row align-items-center">

                    <div className="col-lg-5">

                        <div className="overlay rounded z-depth-2 mb-lg-0 mb-4">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <a href="#!" className="green-text">
                        <h6 className="font-weight-bold mb-3"><i className="fas fa-utensils pr-2"></i>Food</h6>
                        </a>
                        <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                        placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
                    
                        <p>by <a><strong>Carine Fox</strong></a>, 19/08/2018</p>
                        <a className="btn btn-success btn-md btn-rounded mx-0">Read more</a>

                    </div>

                    </div>

                    <hr className="my-5"/>
                    
                </section>

            </div>
        
        </div>
        )
    }
}