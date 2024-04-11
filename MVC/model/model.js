module.exports = {
    calculatePrice: function(space, duration) {
        switch (duration) {
            case 'Monthly':
                return getMonthlyRate(space);
            case 'Hourly':
                return getHourlyRate(space);
            default:
                return 'N/A';
        }
    }
};

function getHourlyRate(space) {
}

function getMonthlyRate(space) {
}
