const STATUSES = {
    low: 'LOW',
    moderate: 'MODERATE',
    major: 'MAJOR',
    unknown: 'UNKNOWN',
};

let lowRestrictionsElement;
let moderateRestrictionsElement;
let majorRestrictionsElement;
let unknownRestrictionsElement;

function initStatusesCounters() {
    lowRestrictionsElement = document.querySelector('#low-restrictions-count');
    moderateRestrictionsElement = document.querySelector('#moderate-restrictions-count');
    majorRestrictionsElement = document.querySelector('#major-restrictions-count');
    unknownRestrictionsElement = document.querySelector('#unknown-restrictions-count');
}

function setDataSummary(summary) {
    lowRestrictionsElement.textContent = summary[STATUSES.low];
    moderateRestrictionsElement.textContent = summary[STATUSES.moderate];
    majorRestrictionsElement.textContent = summary[STATUSES.major];
    unknownRestrictionsElement.textContent = summary[STATUSES.unknown];
}

export { setDataSummary, initStatusesCounters };
