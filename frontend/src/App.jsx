export default function App() {
  const benefits = [
    {
      title: 'Deneyimli Program Ekibi',
      text: 'Süreci, alanda uzun yıllardır çalışan profesyonel bir ekip yönetir; fikrini ölçeklenebilir bir işe dönüştürmek için doğru rehberliği alırsın.'
    },
    {
      title: 'Yatırım Yolculuğu Desteği',
      text: 'Yatırım ağları ve iş ortaklarıyla temas kurar, büyüme yolculuğunu yatırımlarla ivmelendirebilirsin.'
    },
    {
      title: '1.350.000 TL Yatırım Desteği',
      text: 'Mükemmeliyet Mührü alan girişimlere TÜBİTAK BiGG Fonu tarafından %3 hisse karşılığında 1.350.000 TL yatırım yapılır. İzleme sürecinde 1.350.000 TL’ye kadar ek devam yatırımı talep edilebilir.'
    },
    {
      title: 'Eğitim ve Mentorluk Ağı',
      text: 'Alanında deneyimli mentorlar ve eğitmenlerle çalışır, iş fikrini potansiyel müşterilerinle doğrulayarak güçlü bir iş modeli kurarsın.'
    },
    {
      title: 'Kuluçka ve Ekosistem Erişimi',
      text: 'Program partnerlerinin kuluçka merkezlerinde yer alma ve farklı kuluçka programlarına katılma fırsatları yakalarsın.'
    },
    {
      title: 'Sürekli Gelişim Desteği',
      text: 'Eğitim, mentorluk ve ilham veren buluşmalarla girişimini farklı boyutlarda sürekli geliştirebileceğin bir ekosisteme dahil olursun.'
    }
  ];

  const callAreas = [
    'Akıllı Ulaşım',
    'Akıllı Üretim Sistemleri',
    'Enerji ve Temiz Teknolojiler',
    'İletişim ve Sayısal Dönüşüm',
    'Sağlık ve İyi Yaşam',
    'Sürdürülebilir Tarım ve Beslenme'
  ];

  const callDates = [
    { label: 'Başvuru dönemi', value: '15 Haziran – 3 Temmuz 2026' },
    { label: 'Belge teslim son tarihi', value: '10 Temmuz 2026' },
    { label: 'Sonuçların açıklanması', value: '1–4 Eylül 2026' },
    { label: 'Şirket kurulumu ve sözleşme', value: "30 Eylül 2026'ya kadar" },
    { label: 'Destek başlangıcı', value: '1 Ekim 2026' }
  ];

  return (
    <div className="page">
      <div className="bg-slider" aria-hidden="true">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/6171440901722685946_sample_2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <header className="topbar">
          <div className="logo-group">
            <a href="https://tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/1812-yatirim-tabanli-girisimcilik-destek-programi-bigg-yatirim" target="_blank" rel="noreferrer">
              <img
                src="https://www.btsoekonomi.com/upload/bigg-97468.png"
                alt="BİGG"
                className="logo-img"
              />
            </a>
            <span className="logo-divider" aria-hidden="true"></span>
            <a href="https://yeditepe.edu.tr/tr" target="_blank" rel="noreferrer">
              <img
                src="https://yeditepe.edu.tr/themes/custom/yeditepe/logo.svg"
                alt="Yeditepe Üniversitesi"
                className="logo-img yeditepe-logo"
              />
            </a>
          </div>
          <nav className="nav">
            <a href="#program">Program</a>
            <a href="#cagri">Çağrı</a>
            <a href="#surec">Süreç</a>
            <a href="#faydalar">Faydalar</a>
            <a href="#onbasvuru">Ön Başvuru</a>
            <a href="#iletisim">İletişim</a>
          </nav>
          <a
            className="btn btn-primary btn-lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeGX-lVYJkET2Hqtdl0xj_UOOU7uJGB3WdkQvrbTd_K4UxsVg/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
          >
            Ön Başvuru
          </a>
        </header>

        <section className="hero" id="program">
          <div className="hero-content">
            <p className="eyebrow">Yeditepe Üniversitesi</p>
            <h1>TÜBİTAK 1812 BiGG Yatırım Programı için tek noktadan başvuru rehberi.</h1>
            <p className="lead">
              Fikrini doğrula, iş modelini güçlendir, mentorluk ve hızlandırma desteğiyle yatırım aşamasına hazırlan.
              Program koşulları ve güncel takvim için resmi çağrı metnini mutlaka kontrol et (Ön başvuru son tarihi: 31.Mart.2026).
            </p>
            <div className="cta-group">
              <a
                className="btn btn-primary btn-lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGX-lVYJkET2Hqtdl0xj_UOOU7uJGB3WdkQvrbTd_K4UxsVg/viewform?usp=publish-editor"
                target="_blank"
                rel="noreferrer"
              >
                Ön Başvuru Formu
              </a>
              <a className="btn btn-ghost" href="#surec">Süreci İncele</a>
            </div>
            <div className="hero-metrics">
              <div>
                <span>3 Aşamalı Yolculuk</span>
                <small>Ön değerlendirme, hızlandırma ve yatırım hazırlığı</small>
              </div>
              <div>
                <span>Mentorluk Ağı</span>
                <small>Akademi ve sektörden deneyimli mentörler</small>
              </div>
              <div>
                <span>Girişim Ekosistemi</span>
                <small>Girişimci ve yatırımcı bağlantıları</small>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <h3>Hızlı Kontrol Listesi</h3>
            <ul>
              <li>Problem tanımı net mi?</li>
              <li>Çözüm teknoloji odaklı mı?</li>
              <li>Pazar doğrulaması planı var mı?</li>
              <li>Ekip rolleri ve takvim hazır mı?</li>
            </ul>
            <div className="card-note">
              Başvuru sırasında iş planı, takım bilgisi ve mali projeksiyon istenir.
            </div>
          </div>
        </section>

        <section className="section alt" id="cagri">
          <div className="section-title">
            <h2>TÜBİTAK 1812 BiGG 2026-1 Çağrısı</h2>
            <p>
              Tohum Öncesi Yatırım Çağrısı başvuruları açıldı. Program, teknoloji ve yenilik
              odaklı iş fikirlerini katma değer yaratan girişimlere dönüştürmeyi hedefler.
            </p>
          </div>
          <div className="call-grid">
            <div className="call-card">
              <h3>Programa Kimler Başvurabilir?</h3>
              <ul className="check-list">
                <li>BiGG Aşama 1 hızlandırmayı başarıyla tamamlayan girişimciler</li>
                <li>İş planını PRODİS üzerinden TÜBİTAK’a sunabilecek ekipler</li>
                <li>İş planı uygulayıcı kuruluş tarafından onaylanmış başvurular</li>
              </ul>
            </div>
            <div className="call-card">
              <h3>Ne Kadar Destek Sağlanıyor?</h3>
              <ul className="check-list">
                <li>%3 hisse karşılığında 1.350.000 TL yatırım</li>
                <li>İzleme döneminde 1.350.000 TL’ye kadar ek yatırım imkânı</li>
                <li>GCIP kapsamında en yüksek puanlı 3 girişime %5 hisse karşılığı 2.250.000 TL</li>
              </ul>
            </div>
          </div>
          <div className="call-split">
            <div className="call-card">
              <h3>Başvuru Alanları</h3>
              <div className="call-areas">
                <div className="pill-grid call-areas-tags">
                  {callAreas.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
                <div className="call-areas-focus">
                  <div>
                    <h4>Teknoloji ve Ürün</h4>
                    <p>Prototip, pilot uygulama, teknik uygulanabilirlik.</p>
                  </div>
                  <div>
                    <h4>Pazar Doğrulaması</h4>
                    <p>Müşteri keşfi, kullanım senaryosu ve ölçeklenme planı.</p>
                  </div>
                  <div>
                    <h4>Ekip ve Yürütüm</h4>
                    <p>Rol dağılımı, zaman çizelgesi ve uygulama kapasitesi.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="call-card">
              <h3>Önemli Tarihler</h3>
              <div className="timeline">
                {callDates.map((item) => (
                  <div key={item.label} className="timeline-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="surec">
          <div className="section-title">
            <h2>Süreç</h2>
            <p>TÜBİTAK BiGG programı, fikri olgunlaştırıp yatırım hazırlığına taşımaya odaklanır.</p>
          </div>
          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Ön Değerlendirme</h3>
              <p>Girişim fikrinin yenilikçilik, yapılabilirlik ve pazar potansiyeli açısından değerlendirilmesi.</p>
            </div>
            <div className="step">
              <span>02</span>
              <h3>Hızlandırma</h3>
              <p>İş modeli, ürün yol haritası, müşteri keşfi ve finansal planlama desteği.</p>
            </div>
            <div className="step">
              <span>03</span>
              <h3>Yatırım Hazırlığı</h3>
              <p>Demo day, yatırımcı görüşmeleri ve TÜBİTAK süreç yönetimi.</p>
            </div>
          </div>
        </section>

        <section className="section alt" id="faydalar">
          <div className="section-title">
            <h2>Program Faydaları</h2>
            <p>Girişimini yatırım aşamasına taşıyacak destekler tek bir çatı altında sunulur.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <div key={item.title} className="benefit-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section alt" id="onbasvuru">
          <div className="section-title">
            <h2>Ön Başvuru</h2>
            <p>TÜBİTAK BiGG ön başvurusu için ekip bilgilerini ve fikrini paylaş.</p>
          </div>
          <div className="preapply-grid">
            <div className="preapply-info">
              <h3>Başvuruya Hazır mısın?</h3>
              <p>
                Kısa özet, ekip rolleri ve hedef pazar bilgilerini paylaş. Değerlendirme sonrası
                hızlandırma sürecine davet edileceksin.
              </p>
              <div className="preapply-list">
                <span>Problem ve çözüm özeti</span>
                <span>Ekip ve sorumluluklar</span>
                <span>Hedef pazar ve doğrulama</span>
                <span>Planlanan zaman çizelgesi</span>
              </div>
            </div>
            <div className="preapply-card">
              <div className="preapply-badge">Ön Başvuru</div>
              <h4>Ön Başvuru Formu</h4>
              <p>Formu açarak başvurunu başlat ve değerlendirme sürecine dahil ol.</p>
              <div className="preapply-tags">
                <span>Takım lideri bilgisi</span>
                <span>Fikir özeti</span>
                <span>Hedef pazar</span>
              </div>
              <a
                className="btn btn-primary btn-lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnn1ktMmJvREP2jZfei9WDsbHh52g9I_4xsXqv5FYJkWyuaA/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Ön Başvuru Formu
              </a>
              <div className="preapply-note">
                Gerekli: takım lideri bilgisi ve fikir özeti.
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div>
            <h2>Ön başvurunu tamamla, mentorluk sürecine hazırlan.</h2>
            <p>Geri dönüş ve değerlendirme için ekibimiz seninle iletişime geçecek.</p>
          </div>
          <a
            className="btn btn-dark btn-lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeGX-lVYJkET2Hqtdl0xj_UOOU7uJGB3WdkQvrbTd_K4UxsVg/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
          >
            Ön Başvuruya Git
          </a>
        </section>

        <footer className="footer" id="iletisim">
          <div>
            <h3>İletişim</h3>
            <p>
              <strong>Adres</strong>: İnönü Mah. Kayışdağı Cad. 326A Rektörlük Binası Kat:2
              Teknoloji Transfer Ofisi 34755 Ataşehir – İSTANBUL
            </p>
          </div>
          <div>
            <p><strong>Telefon</strong>: 0216 578 00 00 (3980)</p>
            <p><strong>Mail</strong>: tto@yeditepe.edu.tr</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
