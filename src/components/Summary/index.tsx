import { ColorValue, Text, View } from "react-native";
import { s } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

export type SummaryProps = {
  label: string;
  value: string;
};

type Props = {
  data: SummaryProps;
  icon: {
    name: keyof typeof MaterialIcons.glyphMap;
    color: ColorValue;
  };
  isRight?: boolean;
};

export function Summary({ data, icon, isRight = false }: Props) {
  return (
    <View style={s.container}>
      <View style={[s.header, isRight && { justifyContent: "flex-end" }]}>
        <MaterialIcons name={icon.name} size={16} color={icon.color} />
        <Text style={s.label}>{data.label}</Text>
      </View>
      <Text style={s.value}>{data.value}</Text>
    </View>
  );
}
