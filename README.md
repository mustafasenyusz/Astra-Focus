Astra Focus: Stratejik Hedef Yönetim Sistemi
Bu projede, modern mobil uygulama geliştirme standartlarını baz alarak, kullanıcıların günlük hedeflerini yüksek odakla yönetebileceği bir disiplin mimarisi inşa ettim. Sadece bir liste uygulaması değil, önceliklendirme matrisi üzerine kurulu bir yönetim aracı hedefledim.

🛠 Teknik Uygulama ve Tercihler
Projeyi geliştirirken performansı ve veri tutarlılığını ön planda tutarak şu teknolojileri kullandım:

Expo Router (File-based Routing): Uygulama içi navigasyon yapısını, ölçeklenebilir ve dosya tabanlı bir sistem olan Expo Router ile kurguladım. Sayfalar arası geçişleri (Login, Welcome, Goals vb.) bu yapı üzerinden yöneterek dizin hiyerarşisini optimize ettim.

Redux Toolkit (State Management): Uygulamanın merkezi veri yönetimini store üzerinden sağladım. goalSlice ve userSlice gibi modüller oluşturarak, veri akışını global seviyede kontrol edilebilir hale getirdim.

Redux-Persist & AsyncStorage: Kullanıcı deneyimini kesintisiz kılmak adına, girilen hedeflerin cihaz hafızasında kalıcı olmasını sağladım. Uygulama kapansa dahi verilerin AsyncStorage üzerinde muhafaza edilmesini sağlayan bir persist mimarisi kurdum.

TypeScript: Proje genelinde tip güvenliğini sağlayarak çalışma zamanı hatalarını minimize ettim. Görevler ve kullanıcı verileri için özel interface ve type tanımlamaları yaptım.

 Mantıksal Mimari
Uygulamanın işleyişinde şu mantıksal süreçleri uyguladım:

Stratejik Sınıflandırma: Hedefleri eklerken Kritik, Orta ve Düşük olmak üzere üç farklı önem seviyesi belirledim. Bu seviyelere göre dinamik renk göstergeleri atayarak görsel hiyerarşi oluşturdum.

Dinamik Statü Yönetimi: Hedefleri "Yapılacaklar" ve "Tamamlananlar" olarak iki ayrı klasmana ayırdım. Bir hedef işaretlendiği anda, filtreleme mantığıyla otomatik olarak ilgili listeye taşınmasını sağladım.

Bilişsel Yükü Azaltma: Arayüz tasarımında minimalist ve kurumsal bir dil kullanarak kullanıcının sadece hedeflerine odaklanmasını amaçladım.

Geliştirici: Mustafa Şenyüz
