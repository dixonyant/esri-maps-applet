import { Text, View, Pressable, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
      <ImageBackground
        source={{
          uri: "https://kleos.space/wp-content/uploads/2021/09/earth.jpg",
        }}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-full max-w-xs items-center">
            <Pressable
              className="w-full mb-10 px-4 py-5 bg-purple-600 rounded items-center shadow-md shadow-purple-900/90"
              onPress={() => router.push("/leaflet")}
            >
              <Text className="text-white font-medium text-lg">Leaflet</Text>
            </Pressable>
            <Pressable
              className="w-full px-4 py-5 bg-blue-600 rounded items-center shadow-md shadow-blue-900/90"
              onPress={() => router.push("/maplibre")}
            >
              <Text className="text-white font-medium text-lg">MapLibre</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
