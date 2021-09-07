import { rest } from 'msw';

export const handlers = [
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    const queryResults = req.url.searchParams.get('results');
    

    return res(
      ctx.json({
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
      })
    );
  }),
];
