// Material UI
import { Box } from '@mui/material';

// Components
import DataItem from './PaginationComponents/DataItem';

const Body = (props) => {
  const { selectedItem, showSelectedItem, setShowSelectedItem, selectItem, data } = props;

    return (
        <Box className='body'>
            {showSelectedItem
              ?
              // Rendering selected item
              <DataItem value={selectedItem.value} setShowSelectedItem={setShowSelectedItem} />
              :
              // Rendering data list
              <div>
                <div id="App"></div>
                <h3>Data List</h3>
                <ul>
                  { data?.map((item, index) => {
                    return <li key={index} style={{ cursor: 'pointer', paddingTop:'10px'}} onClick={() => selectItem(item)}>{item.value}</li>
                  }) }
                </ul>
              </div>}
        </Box>
    )
}

export default Body