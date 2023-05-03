import { TouchableOpacity, View, Text } from 'react-native'
import { CheckIcon, Trash2Icon } from 'lucide-react-native'
import { TasksProps } from '../List'
import { styles } from './styles'

interface TaskProps extends TasksProps {
  onUpdate: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export const Task = ({ name, id, isFinished, onDelete, onUpdate }: TaskProps) => {
  return (
    <View key={name} style={styles.Task}>
      <TouchableOpacity onPress={() => onUpdate(id)} style={isFinished ? styles.CheckboxChecked : styles.Checkbox}>
        {isFinished && <CheckIcon size={14} color='white' />}
      </TouchableOpacity>
      <View style={styles.TaskName}>
        <Text style={[styles.TaskNameText, isFinished && styles.TaskNameTextFinished]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.TaskTrash}>
        <Trash2Icon height={16} color='white' />
      </TouchableOpacity>
    </View>
  )
}