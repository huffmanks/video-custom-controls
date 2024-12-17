import { Link } from "expo-router";
import { SafeAreaView, View } from "react-native";

import { Text } from "@/components/ui/text";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex-1 border border-red-500">
      <View className="flex-1 p-6">
        <Link href={"/video"}>
          <Text className="text-primary">Watch video</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
