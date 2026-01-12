import pino from "pino";
export const logger = pino({ level: "info" });
logger.info("Weather fetched");

