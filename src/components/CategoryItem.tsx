import { categories } from "../constants/categories"
import { StyleSheet, Text, View } from "react-native"

interface CategoryItemProps {
  category: keyof typeof categories
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <View style={styles({ category }).background}>
      <Text>{category.charAt(0).toUpperCase()}</Text>
    </View>
  )
}

interface CategoryItemStyles {
  category: keyof typeof categories
}

const styles = ({ category }: CategoryItemStyles) =>
  StyleSheet.create({
    background: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: categories[category].background
    }
  })