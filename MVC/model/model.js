module.exports = {
    calculatePrice: async function(space, duration) {
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

    switch (space) {
        case 'Executive Suite':
            return '$45';
        case 'Sunlit Studio':
            return '$20';
        case 'Private Room':
            return  '$25';
        case 'Window Table':
            return '$15';
        case 'Event Room':
            return  '$50';
        case 'The Hive':
            return '$20';
        case 'Hot Desk':
            return '$5';
        case 'The Gathering':
            return '$120';
        case 'Big Studio':
            return '$75';
        case 'Mini Studio':
            return '$30';
        case 'Innovation Hub':
            return '$60';
        default:
            return '$0';
    }
    
}


function getMonthlyRate(space) {

    switch (space) {
        case 'Executive Suite':
            return '$1000';
        case 'Sunlit Studio':
            return '$450';
        case 'Private Room':
            return '$600';
        case 'Window Table':
            return '$350';
        case 'Event Room':
            return '$1350';
        case 'The Hive':
            return '$450';
        case 'Hot Desk':
            return '$140';
        case 'The Gathering':
            return '$3000';
        case 'Big Studio':
            return '$1800';
        case 'Mini Studio':
            return '$750';
        case 'Innovation Hub':
            return '$1400';
        default:
            return '$0';
    }
}
