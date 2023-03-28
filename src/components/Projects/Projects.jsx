import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

import { Link } from 'react-router-dom'

export default class Projects extends Component {
    render() {
        return (
            <>
                <div className='container'>

                    <div className="row">

                        <div className="col-3">

                            <Link to='web'>Web projects</Link> <br />
                            <Link to='mobile'>mobile projects</Link> <br />
                            <Link to='desktop'>desktop projects</Link>

                        </div>

                        <div className="col-9">

                            <Outlet />

                        </div>

                    </div>

                </div>
            </>
        )
    }
}
