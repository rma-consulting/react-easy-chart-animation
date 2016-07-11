const data = [
  [
    { x: '1-Jan-15 00:00', y: 47.25083735352551 },
    { x: '1-Jan-15 01:00', y: 43.1198654706993 },
    { x: '1-Jan-15 02:00', y: 49.34837258985891 },
    { x: '1-Jan-15 03:00', y: 65.41016621872824 },
    { x: '1-Jan-15 04:00', y: 5.745123240549699 },
    { x: '1-Jan-15 05:00', y: 65.47424494063567 },
    { x: '1-Jan-15 06:00', y: 53.85311606853094 },
    { x: '1-Jan-15 07:00', y: 87.96557175986143 },
    { x: '1-Jan-15 08:00', y: 22.894893938671924 },
    { x: '1-Jan-15 09:00', y: 75.23520083360971 },
    { x: '1-Jan-15 10:00', y: 19.64226137589986 },
    { x: '1-Jan-15 11:00', y: 14.207865938362986 }
  ], [
    { x: '1-Jan-15 00:00', y: 68.99327352024855 },
    { x: '1-Jan-15 01:00', y: 27.30629982783359 },
    { x: '1-Jan-15 02:00', y: 35.91606341237075 },
    { x: '1-Jan-15 03:00', y: 59.2925610358803 },
    { x: '1-Jan-15 04:00', y: 95.95990727097899 },
    { x: '1-Jan-15 05:00', y: 33.733486658388514 },
    { x: '1-Jan-15 06:00', y: 32.85425534525119 },
    { x: '1-Jan-15 07:00', y: 92.34867910289601 },
    { x: '1-Jan-15 08:00', y: 7.024627040741649 },
    { x: '1-Jan-15 09:00', y: 71.34972296197397 },
    { x: '1-Jan-15 10:00', y: 81.52572139084057 },
    { x: '1-Jan-15 11:00', y: 66.81833924994767 }
  ], [
    { x: '1-Jan-15 00:00', y: 83.5108044687527 },
    { x: '1-Jan-15 01:00', y: 43.96314968166426 },
    { x: '1-Jan-15 02:00', y: 98.29531453101407 },
    { x: '1-Jan-15 03:00', y: 54.04521227601495 },
    { x: '1-Jan-15 04:00', y: 69.6922766301369 },
    { x: '1-Jan-15 05:00', y: 50.69369433749122 },
    { x: '1-Jan-15 06:00', y: 15.025182437644302 },
    { x: '1-Jan-15 07:00', y: 50.72308563908361 },
    { x: '1-Jan-15 08:00', y: 98.12461564133585 },
    { x: '1-Jan-15 09:00', y: 16.09868173483695 },
    { x: '1-Jan-15 10:00', y: 95.59299686440184 },
    { x: '1-Jan-15 11:00', y: 63.79068027175523 }
  ], [
    { x: '1-Jan-15 00:00', y: 69.00116208273485 },
    { x: '1-Jan-15 01:00', y: 83.17211984475416 },
    { x: '1-Jan-15 02:00', y: 3.2150145164887123 },
    { x: '1-Jan-15 03:00', y: 78.71877588846363 },
    { x: '1-Jan-15 04:00', y: 74.57096534056964 },
    { x: '1-Jan-15 05:00', y: 98.19477112055095 },
    { x: '1-Jan-15 06:00', y: 55.13615234122435 },
    { x: '1-Jan-15 07:00', y: 78.6873968425716 },
    { x: '1-Jan-15 08:00', y: 72.02076332211051 },
    { x: '1-Jan-15 09:00', y: 66.79099479673876 },
    { x: '1-Jan-15 10:00', y: 20.57994934571714 },
    { x: '1-Jan-15 11:00', y: 46.510845773158806 }
  ]
];

export default [
  { // 1
    data: data,
    datePattern: '%d-%b-%y %H:%M',
    xType: 'time',
    width: 200,
    height: 100,
    interpolate: 'cardinal',
    yDomainRange: [ 0, 100 ],
    axisLabels: {
      x: 'Hour',
      y: 'Percentage'
    },
    style: {
      '.Area0': {
        stroke: 'green'
      }
    }
  }, { // 2
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ]
    ]
  }, { // 3
    data: [
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
        ]
      ]
   }, { // 4
      margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      },
      width: 350,
      height: 250,
      data: [
        [
          { x: 1, y: 20 },
          { x: 2, y: 10 },
          { x: 3, y: 25 }
        ], [
          { x: 1, y: 10 },
          { x: 2, y: 12 },
          { x: 3, y: 4 }
        ]
      ]
    }, { // 5
      axes: true,
      width: 350,
      height: 250,
      data: [
        [
          { x: 1, y: 20 },
          { x: 2, y: 10 },
          { x: 3, y: 25 }
        ], [
          { x: 1, y: 10 },
          { x: 2, y: 12 },
          { x: 3, y: 4 }
        ]
      ]
    }, { // 6
      margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      },
      axes: true,
      axisLabels: {
        x: 'My x Axis',
        y: 'My y Axis'
      },
      width: 350,
      height: 250,
      data: [
        [
          { x: 1, y: 20 },
          { x: 2, y: 10 },
          { x: 3, y: 25 }
        ], [
          { x: 1, y: 10 },
          { x: 2, y: 12 },
          { x: 3, y: 4 }
        ]
      ]
    }, { // 7
      axes: true,
      yAxisOrientRight: true,
      axisLabels: {
        x: 'My x Axis',
        y: 'My y Axis'
      },
      width: 350,
      height: 250,
      data: [
        [
          { x: 1, y: 20 },
          { x: 2, y: 10 },
          { x: 3, y: 25 }
        ], [
          { x: 1, y: 10 },
          { x: 2, y: 12 },
          { x: 3, y: 4 }
        ]
      ]
    }, { // 8
      margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      },
      axes: true,
      axisLabels: {
        x: 'My x Axis',
        y: 'My y Axis'
      },
      interpolate: 'cardinal',
      width: 350,
      height: 250,
      data: [
        [
          { x: 1, y: 20 },
          { x: 2, y: 10 },
          { x: 3, y: 25 }
        ], [
          { x: 1, y: 10 },
          { x: 2, y: 12 },
          { x: 3, y: 4 }
        ]
      ]
    }
]

/*

 {
    data: [
      [
        { x: 1, y: 20  },
        { x: 2, y: 10  },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10  },
        { x: 2, y: 12  },
        { x: 3, y: 4 }
      ]
    ]
   }, {
    data: [
      [
        { x: 'Mon', y: 20  },
        { x: 'Tue', y: 10  },
        { x: 'Wed', y: 33  },
        { x: 'Thu', y: 45  },
        { x: 'Fri', y: 15 }
      ], [
        { x: 'Mon', y: 10  },
        { x: 'Tue', y: 15  },
        { x: 'Wed', y: 13  },
        { x: 'Thu', y: 15  },
        { x: 'Fri', y: 10 }
      ]
    ]
   }, {
    data: [
      [
        { x: '1-Jan-15', y: 20  },
        { x: '1-Feb-15', y: 10  },
        { x: '1-Mar-15', y: 33  },
        { x: '1-Apr-15', y: 45  },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10  },
        { x: '1-Feb-15', y: 15  },
        { x: '1-Mar-15', y: 13  },
        { x: '1-Apr-15', y: 15  },
        { x: '1-May-15', y: 10 }
      ]
    ]
  }

*/