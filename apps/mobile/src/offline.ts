import AsyncStorage from "@react-native-async-storage/async-storage";

export async function cache(data) {
  await AsyncStorage.setItem("weather", JSON.stringify(data));
}

