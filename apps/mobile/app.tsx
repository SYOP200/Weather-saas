import { Text, View } from "react-native";
import { useLiveWeather } from "./src/hooks/useLiveWeather";

export default function App() {
  const weather = useLiveWeather();
  return <View><Text>{weather?.temp}</Text></View>;
}

