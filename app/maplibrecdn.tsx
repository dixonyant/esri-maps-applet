import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function MapLibreCDN() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>MapLibre CDN Page</Text>
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
}