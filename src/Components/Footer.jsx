// Material UI
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#628655',
      contrastText: '#000',
    },
  },
});
const Footer = (props) => {
    const { changeHeaderColor, showSelectedItem, selectedItem, data, changePagination, loadData } = props;
  
    return (
        <ThemeProvider theme={theme}>
            <Box className='footer'>
                {
                  showSelectedItem
                  ?
                  <>
                    { selectedItem.id <= 1 ? <div></div> : <ArrowBackIcon onClick={() => changePagination('back')}/>}
                    <h4>Showing {selectedItem.id} of {data.length} results </h4>
                    { selectedItem.id === data.length ? <div></div> : <ArrowForwardIcon onClick={() => changePagination('forward')} />}
                  </>
                  :
                  <>
                    <Button color='neutral' variant='contained' onClick={loadData}>Start Loading</Button>
                    <Button color='neutral' variant='contained' onClick={changeHeaderColor}>Change Header Color</Button>
                  </>
                }
            </Box>
        </ThemeProvider>
    )
}

export default Footer