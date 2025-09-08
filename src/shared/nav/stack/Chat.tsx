import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatScreen } from "@chat/screen/ChatScreen";

const Stack = createNativeStackNavigator<ChatStackParamList>();
export type ChatStackParamList = {
  Chat:undefined,  
}

export const ChatStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="Chat">
      <Stack.Screen name="Chat" component={ChatScreen}/>      
    </Stack.Navigator>
  );
};