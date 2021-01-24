import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//history available to this component because we wrapped it with withRouter
//we didn't access this like other props through drilling
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return(
        <div className={`menu-item ${size ? size : ''}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{background: `url(${imageUrl})`}} />
            <div className='content'>
                <h2 className='title'>
                    {title}
                </h2>
                <span className='subtitle'>
                    Shop Now
                </span>
            </div>
        </div>
    )
}

//withRouter is a higher order component, this means we basically use it to 
//wrap other components, and it returns us back a 'powered up' version of the component
//in this case, we are wrapping MenuItem to give it some extra juice (access to history object)
export default withRouter(MenuItem);
