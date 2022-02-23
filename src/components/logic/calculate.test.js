import calculate from "./calculate";

let obj = {
    total: null,
    next: null,
    operation: null
}
describe('calculator works properly', () => {
    test('sum operator works properly', ()=> {
        obj = {
            total: '7',
            next: '5',
            operation: '+'
        }
        const {total} = calculate(obj, '=');
        expect(total).toEqual('12');
    })

    test('Tests the substration operation', () => {
        obj= {
          total: '12',
          next: '6',
          operation: '-',
        };
    
        const { total } = calculate(obj, '=');
        expect(total).toBe('6');
      })
      test('Tests the division operation', () => {
        obj= {
          total: '12',
          next: '6',
          operation: '÷',
        };
    
        const { total } = calculate(obj, '=');
        expect(total).toBe('2');
      })
      test('Tests the multiplication operation', () => {
        obj= {
          total: '12',
          next: '6',
          operation: 'x',
        };
    
        const { total } = calculate(obj, '=');
        expect(total).toBe('72');
      })
      test('Tests modulus operation', () => {
        obj= {
          total: '12',
          next: '6',
          operation: '%',
        };
    
        const { total } = calculate(obj, '=');
        expect(total).toBe('0');
      })
      test('Tests reset (AC) button', () => {
        obj= {
          total: '12',
          next: '6',
          operation: 'x',
        };
    
        expect(calculate(obj, 'AC')).toEqual({
          total: null,
          next: null,
          operation: null,
        });
      });
    })