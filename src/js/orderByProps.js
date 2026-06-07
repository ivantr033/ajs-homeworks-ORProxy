export function orderByProps(obj, sortOrder) {
    const priorityProps = [];
    const alphabetProps = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (sortOrder.includes(key)) {
                priorityProps.push(key);
            } else {
                alphabetProps.push(key);
            }
        }
    }

    // Arrange the remaining properties in alphabetical order
    alphabetProps.sort();

    // Combine both arrays respecting the sortOrder order
    const finalOrder = [
        ...sortOrder.filter((key) => priorityProps.includes(key)),
        ...alphabetProps,
    ];

    // Map to the required format {key, value}
    return finalOrder.map((key) => ({
        key,
        value: obj[key],
    }));
}