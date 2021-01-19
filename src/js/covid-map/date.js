function getDataDate(date) {
    const currentDate = new Date(date);
    return currentDate.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

function setDataDate(date) {
    document.querySelector('#info-date').textContent = `Info correct as of ${getDataDate(date)}`;
}

export { getDataDate, setDataDate };
