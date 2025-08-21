import { StyleSheet, Text, View } from 'react-native';
import { categories } from '../constants/categories';
import CategoryItem from './CategoryItem';
import { colors } from '../constants/colors';

export interface TransactionItemProps {
  category: keyof typeof categories;
  date: string;
  description: string;
  value: number;
}

export default function TransactionItem({
  category,
  date,
  description,
  value,
}: TransactionItemProps) {
  const valueStyle =
    category === categories.income.name
      ? styles.positiveText
      : styles.negativeText;

  return (
    <>
      <View style={styles.itemContainer}>
        <CategoryItem category={category} />
        <View style={styles.textContainer}>
          <Text style={styles.secondaryText}>
            {new Date(date).toLocaleDateString('pt-BR')}
          </Text>
          <View style={styles.bottomLineContainer}>
            <Text style={styles.primaryText}>{description}</Text>
            <Text style={valueStyle}>
              {value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
  },
  textContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    paddingVertical: 8,
  },
  bottomLineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryText: {
    fontSize: 16,
    color: colors.primaryText,
  },
  secondaryText: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  positiveText: {
    fontSize: 16,
    color: colors.positiveText,
  },
  negativeText: {
    fontSize: 16,
    color: colors.negativesText,
  },
  line: {
    backgroundColor: colors.secondaryText,
    height: 1,
    opacity: 0.5,
    marginBottom: 4,
  },
});
