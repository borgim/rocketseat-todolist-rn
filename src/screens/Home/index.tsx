import { View, Text } from 'react-native'
import { Header } from '../../components/Header'
import { List } from '../../components/List'
import { styles } from './styles'
import { ListEmpty } from '../../components/ListEmpty'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <List />
    </View>
  )
}