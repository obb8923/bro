import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "@/shared/component/Text";
import { Background } from "@/shared/component/Background";
import { useSetActiveTab } from "@/shared/store/tabStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ChatScreen = () => {
  const setActiveTab = useSetActiveTab();
  const insets = useSafeAreaInsets();
  return (
    <Background isStatusBarGap={true} isTabBarGap={true} isImage={1}>
      {/* to calendarScreen Button */}
        {/* <TouchableOpacity 
        
        onPress={() => setActiveTab('Calendar')}
          className="absolute top-0 right-0 p-4 bg-red-500 rounded-full"
          style={{
            top: insets.top,
            right: insets.right,
          }}
        >
          <Text text="calendar" type="regular" className="text-white text-xl"/>
        </TouchableOpacity> */}
      {/* character area */}
      <View className="flex-1 justify-end items-center">
        {/* character box */}
        <View className="w-1/2 h-3/4 bg-blue-500">

        </View>
      </View>
      {/* chat box area */}
      <View className="absolute bottom-0 left-0 right-0 h-1/3 bg-red-500/40 p-4 ">
        <View className="flex-1 border-4 border-black rounded-3xl pt-6">
          {/* name box */}
          <View className="absolute top-[-20] left-4 self-start px-4 py-2 bg-red-500 rounded-full">
            <Text text="jackson" type="kb2019" className="text-white text-xl"/>
          </View>
          {/* chat box */}
          <ScrollView className="flex-1 bg-white/40 px-4" showsVerticalScrollIndicator={false}>
            <Text 
            text=" llo, how are you? Hello, how are you? Hello,  llo, how are you? Hello, how are you? Hello, llo, how are you? Hello, how are you? Hello, llo, how are you? Hello, how are you? Hello, llo, how are you? Hello, how are you? Hello, Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you?" 
            type="regular" 
            className="text-black text-xl"
            />
          </ScrollView>
        </View>
      </View>
    </Background>
  );
};