//$( document ).ready(function() {

    // calender
    var events = [
        {'Date': new Date(2018, 3, 8), 'Title 1': 'test.'},
        {'Date': new Date(2018, 3, 22), 'Title 1': 'tassdadasest.'}
    ];

    var settings = {
        // Color: '',
        // LinkColor: '#da0043',
        // NavShow: true,
        // NavVertical: false,
        // NavLocation: '',
        // DateTimeShow: true,
        // DateTimeFormat: 'mmm, yyyy',
        // DatetimeLocation: '',
        // EventClick: '',
        // EventTargetWholeDay: false,
        // DisabledDays: []
        // //ModelChange: model
    };

    var element = document.getElementById('eventCalender');
    caleandar(element, events, settings);


//});