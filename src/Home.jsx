import './App.css';

// Hooks
import { useState, useEffect } from 'react';

// Components
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

// Constants
import dummyData from './Constants/dummyData';

const Home = () => {
  const [headerColor, setHeaderColor] = useState('#CFE1F3');
  const [selectedItem, setSelectedItem] = useState();
  const [showSelectedItem, setShowSelectedItem] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
      fetch('https://api.chucknorris.io/jokes/random')
         .then((response) => response.json())
         .then((data) => {
            console.log('data loading......',data);
            setData(dummyData);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);


  const selectItem = (item) => {
    console.log('One item selected.....');
    setSelectedItem(item);
    setShowSelectedItem(true);
   }

  const changeHeaderColor = () => {
    if(headerColor === '#CFE1F3') setHeaderColor('#FFF');
    else{ setHeaderColor('#CFE1F3')};
  }

  const changePagination = (direction) => {
    const selectedItemIndex = data.indexOf(selectedItem);
    console.log(selectedItemIndex, '???????????ß');

    // Updating the value of item selected
    const newItemBack = data.at(selectedItemIndex - 1);
    const newItemForward = data.at(selectedItemIndex + 1);

    if(direction === 'back') setSelectedItem(newItemBack);
    if(direction === 'forward') setSelectedItem(newItemForward);
  }

  return (
      <div className='parent'>
        <Header headerColor={headerColor} />
        <Body selectedItem={selectedItem} showSelectedItem={showSelectedItem} setShowSelectedItem={setShowSelectedItem} selectItem={selectItem} data={data} />
        <Footer selectedItem={selectedItem} showSelectedItem={showSelectedItem} changeHeaderColor={changeHeaderColor} data={data} changePagination={changePagination} />
      </div>
    );
}

export default Home;
