import { deletegoal, yapildiİsaretle } from "@/store/goalSlice";
import { RootState } from "@/store/store";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const GoalsScreen = () => {
  const gorevler = useSelector((state: RootState) => state.goal);
  const dispatch = useDispatch();

  const yapilacaklar = gorevler.filter(item => !item.tamamlandıMı);
  const tamamlananlar = gorevler.filter(item => item.tamamlandıMı);

  const GoalCard = ({ item }: { item: any }) => (
    <View style={[styles.card, item.tamamlandıMı && styles.completedCard]}>
      <View style={[
        styles.indicator, 
        { backgroundColor: item.onemDerecesi === 3 ? '#FF7675' : item.onemDerecesi === 2 ? '#FAB1A0' : '#A29BFE' }
      ]} />
      
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, item.tamamlandıMı && styles.lineThrough]}>
          {item.gorevBasligi}
        </Text>
        <Text style={styles.desc}>{item.gorevAciklamasi}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => dispatch(yapildiİsaretle(item.id))} style={styles.btn}>
          <View style={[styles.checkCircle, item.tamamlandıMı && styles.checkCircleActive]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(deletegoal(item.id))} style={styles.btn}>
          <Text style={{ fontSize: 18, color: '#FF7675', fontWeight: 'bold' }}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Astra Hedeflerin</Text>

      <FlatList
        data={[...yapilacaklar, ...tamamlananlar]}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={{ color: '#B2BEC3' }}>Henüz bir hedef belirlemedin bremmin.</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View>
            {index === 0 && yapilacaklar.length > 0 && (
              <Text style={styles.sectionTitle}>YAPILACAKLAR</Text>
            )}
            {index === yapilacaklar.length && tamamlananlar.length > 0 && (
              <Text style={[styles.sectionTitle, { marginTop: 25 }]}>TAMAMLANANLAR</Text>
            )}
            <GoalCard item={item} />
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footerInfo}>
            <Text style={styles.infoTitle}>ÖNEM REHBERİ</Text>
            <View style={styles.infoRow}>
              <View style={[styles.dot, { backgroundColor: '#FF7675' }]} /><Text style={styles.infoText}>Kritik</Text>
              <View style={[styles.dot, { backgroundColor: '#FAB1A0' }]} /><Text style={styles.infoText}>Orta</Text>
              <View style={[styles.dot, { backgroundColor: '#A29BFE' }]} /><Text style={styles.infoText}>Düşük</Text>
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#FFFFFF' },
  header: { fontSize: 28, fontWeight: '900', color: '#2D3436', marginBottom: 25, marginTop: 40 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: '#B2BEC3', marginBottom: 15, letterSpacing: 1.5 },
  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0'
  },
  completedCard: { opacity: 0.6, backgroundColor: '#F1F2F6' },
  indicator: { width: 4, height: 35, borderRadius: 10, marginRight: 15 },
  title: { fontSize: 17, fontWeight: '700', color: '#2D3436' },
  desc: { fontSize: 13, color: '#A0A0A0', marginTop: 3 },
  lineThrough: { textDecorationLine: 'line-through', color: '#B2BEC3' },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  btn: { padding: 5 },
  checkCircle: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#DCDDE1' },
  checkCircleActive: { backgroundColor: '#A29BFE', borderColor: '#A29BFE' },
  empty: { flex: 1, alignItems: 'center', marginTop: 100 },
  
  footerInfo: { marginTop: 40, borderTopWidth: 1, borderTopColor: '#F0F0F0', paddingTop: 20, paddingBottom: 40 },
  infoTitle: { fontSize: 10, fontWeight: '800', color: '#B2BEC3', marginBottom: 10, textAlign: 'center', letterSpacing: 1 },
  infoRow: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  infoText: { fontSize: 12, color: '#2D3436', fontWeight: '600' }
});

export default GoalsScreen;