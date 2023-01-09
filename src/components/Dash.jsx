import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MainDashboard } from './MainDashboard';
import { Footer } from './Footer';
import { DetailCard } from './DetailCard';


function Dash() {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="flex-grow-1">

                    {/* <!-- Main Content --> */}
                    <div id="content" className="content flex-grow-1">
                        <Topbar />

                        {/* <!-- Begin Page Content --> */}
                        <MainDashboard />

                        {/* <!-- Footer --> */}
                        <Footer />

                    </div>
                    {/* <!-- End of Content Wrapper --> */}
                </div>
            </div>
            {/* <!-- End of Page Wrapper --> */}
        </div>

    );
}

export default Dash;