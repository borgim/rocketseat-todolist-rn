import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  ListEmpty: {
    paddingTop: 46,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#333333",
    alignItems: "center",
    gap: 16,
  },
  ListEmptyWarning: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "700",
  },
  ListEmptyWarningDescription: {
    color: "#808080",
    fontSize: 14,
    textAlign: 'center'
  },
});
