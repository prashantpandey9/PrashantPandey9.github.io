import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return (
        <div className="container">
            <div className="row bg-blur">
                <div className="col-md-12 col-12 col-12 text-end font-code f-xs p-5">
                    <span className="px-3">
                        <Link to="/">
                            <span className="highlight">03.</span>
                            Home
                        </Link>
                    </span>
                    <span className="px-3">
                        <Link to="/">
                            <span className="highlight">03.</span>
                            Home
                        </Link>
                    </span>
                    <span className="px-3">
                        <Link to="/">
                            <span className="highlight">03.</span>
                            Home
                        </Link>
                    </span>
                    <span className="px-3">
                        <Link to="/">
                            <span className="highlight">03.</span>
                            Home
                        </Link>
                    </span>
                </div>
            </div>  
            
        </div>
    )
}
