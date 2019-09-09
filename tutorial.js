const Chariot = require('chariot-tooltips')
chariot = new Chariot({
    example4: [
      {
        selectors: 'div#first',
        tooltip: {
          position: 'right',
          title: 'Named tutorials',
          text: 'The chariot instance launches the tutorial named "example4" ' +
            'defined in the configuration above.'
        }
      },
      {
        selectors: 'div#second',
        tooltip: {
          position: 'left',
          title: 'Launch programmatically',
          text: "This one line launched the tutorial you're seeing now."
        }
      }
    ]
  });