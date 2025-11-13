// app/page-one.tsx
import { View } from "react-native";
import { useRouter } from "expo-router";
import { WebView } from "react-native-webview";
import { leafletMapStyle1 } from "./maps/mapstyles";

export default function Leaflet() {
  const router = useRouter();
  const key = process.env.EXPO_PUBLIC_ARCGIS_API_KEY;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: leafletMapStyle1 }}
        style={{ flex: 1 }}
      />
    </View>
  );
}