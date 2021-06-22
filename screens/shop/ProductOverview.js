import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ProductOverViewScreen = (props) => {
  const products = useSelector((state) => state.products.avilableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

ProductOverViewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverViewScreen;
