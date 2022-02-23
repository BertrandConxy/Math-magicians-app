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
    test('subration operator works properly' ()=> {
        
    });
}) 
