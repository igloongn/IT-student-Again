import React from 'react'
import MyTicker from '../widgets/ticker'

const LowerCell = () => {
    return (
        <div className="main_cards">
            <div className="card"><MyTicker /></div>
            <div className="card">Card</div>
            <div className="card">Card</div>
        </div>
    )
}

export default LowerCell
