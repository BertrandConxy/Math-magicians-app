import operate from "./operate";

describe('test operate functions', ()=> {
    test('sum operation', ()=> {
        const result = operate('5', '5', '+');
        expect(result).toBe('10');
    });
    test('subtraction operation', ()=> {
        const result = operate('5', '5', '-');
        expect(result).toBe('0');
    })
    test('multiplication operation', ()=> {
        const result = operate('5', '5', 'x');
        expect(result).toBe('25');
    })
    test('division operation', ()=> {
        const result = operate('25', '5', '÷');
        expect(result).toBe('5');
    })
    test(' catch error on division operation', ()=> {
        const result = operate('25', '0', '÷');
        expect(result).toBe("Can't divide by 0.");
    })

    test('modulus operation', ()=> {
        const result = operate('25', '5', '%');
        expect(result).toBe('0');
    })

    test('catch error on modulus operation', ()=> {
        const result = operate('25', '0', '%');
        expect(result).toBe("Can't find modulo as can't divide by 0.");
    })
    test('throw an error when there is wrong operation', ()=> {
        expect(()=>operate('25', '5', '/')).toThrowError(`Unknown operation '/'`);
    })
})