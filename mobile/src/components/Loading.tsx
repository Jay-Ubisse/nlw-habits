import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from 'react-native';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#6D28D9" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#09090A',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });