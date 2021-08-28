import {createPortal} from 'react-dom';


export const InvoiceFormPortal = ({children}) => {
    return createPortal(
        children,
        document.getElementById("invoice")
    )
}