const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Dionisius',
          last: 'Christiaanse',
        },
        login: {
          username: 'bigpeacock987',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/52.jpg',
        },
      },
      {
        name: {
          first: 'Jane',
          last: 'Jo',
        },
        login: {
          username: 'Jane123',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/52.jpg',
        },
      },
    ],
  },
};


export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};