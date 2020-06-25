import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
      {
        id: 1,
        name: 'Joint/And',
        desc:
          'The place at which two things, or separate parts of one thing, are joined or united, either rigidly or in such a way as to permit motion; juncture.',
      },
      {
        id: 2,
        name: 'Sole Owner',
        desc:
          'A person who owns a business on their own, with no partners, and has not formed a company',
      },
    ];

    const accountTypes = [
      { id: 1, name: 'Sub Account' },
      { id: 2, name: 'Savings Account' },
      { id: 3, name: 'Super Savings Account' },
    ];

    const currencies = [
      { id: 1, name: 'EUR' },
      { id: 2, name: 'USD' },
      { id: 3, name: 'RMB' },
    ];

    return { accounts, accountTypes, currencies };
  }
}
