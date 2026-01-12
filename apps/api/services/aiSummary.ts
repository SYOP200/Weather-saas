export async function summarize(weather) {
  return `Today will be ${weather.temp}° with ${weather.condition}.`;
}

