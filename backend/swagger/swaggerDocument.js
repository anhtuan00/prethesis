import {getPets} from './getPets.js'
export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
        contact: {
            name: 'zxc',
            email: 'zxc@gmail.com',
            url: 'https://zxczxc'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:5000/api/v1',
            description: 'Local server'
        }],
    tags: [
        {
            name: 'Pets'
        }
    ],
    paths: {
        "/pets": {
            "get": getPets
        }
    }
}