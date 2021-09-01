import ReactDOM from 'react-dom';


export const ViewInvoicePortal = ({children}) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById("view")
    )
}