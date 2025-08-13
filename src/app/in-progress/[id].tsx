import { Button } from "@/components/Button";
import { List } from "@/components/List";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 100,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 300,00",
    date: "12/04/2025",
    description: "CDB de 110% no banco XPTO",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 20,00",
    date: "12/04/2025",
    description: "",
    type: TransactionTypes.Output,
  },
];
export default function InProgess() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24, gap: 32, marginBottom: 30 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
      />

      <Button
        tilte="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
