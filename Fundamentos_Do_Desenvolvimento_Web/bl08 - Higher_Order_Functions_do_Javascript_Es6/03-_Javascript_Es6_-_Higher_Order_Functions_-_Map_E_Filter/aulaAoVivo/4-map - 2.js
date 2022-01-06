const birds = [
  { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
  { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
  { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
  { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
  { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];

const birdNames = birds.map(element => element.Name.toLowerCase());

console.log('antigo array:', birds);
console.log('novo array:', birdNames);
