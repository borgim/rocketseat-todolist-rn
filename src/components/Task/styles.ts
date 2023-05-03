import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  Task: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#262626",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#333333",
    marginBottom: 8,
  },
  Checkbox: {
    width: 17.45,
    height: 17.45,
    backgroundColor: "transparent",
    borderColor: "#4EA8DE",
    borderWidth: 2,
    borderRadius: 99999,
  },
  CheckboxChecked: {
    width: 17.45,
    height: 17.45,
    borderRadius: 99999,
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
  },
  TaskTrash: {
    width: 32,
    height: 32,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  TaskName: {
    flex: 1,
  },
  TaskNameTextFinished: {
    textDecorationLine: "line-through",
  },
  TaskNameText: {
    color: "#fff",
  },
});