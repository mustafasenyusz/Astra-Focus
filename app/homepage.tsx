import { RootState } from '@/store/store';
import { logout } from '@/store/userSlice';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.greeting}>Hedeflerine giden yolda yanındayız</Text>
          <Text style={styles.userName}>Hoş geldin, {user.kullanici_adi || 'Bremmin'}</Text>
        </View>

        <View style={styles.menuGrid}>
          
          <TouchableOpacity 
            activeOpacity={0.9}
            style={[styles.card, styles.primaryCard]}
            onPress={() => router.push("/addgoals")}
          >
            <View style={styles.cardIconPlaceholder}>
              <Text style={styles.iconText}>+</Text>
            </View>
            <Text style={styles.cardTitle}>Görev Ekle</Text>
            <Text style={styles.cardDesc}>Yeni bir hedef belirle</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => router.push("/goals")}
          >
            <Text style={styles.cardTitleDark}>Görevlerim</Text>
            <Text style={styles.cardDesc}>Tüm listeyi görüntüle</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => router.push("/hakkimizda")}
          >
            <Text style={styles.cardTitleDark}>Hakkımızda</Text>
            <Text style={styles.cardDesc}>Astra vizyonunu tanı</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.logoutBtn}
            onPress={handleLogout}
          >
            <Text style={styles.logoutBtnText}>Güvenli Çıkış Yap</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContent: { padding: 25 },
  header: { marginTop: 40, marginBottom: 35 },
  greeting: { fontSize: 14, color: '#A29BFE', fontWeight: '700', letterSpacing: 1 },
  userName: { fontSize: 32, fontWeight: '900', color: '#2D3436', marginTop: 8 },
  
  menuGrid: { gap: 20 },
  
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: 24, 
    padding: 25, 
    borderWidth: 1, 
    borderColor: '#F0F0F0',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3
  },
  primaryCard: { 
    backgroundColor: '#A29BFE', 
    borderColor: '#A29BFE',
    shadowColor: "#A29BFE",
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  cardIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  iconText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  
  cardTitle: { fontSize: 20, fontWeight: '800', color: '#FFF' },
  cardTitleDark: { fontSize: 20, fontWeight: '800', color: '#2D3436' },
  cardDesc: { fontSize: 13, color: 'rgba(0,0,0,0.4)', marginTop: 5, fontWeight: '600' },
  
  logoutBtn: { 
    marginTop: 10, 
    padding: 20, 
    borderRadius: 20, 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: '#FF7675' 
  },
  logoutBtnText: { color: '#FF7675', fontWeight: '800', fontSize: 14 },
});

export default HomePage;