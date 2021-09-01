import { Button } from "@material-ui/core"
import { InvoiceView } from "./InvoiceView";
import { ViewInvoicePortal } from "./portals/ViewInvoicePortal";
import { MainContainer } from "./Styles";
import {useState} from 'react';



export const SearchInvoices = () => {
    const [opened, setOpened] = useState(false)
    
    return (
        <MainContainer>
            <h2 style={{color: "limegreen", fontSize: "1.9rem"}}>View Invoice</h2>
            <Button onClick={() => setOpened(true)} variant="contained" color="primary">View Invoice</Button>
            { opened ?

            <ViewInvoicePortal>
                <InvoiceView setOpened={setOpened}/>
            </ViewInvoicePortal>

            :
            ""
            }
        </MainContainer>
    )
}