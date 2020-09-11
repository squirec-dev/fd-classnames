const arrayFromObject = obj => Object.keys(obj)
    .filter(key => obj[key] === true);

const arrayFromString = obj => obj.split(' ');

const classNames = (...options) => options.map(option => {
    if (!option || typeof option === 'undefined') {
        return '';
    }
    if (typeof(option) === 'string') {
        return arrayFromString(option);
    }
    if (typeof(option) === 'object') {
        return arrayFromObject(option);
    }
})
    .flat()
    .reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], [])
    .join(' ');

module.exports = {
    arrayFromObject,
    arrayFromString,
    classNames,
}