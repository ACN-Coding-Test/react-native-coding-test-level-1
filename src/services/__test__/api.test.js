const fetchPokemon = async offset => {
    let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
    );

    const json = await response.json();

    console.log('json', json);
    return json;
};

const unmockedFetch = global.fetch;

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(pokemon_mock)
    })
);

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([])
        });
});

afterAll(() => {
    global.fetch = unmockedFetch;
});

describe('get Pokemon List', () => {
    test('works', async () => {
        const json = await fetchPokemon(0);

        expect(json.length).toEqual(0);
    });
});
