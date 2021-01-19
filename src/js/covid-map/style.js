const STATUS_COLORS = {
  UNKNOWN: '#b2b2bf',
  LOW: '#00a698',
  MODERATE: '#ff9400',
  MAJOR: '#d1435b',
};

function getColor(status) {
  return STATUS_COLORS[status];
}

function style(feature, currentCountryId) {
  return {
    fillColor: feature.properties.country_id === currentCountryId ? '#b2b2bf' : getColor(feature.properties.restrictions.master_travel_status),
    opacity: 1,
    fillOpacity: 0.5,
    color: 'white',
    fill: true,
    stroke: true,
    weight: 0.1,
  };
}

export { getColor, style };
