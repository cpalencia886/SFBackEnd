async function createRecord(model, data) {
    try {
        const record = await model.create(data);
        return record;
    } catch (err) {
        throw err;
    }
}

module.exports = createRecord;