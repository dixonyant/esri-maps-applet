
import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { LeafletView } from "react-native-leaflet-view";
import { leafletMapStyle1, leafletMapStyle2 } from "./maps/mapstyles";

// https://www.npmjs.com/package/react-native-leaflet-view
const DEFAULT_LOCATION = {
  latitude: -23.5489,
  longitude: -46.6388
};
export default function Leaflet() {
  const router = useRouter();
  const key = process.env.EXPO_PUBLIC_ARCGIS_API_KEY;
  const mapStyles = [leafletMapStyle1, leafletMapStyle2];

  const [webViewContent, setWebViewContent] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadMapStyle = async () => {
      if (isMounted) {
        setTimeout(() => {
          setWebViewContent(leafletMapStyle2);
        }, 1000);
      }
    };

    loadMapStyle();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!webViewContent) {
    return (
      <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
  }

  return (
    <LeafletView
      source={{ html: webViewContent }}
      mapCenterPosition={{
        lat: DEFAULT_LOCATION.latitude,
        lng: DEFAULT_LOCATION.longitude,
      }}
    />
  );
}