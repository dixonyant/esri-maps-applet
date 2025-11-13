// app/page-two.tsx
import { Platform, View } from "react-native";
import { WebView } from "react-native-webview";
import { leafletMapStyle2 } from "./maps/mapstyles";

export default function MapLibre() {
  return Platform.OS === 'web' ? (
    <iframe srcDoc={leafletMapStyle2} style={{ width: '100%', height: '100%', border: 'none' }}/>
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['about:blank']}
        source={{ html: leafletMapStyle2 }}
        style={{ flex: 1 }}
      />
    </View>
  );
}