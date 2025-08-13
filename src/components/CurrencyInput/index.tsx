import { Text, TextInput, TextInputProps, View } from "react-native";
import Input, { CurrencyInputProps } from "react-native-currency-input";

import { s } from "./styles";
import { colors } from "@/theme";

type Props = CurrencyInputProps & {
  label: string;
};

export function CurrencyInput({ label, ...rest }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>

      <Input
        style={s.input}
        placeholderTextColor={colors.gray[400]}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        {...rest}
      />
    </View>
  );
}
