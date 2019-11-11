import React from 'react';
import MultiSelect from './components/MultiSelect';
import SingleSelect from './components/SingleSelect';
import InfiniteCalender from './components/InfiniteCalender';
import { RangePicker, DatePicker } from './components/DateRange';

const styles = {
  display: 'block',
  minWidth: '500px',
  margin: '50px auto',
}

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={styles}><SingleSelect/></div>
      <div style={styles}><MultiSelect/></div>
      <div style={styles}><InfiniteCalender/></div>
      <div style={styles}><RangePicker/></div>
      <div style={styles}><DatePicker/></div>
      
      
      
    </div>
  );
}

export default App;
