import { orderByProps } from '../orderByProps';

test('Это позволит отсортировать свойства по приоритету, а затем в алфавитном порядке', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];

    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ];

    expect(orderByProps(obj, order)).toEqual(expected);
});


test('Это должно игнорировать свойства, унаследованные от прототипа', () => {
    const prototypeObj = { inheritedProp: 'Этого следует игнорировать' };
    
    const obj = Object.create(prototypeObj);
    obj.name = 'мечник';
    obj.health = 10;

    const order = ['name'];

    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'health', value: 10 },
    ];

    expect(orderByProps(obj, order)).toEqual(expected);
});