import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import {useEffect} from 'react';
import Xmark from '../assets/close.png';
import { FormContainer, Form, Close } from "./Styles";




export const InvoiceForm = ({setData, data, close, invoices, setInfo, fileSet, file, setInvoices}) => {

    const getInvoiceData = (e) => {
        const {value, name} = e.target;

        setData(() => ({
            ...data,
            [name]: value
        }))


    }

    const handleSubmission = (e) => {
        e.preventDefault();
        
        setInfo((prev) => ({
            totalSales: [...prev.totalSales, parseInt(data.totalSales)],
            sales: [...prev.sales, parseInt(data.total)]
        }))

        fileSet([...file, {name: data.company, amount: parseInt(data.total)}])

        setInvoices([...invoices, data])

        

        setData(data)

        close(false)
    }

    const handleFileUpload = (e) => {
       console.log(e.target.files[0])
    }


    useEffect(function() {
        let store = window.localStorage;

        store.setItem('invoice', invoices.image);

    }, [invoices.image])


    return (
        <FormContainer>
            <Close onClick={() => close(false)} src={Xmark} alt="close"/>
            <h1>Enter In Invoice</h1>
        
            <Form onSubmit={handleSubmission}>
                <TextField id="input" type="text" name="total" placeholder="Enter sales amount..." value={data.total} onChange={getInvoiceData}/>
                <TextField id="input" type="text" name="totalSales" placeholder="Enter total amount..." value={data.totalSales} onChange={getInvoiceData}/>
                <TextField id="input" type="text" name="company" placeholder="Enter company name..." value={data.company} onChange={getInvoiceData}/>
                    <p>Or Upload:</p>
                <TextField type="file" onChange={handleFileUpload}/>
                <Button type="submit" variant="contained" color="primary">Submit Invoice</Button>
            </Form>
        </FormContainer>
    )
}