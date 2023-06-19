const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('teste se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('teste se passado o argumento Monday e 09:00-AM como parametro deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('teste se passado o argumento Tuesday e 09:00-AM como parametro deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('teste se passado o argumento Wednesday e 09:00-AM como parametro deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('teste se não passando argumentos deverá retornar o objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('teste se passado o argumento Thu e 09:00-AM como parametro deve retornar: The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('teste se passado o argumento Friday e 09:00-ZM como parametro deve retornar: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('teste se passado o argumento Saturday e C9:00-AM como parametro deve retornar: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('teste se passado o argumento Sunday e 09:c0-AM como parametro deve retornar: The minutes should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('teste se passado o argumento Sunday e 23:00-AM como parametro deve retornar: The hour must be between 0 and 12,', () => {
    expect(() => getOpeningHours('Sunday', '23:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('teste se passado o argumento Sunday e 09:90-AM como parametro deve retornar: The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Sunday', '09:90-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
