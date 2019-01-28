import React from 'react'
import ReactDOM from 'react-dom';

const Modal = props =>{
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                IUHIHIWDUQH( i8hwj drf9823r9jdweodi weif 2iouf34qio7 f7q8093oi3cq4mchoqrg er)
            </div>
        </div>, 
        document.querySelector('#modal')
    )
}
export default Modal;