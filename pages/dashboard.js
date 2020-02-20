import React from 'react'
import Nav from '../components/nav'
import Router from 'next/router'

export default class Dashboard extends React.Component{
    static async getInitialProps({query}){
        // console.log(query.uid)   *query uid adalah parsing data dari router.push hal Login
        return query
    }
    state = {
        user : {}
    };
    async componentDidMount(){
        const user = await fetch(`https://blog-cb8dc.firebaseio.com/Users/${this.props.uid}.json`);
        this.setState({
            user : await user.json()
        })
        console.log(this.state.user);
    }
    render(){
        // if (this.props.uid !== undefined) {
        //     Router.push('/login')
        // }
        //kegunaan props adalah menacri nilai yang di return di getInitialprops
        //     console.log(this.props.uid)
        const { user } = this.state;
        return(
        <div>
            <Nav title="Dashboard"/>
            <div className="py-5 z-depth-1 elegant-color-dark">
                <section className="text-center px-md-5 mx-md-5 mb-0 mt-4 white-text">
        <h3 className="font-weight-bold mb-4 pb-2">Hallo selamat datang {user.username}</h3>
                    <p className="text-center mx-auto">Email Anda : {user.email}.</p>
                    <hr className="w-25 my-5"/>
                    <button type="button" className="btn btn-indigo btn-rounded" onClick={()=> this.setState(
                        Router.push('/login')
                    )}>Logout</button>
                </section>
            </div>
    

        </div>
        )
    }
}