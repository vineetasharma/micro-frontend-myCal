/**
 * Created by ttn on 30/04/17.
 */

const sampleEvents = Object.freeze([
    { phone: '982-790-2592', date: new Date, source: 'Facebook', eventName: 'Something@facebook', organisedBy: 'Gaurav', city: 'Delhi', venue: 'Facebook HQ', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.' },
    { phone: '982-790-2592', date: new Date, source: 'Twitter', eventName: 'Something@twitter', organisedBy: 'Vibhor', city: 'Noida', venue: 'TTN',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  },
    { phone: '982-790-2592', date: new Date, source: 'Meetup', eventName: 'Something@meetup', organisedBy: 'Vineeta', city: 'Gurgaon', venue: 'Google HQ',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  },
    { phone: '982-790-2592', date: new Date, source: 'Facebook', eventName: 'awesomework@facebook', organisedBy: 'Sourabh', city: 'Banglore', venue: 'IBM HQ',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  }
]);

export default function (state = null) {
    return sampleEvents;
}