// app/page-two.tsx
import { Platform, View, Pressable, Text } from "react-native";
import { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import { maplibreHTML, maplibreArcgisHTML } from "./maps/maplibreHtml";

export default function MapLibre() {
  const token = process.env.EXPO_PUBLIC_ARCGIS_API_KEY;
  const htmlWithToken = (html: string) => html.replace(/{{TOKEN}}/g, token || "");
  const [useArcgis, setUseArcgis] = useState(false);
  const [html, setHtml] = useState(() => htmlWithToken(maplibreHTML));

  useEffect(() => {
    console.log("HTML updated to useArcgis =", useArcgis);
    console.log("Current HTML:", html);
    if (useArcgis) {
      setHtml(htmlWithToken(maplibreArcgisHTML));
    } else {
      setHtml(htmlWithToken(maplibreHTML));
    }
  }, [useArcgis, token]);

  const toggle = () => {
    setUseArcgis((prev) => !prev);
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={toggle}
        style={{ position: 'absolute', top: 40, left: 20, zIndex: 10, backgroundColor: '#2563eb', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {useArcgis ? 'Show MapLibreGL' : 'Show ArcGIS Basemap'}
        </Text>
      </Pressable>
      {Platform.OS === 'web' ? (
        <iframe srcDoc={html} style={{ width: '100%', height: '100%', border: 'none' }}/>
      ) : (
        <WebView
          originWhitelist={['about:blank']}
          source={{ html }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
}