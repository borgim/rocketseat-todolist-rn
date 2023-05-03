import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  ListArea: {
    paddingHorizontal: 24,
    marginTop: -30,
  },
  addTaskArea: {
    flexDirection: "row",
    gap: 4,
  },
  TaskInput: {
    backgroundColor: "#262626",
    color: "#808080",
    padding: 16,
    borderColor: "#0D0D0D",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    flex: 1,
  },
  AddButton: {
    padding: 18,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  List: {
    marginTop: 32,
  },
  StatusArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  Status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  StatusText: {
    fontSize: 14,
    fontWeight: "700",
  },
  StatusCreated: {
    color: "#4EA8DE",
  },
  StatusFinished: {
    color: "#8284FA",
  },
  StatusIndicator: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 99999,
  },
  StatusIndicatorText: {
    color: "#fff",
  },
});