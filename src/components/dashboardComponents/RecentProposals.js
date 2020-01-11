import React from 'react'

function RecentProposals() {
    return (
        <div className="container">

            <div className="eleven columns">


                <table className="manage-table responsive-table">

                    <thead>
                        <tr>
                            <th><i className="fa fa-file-text"></i> Title</th>
                            <th><i className="fa fa-calendar"></i> Request Date</th>
                            <th><i className="fa fa-check-square-o"></i> Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="title"><a href="#">Marketing Coordinator - SEO / SEM Experience</a></td>
                            <td>September 30, 2015</td>
                            <td >Active</td>
                        </tr>
                    </tbody>





                </table>


            </div>

        </div>
    )
}

export default RecentProposals
