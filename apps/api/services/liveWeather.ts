import { getNearestStation, getStationObservation } from "./noaa";

export function startLiveWeather(socket: any) {
  return async ({ lat, lon }: any) => {
    const stationUrl = await getNearestStation(lat, lon);

    setInterval(async () => {
      const obs = await getStationObservation(stationUrl);
      socket.emit("weather:update", {
        current: {
          temperature: obs.properties.temperature.value,
          windSpeed: obs.properties.windSpeed.value
        },
        station: {
          name: obs.properties.station
        }
      });
    }, 60_000);
  };
}

