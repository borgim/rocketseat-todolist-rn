import { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, Alert, FlatList } from 'react-native'
import { PlusCircle } from 'lucide-react-native'
import { styles } from './styles'
import { Task } from '../Task'
import { ListEmpty } from '../ListEmpty'

export interface TasksProps {
  name: string
  isFinished: boolean
  id: string
}

export const List = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    if (tasks.some(task => task.name === newTask)) {
      return Alert.alert("Task já cadastrada", `Uma task com o nome ${newTask} já existe`)
    }

    const newTaskData = {
      name: newTask,
      isFinished: false,
      id: new Date().getTime().toString()
    }

    setTasks(prevState => [...prevState, newTaskData])
    setNewTask('')
  }

  function handleFinishTask(taskToFinish: string) {
    const currentTaskIndex = tasks.findIndex((task) => task.id === taskToFinish)

    const currentTaskStatus = tasks[currentTaskIndex].isFinished

    const updatedTask: TasksProps = { ...tasks[currentTaskIndex], isFinished: !currentTaskStatus }

    const newTasks = [
      ...tasks.slice(0, currentTaskIndex),
      updatedTask,
      ...tasks.slice(currentTaskIndex + 1)
    ]

    setTasks(newTasks)
  }

  function deleteTask(taskToDelete: string) {
    const taskListWithoutDeleted = tasks.filter(task => task.id !== taskToDelete)

    setTasks(taskListWithoutDeleted)

    return
  }

  function handleDeleteTask(taskToDelete: string) {

    const nameOfTaskToDelete = tasks.findIndex((task) => task.id === taskToDelete)

    Alert.alert("Exluir tarefa", `Tem certeza que deseja excluir a tarefa ${tasks[nameOfTaskToDelete].name}?`, [
      {
        text: 'Sim',
        onPress: () => deleteTask(taskToDelete),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const countFinishedTasks = tasks.filter((task) => task.isFinished).length

  return (
    <View style={styles.ListArea}>
      <View style={styles.addTaskArea}>
        <TextInput placeholder='Adicione uma nova tarefa' value={newTask} onChangeText={setNewTask} placeholderTextColor={'#808080'} style={styles.TaskInput} />
        <TouchableOpacity onPress={handleCreateNewTask} style={styles.AddButton}>
          <PlusCircle size={16} color='white' />
        </TouchableOpacity>
      </View>
      <View style={styles.List}>

        <View style={styles.StatusArea}>
          <View style={styles.Status}>
            <Text style={[styles.StatusText, styles.StatusCreated]}>
              Criadas
            </Text>
            <View style={styles.StatusIndicator}>
              <Text style={styles.StatusIndicatorText}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.Status}>
            <Text style={[styles.StatusText, styles.StatusFinished]}>
              Concluídas
            </Text>
            <View style={styles.StatusIndicator}>
              <Text style={styles.StatusIndicatorText}>{countFinishedTasks}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={task => task.id}
          renderItem={({ item }) => <Task {...item} onDelete={handleDeleteTask} onUpdate={handleFinishTask} />}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    </View>
  )
}