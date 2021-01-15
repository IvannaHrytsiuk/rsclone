const STATUSES = {
  low: 'LOW',
  moderate: 'MODERATE',
  major: 'MAJOR',
  unknown: 'UNKNOWN',
};

const lowRestrictionsElement = document.querySelector('#low-restrictions-count');
const moderateRestrictionsElement = document.querySelector('#moderate-restrictions-count');
const majorRestrictionsElement = document.querySelector('#major-restrictions-count');
const unknownRestrictionsElement = document.querySelector('#unknown-restrictions-count');

function setDataSummary(summary) {
  lowRestrictionsElement.textContent = summary[STATUSES.low];
  moderateRestrictionsElement.textContent = summary[STATUSES.moderate];
  majorRestrictionsElement.textContent = summary[STATUSES.major];
  unknownRestrictionsElement.textContent = summary[STATUSES.unknown];
}

export { setDataSummary as default };
