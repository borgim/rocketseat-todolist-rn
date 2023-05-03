import { View, Image } from "react-native"
import { styles } from "./styles"

export const Header = () => {
  return (
    <View style={styles.Header}>
      <Image source={require('../../assets/Logo.png')} />
    </View>
  )
}