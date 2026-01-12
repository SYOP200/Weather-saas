export async function getNearestStation(lat: number, lon: number) {
  const res = await fetch(
    `https://api.weather.gov/points/${lat},${lon}`
  );
  const data = await res.json();
  return data.properties.observationStations;
}

export async function getStationObservation(stationUrl: string) {
  const res = await fetch(`${stationUrl}/observations/latest`);
  return res.json();
}

