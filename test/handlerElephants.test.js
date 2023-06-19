const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('teste se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('teste se o parametro for undefined, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('teste se é ao passar argumento que não seja string retorna: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('teste se é ao passar argumento do nome do parametro, retorna qual especie é', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('teste se a função retorna null caso não seja passado o parametro esperado', () => {
    expect(handlerElephants('asd')).toBeNull();
  });
  it('ao passar argumento count deve retornar o número inteiro', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('ao passar argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('ao passar argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
