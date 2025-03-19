import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Saved = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
      />
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
    </SafeAreaView>
  );
};

export default Saved;
