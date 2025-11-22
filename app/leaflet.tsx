import { Platform, View, Pressable, Text } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { WebView } from "react-native-webview";
import { leafletMapStyle1, leafletMapStyle2 } from "./maps/mapstyles";

export default function LeafletCDN() {
  const router = useRouter();
  const key = process.env.EXPO_PUBLIC_ARCGIS_API_KEY;
  const mapStyles = [leafletMapStyle1, leafletMapStyle2];
  const [styleIndex, setStyleIndex] = useState(0);

  const handleToggle = () => {
    setStyleIndex((prev) => (prev + 1) % mapStyles.length);
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={handleToggle}
        style={{ position: 'absolute', top: 40, right: 20, zIndex: 10, backgroundColor: '#2563eb', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Change Map</Text>
      </Pressable>
      {Platform.OS === 'web' ? (
        <iframe srcDoc={mapStyles[styleIndex]} style={{ width: '100%', height: '100%', border: 'none' }}/>
      ) : (
        <WebView
          originWhitelist={['about:blank']}
          source={{ html: mapStyles[styleIndex] }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
}
