export async function getAlerts(lat, lon) {
  const res = await fetch(
    `https://api.weather.gov/alerts/active?point=${lat},${lon}`
  );
  return res.json();
}
export function shouldNotify(alert) {
  return ["Tornado Warning", "Severe Thunderstorm"].includes(alert.event);
}

