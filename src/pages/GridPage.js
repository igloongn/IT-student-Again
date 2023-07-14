import React, { useEffect } from 'react'
import Footer from '../components/default/footer'
import Header from '../components/default/header'
import DrawerCell from '../components/cells/drawer'
import UpperCell from '../components/cells/upper'
import LowerCell from '../components/cells/lower'

const GridPage = () => {

    return (
        <div>

            <div className="grid-container">
                <div className="menu-icon">
                    <strong> &#9776;</strong>
                </div>
                <Header />
                <aside className="aside">
                    <div className="aside_close-icon">
                        <strong>&times;</strong>
                    </div>
                    <center
                        style={{ marginTop: '20px', fontSize: '30px' }}
                    >
                        Hello Boss
                    </center>
                    {/* Drawer */}
                    <DrawerCell />
                </aside>
                <main className="main">
                    {/* Upper Cards */}
                    <UpperCell />
                    {/* The Ticker Widget */}
                    <center style={{fontSize: '50px'}}>Ticker Widget</center>
                    <br /><br /><br /><br />
                    
                    {/* Lower Cards */}
                    <LowerCell />
                </main>
                <Footer />
            </div>

        </div>
    )
}

export default GridPage
