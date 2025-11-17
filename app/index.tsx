import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View className="w-full max-w-xs items-center">
        <Pressable
          className="w-full mb-4 px-4 py-3 bg-blue-500 rounded items-center"
          onPress={() => router.push("/leaflet")}
        >
          <Text className="text-white font-medium text-lg">Leaflet Component</Text>
        </Pressable>
        <Pressable
          className="w-full mb-4 px-4 py-3 bg-purple-600 rounded items-center"
          onPress={() => router.push("/leafletcdn")}
        >
          <Text className="text-white font-medium text-lg">Leaflet CDN</Text>
        </Pressable>
        <Pressable
          className="w-full px-4 py-3 bg-green-600 rounded items-center"
          onPress={() => router.push("/maplibre")}
        >
          <Text className="text-white font-medium text-lg">MapLibre</Text>
        </Pressable>
      </View>
    </View>
  );
}
