import styled from 'styled-components';

export const Overlay = styled.div`
    background-color: lightgray;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    opacity: 0.3;
`


export const Title = styled.h1`
    font-family: sans;

    &:before {
        content: 'Invoice';
        margin-right: 10px;
        width: 50px;
        height: 50px;
    }
`


export const MainDiv = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
background-color: ${props => props.open ? 'lightgray' : 'white'};
height: 80vh;
width: 70vw;
border: 1px dotted lightblue;
border-radius: 10px;
margin: 0 auto;
box-shadow: 0 0 8px lightgray;
`


export const FormContainer = styled.div`
position: absolute;
top: 10%;
left: 17%;
width: 800px;
height: 700px;
box-shadow: 1px 1px 10px 1px black;
background-color: white;
text-align: center;
`


export const Form = styled.form`
position: relative;
top: 100px;
display: flex;
flex-direction: column;
width: 500px;
margin: 0 auto;
`


export const Close = styled.img`
position: absolute;
width: 24px;
height: 24px;
right: 10px;
top: 10px;
cursor: pointer;
`


export const UploadBtn = styled.button`
border-radius: 100%;
padding: 30px;
height: 100px;
cursor: pointer;
background-color: limegreen;
outline: none;
border: none;
text-align: center;
box-shadow: 2px 2px 1px lightgray, 5px 6px 1px inset limegreen, 1px 3px 7px black;
border: 1px solid gray;
margin-top: 50px;
`


export const Container = styled.div`
grid-column-start: 2;
grid-row-start: 2;
transition: box-shadow 0.6s ease;
:hover {
    box-shadow: 4px 4px 4px inset lightgray;
}
`


export const SalesContainer = styled.div`
    transition: box-shadow 0.6s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    :hover {
        box-shadow: 4px 4px 4px inset lightgray;
    }
`

export const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`


export const FileImage = styled.img`
color: white;
`


export const GraphDiv = styled.div`
grid-row-start: 2;
grid-column-start: 1;
transition: box-shadow 0.6s ease;

:hover {
    box-shadow: 4px 4px 4px lightgray;
}
`


export const GraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const SearchContainer = styled.div`
    margin-top: 150px;

`

export const MainContainer = styled.div`
    transition: box-shadow 0.6s ease;
    :hover {
        box-shadow: 4px 4px 4px lightgray;
    }
`


export const Number = styled.p`
    font-weight: bold;
    font-size: 35px;
    color: lightgray;
`