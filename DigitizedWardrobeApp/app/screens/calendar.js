import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class CalendarScreen extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar!</Text>
        

        <Calendar
          // Initially visible month. Default = Date()
          current={'2012-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          //hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        /> 

        
        <Agenda
          // the list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key kas to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={
            {'2012-05-22': [{text: 'item 1 - any js object'}],
             '2012-05-23': [{text: 'item 2 - any js object'}],
             '2012-05-24': [],
             '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
            }}
          // callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={(month) => {console.log('trigger items loading')}}
          // callback that fires when the calendar is opened or closed
          onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
          // callback that gets called on day press
          onDayPress={(day)=>{console.log('day pressed')}}
          // callback that gets called when day changes while scrolling agenda list
          onDayChange={(day)=>{console.log('day changed')}}
          // initially selected day
          selected={'2012-05-16'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {return (<View />);}}
          // specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={(day, item) => {return (<View />);}}
          // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {return (<View />);}}
          // specify how agenda knob should look like
          renderKnob={() => {return (<View />);}}
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData = {() => {return (<View />);}}
          // specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          // Hide knob button. Default = false
          //hideKnob={true}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            '2012-05-16': {selected: true, marked: true},
            '2012-05-17': {marked: true},
          }}
          // agenda theme
         // agenda container style
          style={{}}
        />
      </View>
    );
  }
}

export default CalendarScreen;
