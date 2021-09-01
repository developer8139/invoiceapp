import { FileContentContext } from "./Main";
import {useContext} from 'react';
import Closed from '../assets/close.png';
import {Close} from './Styles';
import styled from 'styled-components';

const ViewContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 20%;
    width: 700px;
    height: 500px;
    box-shadow: 0px 2px 5px black, 0 0 0 100vw rgba(0, 0, 0, 0.4);
    background-color: white;
    border-radius: 10px;
`

export const InvoiceView = ({setOpened}) => {
    const [content] = useContext(FileContentContext)
    

    return (
        <ViewContainer>
            <Close src={Closed} alt="close" onClick={() => setOpened(false)}/>
            <p>{`${content}`}</p>
        </ViewContainer>
    )
}