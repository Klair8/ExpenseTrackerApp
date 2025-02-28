import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Card, Icon, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/TabNavigator"
import { useNavigation } from "@react-navigation/native"
import { spacing } from "app/theme"


export const HomeScreen: FC<TabScreenProps<"HomeStack">> = function HomeScreen(_props) {

  const navigation = useNavigation<any>() ;

  const DetailsTransactions = ()=>{
    navigation.navigate("HomeStack", {screen:"Transactions"})
  };

    return (
        <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
          <Text preset="heading" tx="HomeScreen.title" style={$title} />
   
          <Card
            heading="Total Balance"
            content="balcne of the user here"
            footer="left income / right expense"
            />

        <Text  tx="HomeScreen.body" style={$title} />
        <Text  tx="HomeScreen.bodyOption" style={$title} onPress={DetailsTransactions} />
        {/* Mapping of the transaction via cards     */}
        <Card
            heading="FOOD"
            LeftComponent={
            <Icon icon="ladybug" />}
            content="-45dollars (exemple)"
            footer="Today"
        />
      
        </Screen>
      )
    }
  
  const $container: ViewStyle = {
    paddingTop: spacing.lg + spacing.xl,
    paddingHorizontal: spacing.lg,
  }
  
  const $title: TextStyle = {
    marginBottom: spacing.sm,
  }
