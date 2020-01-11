import React from 'react'

function RecentRequests() {
    return (
        <div className="container">

            <div className="eleven columns">


                <table className="manage-table responsive-table">
                    <thead>
                        <tr>
                            <th><i className="fa fa-file-text"></i> Title</th>
                            <th><i className="fa fa-calendar"></i> Date Posted</th>
                            <th><i className="fa fa-user"></i> Proposals</th>
                            <th><i className="fa fa-check-square-o"></i> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="title"><a href="#">Marketing Coordinator - SEO / SEM Experience</a></td>
                            <td>September 30, 2015</td>
                            <td className="centered"><a href="manage-applications.html" className="button">Show (4)</a></td>
                            <td >Active</td>

                        </tr>
                    </tbody>




                </table>

            </div>

        </div>
    )
}

export default RecentRequests
