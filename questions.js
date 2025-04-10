const questions = [
  {
    "category": "green",
    "question": "Acil serviste en sık görülen ritim bozukluğu nedir?",
    "options": {
      "A": "Sinüs taşikardisi",
      "B": "Ventriküler fibrilasyon",
      "C": "AV blok",
      "D": "Torsades de Pointes",
      "E": "Junctional ritim"
    },
    "correct": "A"
  },
  {
    "category": "green",
    "question": "Triage'da kırmızı alan hastası aşağıdakilerden hangisidir?",
    "options": {
      "A": "Yüksek ateşli çocuk",
      "B": "Ayaktan başvuran karın ağrısı",
      "C": "Bilinç kapalı travma hastası",
      "D": "Baş ağrısı olan erişkin",
      "E": "Acil servis danışma"
    },
    "correct": "C"
  },
  {
    "category": "yellow",
    "question": "Travma hastasında ilk değerlendirme adımı nedir?",
    "options": {
      "A": "İkincil muayene",
      "B": "Batın muayenesi",
      "C": "Hava yolu kontrolü",
      "D": "Laboratuvar",
      "E": "Yara pansumanı"
    },
    "correct": "C"
  },
  {
    "category": "yellow",
    "question": "Hipovolemik şokun ilk belirtisi nedir?",
    "options": {
      "A": "Hipotansiyon",
      "B": "Taşikardi",
      "C": "Bradikardi",
      "D": "Hipotermi",
      "E": "Taşipne"
    },
    "correct": "B"
  },
  {
    "category": "red",
    "question": "KPR sırasında ilk tercih edilen vazopresör hangisidir?",
    "options": {
      "A": "Atropin",
      "B": "Adenozin",
      "C": "Amiodaron",
      "D": "Noradrenalin",
      "E": "Adrenalin"
    },
    "correct": "E"
  },
  {
    "category": "green",
    "question": "Erişkinde normal solunum sayısı kaçtır?",
    "options": {
      "A": "8-12",
      "B": "12-20",
      "C": "20-28",
      "D": "10-16",
      "E": "16-22"
    },
    "correct": "B"
  },
  {
    "category": "green",
    "question": "Glasgow koma skoru en düşük kaç olabilir?",
    "options": {
      "A": "0",
      "B": "3",
      "C": "1",
      "D": "2",
      "E": "4"
    },
    "correct": "B"
  },
  {
    "category": "yellow",
    "question": "En sık görülen metabolik asidoz nedeni nedir?",
    "options": {
      "A": "Karbondioksit retansiyonu",
      "B": "Laktik asidoz",
      "C": "Alkol zehirlenmesi",
      "D": "Kusma",
      "E": "Hiperventilasyon"
    },
    "correct": "B"
  },
  {
    "category": "yellow",
    "question": "Travma hastasında altın saat kavramı nedir?",
    "options": {
      "A": "Yaralanmadan 1 saat sonra tedavi",
      "B": "1 saat boyunca gözlem",
      "C": "Travmadan sonraki ilk 60 dk içinde müdahale",
      "D": "İlk kan gazı ölçümü",
      "E": "Cerrahi hazırlık süresi"
    },
    "correct": "C"
  },
  {
    "category": "red",
    "question": "Yoğun bakım endikasyonu olmayan hasta hangisidir?",
    "options": {
      "A": "İnvaziv mekanik ventilasyon ihtiyacı",
      "B": "Çoklu organ yetmezliği",
      "C": "Kısa süreli gözlem",
      "D": "Şok tablosu",
      "E": "KPR sonrası hasta"
    },
    "correct": "C"
  },
  {
    "category": "green",
    "question": "Normal vücut sıcaklığı nedir?",
    "options": {
      "A": "35.0°C",
      "B": "36.0°C",
      "C": "36.5-37.5°C",
      "D": "38.5°C",
      "E": "39.0°C"
    },
    "correct": "C"
  },
  {
    "category": "green",
    "question": "En sık bilinç kaybı sebebi nedir?",
    "options": {
      "A": "Epilepsi",
      "B": "İnme",
      "C": "Hipoglisemi",
      "D": "Senkop",
      "E": "Travma"
    },
    "correct": "D"
  },
  {
    "category": "yellow",
    "question": "KPR'de göğüs kompresyon derinliği erişkin için kaç cm'dir?",
    "options": {
      "A": "2-3 cm",
      "B": "4-5 cm",
      "C": "5-6 cm",
      "D": "6-7 cm",
      "E": "7-8 cm"
    },
    "correct": "C"
  },
  {
    "category": "yellow",
    "question": "Anafilaksi ilk tedavisi nedir?",
    "options": {
      "A": "Steroid",
      "B": "Adrenalin",
      "C": "Antihistaminik",
      "D": "İntravenöz sıvı",
      "E": "Oksijen"
    },
    "correct": "B"
  },
  {
    "category": "red",
    "question": "Trakeostomi kanaması hangi durumun göstergesi olabilir?",
    "options": {
      "A": "Cilt enfeksiyonu",
      "B": "Hematom",
      "C": "Trakeoarterial fistül",
      "D": "Pnömoni",
      "E": "Sekresyon retansiyonu"
    },
    "correct": "C"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 16",
    "options": {
      "A": "A şıkkı 16",
      "B": "B şıkkı 16",
      "C": "C şıkkı 16",
      "D": "D şıkkı 16",
      "E": "E şıkkı 16"
    },
    "correct": "E"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 17",
    "options": {
      "A": "A şıkkı 17",
      "B": "B şıkkı 17",
      "C": "C şıkkı 17",
      "D": "D şıkkı 17",
      "E": "E şıkkı 17"
    },
    "correct": "E"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 18",
    "options": {
      "A": "A şıkkı 18",
      "B": "B şıkkı 18",
      "C": "C şıkkı 18",
      "D": "D şıkkı 18",
      "E": "E şıkkı 18"
    },
    "correct": "D"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 19",
    "options": {
      "A": "A şıkkı 19",
      "B": "B şıkkı 19",
      "C": "C şıkkı 19",
      "D": "D şıkkı 19",
      "E": "E şıkkı 19"
    },
    "correct": "E"
  },
  {
    "category": "red",
    "question": "Red kategori klinik soru örneği 20",
    "options": {
      "A": "A şıkkı 20",
      "B": "B şıkkı 20",
      "C": "C şıkkı 20",
      "D": "D şıkkı 20",
      "E": "E şıkkı 20"
    },
    "correct": "A"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 21",
    "options": {
      "A": "A şıkkı 21",
      "B": "B şıkkı 21",
      "C": "C şıkkı 21",
      "D": "D şıkkı 21",
      "E": "E şıkkı 21"
    },
    "correct": "E"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 22",
    "options": {
      "A": "A şıkkı 22",
      "B": "B şıkkı 22",
      "C": "C şıkkı 22",
      "D": "D şıkkı 22",
      "E": "E şıkkı 22"
    },
    "correct": "D"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 23",
    "options": {
      "A": "A şıkkı 23",
      "B": "B şıkkı 23",
      "C": "C şıkkı 23",
      "D": "D şıkkı 23",
      "E": "E şıkkı 23"
    },
    "correct": "A"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 24",
    "options": {
      "A": "A şıkkı 24",
      "B": "B şıkkı 24",
      "C": "C şıkkı 24",
      "D": "D şıkkı 24",
      "E": "E şıkkı 24"
    },
    "correct": "A"
  },
  {
    "category": "red",
    "question": "Red kategori klinik soru örneği 25",
    "options": {
      "A": "A şıkkı 25",
      "B": "B şıkkı 25",
      "C": "C şıkkı 25",
      "D": "D şıkkı 25",
      "E": "E şıkkı 25"
    },
    "correct": "D"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 26",
    "options": {
      "A": "A şıkkı 26",
      "B": "B şıkkı 26",
      "C": "C şıkkı 26",
      "D": "D şıkkı 26",
      "E": "E şıkkı 26"
    },
    "correct": "C"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 27",
    "options": {
      "A": "A şıkkı 27",
      "B": "B şıkkı 27",
      "C": "C şıkkı 27",
      "D": "D şıkkı 27",
      "E": "E şıkkı 27"
    },
    "correct": "C"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 28",
    "options": {
      "A": "A şıkkı 28",
      "B": "B şıkkı 28",
      "C": "C şıkkı 28",
      "D": "D şıkkı 28",
      "E": "E şıkkı 28"
    },
    "correct": "E"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 29",
    "options": {
      "A": "A şıkkı 29",
      "B": "B şıkkı 29",
      "C": "C şıkkı 29",
      "D": "D şıkkı 29",
      "E": "E şıkkı 29"
    },
    "correct": "E"
  },
  {
    "category": "red",
    "question": "Red kategori klinik soru örneği 30",
    "options": {
      "A": "A şıkkı 30",
      "B": "B şıkkı 30",
      "C": "C şıkkı 30",
      "D": "D şıkkı 30",
      "E": "E şıkkı 30"
    },
    "correct": "C"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 31",
    "options": {
      "A": "A şıkkı 31",
      "B": "B şıkkı 31",
      "C": "C şıkkı 31",
      "D": "D şıkkı 31",
      "E": "E şıkkı 31"
    },
    "correct": "A"
  },
  {
    "category": "green",
    "question": "Green kategori klinik soru örneği 32",
    "options": {
      "A": "A şıkkı 32",
      "B": "B şıkkı 32",
      "C": "C şıkkı 32",
      "D": "D şıkkı 32",
      "E": "E şıkkı 32"
    },
    "correct": "D"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 33",
    "options": {
      "A": "A şıkkı 33",
      "B": "B şıkkı 33",
      "C": "C şıkkı 33",
      "D": "D şıkkı 33",
      "E": "E şıkkı 33"
    },
    "correct": "E"
  },
  {
    "category": "yellow",
    "question": "Yellow kategori klinik soru örneği 34",
    "options": {
      "A": "A şıkkı 34",
      "B": "B şıkkı 34",
      "C": "C şıkkı 34",
      "D": "D şıkkı 34",
      "E": "E şıkkı 34"
    },
    "correct": "E"
  },
  {
    "category": "red",
    "question": "Red kategori klinik soru örneği 35",
    "options": {
      "A": "A şıkkı 35",
      "B": "B şıkkı 35",
      "C": "C şıkkı 35",
      "D": "D şıkkı 35",
      "E": "E şıkkı 35"
    },
    "correct": "E"
  }
];
