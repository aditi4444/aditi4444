// Material UI
import { Button } from "@mui/material";

const DataItem = (props) => {
    const { value, setShowSelectedItem } = props;
    return (
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <p>{value}</p>
            <Button variant='contained' onClick={()=> setShowSelectedItem(false)}>Go Back</Button>
        </div>
              
    )
}
export default DataItem