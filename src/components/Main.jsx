import { TotalSalesWindow } from "./TotalSalesWindow";
import { Graph } from "./Graph";
import { SearchInvoices } from "./SearchInvoices";
import {useState} from 'react';
import { MainDiv, Overlay } from "./Styles";
import {InvoiceFormPortal} from './portals/InvoiceFormPortal';
import { InvoiceForm } from "./InvoiceForm";
import { TotalInvoices } from "./TotalInvoices";



export const Main = () => {
    const [search, setSearch] = useState("");
    const [invoices, setInvoices] = useState([])
    const [opened, setOpen] = useState(false);
    const [datas, setData] = useState({company: "", totalSales: "", total: ""})
    const [info, setInfo] = useState({sales: [], totalSales: []})
    const [datafromfile, setDataFromFile] = useState([])
    return (
    <>
        <h1>Invoice Tracker</h1>
        <MainDiv open={opened ? true : false}>
            <TotalSalesWindow sale={info}/>
            <Graph datas={datafromfile}/>
            <SearchInvoices text={search} set={setSearch}/>
            <TotalInvoices open={setOpen} numberofInvoices={invoices}/> 
            
            {opened ?
                <Overlay>
                    <InvoiceFormPortal>
                        <InvoiceForm setInfo={setInfo} file={datafromfile} fileSet={setDataFromFile} info={info} setData={setData} data={datas} close={setOpen} invoices={invoices} setInvoices={setInvoices} setData2={setDataFromFile} datafrom={datafromfile}/>    
                    </InvoiceFormPortal>
                </Overlay>
            :
            ""
            }  
        </MainDiv>
    </>
    )
}