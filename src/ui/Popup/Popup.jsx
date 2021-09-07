import React from 'react'

import "./popup.scss"

const Popup = ({ children, visible, setVisible }) => {

    return (
        <div className={`popup ${visible ? ' popup-open' : ''}`} onClick={() => setVisible(false)} >
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup
