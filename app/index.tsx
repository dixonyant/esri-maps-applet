import { Text, View, Pressable, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
      <ImageBackground
        source={{
          uri: "https://www.esri.com/arcgis-blog/wp-content/uploads/2021/08/Nighttime-Lights-Globe-EastHem2.jpg",
        }}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View
          className="flex-1 justify-center items-center bg-black/50"
        >
          <View className="w-full max-w-xs items-center">
            <Pressable
              className="w-full mb-4 px-4 py-3 bg-purple-600 rounded items-center"
              onPress={() => router.push("/leafletcdn")}
            >
              <Text className="text-white font-medium text-lg">
                Leaflet CDN
              </Text>
            </Pressable>
            <Pressable
              className="w-full px-4 py-3 bg-green-600 rounded items-center"
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
