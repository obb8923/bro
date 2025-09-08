import { Background } from "@/shared/component/Background";
import { Text } from "@/shared/component/Text";

export const CalendarScreen = () => {
  return (
    <Background isStatusBarGap={true} isTabBarGap={true}>
      <Text text="CalendarScreen" type="regular" />
    </Background>
  );
};  