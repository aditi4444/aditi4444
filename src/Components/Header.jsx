// Material UI
import { Box } from '@mui/material';

const Header = (props) => {
    const { headerColor } = props;
    
    return (
        <Box className='header' style={{backgroundColor: headerColor}}>
            <p style={{ paddingLeft: '5px', fontWeight: 'bold'}}>Welcome</p>
        </Box>
    )
}

export default Header