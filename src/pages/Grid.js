import React from 'react'
import './Grid.css'
const Grid = () => {
    return (
        <div>
            <h1>Grid Layout</h1>

            <p>This grid layout contains six columns and three rows:</p>

            <div class="grid-container">
                <div class="item1">Header</div>
                <div class="item2">Menu</div>
                <div class="item3">Main</div>
                <div class="item4">Right</div>
                <div class="item5">Footer</div>
            </div>
        </div>
    )
}

export default Grid
