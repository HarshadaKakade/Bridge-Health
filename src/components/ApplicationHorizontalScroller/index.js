import React from 'react';
import './index.scss';

export default function ApplicationHorizontalScroller({ children }) {
    return (
        <div className="application-horizontal-scrollbar">
            <div>
                { children }
            </div>
        </div>
    )
}