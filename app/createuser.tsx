import { kullaniciTipi, register } from "@/store/userSlice";
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
import { useDispatch } from "react-redux";

const CreateUserScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [kullanici_adi, setKullanici_adi] = useState("");
  const [sifre, setSifre] = useState("");
  const [sifreTekrar, setSifreTekrar] = useState("");

  const handleRegister = () => {
    if (!kullanici_adi || !sifre || !sifreTekrar) {
      Alert.alert("Eksik Bilgi", "Lütfen tüm alanları doldur bremmin.");
      return;
    }
    if (sifre !== sifreTekrar) {
      Alert.alert("Hata", "Şifreler birbiriyle tutmuyor kanka.");
      return;
    }

    const YeniKullanici: kullaniciTipi = {
      id: Date.now().toString(),
      kullanici_adi: kullanici_adi,
      sifre: sifre,
      rol: "kullanici",
      aktifMi: false,
    };

    dispatch(register(YeniKullanici));
    Alert.alert("Başarılı", "Kayıt tamam, hadi giriş yapalım!");
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Klavye açıldığında inputların kapanmaması için sarmaladık */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.header}>
            <Text style={styles.title}>ASTRA</Text>
            <Text style={styles.subtitle}>Yeni Bir Hesap Oluştur</Text>
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
                placeholder="Şifre"
                placeholderTextColor="#ADBAC0"
                value={sifre}
                onChangeText={setSifre}
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Şifre Tekrar"
                placeholderTextColor="#ADBAC0"
                value={sifreTekrar}
                onChangeText={setSifreTekrar}
                secureTextEntry
              />
            </View>

            <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.registerButton} 
                onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Zaten üye misin?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.linkText}>Giriş Yap</Text>
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
  title: { 
    fontSize: 42, 
    fontWeight: '900', 
    color: '#2D3436', 
    letterSpacing: 10,
    textTransform: 'uppercase'
  },
  subtitle: { 
    fontSize: 12, 
    color: '#636E72', 
    marginTop: 8, 
    letterSpacing: 2,
    fontWeight: '600'
  },
  form: { width: '100%', gap: 18 },
  inputContainer: { 
    backgroundColor: '#FFF', 
    borderRadius: 18, 
    paddingHorizontal: 20, 
    height: 65, 
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2, // Android gölge
  },
  input: { fontSize: 16, color: '#2D3436', fontWeight: '500' },
  registerButton: { 
    backgroundColor: '#A29BFE', 
    paddingVertical: 20, 
    borderRadius: 18, 
    alignItems: 'center', 
    marginTop: 10,
    shadowColor: "#A29BFE",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  registerButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 40, gap: 8 },
  footerText: { color: '#636E72', fontSize: 14 },
  linkText: { color: '#A29BFE', fontSize: 14, fontWeight: '800' },
});

export default CreateUserScreen;