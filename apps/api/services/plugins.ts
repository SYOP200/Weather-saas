const plugins = {
  pollen: data => ({ pollenIndex: 3 }),
  airQuality: data => ({ aqi: 42 })
};

export function runPlugins(data) {
  return Object.values(plugins).map(fn => fn(data));
}

