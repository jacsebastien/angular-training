import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
        { id: 11, name: 'Ekko' },
        { id: 12, name: 'Akali' },
        { id: 13, name: 'Ahri' },
        { id: 14, name: 'Ezreal' },
        { id: 15, name: 'Gnar' },
        { id: 16, name: 'Graves' },
        { id: 17, name: 'Rengar' },
        { id: 18, name: 'Jax' },
        { id: 19, name: 'Twisted Fate' },
        { id: 20, name: 'Wukong' }
    ];
    return {heroes};
  }
}
