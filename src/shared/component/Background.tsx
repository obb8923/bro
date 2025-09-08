import { View, ViewStyle,ImageBackground } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle | ViewStyle[];
  isStatusBarGap?: boolean;
  isTabBarGap?: boolean;
  isImage?: number;
}
export const Background = ({children,isStatusBarGap=false,isTabBarGap=false,isImage=0,...props}: BackgroundProps) => {
  const insets = useSafeAreaInsets();

  if(isImage===1){
    return (
      <ImageBackground 
      resizeMode="cover"
      source={require(`../../../assets/pngs/B1.png`)} 
      className={`flex-1 ${props.className}`}
      style={{
        paddingTop: isStatusBarGap ? insets.top : 0, 
        paddingBottom: isTabBarGap ? insets.bottom : 0, ...props.style}}>
        {children}
      </ImageBackground>
    )
  }
  return (
    <View 
    className={`flex-1 bg-background ${props.className}`} 
    style={{
      paddingTop: isStatusBarGap ? insets.top : 0, 
      paddingBottom: isTabBarGap ? insets.bottom : 0, ...props.style}}>
        <View className="flex-1">
      {children}
      </View>
    </View>    
  )
}
