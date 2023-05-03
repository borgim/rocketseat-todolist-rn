import { Text, View } from 'react-native'
import { ClipboardSignatureIcon } from 'lucide-react-native'
import { styles } from './styles'

export const ListEmpty = () => {
  return (
    <View style={styles.ListEmpty}>
      <ClipboardSignatureIcon size={56} color='white' />
      <View>
        <Text style={styles.ListEmptyWarning}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.ListEmptyWarningDescription}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}