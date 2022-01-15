const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

const animalDescription = ({commonName,name,weightRange:{min,max,measurementUnit = 'kg'}}) => {
 // const {min,max,measurementUnit} = weightRange; 
  /* if(measurementUnit == undefined){
    measurementUnit = 'kg';
  } */
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
};

console.log( animalDescription(polarBear) );

