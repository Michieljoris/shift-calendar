$(document).ready(function() {

    // page is now ready, initialize the calendar...

    // $('#calendar').fullCalendar({
    //     // put your options and callbacks here
    //     dayClick: function() {
    //         alert('a day has been clicked!');
    //     }
    // });
    
    $('#calendar').fullCalendar({
        // events:  'https://www.google.com/calendar/feeds/234r2adboi1rl56207iulc9jp4%40group.calendar.google.com/public/basic'
        events: function(start, end, timezone, callback) {
            console.log(start, end, timezone);
            var events = [
                {
                    title  : 'event1',
                    start  : '2014-03-01'
                },
                {
                    title  : 'event2',
                    start  : '2014-03-05',
                    end    : '2014-03-07'
                },
                {
                    title  : 'event3',
                    start  : '2014-03-09 12:30:00',
                    end  : '2014-03-09 18:30:00',
                    allDay : false // will make the time show
                }
                ,{
                    title  : 'event4',
                    start  : '2014-03-09 12:30:00',
                    end  : '2014-03-09 18:30:00',
                    allDay : false // will make the time show
                }
                ,{
                    title  : 'Public holiday',
                    startEditable: false,
                    durationEditable:false,
                    backgroundColor: 'green',
                    start  : '2014-03-09 00:00:00',
                    end  : '2014-03-10 00:00:00',
                    allDay : false // will make the time show
                }
            ];
            callback(events);
            }
            ,firstDay: 6
            ,weekMode: 'liquid'
            ,weekNumbers: true
            ,defaultView: 'agendaWeek'
            ,header: {
                left:   'title',
                center: 'agendaDay,agendaWeek,month',
                right:  'today prev,next'
            }
            // ,allDaySlot: false
            ,slotDuration: '00:30:00'
            // ,snapDuration: '00:15:00'
            ,scrollTime: '06:00:00' //how far to scroll down the pane initially
            ,slotEventOverlap: true //Determines if timed events in agenda view should visually overlap
            ,timeFormat: 'h(:mm)a'
            // ,columnFormat: 'ddd d/M' //not working
            ,selectable: true
            ,selectHelper: true
            // ,unselectCancel: '.my-form'
            ,editable: true
            ,eventDrop: function( event, revertFunc, ui, view ) {
                console.log('event drop', event);
            }
            ,eventResize: function( event, jsEvent, ui, view ) {
                console.log('event resize', event);
            }
            ,select: function( start, end, jsEvent, view ) {
                console.log('selection is made', start, end);
            }
        
            ,dayClick: function(date, jsEvent, view) {

                console.log('Clicked on: ' + date.format());

                console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                console.log('Current view: ' + view.name);

                // change the day's background color just for fun
                // $(this).css('background-color', 'red');

            }
            ,eventClick: function(calEvent, jsEvent, view) {

                console.log('Event: ' , calEvent);
                console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                console.log('View: ' + view.name);

                // change the border color just for fun
                // $(this).css('border-color', 'red');
                return false;

            }
            // ,eventMouseover: function(event, jsEvent, view) {
            //     console.log(event.title);
            // }
            // ,eventMouseout: function(event, jsEvent, view) {
            //     console.log(event.title);
            // }
        });

});

