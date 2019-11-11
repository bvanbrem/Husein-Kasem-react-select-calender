import React from 'react';
import InfiniteCalendar, {withRange, Calendar} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet


const InfiniteCalender = () => {
    // Render the Calendar

    const handleSelect = data => {
        console.log(data);
      };

    return (
        <InfiniteCalendar
            width={400}
            height={600}
            disabledDays={[0,6]}
            Component={withRange(Calendar)}
            selected={{
                start: new Date(2019, 11, 13),
                end: new Date(2019, 11, 28)
            }}
            onSelect={handleSelect}
        />
    )
}

export default InfiniteCalender
