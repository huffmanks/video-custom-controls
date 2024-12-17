import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";

import { NAV_THEME } from "@/lib/constants";

export async function setAndroidNavigationBar(theme: "light" | "dark") {
  if (Platform.OS !== "android") return;
  await NavigationBar.setButtonStyleAsync(theme ?? "dark");
  await NavigationBar.setBackgroundColorAsync(
    theme === "light" ? NAV_THEME.light.background : NAV_THEME.dark.background
  );
}
