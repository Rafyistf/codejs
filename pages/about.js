import React from 'react'
import Nav from '../components/nav'

const About = () =>{
    return(
      <div>
          <Nav title="About"/>
          <div className=" elegant-color-dark flex-center" style={{height : '200px'}}>
            <h3 className="font-weight-bold text-center white-text pb-2">Pelajari Coding By Step</h3>

          </div>
          <div className="container z-depth-1 my-2 pt-5 pb-3 px-5">
            <section>

                <hr className="w-header my-4"/>
                <div className="row align-items-center">
                <div className="col-lg-6 mb-4">
                    <div className="z-depth-1-half rounded">
                    <img className="rounded img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg" alt="Video title"/>
                   
                    </div>
                </div>

                <div className="col-lg-6 mb-4">

                    <ol className="step pl-0">
                    <li className="step-element pb-0">
                        <div className="step-number">
                        <span className="number elegant-color-dark">1</span>
                        </div>
                        <div className="step-excerpt">
                        <h6 className="font-weight-bold dark-grey-text mb-3">Baca Documentasi</h6>
                        <p className="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
                        </div>
                    </li>
                    <li className="step-element pb-0">
                        <div className="step-number">
                        <span className="number elegant-color-dark">2</span>
                        </div>
                        <div className="step-excerpt">
                        <h6 className="font-weight-bold dark-grey-text mb-3">Lihat Vidio Tutorial</h6>
                        <p className="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
                        </div>
                    </li>
                    <li className="step-element pb-0">
                        <div className="step-number">
                        <span className="number elegant-color-dark">3</span>
                        </div>
                        <div className="step-excerpt">
                        <h6 className="font-weight-bold dark-grey-text mb-3">Implementasikan Langsung</h6>
                        <p className="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
                        </div>
                    </li>
                    </ol>

                </div>

                </div>
                
            </section>
            <style jsx>{`
                .fa-play:before {
                    margin-left: .3rem;
                }

                /* Steps */
                .step {
                    list-style: none;
                    margin: 0;
                }

                .step-element {
                    display: flex;
                    padding: 1rem 0;
                }

                .step-number {
                    position: relative;
                    width: 7rem;
                    flex-shrink: 0;
                    text-align: center;
                }

                .step-number .number {
                    color: #bfc5ca;
                    background-color: #eaeff4;
                    font-size: 1.5rem;
                }

                .step-number .number {
                    width: 48px;
                    height: 48px;
                    line-height: 48px;
                }

                .number {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 38px;
                    border-radius: 10rem;
                }

                .step-number::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 48px;
                    bottom: -2rem;
                    margin-left: -1px;
                    border-left: 2px dashed #eaeff4;
                }

                .step .step-element:last-child .step-number::before {
                    bottom: 1rem;
                }
                `}</style>

            </div>
    
      </div>
    )
}
export default About