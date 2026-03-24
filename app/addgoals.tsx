import { addgoal, GorevTipi } from "@/store/goalSlice";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const AddGoalScreen = () => {
  const [baslik, setBaslik] = useState("")
  const [icerik, setIcerik] = useState("")
  const [onemderecesi, setOnemDerecesi] = useState<1 | 2 | 3>(1)
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEkle = () => {
    if (!baslik || !icerik) {
      Alert.alert("Lütfen gerekli tüm alanları doldurunuz")
      return
    }

    const yeniGorev: GorevTipi = {
      id: Date.now().toString(),
      gorevBasligi: baslik,
      gorevAciklamasi: icerik,
      onemDerecesi: onemderecesi,
      tamamlandıMı: false,
    }
    dispatch(addgoal(yeniGorev))
    setBaslik("")
    setIcerik("")
    setOnemDerecesi(1)
    router.back()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>HADİ BİR HEDEF BELİRLE</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Hedef Başlığı"
        placeholderTextColor="#A0A0A0"
        onChangeText={setBaslik}
        value={baslik}
      />
      <TextInput
        style={styles.input}
        placeholder="Nasıl Bir Yol İzleyeceksin?"
        placeholderTextColor="#A0A0A0"
        onChangeText={setIcerik}
        value={icerik}
      />

      <View style={styles.priorityContainer}>
        <Text style={styles.priorityLabel}>Önem Derecesi Seç</Text>
        <View style={styles.priorityRow}>
          <TouchableOpacity 
            style={[styles.priorityBtn, onemderecesi === 1 && styles.activePriorityBtnLow]}
            onPress={() => setOnemDerecesi(1)}
            activeOpacity={0.8}
          >
            <Text style={[styles.priorityText, onemderecesi === 1 && styles.activePriorityText]}>Düşük</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.priorityBtn, onemderecesi === 2 && styles.activePriorityBtnMedium]}
            onPress={() => setOnemDerecesi(2)}
            activeOpacity={0.8}
          >
            <Text style={[styles.priorityText, onemderecesi === 2 && styles.activePriorityText]}>Orta</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.priorityBtn, onemderecesi === 3 && styles.activePriorityBtnHigh]}
            onPress={() => setOnemDerecesi(3)}
            activeOpacity={0.8}
          >
            <Text style={[styles.priorityText, onemderecesi === 3 && styles.activePriorityText]}>Kritik</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addBtn}
        onPress={handleEkle}>
        <Text style={styles.addBtnText}>Görevi Ekle</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#FFFFFF', justifyContent: 'center' },
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#2D3436', marginBottom: 30, textAlign: 'center' },
  input: { 
    backgroundColor: '#F8F9FA', 
    borderRadius: 15, 
    padding: 18, 
    fontSize: 16, 
    color: '#2D3436',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 15
  },
  priorityContainer: { marginBottom: 30, marginTop: 10 },
  priorityLabel: { fontSize: 14, fontWeight: '800', color: '#B2BEC3', marginBottom: 12, letterSpacing: 1 },
  priorityRow: { flexDirection: 'row', gap: 10 },
  priorityBtn: { 
    flex: 1, 
    padding: 15, 
    borderRadius: 12, 
    backgroundColor: '#F8F9FA', 
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  priorityText: { fontWeight: '700', color: '#B2BEC3', fontSize: 13 },
  activePriorityText: { color: '#FFF' },
  activePriorityBtnLow: { backgroundColor: '#A29BFE', borderColor: '#A29BFE' },
  activePriorityBtnMedium: { backgroundColor: '#FAB1A0', borderColor: '#FAB1A0' },
  activePriorityBtnHigh: { backgroundColor: '#FF7675', borderColor: '#FF7675' },
  addBtn: { 
    backgroundColor: '#2D3436', 
    padding: 20, 
    borderRadius: 18, 
    alignItems: 'center',
    marginTop: 10
  },
  addBtnText: { color: '#FFF', fontSize: 16, fontWeight: '800' }
});

export default AddGoalScreen;