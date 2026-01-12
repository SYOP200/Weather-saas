import { useEffect, useState } from "react";
import * as Location from "expo-location";
import io from "socket.io-client";

export function useLiveWeather() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const loc = await Location.getCurrentPositionAsync({});
      const socket = io("http://localhost:3000");

      socket.emit("subscribe", {
        lat: loc.coords.latitude,
        lon: loc.coords.longitude
      });

      socket.on("weather:update", setData);
    })();
  }, []);

  return data;
}
import { Text, View } from "react-native";
import { useLiveWeather } from "../hooks/useLiveWeather";

export default function Dashboard() {
  const weather = useLiveWeather();

  if (!weather) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Temp: {weather.current.temperature}°</Text>
      <Text>Wind: {weather.current.windSpeed} mph</Text>
      <Text>Station: {weather.station.name}</Text>
    </View>
  );
}

