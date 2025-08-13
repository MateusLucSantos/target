import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";
import { router } from "expo-router";
import { colors } from "@/theme";

type Props = {
  title: string;
  subtitle?: string;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
};

export function PageHeader({ title, subtitle, rightButton }: Props) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>

        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            <MaterialIcons
              name={rightButton.icon}
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={s.title}>{title}</Text>
      {subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
  );
}
