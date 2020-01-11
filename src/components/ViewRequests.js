import React from 'react'
import { connect } from 'react-redux'

const ViewRequests = props => {

    // console.log(props)

    const { requests } = props;

    return (
        <div className="container">
            <div className="extra-margin"></div>

            <div className="sixteen columns">
                <div className="padding-right">

                    <form action="#" method="get" className="list-search">
                        <button><i className="fa fa-search"></i></button>
                        <input type="text" placeholder="job title, keywords or company name" />
                        <div className="clearfix"></div>
                    </form>

                    <ul className="job-list full">

                        {requests && requests.map(request => {
                            return (
                                <li key={request.id}><a href="job-page.html">
                                    <div className="job-list-content">
                                        <h4>{request.title}</h4>
                                        <div className="job-icons">
                                            <span className="request-tag">Full-Time</span>
                                        </div>
                                        <p>{request.summary}</p>
                                    </div>
                                </a>
                                    <div className="clearfix"></div>
                                </li>
                            )
                        })}


                    </ul>
                    <div className="clearfix"></div>

                    <div className="pagination-container">
                        <nav className="pagination">
                            <ul>
                                <li><a href="#" className="current-page">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li className="blank">...</li>
                                <li><a href="#">22</a></li>
                            </ul>
                        </nav>

                        <nav className="pagination-next-prev">
                            <ul>
                                <li><a href="#" className="prev">Previous</a></li>
                                <li><a href="#" className="next">Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        requests: state.request.requests,
    }
}

export default connect(mapStateToProps)(ViewRequests);
