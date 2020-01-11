import React, { useState } from 'react'

const RequestPage = props => {


    const id = props.match.params.id;
    const [modalState, setModalState] = useState({ show: false })

    const showHideClassName = modalState.show ? 'modal display-block' : 'modal display-none';

    // function to show the Proposal modal
    const showProposalModal = () => {
        setModalState({ show: true });
        document.querySelector("body").style.overflow = "hidden";
    }

    // function to hide the Proposal modal
    const hideProposalModal = () => {
        setModalState({ show: false });
        document.querySelector("body").style.overflow = "visible";
    }

    return (
        <div>
            <div id="titlebar" className="photo-bg">
                <div className="container">
                    <div className="ten columns">
                        <h2>Restaurant Team Member - {id}
                            <br />
                            <span className="full-time">Tag</span> <span className="full-time">Tag</span>
                        </h2>
                    </div>

                    <div className="six columns">
                        <button onClick={showProposalModal} className="button white">Make a Proposal</button>
                    </div>

                </div>
            </div>


            <div className="container">

                <div className="eleven columns">
                    <div className="padding-right">

                        <h4 className="section-heading">Request Details</h4>

                        <p className="margin-reset">
                            The Food Service Specialist ensures outstanding customer service is provided to food customers
                            and that all food offerings meet the required stock levels and presentation standards. Beginning
                            your career as a Food Steward will give you a strong foundation in Speedway’s food segment that
                            can make you a vital member of the front line team!
				    	</p>

                        <br />
                        <p>The <strong>Food Service Specialist</strong> will have responsibilities that include:</p>

                        <ul className="list-1">
                            <li>Executing the Food Service program, including preparing and presenting our wonderful food
                                offerings
                                to hungry customers on the go!
						</li>
                            <li>Greeting customers in a friendly manner and suggestive selling and sampling items to help
							increase sales.</li>
                            <li>Keeping our Store food area looking terrific and ready for our valued customers by managing
                                product
							inventory, stocking, cleaning, etc.</li>
                            <li>We’re looking for associates who enjoy interacting with people and working in a fast-paced
							environment!</li>
                        </ul>

                        <br />

                        <h4 className="margin-bottom-10">Job Requirment</h4>

                        <ul className="list-1">
                            <li>Excellent customer service skills, communication skills, and a happy, smiling attitude are
							essential.</li>
                            <li>Must be available to work required shifts including weekends, evenings and holidays.</li>
                            <li>Must be able to perform repeated bending, standing and reaching.</li>
                            <li> Must be able to occasionally lift up to 50 pounds</li>
                        </ul>

                    </div>
                </div>


                <div className="five columns">

                    <div className="widget">
                        <h4>Overview</h4>

                        <div className="job-overview">

                            <ul>
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    <div>
                                        <strong>Student Name:</strong>
                                        <span>John Doe</span>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                    <div>
                                        <strong>Date Posted:</strong>
                                        <span>03-10-2016</span>
                                    </div>
                                </li>
                            </ul>


                            <a href="#" className="popup-with-zoom-anim button">Message Student</a>

                            <div className={showHideClassName}>
                                <section className='modal-main zoom-anim-dialog apply-popup'>
                                    <div className="small-dialog-headline">
                                        <h2>Make a Proposal</h2>
                                    </div>

                                    <div className="small-dialog-content">
                                        <form action="#" method="get">
                                            <input type="text" placeholder="Enter the Payment Amount" />
                                            <div className="divider"></div>
                                            <button className="send">Propose</button>
                                        </form>
                                    </div>
                                    <button onClick={hideProposalModal} title="Close (Esc)" type="button" className="mfp-close"></button>
                                </section>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default RequestPage
