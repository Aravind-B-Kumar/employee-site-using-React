import React from 'react'

const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-success">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Employee</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/jobs">Jobs</a>
                            <a class="nav-link" href="/search">Search</a>
                            <a class="nav-link" href="/register">Register</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar