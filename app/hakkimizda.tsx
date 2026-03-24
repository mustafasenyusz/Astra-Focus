import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.heroSection}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoLetter}>A</Text>
          </View>
          <Text style={styles.mainTitle}>Astra Focus</Text>
          <Text style={styles.tagline}>Stratejik Hedef ve Disiplin Yönetim Sistemi</Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.sectionHeading}>VİZYON VE METODOLOJİ</Text>
          <Text style={styles.paragraph}>
            Astra Focus, bireysel ve profesyonel verimliliği maksimize etmek amacıyla geliştirilmiş, yüksek performanslı bir dijital yönetim çözümüdür. Geleneksel not alma uygulamalarının ötesine geçerek, kullanıcıya bir "disiplin ekosistemi" sunmayı hedefler.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>1. Stratejik Önceliklendirme Matrisi</Text>
          <Text style={styles.cardText}>
            Uygulamanın temel taşı, hedefleri sadece listelemek değil, onları kritiklik analizine tabi tutmaktır. Üç kademeli önceliklendirme mimarisi; kullanıcının sınırlı olan zaman ve enerji kaynağını, en yüksek katma değer üretecek hedeflere kanalize etmesini sağlar.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>2. Operasyonel Odaklanma (Core Focus)</Text>
          <Text style={styles.cardText}>
            Astra Focus, bilişsel yükü minimize eden minimalist bir kullanıcı arayüzü üzerine inşa edilmiştir. Amacı; karmaşık veri girişleri yerine, kullanıcıyı doğrudan eylem planına odaklamaktır. Bu sayede, operasyonel süreçlerdeki dikkat dağınıklığı elenir.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>3. Dinamik Statü Yönetimi</Text>
          <Text style={styles.cardText}>
            Hedeflerin yaşam döngüsü, Aktif Planlama ve Başarı Kaydı olarak iki ana klasmanda yönetilir. Bu ayrım, kullanıcının mevcut iş yükünü anlık olarak denetlemesine ve tamamlanan projeler üzerinden retrospektif bir başarı analizi yapmasına olanak tanır.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>4. Veri Güvenliği ve Süreklilik</Text>
          <Text style={styles.cardText}>
            Kurumsal standartlara uygun olarak, veri gizliliği en üst seviyede tutulmuştur. Redux-Persist mimarisi ile entegre edilen yerel depolama çözümü, verilerin cihaz dışına çıkmadan güvenli bir şekilde saklanmasını garanti altına alır.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.versionText}>Astra Focus v1.0.0</Text>
        
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { paddingHorizontal: 25, paddingVertical: 40 },
  heroSection: { alignItems: 'center', marginBottom: 40 },
  logoBadge: { width: 70, height: 70, borderRadius: 20, backgroundColor: '#2D3436', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  logoLetter: { color: '#FFFFFF', fontSize: 35, fontWeight: 'bold' },
  mainTitle: { fontSize: 28, fontWeight: '900', color: '#2D3436', letterSpacing: -0.5 },
  tagline: { fontSize: 13, color: '#A29BFE', fontWeight: '700', marginTop: 5, textAlign: 'center' },
  contentBox: { marginBottom: 35 },
  sectionHeading: { fontSize: 11, fontWeight: '800', color: '#B2BEC3', letterSpacing: 2, marginBottom: 15, textAlign: 'center' },
  paragraph: { fontSize: 15, color: '#636E72', lineHeight: 24, textAlign: 'justify' },
  card: { backgroundColor: '#F8F9FA', borderRadius: 16, padding: 20, marginBottom: 15, borderWidth: 1, borderColor: '#F0F0F0' },
  cardTitle: { fontSize: 16, fontWeight: '800', color: '#2D3436', marginBottom: 8 },
  cardText: { fontSize: 14, color: '#636E72', lineHeight: 22 },
  footer: { marginTop: 40, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#F0F0F0', paddingTop: 20 },
  versionText: { fontSize: 12, fontWeight: '700', color: '#2D3436' },
  copyrightText: { fontSize: 10, color: '#B2BEC3', marginTop: 5 }
});

export default AboutScreen;