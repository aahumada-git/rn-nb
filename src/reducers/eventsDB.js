const eventList = [
    { _id: 1, desc: 'Gas Load' },
    { _id: 2, desc: 'Oil Change' },
    { _id: 3, desc: 'Tire Repair' },
    { _id: 3, desc: 'Battery Change' },
    { _id: 4, desc: 'Other' },
]

const providersList = [
    { _id: 1, desc: 'SHELL' },
    { _id: 2, desc: 'COPEC' },
    { _id: 3, desc: 'ESSO' },
    { _id: 4, desc: 'PETROBRAS' },
    { _id: 4, desc: 'SERVITECA' },
    { _id: 5, desc: 'Other' },
]

const partsList = [
    { _id: 1, desc: 'Gas 93' },
    { _id: 2, desc: 'Gas 95' },
    { _id: 3, desc: 'Gas 97' },
    { _id: 4, desc: 'Diesel' },
    { _id: 4, desc: 'Shell Rimula 15W40' },
    { _id: 4, desc: 'Castrol 10W40' },
    { _id: 4, desc: 'Parche de Rueda' },
    { _id: 5, desc: 'Other' },
]

const unitList = [
    { _id: 1, desc: 'Litros' },
    { _id: 2, desc: 'Galones' },
    { _id: 3, desc: 'Unidad(des)' },
    { _id: 4, desc: 'Bidones' },
    { _id: 5, desc: 'Other' },
]

const currencyList = [
    { _id: 1, desc: 'Pesos Chilenos' },
    { _id: 2, desc: 'Pesos Argentinos' },
    { _id: 3, desc: 'Soles Peruanos' },
    { _id: 4, desc: 'Dolares' },
    { _id: 5, desc: 'Other' },
]

const dataBase = [
    {
        _id: 1,
        timestamp: '2019-12-15T18:25:43.511Z',
        location: {
            lat: 33.3632256,
            lng: -117.0874871
        },
        data: {
            event_id: 'CARGA COMBUSTIBLE',
            provider_id: 'SHELL',
            part_id: '95 OCTANOS',
            amount: 50,
            unit: 'LITROS',
            cost: 30000,
            currency: 'PESOS CHILENOS',
        },
        attach: [
            { type: 'INVOICE', url: 'https://jsonplaceholder.typicode.com/photos/1' }

        ]
    },
    {
        _id: 1,
        timestamp: '2020-01-15T18:25:43.511Z',
        location: {
            lat: 33.3632256,
            lng: -117.0874871
        },
        data: {
            event_id: 'CAMBIO DE ACEITE',
            provider_id: 'SERVITECA',
            part_id: 'SHELL RIMULA 15W40',
            amount: 2,
            unit: 'DIDONES',
            cost: 50000,
            currency: 'PESOS CHILENOS',
        },
        attach: [
            { type: 'INVOICE', url: 'https://jsonplaceholder.typicode.com/photos/2' }

        ]
    },
    {
        _id: 1,
        timestamp: '2020-02-15T18:25:43.511Z',
        location: {
            lat: 33.3632256,
            lng: -117.0874871
        },
        data: {
            event_id: 'PARCHADO RUEDA',
            provider_id: 'DONDE JUANITO',
            part_id: 'PARCHE NORMAL',
            amount: 2,
            unit: 'UNIDADES',
            cost: 15000,
            currency: 'PESOS CHILENOS',
        },
        attach: [
            { type: 'INVOICE', url: 'https://jsonplaceholder.typicode.com/photos/3' }

        ]
    }
]