import { TransactionTypes } from "@/utils/TransactionTypes";
import { Option } from "./option";
import { s } from "./styles";
import { colors } from "@/theme";
import { View } from "react-native";

type Props = {
  selected: TransactionTypes;
  onChange: (type: TransactionTypes) => void;
};

export function TransactionType({ selected, onChange }: Props) {
  return (
    <View style={s.container}>
      <Option
        icon="arrow-downward"
        title="Guardar"
        isSelected={selected === TransactionTypes.Input}
        selectorColor={colors.blue[500]}
        onPress={() => onChange(TransactionTypes.Input)}
      />

      <Option
        icon="arrow-upward"
        title="Retirar"
        isSelected={selected === TransactionTypes.Output}
        selectorColor={colors.red[400]}
        onPress={() => onChange(TransactionTypes.Output)}
      />
    </View>
  );
}
