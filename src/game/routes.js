import cardType from './cardType';
import stations from './stations';

export default [
  {
    start: stations.lisboa,
    end: stations.cadiz,
    type: cardType.blue,
    wagons: [
      { x: 17.317, y: 583.723, r: 65 },
      { x: 40.922, y: 616.04, r: 12 },
    ],
  },
  {
    start: stations.lisboa,
    end: stations.madrid,
    type: cardType.purple,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.cadiz,
    end: stations.madrid,
    type: cardType.orange,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.pamplona,
    end: stations.madrid,
    type: [cardType.black, cardType.white],
    tunnel: true,
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ], [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ]
    ]
  },
  {
    start: stations.madrid,
    end: stations.barcelona,
    type: cardType.yellow,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.pamplona,
    end: stations.barcelona,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.barcelona,
    end: stations.marseille,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.pamplona,
    end: stations.marseille,
    type: cardType.red,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.pamplona,
    end: stations.brest,
    type: cardType.purple,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.pamplona,
    end: stations.paris,
    type: [cardType.blue, cardType.green],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ], [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ]
    ],
  }, {
    start: stations.brest,
    end: stations.paris,
    type: cardType.black,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.brest,
    end: stations.dieppe,
    type: cardType.orange,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.dieppe,
    end: stations.paris,
    type: cardType.purple,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.paris,
    end: stations.marseille,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.marseille,
    end: stations.zurich,
    type: cardType.purple,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.paris,
    end: stations.zurich,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.dieppe,
    end: stations.london,
    type: [cardType.wild, cardType.wild],
    locomotives: 1,
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ], [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ]
    ],
  }, {
    start: stations.london,
    end: stations.edinburgh,
    type: [cardType.black, cardType.orange],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ]
    ],
  }, {
    start: stations.london,
    end: stations.amsterdam,
    type: cardType.wild,
    locomotives: 2,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.paris,
    end: stations.bruxelles,
    type: [cardType.yellow, cardType.red],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
    ],
  }, {
    start: stations.dieppe,
    end: stations.bruxelles,
    type: cardType.green,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.amsterdam,
    end: stations.essen,
    type: cardType.yellow,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.amsterdam,
    end: stations.frankfurt,
    type: cardType.white,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.bruxelles,
    end: stations.frankfurt,
    type: cardType.blue,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.bruxelles,
    end: stations.amsterdam,
    type: cardType.black,
    wagons: [
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.paris,
    end: stations.frankfurt,
    type: [cardType.white, cardType.orange],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
    ],
  }, {
    start: stations.essen,
    end: stations.kobenhavn,
    type: [cardType.wild, cardType.wild],
    locomotives: 1,
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ], [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
    ],
  }, {
    start: stations.kobenhavn,
    end: stations.stockholm,
    type: [cardType.yellow, cardType.white],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
    ],
  }, {
    start: stations.stockholm,
    end: stations.petrograd,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.essen,
    end: stations.berlin,
    type: cardType.blue,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.frankfurt,
    end: stations.essen,
    type: cardType.green,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.frankfurt,
    end: stations.berlin,
    type: [cardType.black, cardType.red],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
    ],
  }, {
    start: stations.frankfurt,
    end: stations.munchen,
    type: cardType.purple,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.munchen,
    end: stations.zurich,
    type: cardType.yellow,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.zurich,
    end: stations.venezia,
    type: cardType.green,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.marseille,
    end: stations.roma,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.munchen,
    end: stations.venezia,
    type: cardType.black,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.venezia,
    end: stations.roma,
    type: cardType.black,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.palermo,
    end: stations.roma,
    type: cardType.wild,
    locomotives: 1,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.roma,
    end: stations.brindisi,
    type: cardType.white,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.palermo,
    end: stations.brindisi,
    type: cardType.wild,
    locomotives: 1,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.brindisi,
    end: stations.athina,
    type: cardType.wild,
    locomotives: 1,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.berlin,
    end: stations.danzig,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.berlin,
    end: stations.warszawa,
    type: [cardType.purple, cardType.yellow],
    double: true,
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ]
    ],
  }, {
    start: stations.berlin,
    end: stations.wien,
    type: cardType.green,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.munchen,
    end: stations.wien,
    type: cardType.orange,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.venezia,
    end: stations.zagrab,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.wien,
    end: stations.zagrab,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.zagrab,
    end: stations.sarajevo,
    type: cardType.red,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.danzig,
    end: stations.riga,
    type: cardType.black,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.riga,
    end: stations.petrograd,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.riga,
    end: stations.wilno,
    type: cardType.green,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.warszawa,
    end: stations.wilno,
    type: cardType.red,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.wilno,
    end: stations.petrograd,
    type: cardType.blue,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.petrograd,
    end: stations.moskva,
    type: cardType.white,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.wilno,
    end: stations.smolensk,
    type: cardType.yellow,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.smolensk,
    end: stations.moskva,
    type: cardType.orange,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.wien,
    end: stations.warszawa,
    type: cardType.blue,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.warszawa,
    end: stations.kyiv,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.wilno,
    end: stations.kyiv,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.smolensk,
    end: stations.kyiv,
    type: cardType.red,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.wien,
    end: stations.budapest,
    type: [cardType.red, cardType.white],
    wagons: [
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ],
      [
        { x: 0, y: 0, r: 0 },
        { x: 0, y: 0, r: 0 },
      ]
    ],
  }, {
    start: stations.zagrab,
    end: stations.budapest,
    type: cardType.orange,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.budapest,
    end: stations.kyiv,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.budapest,
    end: stations.sarajevo,
    type: cardType.purple,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.budapest,
    end: stations.bucuresti,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.sarajevo,
    end: stations.sofia,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.sarajevo,
    end: stations.athina,
    type: cardType.green,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.moskva,
    end: stations.kharkov,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.kyiv,
    end: stations.kharkov,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.kharkov,
    end: stations.rostov,
    type: cardType.green,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.kyiv,
    end: stations.bucuresti,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.rostov,
    end: stations.sevastopol,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.rostov,
    end: stations.sochi,
    type: cardType.wild,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.bucuresti,
    end: stations.sevastopol,
    type: cardType.white,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.bucuresti,
    end: stations.sofia,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.sofia,
    end: stations.athina,
    type: cardType.purple,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.sofia,
    end: stations.constantinople,
    type: cardType.blue,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.bucuresti,
    end: stations.constantinople,
    type: cardType.yellow,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  }, {
    start: stations.sevastopol,
    end: stations.sochi,
    type: cardType.wild,
    locomotives: 1,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.sochi,
    end: stations.erzurum,
    type: cardType.red,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.sevastopol,
    end: stations.erzurum,
    type: cardType.wild,
    locomotives: 2,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.erzurum,
    end: stations.angora,
    type: cardType.black,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.sevastopol,
    end: stations.constantinople,
    type: cardType.wild,
    locomotives: 2,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.constantinople,
    end: stations.angora,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.constantinople,
    end: stations.smyrna,
    type: cardType.wild,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.angora,
    end: stations.smyrna,
    type: cardType.orange,
    tunnel: true,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.athina,
    end: stations.smyrna,
    type: cardType.wild,
    locomotives: 1,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
  {
    start: stations.smyrna,
    end: stations.palermo,
    type: cardType.wild,
    locomotives: 2,
    wagons: [
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
      { x: 0, y: 0, r: 0 },
    ],
  },
];
