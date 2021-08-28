import image from '../assets/file.png';
import { UploadBtn, FileImage } from './Styles';


export const UploadInvoice = ({open}) => {
    return (
        <>
            <UploadBtn onClick={() => open(true)}>
                <FileImage src={image} alt="file-upload"/>
            </UploadBtn>
        </>
    )
}