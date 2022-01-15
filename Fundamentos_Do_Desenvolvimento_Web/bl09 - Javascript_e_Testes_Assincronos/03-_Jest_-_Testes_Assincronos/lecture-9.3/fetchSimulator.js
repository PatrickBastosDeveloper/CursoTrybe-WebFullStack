const expected = {
    name: 'Murilo Flesch',
    company: '@betrybe',
    twitter: undefined,
    bio: 'Frontend developer apaixonado por educação e tecnologia.',
    location: 'Porto Alegre'
};

const fetchSimulator = (spieModel,spiedFunction) => {
  const apiURL = jest.spyOn(spieModel,spiedFunction)
  apiURL.mockResolvedValue(expected);
  return apiURL;
};


module.exports = fetchSimulator;
