import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function App() {
  
  // Directly opens your pages in Safari without running any native iOS code blocks
  const handlePress = (route) => {
    Linking.openURL(`https://zewpol.neocities.org`).catch(() => {
      alert("Terminal Connection Error");
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* Terminal Header */}
        <Text style={styles.header}>ZEWPOL CORE ENGINE</Text>
        <Text style={styles.sub}>System Terminal Active</Text>

        {/* Section 1 */}
        <Text style={styles.tag}>// SYSTEM DIRECTORIES</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('files')}>
            <Text style={styles.ico}>🗄️</Text><Text style={styles.txt}>Files</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('maps')}>
            <Text style={styles.ico}>🗺️</Text><Text style={styles.txt}>Maps</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('stream')}>
            <Text style={styles.ico}>📻</Text><Text style={styles.txt}>Stream</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('ai-chat')}>
            <Text style={styles.ico}>🤖</Text><Text style={styles.txt}>AI Chat</Text>
          </TouchableOpacity>
        </View>

        {/* Section 2 */}
        <Text style={styles.tag}>// DATA MODULES</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('browser')}>
            <Text style={styles.ico}>🌐</Text><Text style={styles.txt}>Browser</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('whiteboard')}>
            <Text style={styles.ico}>📋</Text><Text style={styles.txt}>Whiteboard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('wordle')}>
            <Text style={styles.ico}>🧩</Text><Text style={styles.txt}>Wordle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('blocks')}>
            <Text style={styles.ico}>🧱</Text><Text style={styles.txt}>Blocks</Text>
          </TouchableOpacity>
        </View>

        {/* Section 3 */}
        <Text style={styles.tag}>// HOST CORES</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('workspace')}>
            <Text style={styles.ico}>💻</Text><Text style={styles.txt}>Workspace</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.alertBorder]} onPress={() => handlePress('')}>
            <Text style={styles.ico}>💿</Text><Text style={styles.txt}>Zewpol Home</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0c', paddingTop: 50 },
  scroll: { paddingHorizontal: 20, paddingBottom: 40 },
  header: { color: '#66fcf1', fontSize: 26, fontWeight: 'bold', textAlign: 'center', letterSpacing: 2 },
  sub: { color: '#888', fontSize: 12, textAlign: 'center', textTransform: 'uppercase', marginBottom: 25, marginTop: 4 },
  tag: { color: '#45f3ff', fontSize: 13, fontWeight: 'bold', marginBottom: 10, marginTop: 15, fontFamily: 'monospace' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  btn: { backgroundColor: '#141418', width: '48%', paddingVertical: 20, borderRadius: 6, alignItems: 'center', marginVertical: 6, borderWidth: 1, borderColor: '#222' },
  alertBorder: { borderColor: '#66fcf1' },
  ico: { fontSize: 28, marginBottom: 6 },
  txt: { color: '#eee', fontSize: 13, fontWeight: '600' }
});

