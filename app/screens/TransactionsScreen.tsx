import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Card, Icon, ListItem, Screen, Text, TextField, Toggle, ToggleProps} from "../components"
import { TabScreenProps } from "../navigators/TabNavigator"
import { colors, spacing } from "../theme"

import { isRTL } from "../i18n"
import { useNavigation } from "@react-navigation/native"
import { Divider } from "app/components/Divider"

function ControlledToggle(props: ToggleProps) {
  const [value, setValue] = React.useState(props.value || false)
  return <Toggle {...props} value={value} onPress={() => setValue(!value)} />
}

export const TransactionsScreen: FC<TabScreenProps<"Transactions">> = function TransactionsScreen(_props) {
    
    
    const navigation = useNavigation<any>() ;
      
    const navigationBack =()=>{
        navigation.navigate("HomeStack", {screen:"HomeScreen"})
    }
    
    
    
    return (
        <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
          <Text preset="heading" tx="TransactionsScreen.title" style={$title} />
        <Text  onPress={navigationBack}>Go back</Text>
          <ControlledToggle
            variant="switch"
             label="`income /expense switch "
            switchAccessibilityMode="text"
               inputOuterStyle={{
                      width: 70,
                      height: 50,
                      borderRadius: 25,
                      backgroundColor: colors.palette.accent300,
                      borderColor: colors.palette.accent500,
                    }}
                    inputInnerStyle={{
                      backgroundColor: colors.palette.accent500,
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
            />
       
   
           <Divider size={50}  />         
          <Text>Date</Text>
          <Divider size={20}  /> 
           <TextField
            placeholder="Categories" /> 
            <TextField
            placeholder="Note" /> 

        <Divider size={250}  /> 
        <Button>save</Button>
      
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
