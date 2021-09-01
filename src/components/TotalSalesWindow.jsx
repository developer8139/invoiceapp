import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import {useState, useEffect} from 'react';
import { SalesContainer, BarContainer } from "./Styles";


export const TotalSalesWindow = ({sale}) => {
    const [entries, setEntries] = useState({entry1: "", entry2: ""})
    const [datas, setDatas] = useState([]);

    useEffect(function() {
        let sales = 0;
        let total = 0;

        if(sale.sales.length > 0) {
            sales = sale.sales.reduce((prev, curr) => prev + curr);
            total = sale.totalSales.reduce((prev, curr) => prev + curr);
        }
        
        setEntries((prev) => ({
            entry1: prev.entry1 = sales,
            entry2: prev.entry2 = total
        }))
    },[sale]);


    useEffect(function() {
       setDatas([...datas, entries])
    },[entries])
   
    
    return (
        <SalesContainer>
            <h2 style={{color: "limegreen", fontSize: "1.9rem"}}>Sales: <span style={{color: "black", fontWeight: "none"}}>${entries.entry1}</span></h2>
            <p style={{color: "lightgray"}}>Total Sales: <span>${entries.entry2}</span></p>
        
            <BarContainer>
                <BarChart
                    data={datas}
                    width={300}
                    height={150}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 10
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="entry1"/>
                    <YAxis />
                    <Bar dataKey="entry2" fill="#8884d8"/>
                    <Bar />
                </BarChart>
            </BarContainer>
        </SalesContainer>
    )
}