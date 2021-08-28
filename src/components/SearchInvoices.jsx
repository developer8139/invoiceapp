import { TextField } from "@material-ui/core"
import { SearchContainer, MainContainer } from "./Styles";


export const SearchInvoices = () => {
    return (
        <MainContainer>
            <h2 style={{color: "limegreen", fontSize: "1.9rem"}}>Search for Invoice</h2>
            <SearchContainer>
                <TextField type="text" placeholder="Tap here to search..."/>
            </SearchContainer>
        </MainContainer>
    )
}