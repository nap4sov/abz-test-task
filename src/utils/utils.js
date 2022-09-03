const trimString = (string, index) => {
    return `${string.slice(0, index)}...`;
};

export const computeName = (value, length) => {
    return value.length < length ? value : trimString(value, length - 2);
};

export const rebuildData = values => {
    let formData = new FormData();
    Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
    });
    return formData;
};
