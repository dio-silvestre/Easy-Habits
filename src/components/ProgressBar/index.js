import React from "react";
import { Bar } from './styles'

const ProgressBar = ({ color, completed }) => {

    return (
        <Bar color={color} completed={completed}>
            <div className='BarInProgress' >
                <span className='Completed'>{completed}</span>
            </div>
        </Bar>
    );
};

export default ProgressBar;