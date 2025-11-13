// app/page-one.tsx
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
export default function Leaflet() {
  const router = useRouter();
  const key = process.env.EXPO_PUBLIC_ARCGIS_API_KEY;
  return (
    <View className="flex-1 bg-white">
      {/* Top navigation and title */}
      <View className="pt-12 pb-4 px-4 bg-gray-100 flex-row items-center justify-between">
        <Text className="text-xl font-bold">Leaflet</Text>
        <View className="flex-row space-x-2">
          <Pressable
            className="px-4 py-2 bg-blue-500 rounded"
            onPress={() => router.push("/leaflet")}
          >
            <Text className="text-white font-medium">Leaflet</Text>
          </Pressable>
          <Pressable
            className="px-4 py-2 bg-green-600 rounded"
            onPress={() => router.push("/maplibre")}
          >
            <Text className="text-white font-medium">MapLibre</Text>
          </Pressable>
        </View>
      </View>
      {/* Map area placeholder */}
      <View className="flex-1 items-center justify-center bg-gray-200">
        <Text className="text-gray-500">Map will go here</Text>
      </View>
    </View>
  );
}