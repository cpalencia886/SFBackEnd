module.exports = {
    calculatePrice: async function(space, duration, time) {
        switch (duration) {
            case 'Monthly':
                return getMonthlyRate(space);
            case 'Hourly':
                return getHourlyRate(space, time);
            default:
                return 'N/A';
        }
    }
};

function getHourlyRate(space, time) {

    switch (space) {
        case 'Executive Suite':
            return  `$${40*time}`;
        case 'Sunlit Studio':
            return `$${20*time}`;
        case 'Private Room':
            return   `$${25*time}`;
        case 'Window Table':
            return `$${15*time}`;
        case 'Event Room':
            return  `$${50*time}`;
        case 'The Hive':
            return  `$${20*time}`;
        case 'Hot Desk':
            return  `$${5*time}`;
        case 'The Gathering':
            return  `$${120*time}`;
        case 'Big Studio':
            return  `$${75*time}`;
        case 'Mini Studio':
            return `$${30*time}`;
        case 'Innovation Hub':
            return `$${60*time}`;
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
