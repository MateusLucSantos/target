import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { s } from "./styles";
import { colors } from "@/theme";

type Props = TouchableOpacityProps & {
  tilte: string;
  isProcessing?: boolean;
};

export function Button({ tilte, isProcessing = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={s.container}
      activeOpacity={0.8}
      disabled={isProcessing}
      {...rest}
    >
      <Text style={s.title}>
        {isProcessing ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          tilte
        )}
      </Text>
    </TouchableOpacity>
  );
}
