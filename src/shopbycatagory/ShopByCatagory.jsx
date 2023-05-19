import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCatagory = () => {
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center'>Shop By Catagory</h1>
            <div>
            <Tabs>
    <TabList>
      <Tab>Car</Tab>
      <Tab>Truck</Tab>
      <Tab>Bus</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>

            </div>
        </div>
    );
};

export default ShopByCatagory;