import { Platform } from "react-native";

declare const process: {
  env?: {
    EXPO_PUBLIC_API_URL?: string;
  };
};

const LAN_API_URL = "";
const WEB_API_URL = "http://localhost:5000";

export const API_URL =
  process.env?.EXPO_PUBLIC_API_URL ??
  (Platform.OS === "web" ? WEB_API_URL : LAN_API_URL);
