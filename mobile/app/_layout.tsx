import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import "react-native-reanimated";
import {WebView} from "react-native-webview";

import {useColorScheme} from "@/hooks/use-color-scheme";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const uri = process.env.EXPO_PUBLIC_WEB_URL || "http://localhost:5173";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <WebView source={{uri}} />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
