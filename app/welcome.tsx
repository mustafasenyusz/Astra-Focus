import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = () => {
  const router = useRouter();

  const Baslik = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.appName}>ASTRA FOCUS</Text>
      <Text style={styles.tagline}>POTANSİYELİNİ KEŞFET</Text>
    </View>
  );

  const AltCizgi = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Baslik />

        <View style={styles.content}>
          <Text style={styles.infoText}>Seni tekrar görmek güzel.</Text>
          
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.primaryButtonText}>Giriş Yap</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <AltCizgi />
            <Text style={styles.orText}>VEYA</Text>
            <AltCizgi />
          </View>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => router.push("/createuser")}
          >
            <Text style={styles.secondaryButtonText}>Hesap Oluştur</Text>
          </TouchableOpacity>
          
          <Text style={styles.footerNote}>Hayatını sadeleştir, odağını koru.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-around',
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  appName: {
    fontSize: 48,
    fontWeight: '800',
    color: '#2D3436',
    letterSpacing: 10,
  },
  tagline: {
    fontSize: 13,
    color: '#ADBAC0',
    marginTop: 10,
    letterSpacing: 3,
    fontWeight: '600',
  },
  content: {
    width: '100%',
    gap: 15,
  },
  infoText: {
    color: '#636E72',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#A29BFE',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: "#A29BFE",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    gap: 15,
  },
  separator: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    color: '#B2BEC3',
    fontSize: 11,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: '#FFF',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#F0F0F0',
  },
  secondaryButtonText: {
    color: '#2D3436',
    fontSize: 17,
    fontWeight: '600',
  },
  footerNote: {
    color: '#ADBAC0',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 25,
    fontStyle: 'italic',
  }
});

export default WelcomeScreen;