import { UploadInvoice } from './UploadInvoice';
import {Container} from './Styles';


export const TotalInvoices = ({open, numberofInvoices}) => {
    console.log(numberofInvoices)
    return (
        <Container>
            <UploadInvoice open={open}/>
            <h1>Total Invoices</h1>
            <p>{numberofInvoices.length}</p>
        </Container>
    )
}