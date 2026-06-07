import { getSpecialAttacks } from '../destructuring';

test('Это позволит извлечь информацию о специальных атаках и присвоить им описание по умолчанию, если оно отсутствует', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
            },
        ],
    };

    const expected = [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно',
        },
    ];

    expect(getSpecialAttacks(character)).toEqual(expected);
});

test('Это должно обрабатывать персонажей без специальных атак', () => {
    const character = { name: 'Wizard', type: 'Magician' };
    expect(getSpecialAttacks(character)).toEqual([]);
});