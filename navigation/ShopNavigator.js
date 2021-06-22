import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

import ProductOverViewScreen from "../screens/shop/ProductOverview";

const ProductNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverViewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.backgroundDark : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductNavigator);
