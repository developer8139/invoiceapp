import { TotalSalesWindow } from "./TotalSalesWindow";
import { Graph } from "./Graph";
import { SearchInvoices } from "./SearchInvoices";
import {useState } from 'react';
import { MainDiv, Overlay, Title } from "./Styles";
import {InvoiceFormPortal} from './portals/InvoiceFormPortal';
import { InvoiceForm } from "./InvoiceForm";
import { TotalInvoices } from "./TotalInvoices";
import React from 'react'


export const FileContentContext = React.createContext("")

export const Main = () => {
    const [search, setSearch] = useState("");
    const [invoices, setInvoices] = useState([])
    const [opened, setOpen] = useState(false);
    const [datas, setData] = useState({company: "", totalSales: "", total: ""})
    const [info, setInfo] = useState({sales: [], totalSales: []})
    const [datafromfile, setDataFromFile] = useState([])
    const [content, setContent] = useState('');
    const value = [content];
    return (
    <>
        <Title style={{fontFamily: "sans"}}>Invoice Tracker</Title>
        <MainDiv open={opened ? true : false}>
            <TotalSalesWindow sale={info}/>
            <Graph datas={datafromfile}/>
            <FileContentContext.Provider value={value}>
                <SearchInvoices text={search} set={setSearch}/>
            </FileContentContext.Provider>
            <TotalInvoices open={setOpen} numberofInvoices={invoices}/> 
            {console.log(content)}
            {opened ?
                <Overlay>
                    <InvoiceFormPortal>
                        <InvoiceForm setContent={setContent} setInfo={setInfo} file={datafromfile} fileSet={setDataFromFile} info={info} setData={setData} data={datas} close={setOpen} invoices={invoices} setInvoices={setInvoices} setData2={setDataFromFile} datafrom={datafromfile}/>    
                    </InvoiceFormPortal>
                </Overlay>
            :
            ""
            }  
        </MainDiv>
    </>
    )
}