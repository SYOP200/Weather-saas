import * as Notifications from "expo-notifications";
export async function register() {
  return (await Notifications.getExpoPushTokenAsync()).data;
}

