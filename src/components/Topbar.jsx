import React from 'react'

export const Topbar = () => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul class="navbar-nav ml-auto">

                {/* <!-- Nav Item - Alerts --> */}
                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i class="fas fa-bell fa-fw"></i>
                        {/* <!-- Counter - Alerts --> */}
                        <span class="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Messages --> */}
                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i class="fas fa-envelope fa-fw"></i>
                        {/* <!-- Counter - Messages --> */}
                        <span class="badge badge-danger badge-counter">7</span>
                    </a>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                        <img class="img-profile rounded-circle" src={avatarDummy} width="60" />
                    </a>
                </li>

            </ul>

        </nav>
    )
}