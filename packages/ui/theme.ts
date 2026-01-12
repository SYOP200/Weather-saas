export type Theme = {
  brand: string;
  colors: {
    primary: string;
    background: string;
    text: string;
  };
};

export const defaultTheme: Theme = {
  brand: "Weather SaaS",
  colors: {
    primary: "#4DA3FF",
    background: "#0B1220",
    text: "#FFFFFF"
  }
};

