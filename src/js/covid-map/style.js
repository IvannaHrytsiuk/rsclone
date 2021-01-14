const STATUS_COLORS = {
  UNKNOWN: 'gray',
  LOW: 'green',
  MODERATE: 'yellow',
  MAJOR: 'red',
};

function getColor(status) {
  return STATUS_COLORS[status];
}

function style(feature, currentCountryId) {
  return {
    fillColor: feature.properties.country_id === currentCountryId ? 'grey' : getColor(feature.properties.restrictions.master_travel_status),
    color: 'white',
    fill: true,
    stroke: true,
    weight: 0.1,
  };
}

export { getColor, style };
