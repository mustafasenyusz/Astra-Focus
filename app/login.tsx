import { RootState } from "@/store/store";
import { login } from "@/store/userSlice";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  // Redux'taki güncel kullanıcı verisini çekiyoruz
  const kayitliKullanici = useSelector((state: RootState) => state.user);
  
  const [kullanici_adi, setKullanici_adi] = useState("");
  const [sifre, setSifre] = useState("");

  const handleLogin = () => {
    // 1. Boşluk Kontrolü
    if (!kullanici_adi || !sifre) {
      Alert.alert("Eksik Bilgi", "Lütfen tüm alanları doldur bremmin.");
      return;
    }

    // 2. Redux verisiyle inputları karşılaştırma
    // Not: Kayıtlı kullanıcı adı boş değilse ve inputlarla eşleşiyorsa girer
    if (
      kayitliKullanici.kullanici_adi !== "" &&
      kullanici_adi === kayitliKullanici.kullanici_adi && 
      sifre === kayitliKullanici.sifre
    ) {
      dispatch(login(kayitliKullanici));
      router.replace("/homepage"); 
    } else {
      Alert.alert("Hata", "Kullanıcı adı veya şifre yanlış.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.header}>
            <Text style={styles.title}>ASTRA FOCUS</Text>
            <Text style={styles.subtitle}>Hesabına Giriş Yap</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Kullanıcı Adı"
                placeholderTextColor="#ADBAC0"
                value={kullanici_adi}
                onChangeText={setKullanici_adi}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setSifre}
                value={sifre}
                secureTextEntry
                placeholder="Şifre"
                placeholderTextColor="#ADBAC0"
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Hesabın yok mu?</Text>
            <TouchableOpacity onPress={() => router.push("/createuser")}>
              <Text style={styles.linkText}>Hemen Oluştur</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContent: { flexGrow: 1, paddingHorizontal: 30, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 50 },
  title: { fontSize: 40, fontWeight: '800', color: '#2D3436', letterSpacing: 8 },
  subtitle: { fontSize: 14, color: '#ADBAC0', marginTop: 10, letterSpacing: 2 },
  form: { width: '100%', gap: 15 },
  inputContainer: { backgroundColor: '#FFF', borderRadius: 15, paddingHorizontal: 15, borderWidth: 1, borderColor: '#F0F0F0', height: 60, justifyContent: 'center' },
  input: { fontSize: 16, color: '#2D3436' },
  loginButton: { backgroundColor: '#A29BFE', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginTop: 10, elevation: 3 },
  loginButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 30, gap: 5 },
  footerText: { color: '#636E72', fontSize: 14 },
  linkText: { color: '#A29BFE', fontSize: 14, fontWeight: 'bold' },
});

export default LoginScreen;