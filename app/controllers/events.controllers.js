module.exports = {

    //show all events
    showEvents: (req, res) => {

        //create dummy data
        const events =[
            { name: 'aneksh', slug: 'basketball', description: 'aasd1fa assdf adf asd' },
            { name: 'rahul', slug: 'cricket', description: 'aas2dasdfa assdf adf asd' },
            { name: 'atharva', slug: 'chess', description: 'aasdf3fa assdf adf asd' }
        ];

        //retrive view with data
        res.render('pages/events', { evnt: events });
    },

    //show a single event
    showSingle: (req, res) => {
        //get a single event
        const event = { name: 'adf', slug: 'basketball', description: 'aasd1fa assdf adf asd' };
        res.render('pages/single', { event: event });
    },

    myTest: (req, res) =>{
        const info = { name: 'ankesh', slug: 'ankesh', description: 'web developer' };
        const info1 = { name: 'ankesh1', slug: 'ankesh1', description: 'web developer1' };
        res.render('pages/aag', { info: info, info1: info1 });
    }
};
