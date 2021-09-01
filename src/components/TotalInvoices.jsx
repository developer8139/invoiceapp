import { UploadInvoice } from './UploadInvoice';
import {Container, Number} from './Styles';



export const TotalInvoices = ({open, numberofInvoices}) => {
    
    return (
        <Container>
            <UploadInvoice open={open}/>
            <h1 style={{fontFamily: "fantasy"}}>Total Invoices</h1>
            <Number>{numberofInvoices.length}</Number>
        </Container>
    )
}