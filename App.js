import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SubmitButton from './components/submit_button';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <SubmitButton label='Halla'/>
      </ScrollView>
      <View style={styles.bottomview}>
        <Text style={styles.text}>Buttons go here</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
  bottomview: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
    paddingHorizontal: 100,
    paddingTop: 5,
  },
  scrollViewContainer: {
    marginTop: 40,
    marginBottom: 50,
  }
});
