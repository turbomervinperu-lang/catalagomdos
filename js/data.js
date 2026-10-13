/**
 * Datos iniciales y configuración estándar para Tecnosistemas MDOS (Perú)
 * Sincronizado automáticamente con Cloudflare R2 y Neon PostgreSQL
 */

// Categorías oficiales de Tecnosistemas MDOS
const OFFICIAL_CATEGORIES = [
    "Almacenamiento",
    "Case",
    "Estabilizadores / UPS",
    "Fuente de Poder",
    "Laptop",
    "Memoria Ram",
    "Monitores",
    "Periféricos",
    "Placas Madres",
    "Procesadores",
    "Procesadores OEM",
    "Refrigeración",
    "Sillas Gamer",
    "Tarjetas de Video"
];

// Medios de pago oficiales de Perú
const PAYMENT_METHODS = [
    { id: "Yape", name: "🟣 Yape" },
    { id: "Plin", name: "🔵 Plin" },
    { id: "BCP", name: "🟠 BCP (Banco de Crédito del Perú)" },
    { id: "Interbank", name: "🟢 Interbank" }
];

// Configuración de la tienda
const DEFAULT_CONFIG = {
    storeName: "Tecnosistemas MDOS",
    storeSlogan: "Venta de Computadoras • Reparación, Mantenimiento y Programación de Computadoras",
    logoUrl: "assets/images/logo.jpg",
    headerBannerUrl: "assets/images/header-banner.jpg",
    whatsappNumber: "51929198813",
    currencySymbol: "S/",
    currencyCode: "PEN",
    bannerMessage: "🚀 ¡Envíos a todo el Perú y recojo en tienda! Pagos por Yape, Plin, BCP e Interbank.",
    adminPin: "1927",
    totalOrdersCount: 38
};

// Catálogo de productos oficial de Tecnosistemas MDOS (246 productos alojados en Cloudflare R2)
const DEFAULT_PRODUCTS = [
    {
        "id":  "prod-2",
        "name":  "MONITOR HP E24 G4 FHD 23.8 VGA - HDMI 60HZ 5MS",
        "category":  "Monitores",
        "price":  575,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "MONITOR LED HP E24 G4 23.8\" ( 9VF99AA ) VGA - HDMI- D.P PANELL , IPS",
        "fullDescription":  "MONITOR LED HP E24 G4 23.8\" ( 9VF99AA ) VGA - HDMI- D.P PANELL , IPS",
        "orderCount":  178,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745605633-prod-2-monitor-hp-e24-g4-fhd-2.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745605633-prod-2-monitor-hp-e24-g4-fhd-2.jpg"
                   ],
        "sortOrder":  0
    },
    {
        "id":  "prod-3",
        "name":  "Monitor Gaming Odyssey G9 de 49\" LS49DG930SLXPE 240HZ( 5 K )",
        "category":  "Monitores",
        "price":  4277,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Monitor Gaming 49 SAMSUNG Odyssey OLED G9 LS49DG930SLXPE 240Hz/0.03ms ( 5 K )",
        "fullDescription":  "Monitor Gaming 49 SAMSUNG Odyssey OLED G9 LS49DG930SLXPE 240Hz/0.03ms ( 5 K )",
        "orderCount":  177,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745606968-prod-3-monitor-gaming-odyssey-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745606968-prod-3-monitor-gaming-odyssey-.jpg"
                   ],
        "sortOrder":  1
    },
    {
        "id":  "prod-4",
        "name":  "MONITOR SAMSUNG 24 PLANO ODYSSEY G3 LS24DG300ELXPE 180HZ PIVOT 90°",
        "category":  "Monitores",
        "price":  405,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MONITOR SAMSUNG ODYSSEY G3 LS24DG300ELXPE 24\" FHD 1920x1080/180HZ/1MS/AMD RADEON FREESYNC\nPIVOT 90°",
        "fullDescription":  "MONITOR SAMSUNG ODYSSEY G3 LS24DG300ELXPE 24\" FHD 1920x1080/180HZ/1MS/AMD RADEON FREESYNC\nPIVOT 90°",
        "orderCount":  176,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745607764-prod-4-monitor-samsung-24-plan.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745607764-prod-4-monitor-samsung-24-plan.jpg"
                   ],
        "sortOrder":  2
    },
    {
        "id":  "prod-5",
        "name":  "Monitor Gaming Odyssey G5 de 27\" QHD IPS LS27FG500ELXPE ( 2K ) PIVOT 180HZ",
        "category":  "Monitores",
        "price":  808,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR SAMSUNG ODYSSEY G5 27\" (LS27FG500ELXPE) 180HZ / 1MS / QHD /2K/ 2560 X 1440 / IPS / NEGRO\n2K",
        "fullDescription":  "MONITOR SAMSUNG ODYSSEY G5 27\" (LS27FG500ELXPE) 180HZ / 1MS / QHD /2K/ 2560 X 1440 / IPS / NEGRO\n2K",
        "orderCount":  175,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745608958-prod-5-monitor-gaming-odyssey-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745608958-prod-5-monitor-gaming-odyssey-.jpg"
                   ],
        "sortOrder":  3
    },
    {
        "id":  "prod-6",
        "name":  "MONITOR SAMSUNG ODYSSEY G5 32 ( LS32FG500ELXPE ) 180HZ QHD PIVOT 2K",
        "category":  "Monitores",
        "price":  862,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR SAMSUNG ODYSSEY G5 32 ( LS32FG500ELXPE ) QHD 2560X1440 IPS | 180HZ | 1MS | HDMI-DP | FREESYNC / G-SYNC | PIVOT 2K",
        "fullDescription":  "MONITOR SAMSUNG ODYSSEY G5 32 ( LS32FG500ELXPE ) QHD 2560X1440 IPS | 180HZ | 1MS | HDMI-DP | FREESYNC / G-SYNC | PIVOT 2K",
        "orderCount":  174,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745610039-prod-6-monitor-samsung-odyssey.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745610039-prod-6-monitor-samsung-odyssey.jpg"
                   ],
        "sortOrder":  4
    },
    {
        "id":  "prod-8",
        "name":  "MONITOR TEROS 3220G - (31.5) DE 240HZ FHD PLANO PANEL VA",
        "category":  "Monitores",
        "price":  624,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Monitor Gamer Teros PLANO Te-3220g 31.5 Fhd 240hz 1ms Altavoces",
        "fullDescription":  "Monitor Gamer Teros PLANO Te-3220g 31.5 Fhd 240hz 1ms Altavoces",
        "orderCount":  172,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745612254-prod-8-monitor-teros-3220g----.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745612254-prod-8-monitor-teros-3220g----.jpg"
                   ],
        "sortOrder":  5
    },
    {
        "id":  "prod-9",
        "name":  "MONITOR TEROS 23.8\" TE-2403S VA CURVO 144HZ /1MS",
        "category":  "Monitores",
        "price":  295,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR TEROS 23.8\" TE-2403S VA CURVO 144HZ/1MS",
        "fullDescription":  "MONITOR TEROS 23.8\" TE-2403S VA CURVO 144HZ/1MS",
        "orderCount":  171,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745613494-prod-9-monitor-teros-23-8--te-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745613494-prod-9-monitor-teros-23-8--te-.jpg"
                   ],
        "sortOrder":  6
    },
    {
        "id":  "prod-11",
        "name":  "MONITOR TEROS 2475G - 24.5 DE 180HZ 1MS",
        "category":  "Monitores",
        "price":  323,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER TEROS 24.5\" (TE-2475G) PANEL VA| 180HZ/ 1MS| HDMI- DP",
        "fullDescription":  "MONITOR GAMER TEROS 24.5\" (TE-2475G) PANEL VA| 180HZ/ 1MS| HDMI- DP",
        "orderCount":  169,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745615709-prod-11-monitor-teros-2475g---.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745615709-prod-11-monitor-teros-2475g---.jpg"
                   ],
        "sortOrder":  7
    },
    {
        "id":  "prod-12",
        "name":  "MONITOR TEROS 2417S PLANO 144HS 1MS FH D 24¨",
        "category":  "Monitores",
        "price":  270,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "MONITOR TEROS 2417S 144HS 1MS FHD 24¨ PLANO IPS HDMI DP PARLANTES AUDIO OUT",
        "fullDescription":  "MONITOR TEROS 2417S 144HS 1MS FHD 24¨ PLANO IPS HDMI DP PARLANTES AUDIO OUT",
        "orderCount":  168,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745616519-prod-12-monitor-teros-2417s-pl.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745616519-prod-12-monitor-teros-2417s-pl.jpg"
                   ],
        "sortOrder":  8
    },
    {
        "id":  "prod-13",
        "name":  "MONITOR TEROS PLANO TE 2714S DE 144 HZ . 1 MS",
        "category":  "Monitores",
        "price":  335,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Monitor TEROS 27\" PLANO TE 2714S 144hz. FHD 1MS VA HDMI DP PARLANTES IPS AUDIO OUT",
        "fullDescription":  "Monitor TEROS 27\" PLANO TE 2714S 144hz. FHD 1MS VA HDMI DP PARLANTES IPS AUDIO OUT",
        "orderCount":  167,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745617830-prod-13-monitor-teros-plano-te.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745617830-prod-13-monitor-teros-plano-te.jpg"
                   ],
        "sortOrder":  9
    },
    {
        "id":  "prod-14",
        "name":  "MONITOR TEROS CURVO TE- 2734S DE 144HZ 1MS",
        "category":  "Monitores",
        "price":  360,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Monitor curvo Teros TE-2734S, 27\" FHD VA, 144HZ, 1MS, HDMI, DP, Audio out,",
        "fullDescription":  "Monitor curvo Teros TE-2734S, 27\" FHD VA, 144HZ, 1MS, HDMI, DP, Audio out,",
        "orderCount":  166,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745618852-prod-14-monitor-teros-curvo-te.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745618852-prod-14-monitor-teros-curvo-te.jpg"
                   ],
        "sortOrder":  10
    },
    {
        "id":  "prod-15",
        "name":  "MONITOR TEROS 2787G CURVO DE 180HZ 1MS",
        "category":  "Monitores",
        "price":  421,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR TEROS 27 VA CURVO FHD ( TE-2787G ) | 1920X1080 | 180HZ | 1MS | HMDI-DP",
        "fullDescription":  "MONITOR TEROS 27 VA CURVO FHD ( TE-2787G ) | 1920X1080 | 180HZ | 1MS | HMDI-DP",
        "orderCount":  165,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745620277-prod-15-monitor-teros-2787g-cu.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745620277-prod-15-monitor-teros-2787g-cu.jpg"
                   ],
        "sortOrder":  11
    },
    {
        "id":  "prod-16",
        "name":  "TEROS MONITOR 2766G PIVOT CURVO FHD VA180 1MS",
        "category":  "Monitores",
        "price":  520,
        "badge":  "",
        "inStock":  true,
        "description":  "Monitor Curvo Gaming TEROS TE-2766G, 27\" FHD VA, 180 Hz, 1ms, HDMI, DP, AUDIO OUT",
        "fullDescription":  "Monitor Curvo Gaming TEROS TE-2766G, 27\" FHD VA, 180 Hz, 1ms, HDMI, DP, AUDIO OUT",
        "orderCount":  164,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745621481-prod-16-teros-monitor-2766g-pi.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745621481-prod-16-teros-monitor-2766g-pi.jpg"
                   ],
        "sortOrder":  12
    },
    {
        "id":  "prod-17",
        "name":  "MONITOR XIAOMI 27\" G27i PLANO IPS FHD 165 HZ 1MS.",
        "category":  "Monitores",
        "price":  427,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR XIAOMI  27\" G27i PLANO IPS FHD 165 HZ 1MS. GAMING",
        "fullDescription":  "MONITOR XIAOMI  27\" G27i PLANO IPS FHD 165 HZ 1MS. GAMING",
        "orderCount":  163,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745622302-prod-17-monitor-xiaomi-27--g27.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745622302-prod-17-monitor-xiaomi-27--g27.jpg"
                   ],
        "sortOrder":  13
    },
    {
        "id":  "prod-18",
        "name":  "MONITOR XIAOMI 34 CURVO WQHD (2K) 180HZ/1MS",
        "category":  "Monitores",
        "price":  964,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MONITOR XIAOMI 34 CURVO WQHD (2K) 180HZ/1MS",
        "fullDescription":  "MONITOR XIAOMI 34 CURVO WQHD (2K) 180HZ/1MS",
        "orderCount":  162,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745622981-prod-18-monitor-xiaomi-34-curv.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745622981-prod-18-monitor-xiaomi-34-curv.jpg"
                   ],
        "sortOrder":  14
    },
    {
        "id":  "prod-19",
        "name":  "MONITOR MICRONICS FENIX 24\" 144HZ FHD",
        "category":  "Monitores",
        "price":  272,
        "badge":  "",
        "inStock":  true,
        "description":  "Tamaño 24 Pulgadas Resolución FHD (1920 x 1080) ación de pantalla: +5° a -20° Panel A+: 0 Píxeles PPI 92 (Píxeles  por Pulgada) Panel Plano IPS Tasa de Refresco: 144 Hz Tiempo de Respuesta 1ms. Contraste 4,000:1. Puertos: 1 HDMI y 1 DisplayPort  Reducción de Luz Azul ESA: 100*100 reesync Sincronización Entre PC y Monitor.\nIncluye: Cable HDMI, Adaptador, Cable de poder y Manual",
        "fullDescription":  "Tamaño 24 Pulgadas Resolución FHD (1920 x 1080) ación de pantalla: +5° a -20° Panel A+: 0 Píxeles PPI 92 (Píxeles  por Pulgada) Panel Plano IPS Tasa de Refresco: 144 Hz Tiempo de Respuesta 1ms. Contraste 4,000:1. Puertos: 1 HDMI y 1 DisplayPort  Reducción de Luz Azul ESA: 100*100 reesync Sincronización Entre PC y Monitor.\nIncluye: Cable HDMI, Adaptador, Cable de poder y Manual",
        "orderCount":  161,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745624115-prod-19-monitor-micronics-feni.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745624115-prod-19-monitor-micronics-feni.jpg"
                   ],
        "sortOrder":  15
    },
    {
        "id":  "prod-20",
        "name":  "M. MICRONIC MATRIX XT GAMER MACH INE 27\" 180HZ QHD PIVOT PLANO 2K",
        "category":  "Monitores",
        "price":  473,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR MICRONIC MATRIX XT GAMER MACHINE 27\" 180 HZ QHD  PIVOT Tamaño 27 Pulgadas.\nGrado de Inclinación de pantalla: +5° a -13° Panel A+: 0 Pixeles PPI 92 (Pixeles por Pulgada) Panel Plano IPS  Tasa de Refresco: 180 Hz Tiempo de Respuesta 1ms. Freesync Sincronizacion Entre PC y Monitor. 2K",
        "fullDescription":  "MONITOR MICRONIC MATRIX XT GAMER MACHINE 27\" 180 HZ QHD  PIVOT Tamaño 27 Pulgadas.\nGrado de Inclinación de pantalla: +5° a -13° Panel A+: 0 Pixeles PPI 92 (Pixeles por Pulgada) Panel Plano IPS  Tasa de Refresco: 180 Hz Tiempo de Respuesta 1ms. Freesync Sincronizacion Entre PC y Monitor. 2K",
        "orderCount":  160,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745625193-prod-20-m--micronic-matrix-xt-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745625193-prod-20-m--micronic-matrix-xt-.jpg"
                   ],
        "sortOrder":  16
    },
    {
        "id":  "prod-21",
        "name":  "MONITOR MICRONICS BRICKELL CURVO 27\" 1OO HZ 3 ms VA",
        "category":  "Monitores",
        "price":  332,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR  MICRONICS CURVO 27\" BRIKELL MIC DG27FC 1OO hz 3 ms  VA FHD  HDMI DP VESA FRESYNC brickel",
        "fullDescription":  "MONITOR  MICRONICS CURVO 27\" BRIKELL MIC DG27FC 1OO hz 3 ms  VA FHD  HDMI DP VESA FRESYNC brickel",
        "orderCount":  159,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745626453-prod-21-monitor-micronics-bric.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745626453-prod-21-monitor-micronics-bric.jpg"
                   ],
        "sortOrder":  17
    },
    {
        "id":  "prod-22",
        "name":  "MONITOR MICRONICS PLAYER 27¨ 200HZ 1MS FHD FREE SYNC PLANO CON PARLANTES",
        "category":  "Monitores",
        "price":  391,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR MICRONICS PLAYER 27¨ 200HZ 1MS FHD FREE SYNC PLANO IPS  INCLUYE PARLANTES",
        "fullDescription":  "MONITOR MICRONICS PLAYER 27¨ 200HZ 1MS FHD FREE SYNC PLANO IPS  INCLUYE PARLANTES",
        "orderCount":  158,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745627194-prod-22-monitor-micronics-play.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745627194-prod-22-monitor-micronics-play.jpg"
                   ],
        "sortOrder":  18
    },
    {
        "id":  "prod-23",
        "name":  "MONITOR GAMER BUSINESS, CYBERTEL MO27FF 27P PLANO FHD 100HZ",
        "category":  "Monitores",
        "price":  293,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MONITOR GAMER BUSINESS CYBERTEL MO27FF 27P FHD 100HZ 3MS PLANO Puerto HDMI.Puerto DisplayPort.",
        "fullDescription":  "MONITOR GAMER BUSINESS CYBERTEL MO27FF 27P FHD 100HZ 3MS PLANO Puerto HDMI.Puerto DisplayPort.",
        "orderCount":  157,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745628260-prod-23-monitor-gamer-business.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745628260-prod-23-monitor-gamer-business.jpg"
                   ],
        "sortOrder":  19
    },
    {
        "id":  "prod-24",
        "name":  "MONITOR GAMER BUSINESS CYBERTEL MF24-120FF 24P FHD 120HZ grp-001",
        "category":  "Monitores",
        "price":  251,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "MONITOR GAMER BUSINESS CYBERTEL MF24-120FF 24P FHD 120HZ grp-001",
        "fullDescription":  "MONITOR GAMER BUSINESS CYBERTEL MF24-120FF 24P FHD 120HZ grp-001",
        "orderCount":  156,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790743967452-prod-24-monitor-gamer-business.webp",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790743967452-prod-24-monitor-gamer-business.webp"
                   ],
        "sortOrder":  20
    },
    {
        "id":  "prod-25",
        "name":  "REFRIGERACION LIQUIDA 240MM EXCAVATOR NEGRO RELOJ DE TEMPERATURA",
        "category":  "Refrigeración",
        "price":  201,
        "badge":  "",
        "inStock":  true,
        "description":  "REFRIGERACION LIQUIDA 240MM EXCAVATOR NEGRO RELOJ DE TEMPERATURA",
        "fullDescription":  "REFRIGERACION LIQUIDA 240MM EXCAVATOR NEGRO RELOJ DE TEMPERATURA",
        "orderCount":  155,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745629439-prod-25-refrigeracion-liquida-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745629439-prod-25-refrigeracion-liquida-.jpg"
                   ],
        "sortOrder":  21
    },
    {
        "id":  "prod-26",
        "name":  "REFRIGERACION ROG GAMING 240PRO BLANCO RELOJ",
        "category":  "Refrigeración",
        "price":  211,
        "badge":  "",
        "inStock":  true,
        "description":  "REFRIGERACION ROG GAMING 240PRO BLANCO CON RELOJ DE TEMPERATURA",
        "fullDescription":  "REFRIGERACION ROG GAMING 240PRO BLANCO CON RELOJ DE TEMPERATURA",
        "orderCount":  154,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745630676-prod-26-refrigeracion-rog-gami.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745630676-prod-26-refrigeracion-rog-gami.jpg"
                   ],
        "sortOrder":  22
    },
    {
        "id":  "prod-27",
        "name":  "REFRIGERACION ROG GAMING 240PRO BLANCO RELOJ",
        "category":  "Refrigeración",
        "price":  211,
        "badge":  "",
        "inStock":  true,
        "description":  "REFRIGERACION ROG GAMING 240PRO BLANCO CON RELOJ DE TEMPERATURA",
        "fullDescription":  "REFRIGERACION ROG GAMING 240PRO BLANCO CON RELOJ DE TEMPERATURA",
        "orderCount":  153,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745631805-prod-27-refrigeracion-rog-gami.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745631805-prod-27-refrigeracion-rog-gami.jpg"
                   ],
        "sortOrder":  23
    },
    {
        "id":  "prod-28",
        "name":  "COOLER CPU CORSAIR ICUE LINK TITAN 240 RX RGB AIO BLACK AMD",
        "category":  "Refrigeración",
        "price":  184,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER DE CPU CORSAIR ICUE LINK TITAN 240 RX RGB AIO BLACK INTEL AMD ALUMINUM CW-9061016-WW",
        "fullDescription":  "COOLER DE CPU CORSAIR ICUE LINK TITAN 240 RX RGB AIO BLACK INTEL AMD ALUMINUM CW-9061016-WW",
        "orderCount":  152,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745633200-prod-28-cooler-cpu-corsair-icu.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745633200-prod-28-cooler-cpu-corsair-icu.jpg"
                   ],
        "sortOrder":  24
    },
    {
        "id":  "prod-29",
        "name":  "COOLER DE CPU CORSAIR ICUE LINKN TITAN 240 RX RGB AIO WHITE AMD",
        "category":  "Refrigeración",
        "price":  184,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER DE CPU CORSAIR ICUE LINK TITAN 240 RX RGB AIO WHITE INTEL AMD ALUMINUM CW-9061020-WW",
        "fullDescription":  "COOLER DE CPU CORSAIR ICUE LINK TITAN 240 RX RGB AIO WHITE INTEL AMD ALUMINUM CW-9061020-WW",
        "orderCount":  151,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745634287-prod-29-cooler-de-cpu-corsair-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745634287-prod-29-cooler-de-cpu-corsair-.jpg"
                   ],
        "sortOrder":  25
    },
    {
        "id":  "prod-30",
        "name":  "COOLER ROG GAMING 4 HEATPIEPE DIRECT TOUCH ( INTEL \u0026 AMD ) RGB 400PLUS",
        "category":  "Refrigeración",
        "price":  100,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER DE PROCESADRO GAMING ROG X RG400 AND/INTEL ARGB WHITE",
        "fullDescription":  "COOLER DE PROCESADRO GAMING ROG X RG400 AND/INTEL ARGB WHITE",
        "orderCount":  150,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745635516-prod-30-cooler-rog-gaming-4-he.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745635516-prod-30-cooler-rog-gaming-4-he.jpg"
                   ],
        "sortOrder":  26
    },
    {
        "id":  "prod-31",
        "name":  "COOLER CYBERTEL DE COBRE PARA PROC. INTEL PARA 2DA Y 10MA GEN.",
        "category":  "Refrigeración",
        "price":  905,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "CYBERTEL COOLER CPU - CBX ACX115. TAMAÑO 90X90X25MM. PESO TOTAL 210 G . VELOCIDAD VENTILADOR : 2200 RPM VOLTAJE 12V. NIVEL DE RUIDO 20 DB.  COMPATIBILIDAD. INTEL CORE I3/I5/I7/I9/ DE 2TA A 10MA GENERACION",
        "fullDescription":  "CYBERTEL COOLER CPU - CBX ACX115. TAMAÑO 90X90X25MM. PESO TOTAL 210 G . VELOCIDAD VENTILADOR : 2200 RPM VOLTAJE 12V. NIVEL DE RUIDO 20 DB.  COMPATIBILIDAD. INTEL CORE I3/I5/I7/I9/ DE 2TA A 10MA GENERACION",
        "orderCount":  149,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745636922-prod-31-cooler-cybertel-de-cob.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745636922-prod-31-cooler-cybertel-de-cob.jpg"
                   ],
        "sortOrder":  27
    },
    {
        "id":  "prod-32",
        "name":  "COOLER TEROS 8161N SOLO (INTEL )",
        "category":  "Refrigeración",
        "price":  49,
        "badge":  "",
        "inStock":  true,
        "description":  "Cooler Teros fan Rainbow TE 8161N",
        "fullDescription":  "Cooler Teros fan Rainbow TE 8161N",
        "orderCount":  148,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745638272-prod-32-cooler-teros-8161n-sol.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745638272-prod-32-cooler-teros-8161n-sol.jpg"
                   ],
        "sortOrder":  28
    },
    {
        "id":  "prod-33",
        "name":  "COOLER TORRE TEROS 8162N PARA ( INTEL Y AMD)",
        "category":  "Refrigeración",
        "price":  82,
        "badge":  "",
        "inStock":  true,
        "description":  "Cooler para procesador TE-8162N, Intel y AMD, TDP 150W Máx, Aire",
        "fullDescription":  "Cooler para procesador TE-8162N, Intel y AMD, TDP 150W Máx, Aire",
        "orderCount":  147,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745639348-prod-33-cooler-torre-teros-816.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745639348-prod-33-cooler-torre-teros-816.jpg"
                   ],
        "sortOrder":  29
    },
    {
        "id":  "prod-34",
        "name":  "COOLER MSI 120 MM ORIGINAL",
        "category":  "Refrigeración",
        "price":  38,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER MSI 120 MM ORIGINAL",
        "fullDescription":  "COOLER MSI 120 MM ORIGINAL",
        "orderCount":  146,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745640475-prod-34-cooler-msi-120-mm-orig.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745640475-prod-34-cooler-msi-120-mm-orig.jpg"
                   ],
        "sortOrder":  30
    },
    {
        "id":  "prod-35",
        "name":  "COOLER AMD ORIGINAL",
        "category":  "Refrigeración",
        "price":  60,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER AMD original",
        "fullDescription":  "COOLER AMD original",
        "orderCount":  145,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745641443-prod-35-cooler-amd-original.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745641443-prod-35-cooler-amd-original.jpg"
                   ],
        "sortOrder":  31
    },
    {
        "id":  "prod-36",
        "name":  "COOLER ROG GAMING AMD COMPATIBLE",
        "category":  "Refrigeración",
        "price":  46,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER ROG GAMING AMD COMPATIBLE",
        "fullDescription":  "COOLER ROG GAMING AMD COMPATIBLE",
        "orderCount":  144,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745642723-prod-36-cooler-rog-gaming-amd-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745642723-prod-36-cooler-rog-gaming-amd-.jpg"
                   ],
        "sortOrder":  32
    },
    {
        "id":  "prod-37",
        "name":  "COOLER INTEL BASICO, CON BASE DE COBRE",
        "category":  "Refrigeración",
        "price":  44,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER INTEL  BASICO CON  BASE DE COBRE",
        "fullDescription":  "COOLER INTEL  BASICO CON  BASE DE COBRE",
        "orderCount":  143,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745643884-prod-37-cooler-intel-basico--c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745643884-prod-37-cooler-intel-basico--c.jpg"
                   ],
        "sortOrder":  33
    },
    {
        "id":  "prod-38",
        "name":  "COOLER INTEL BASICO, CON BASE DE ALUMINIO",
        "category":  "Refrigeración",
        "price":  41,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER INTEL  BASICO CON  BASE DE ALUMINIO",
        "fullDescription":  "COOLER INTEL  BASICO CON  BASE DE ALUMINIO",
        "orderCount":  142,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745644937-prod-38-cooler-intel-basico--c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745644937-prod-38-cooler-intel-basico--c.jpg"
                   ],
        "sortOrder":  34
    },
    {
        "id":  "prod-39",
        "name":  "CAMARA TEROS TE9073N 4K (SIN TRIPODE)",
        "category":  "Periféricos",
        "price":  131,
        "badge":  "",
        "inStock":  true,
        "description":  "CAMARA TEROS TE-9073N RESOLUCION 4K",
        "fullDescription":  "CAMARA TEROS TE-9073N RESOLUCION 4K",
        "orderCount":  141,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745645640-prod-39-camara-teros-te9073n-4.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745645640-prod-39-camara-teros-te9073n-4.jpg"
                   ],
        "sortOrder":  35
    },
    {
        "id":  "prod-40",
        "name":  "CAMARA TEROS TE9072 2K MAS TRIPODE",
        "category":  "Periféricos",
        "price":  75,
        "badge":  "",
        "inStock":  true,
        "description":  "CAMARA TEROS TE-9072 RESOLUCION 2K",
        "fullDescription":  "CAMARA TEROS TE-9072 RESOLUCION 2K",
        "orderCount":  140,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745646731-prod-40-camara-teros-te9072-2k.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745646731-prod-40-camara-teros-te9072-2k.jpg"
                   ],
        "sortOrder":  36
    },
    {
        "id":  "prod-41",
        "name":  "CAMARA WEB 2K QUAD HD MICRONICS QUANTUM MAS TRIPODE",
        "category":  "Periféricos",
        "price":  68,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Quantum - MIC W700 Resolución 2K Quad HD: 2560 × 1440 px.\r\nMicrófono incorporado.\r\nFormato de video: 2560 × 1440 px a 30 fps.\r\nConexión USB.\r\nDiseño compacto con soporte enganchable.\r\nCompatible con sistemas operativos Windows y otros.",
        "fullDescription":  "Quantum - MIC W700 Resolución 2K Quad HD: 2560 × 1440 px.\r\nMicrófono incorporado.\r\nFormato de video: 2560 × 1440 px a 30 fps.\r\nConexión USB.\r\nDiseño compacto con soporte enganchable.\r\nCompatible con sistemas operativos Windows y otros.",
        "orderCount":  139,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745647745-prod-41-camara-web-2k-quad-hd-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745647745-prod-41-camara-web-2k-quad-hd-.jpg"
                   ],
        "sortOrder":  37
    },
    {
        "id":  "prod-42",
        "name":  "SILLA GAMER ABADDONX ROJO (PVC)",
        "category":  "Sillas Gamer",
        "price":  274,
        "badge":  "",
        "inStock":  true,
        "description":  "Tapizado en cuero sintético (PVC) de alta resistencia, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "fullDescription":  "Tapizado en cuero sintético (PVC) de alta resistencia, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "orderCount":  138,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745648563-prod-42-silla-gamer-abaddonx-r.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745648563-prod-42-silla-gamer-abaddonx-r.jpg"
                   ],
        "sortOrder":  38
    },
    {
        "id":  "prod-43",
        "name":  "SILLA GAMER ABADDONX NEGRO GRIS (PVC)",
        "category":  "Sillas Gamer",
        "price":  274,
        "badge":  "",
        "inStock":  true,
        "description":  "Tapizado en cuero sintético (PVC) de alta resistencia, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "fullDescription":  "Tapizado en cuero sintético (PVC) de alta resistencia, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "orderCount":  137,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745649352-prod-43-silla-gamer-abaddonx-n.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745649352-prod-43-silla-gamer-abaddonx-n.jpg"
                   ],
        "sortOrder":  39
    },
    {
        "id":  "prod-44",
        "name":  "SILLA GAMER ABADDONX NEGRO ENTERO (PVC)",
        "category":  "Sillas Gamer",
        "price":  294,
        "badge":  "",
        "inStock":  true,
        "description":  "Tapizado en cuero sintético (PVC) de alta resistencia, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "fullDescription":  "Tapizado en cuero sintético (PVC) de alta resistencia, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "orderCount":  136,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745649983-prod-44-silla-gamer-abaddonx-n.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745649983-prod-44-silla-gamer-abaddonx-n.jpg"
                   ],
        "sortOrder":  40
    },
    {
        "id":  "prod-45",
        "name":  "SILLA GAMER ABADDONX NEGRO ROJO (TELA)",
        "category":  "Sillas Gamer",
        "price":  314,
        "badge":  "",
        "inStock":  true,
        "description":  "Tapizado en Tela Resistente y transpirable, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "fullDescription":  "Tapizado en Tela Resistente y transpirable, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "orderCount":  135,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745650776-prod-45-silla-gamer-abaddonx-n.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745650776-prod-45-silla-gamer-abaddonx-n.jpg"
                   ],
        "sortOrder":  41
    },
    {
        "id":  "prod-46",
        "name":  "SILLA GAMER ABADDONX NEGRO GRIS (TELA)",
        "category":  "Sillas Gamer",
        "price":  314,
        "badge":  "",
        "inStock":  true,
        "description":  "Tapizado en Tela Resistente y transpirable, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "fullDescription":  "Tapizado en Tela Resistente y transpirable, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "orderCount":  134,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745651516-prod-46-silla-gamer-abaddonx-n.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745651516-prod-46-silla-gamer-abaddonx-n.jpg"
                   ],
        "sortOrder":  42
    },
    {
        "id":  "prod-47",
        "name":  "SILLA GAMER ABADDONX NEGRO ENTERO (TELA)",
        "category":  "Sillas Gamer",
        "price":  314,
        "badge":  "",
        "inStock":  true,
        "description":  "Tapizado en Tela Resistente y transpirable, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "fullDescription":  "Tapizado en Tela Resistente y transpirable, reclinable 160°, ajuste de altura, reposapiés, reposabrazos, soporta hasta 150 KG, incluye 2 almohadillas (cuello y espalda) y tiene un tamaño de 80 × 28 × 58.5 cm.",
        "orderCount":  133,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745652342-prod-47-silla-gamer-abaddonx-n.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745652342-prod-47-silla-gamer-abaddonx-n.jpg"
                   ],
        "sortOrder":  43
    },
    {
        "id":  "prod-48",
        "name":  "CASE ATX ULTRA VISION BLANCO - 4 FAN C/CONTROL C/SOPORTE GPU - ROG GAMING X",
        "category":  "Case",
        "price":  210,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX ULTRA VISION BLANCO - 4 COOLERS -  C/CONTROL C/SOPORTE GPU - ROG GAMING X",
        "fullDescription":  "CASE ATX ULTRA VISION BLANCO - 4 COOLERS -  C/CONTROL C/SOPORTE GPU - ROG GAMING X",
        "orderCount":  132,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745653608-prod-48-case-atx-ultra-vision-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745653608-prod-48-case-atx-ultra-vision-.jpg"
                   ],
        "sortOrder":  44
    },
    {
        "id":  "prod-49",
        "name":  "CASE ATX ULTRA RGB NEGRO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO - ROG GAMING X",
        "category":  "Case",
        "price":  270,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX ULTRA RGB NEGRO X7 FAN ARGB + SOPORTE GPU\n+ CONTROL REMOTO - ROG GAMING X",
        "fullDescription":  "CASE ATX ULTRA RGB NEGRO X7 FAN ARGB + SOPORTE GPU\n+ CONTROL REMOTO - ROG GAMING X",
        "orderCount":  131,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745654753-prod-49-case-atx-ultra-rgb-neg.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745654753-prod-49-case-atx-ultra-rgb-neg.jpg"
                   ],
        "sortOrder":  45
    },
    {
        "id":  "prod-50",
        "name":  "CASE ATX ULTRA RGB BLANCO X7FAN + CONTROL + SOPORTE GPU - ROG GAMING X",
        "category":  "Case",
        "price":  275,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX ULTRA RGB BLANCO X7FAN + CONTROL +\nSOPORTE GPU - ROG GAMING X",
        "fullDescription":  "CASE ATX ULTRA RGB BLANCO X7FAN + CONTROL +\nSOPORTE GPU - ROG GAMING X",
        "orderCount":  130,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745655872-prod-50-case-atx-ultra-rgb-bla.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745655872-prod-50-case-atx-ultra-rgb-bla.jpg"
                   ],
        "sortOrder":  46
    },
    {
        "id":  "prod-51",
        "name":  "CASE ATX PROMAX BLANCO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO ROG GAMING X",
        "category":  "Case",
        "price":  230,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX PROMAX BLANCO X7 FAN ARGB + SOPORTE GPU +\nCONTROL REMOTO ROG GAMING X",
        "fullDescription":  "CASE ATX PROMAX BLANCO X7 FAN ARGB + SOPORTE GPU +\nCONTROL REMOTO ROG GAMING X",
        "orderCount":  129,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745657035-prod-51-case-atx-promax-blanco.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745657035-prod-51-case-atx-promax-blanco.jpg"
                   ],
        "sortOrder":  47
    },
    {
        "id":  "prod-52",
        "name":  "CASE GAMBYTE DARES CON FUENTE DE 600W RGB PANEL ACRILICO 2 FANS",
        "category":  "Fuente de Poder",
        "price":  174,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "Case Gambyte Dares Fuente 600w (red-gi-dares) Panel AcrÍlico, 2 Ventiladores, Led Rojo, Negro",
        "fullDescription":  "Case Gambyte Dares Fuente 600w (red-gi-dares) Panel AcrÍlico, 2 Ventiladores, Led Rojo, Negro",
        "orderCount":  128,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745657994-prod-52-case-gambyte-dares-con.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745657994-prod-52-case-gambyte-dares-con.jpg"
                   ],
        "sortOrder":  48
    },
    {
        "id":  "prod-53",
        "name":  "CASE GAMER CYBERTEL SAMURAI (CBX5021W) NEGRO",
        "category":  "Case",
        "price":  135,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "CASE GAMER CYBERTEL SAMURAI ( CBX5021W ) S/FUENTE | NEGRO  | PANEL VIDRIO TEMPLADO | LED-RGB | 1 FAN STRIPE",
        "fullDescription":  "CASE GAMER CYBERTEL SAMURAI ( CBX5021W ) S/FUENTE | NEGRO  | PANEL VIDRIO TEMPLADO | LED-RGB | 1 FAN STRIPE",
        "orderCount":  127,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745658990-prod-53-case-gamer-cybertel-sa.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745658990-prod-53-case-gamer-cybertel-sa.jpg"
                   ],
        "sortOrder":  49
    },
    {
        "id":  "prod-54",
        "name":  "Case Gamer Cybertel Exxpert Cbx 5002 Doble Ring Usb3.0 Rgb",
        "category":  "Case",
        "price":  135,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "l Cybertel Exxpert CBX5002 es un gabinete para computadora (case) de estilo gamer que destaca por su panel lateral de vidrio templado y su tira de iluminación LED RGB en el frente. Está diseñado para armar computadoras económicas pero con u",
        "fullDescription":  "l Cybertel Exxpert CBX5002 es un gabinete para computadora (case) de estilo gamer que destaca por su panel lateral de vidrio templado y su tira de iluminación LED RGB en el frente. Está diseñado para armar computadoras económicas pero con u",
        "orderCount":  126,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745660192-prod-54-case-gamer-cybertel-ex.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745660192-prod-54-case-gamer-cybertel-ex.jpg"
                   ],
        "sortOrder":  50
    },
    {
        "id":  "prod-55",
        "name":  "CASE RUIX NEGRO ATX TIPO PECERA",
        "category":  "Case",
        "price":  140,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "CASE RUIX NEGRO ATX TIPO PECERA",
        "fullDescription":  "CASE RUIX NEGRO ATX TIPO PECERA",
        "orderCount":  125,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745661512-prod-55-case-ruix-negro-atx-ti.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745661512-prod-55-case-ruix-negro-atx-ti.jpg"
                   ],
        "sortOrder":  51
    },
    {
        "id":  "prod-56",
        "name":  "CASE GRAN Z MODELO GZ-3303",
        "category":  "Case",
        "price":  115,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "Motherboard Support Mini-ITX | Micro-ATX | ATX Puertos        USB3.0 x1 | USB2.0x2 | Audio , 2 COOLER INCLUIDO",
        "fullDescription":  "Motherboard Support Mini-ITX | Micro-ATX | ATX Puertos        USB3.0 x1 | USB2.0x2 | Audio , 2 COOLER INCLUIDO",
        "orderCount":  124,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745662677-prod-56-case-gran-z-modelo-gz-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745662677-prod-56-case-gran-z-modelo-gz-.jpg"
                   ],
        "sortOrder":  52
    },
    {
        "id":  "prod-57",
        "name":  "CASE TEROS 1323G NEGRO SIN FUENTE",
        "category":  "Fuente de Poder",
        "price":  140,
        "badge":  "",
        "inStock":  true,
        "description":  "Case sin fuente Gamer TEROS TE-1323G, ITX, M-ATX, ATX, 3.5\" y 2.5\", NEGRO",
        "fullDescription":  "Case sin fuente Gamer TEROS TE-1323G, ITX, M-ATX, ATX, 3.5\" y 2.5\", NEGRO",
        "orderCount":  123,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745663812-prod-57-case-teros-1323g-negro.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745663812-prod-57-case-teros-1323g-negro.jpg"
                   ],
        "sortOrder":  53
    },
    {
        "id":  "prod-58",
        "name":  "Case TEROS GAMING TE1316G BLANCO 4 fan ARGB",
        "category":  "Case",
        "price":  174,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Case Gamer Teros TE 1316G, Blanco, USB 3.0  USB 2.0, Audio, 4 fan ARGB, MICRO ATX, MINI ATX",
        "fullDescription":  "Case Gamer Teros TE 1316G, Blanco, USB 3.0  USB 2.0, Audio, 4 fan ARGB, MICRO ATX, MINI ATX",
        "orderCount":  122,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745664587-prod-58-case-teros-gaming-te13.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745664587-prod-58-case-teros-gaming-te13.jpg"
                   ],
        "sortOrder":  54
    },
    {
        "id":  "prod-59",
        "name":  "C ASE CYBERTEL NEGRO ROBOT 6 COOLERS AR GB",
        "category":  "Refrigeración",
        "price":  170,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "CASE CYBERTEL ROBOT NEGRO 6 COOLERS ARGB",
        "fullDescription":  "CASE CYBERTEL ROBOT NEGRO 6 COOLERS ARGB",
        "orderCount":  121,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745665885-prod-59-c-ase-cybertel-negro-r.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745665885-prod-59-c-ase-cybertel-negro-r.jpg"
                   ],
        "sortOrder":  55
    },
    {
        "id":  "prod-60",
        "name":  "CASE MICRONICS FRANTIC MIC GC702 CON FUENTE REAL DE 650W ATX.",
        "category":  "Fuente de Poder",
        "price":  230,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "CASE FRANTIC MIC GC702\nGABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB, VIDRIO TEMPLADO LATERAL Y MESH FRONTAL PANEL, LIQUID COOLING SUPPORT TOP AND BOTTOM 240 MM, GRAFIC CARD 330 MM",
        "fullDescription":  "CASE FRANTIC MIC GC702\nGABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB, VIDRIO TEMPLADO LATERAL Y MESH FRONTAL PANEL, LIQUID COOLING SUPPORT TOP AND BOTTOM 240 MM, GRAFIC CARD 330 MM",
        "orderCount":  120,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745667141-prod-60-case-micronics-frantic.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745667141-prod-60-case-micronics-frantic.jpg"
                   ],
        "sortOrder":  56
    },
    {
        "id":  "prod-61",
        "name":  "CASE MICRONICS FURIOUS MIC GC701 CON FUENTE REAL DE 650W ATX.",
        "category":  "Fuente de Poder",
        "price":  230,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "FURIOUS MIC GC701\nGABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB (3 FRONTAL, 1 BACK) VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT TOP AND FRONTAL 240 MM, GRAFIC CARD 330 MM.",
        "fullDescription":  "FURIOUS MIC GC701\nGABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB (3 FRONTAL, 1 BACK) VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT TOP AND FRONTAL 240 MM, GRAFIC CARD 330 MM.",
        "orderCount":  119,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745668253-prod-61-case-micronics-furious.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745668253-prod-61-case-micronics-furious.jpg"
                   ],
        "sortOrder":  57
    },
    {
        "id":  "prod-62",
        "name":  "CASE FALCON ENK 5000 CON 4 FAN GAMER RGB",
        "category":  "Case",
        "price":  105,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE FALCON ENKORE ENC 5000 GABINETE ATX BLACK  SIN FUENTE 04 FAN RAINBOW, VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT 240 MM, GRAFIC CARD 300 MM, ESPACIO INFERIOR PARA LA FUENTE",
        "fullDescription":  "CASE FALCON ENKORE ENC 5000 GABINETE ATX BLACK  SIN FUENTE 04 FAN RAINBOW, VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT 240 MM, GRAFIC CARD 300 MM, ESPACIO INFERIOR PARA LA FUENTE",
        "orderCount":  118,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745669449-prod-62-case-falcon-enk-5000-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745669449-prod-62-case-falcon-enk-5000-c.jpg"
                   ],
        "sortOrder":  58
    },
    {
        "id":  "prod-63",
        "name":  "CASE FALCON ENKORE PC 5000 CON 4FAN rainbow",
        "category":  "Case",
        "price":  100,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "CASE ENKORE FALCON ENC 5000 SIN FUENTE RAINBOW VIDRIO TEMPLADO MID TOWER",
        "fullDescription":  "CASE ENKORE FALCON ENC 5000 SIN FUENTE RAINBOW VIDRIO TEMPLADO MID TOWER",
        "orderCount":  117,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745670605-prod-63-case-falcon-enkore-pc-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745670605-prod-63-case-falcon-enkore-pc-.jpg"
                   ],
        "sortOrder":  59
    },
    {
        "id":  "prod-64",
        "name":  "CASE MICRONICS FANATIC LEGEND FNT 8007",
        "category":  "Case",
        "price":  169,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE MICRONICS FANATIC LEGEND FNT 8007   ATX, Micro-ATX, Mini-ITX\nCRISTAL TEMPLADO",
        "fullDescription":  "CASE MICRONICS FANATIC LEGEND FNT 8007   ATX, Micro-ATX, Mini-ITX\nCRISTAL TEMPLADO",
        "orderCount":  116,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745671390-prod-64-case-micronics-fanatic.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745671390-prod-64-case-micronics-fanatic.jpg"
                   ],
        "sortOrder":  60
    },
    {
        "id":  "prod-65",
        "name":  "CASE ANTRIX RX VORTEX CON FUENTE 600W REAL COOLERS RAIMBOW",
        "category":  "Refrigeración",
        "price":  284,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "CASE ANTRIX RX VORTEX CON FUENTE 600W REAL COOLERS RAIMBOW ATX, FULL ATX , MICRO ATX",
        "fullDescription":  "CASE ANTRIX RX VORTEX CON FUENTE 600W REAL COOLERS RAIMBOW ATX, FULL ATX , MICRO ATX",
        "orderCount":  115,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745672100-prod-65-case-antrix-rx-vortex-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745672100-prod-65-case-antrix-rx-vortex-.jpg"
                   ],
        "sortOrder":  61
    },
    {
        "id":  "prod-66",
        "name":  "CASE ENKORE DELTA 1000 230W | FAN | NEGRO OFICINA",
        "category":  "Case",
        "price":  83,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ENKORE DELTA ENC 1000 GABINETE 230W | FAN | NEGRO",
        "fullDescription":  "CASE ENKORE DELTA ENC 1000 GABINETE 230W | FAN | NEGRO",
        "orderCount":  114,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745672733-prod-66-case-enkore-delta-1000.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745672733-prod-66-case-enkore-delta-1000.jpg"
                   ],
        "sortOrder":  62
    },
    {
        "id":  "prod-67",
        "name":  "CASE CYBERTEL DERBY CBX C1005 SLIM 230W |P8 2 FAN",
        "category":  "Case",
        "price":  115,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE CYBERTEL DERBY  C1005 SLIM  230W | P8 2 FAN",
        "fullDescription":  "CASE CYBERTEL DERBY  C1005 SLIM  230W | P8 2 FAN",
        "orderCount":  113,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745673469-prod-67-case-cybertel-derby-cb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745673469-prod-67-case-cybertel-derby-cb.jpg"
                   ],
        "sortOrder":  63
    },
    {
        "id":  "prod-68",
        "name":  "CASE CYBERTEL EPICO CBX C1000 230W",
        "category":  "Case",
        "price":  127,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE CYBERTEL EPICO  CBX C1000  230W",
        "fullDescription":  "CASE CYBERTEL EPICO  CBX C1000  230W",
        "orderCount":  112,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745674567-prod-68-case-cybertel-epico-cb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745674567-prod-68-case-cybertel-epico-cb.jpg"
                   ],
        "sortOrder":  64
    },
    {
        "id":  "prod-69",
        "name":  "PROC. INTEL CORE ULTRA 5 225F LGA 1851",
        "category":  "Procesadores",
        "price":  722,
        "badge":  "",
        "inStock":  true,
        "description":  "PROC. INTEL CORE ULTRA 5 225F LGA 1851",
        "fullDescription":  "PROC. INTEL CORE ULTRA 5 225F LGA 1851",
        "orderCount":  111,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745675357-prod-69-proc--intel-core-ultra.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745675357-prod-69-proc--intel-core-ultra.jpg"
                   ],
        "sortOrder":  65
    },
    {
        "id":  "prod-70",
        "name":  "PROCESADOR CORE I5 12600KF LGA 1700",
        "category":  "Procesadores",
        "price":  814,
        "badge":  "",
        "inStock":  true,
        "description":  "PROCESADOR CORE I5 12600KF LGA 1700",
        "fullDescription":  "PROCESADOR CORE I5 12600KF LGA 1700",
        "orderCount":  110,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745676062-prod-70-procesador-core-i5-126.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745676062-prod-70-procesador-core-i5-126.jpg"
                   ],
        "sortOrder":  66
    },
    {
        "id":  "prod-71",
        "name":  "Procesador Intel Core i5-12600K LGA1700, 125W, 10 nm. (CON VIDEO)",
        "category":  "Procesadores",
        "price":  920,
        "badge":  "",
        "inStock":  true,
        "description":  "Procesador Intel Core i5-12600K 3.70 / 4.90GHz, 20MB Caché L3, LGA1700, 125W, 10 nm.  CON TARJETA DE VIDEO",
        "fullDescription":  "Procesador Intel Core i5-12600K 3.70 / 4.90GHz, 20MB Caché L3, LGA1700, 125W, 10 nm.  CON TARJETA DE VIDEO",
        "orderCount":  109,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745677151-prod-71-procesador-intel-core-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745677151-prod-71-procesador-intel-core-.jpg"
                   ],
        "sortOrder":  67
    },
    {
        "id":  "prod-72",
        "name":  "PROCESADOR CORE 10TH GEN CORE I3 - 10100F (LGA1200)",
        "category":  "Procesadores",
        "price":  239,
        "badge":  "",
        "inStock":  true,
        "description":  "PROCESADOR  CORE  10TH GEN CORE I3 - 10100F  (LGA1200)",
        "fullDescription":  "PROCESADOR  CORE  10TH GEN CORE I3 - 10100F  (LGA1200)",
        "orderCount":  108,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745678226-prod-72-procesador-core-10th-g.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745678226-prod-72-procesador-core-10th-g.jpg"
                   ],
        "sortOrder":  68
    },
    {
        "id":  "prod-73",
        "name":  "PROCESADOR INTEL CORE i5 12400",
        "category":  "Procesadores",
        "price":  781,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Procesador intel core i5 12400 (bx8071512400) 2.5ghz-18mb | LGA 1700",
        "fullDescription":  "Procesador intel core i5 12400 (bx8071512400) 2.5ghz-18mb | LGA 1700",
        "orderCount":  107,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745679345-prod-73-procesador-intel-core-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745679345-prod-73-procesador-intel-core-.jpg"
                   ],
        "sortOrder":  69
    },
    {
        "id":  "prod-74",
        "name":  "PROCESADOR INTEL CORE i7 14700",
        "category":  "Procesadores",
        "price":  1669,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Intel Core i7-14700 Procesador 20 Núcleos 28 Hilos 5.4GHz LGA1700",
        "fullDescription":  "Intel Core i7-14700 Procesador 20 Núcleos 28 Hilos 5.4GHz LGA1700",
        "orderCount":  106,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745680417-prod-74-procesador-intel-core-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745680417-prod-74-procesador-intel-core-.jpg"
                   ],
        "sortOrder":  70
    },
    {
        "id":  "prod-75",
        "name":  "PROCESADOR INTEL CORE i9 - 14900",
        "category":  "Procesadores",
        "price":  2576,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR INTEL CORE i9-14900, Cache 36 MB, Hasta 5.8 Ghz",
        "fullDescription":  "PROCESADOR INTEL CORE i9-14900, Cache 36 MB, Hasta 5.8 Ghz",
        "orderCount":  105,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745681914-prod-75-procesador-intel-core-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745681914-prod-75-procesador-intel-core-.jpg"
                   ],
        "sortOrder":  71
    },
    {
        "id":  "prod-76",
        "name":  "PROCESADOR INTEL CORE i5 - 10500T OEM",
        "category":  "Procesadores",
        "price":  490,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR INTEL CORE I5 -10500T LGA 1200 10TH GEN OEM",
        "fullDescription":  "PROCESADOR INTEL CORE I5 -10500T LGA 1200 10TH GEN OEM",
        "orderCount":  104,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745682930-prod-76-procesador-intel-core-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745682930-prod-76-procesador-intel-core-.jpg"
                   ],
        "sortOrder":  72
    },
    {
        "id":  "prod-77",
        "name":  "PROCESADOR CORE ULTRA 7 - 270K PLUS LGA1851",
        "category":  "Procesadores",
        "price":  1490,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR INTEL CORE ULTRA 7 270K PLUS",
        "fullDescription":  "PROCESADOR INTEL CORE ULTRA 7 270K PLUS",
        "orderCount":  103,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745683590-prod-77-procesador-core-ultra-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745683590-prod-77-procesador-core-ultra-.jpg"
                   ],
        "sortOrder":  73
    },
    {
        "id":  "prod-78",
        "name":  "RYZEN 9 9900X 12 NUCLEOS Y 24 HILOS",
        "category":  "Procesadores",
        "price":  1640,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "RYZEN 9 9900X  12 NUCLEOS Y 24 HILOS AM5",
        "fullDescription":  "RYZEN 9 9900X  12 NUCLEOS Y 24 HILOS AM5",
        "orderCount":  102,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745684216-prod-78-ryzen-9-9900x-12-nucle.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745684216-prod-78-ryzen-9-9900x-12-nucle.jpg"
                   ],
        "sortOrder":  74
    },
    {
        "id":  "prod-79",
        "name":  "Ryzen 5 9600x 6 núcleos y 12 hilos",
        "category":  "Procesadores",
        "price":  765,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Ryzen 5 9600x 6 núcleos y 12 hilos AM5",
        "fullDescription":  "Ryzen 5 9600x 6 núcleos y 12 hilos AM5",
        "orderCount":  101,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745684843-prod-79-ryzen-5-9600x-6-n-cleo.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745684843-prod-79-ryzen-5-9600x-6-n-cleo.jpg"
                   ],
        "sortOrder":  75
    },
    {
        "id":  "prod-80",
        "name":  "PROC RYZEN 5 8600G",
        "category":  "Procesadores",
        "price":  680,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PROC RYZEN 5 8600G 6 CORE 12 THREAD 5.0 GHZ",
        "fullDescription":  "PROC RYZEN 5 8600G 6 CORE 12 THREAD 5.0 GHZ",
        "orderCount":  100,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745685603-prod-80-proc-ryzen-5-8600g.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745685603-prod-80-proc-ryzen-5-8600g.jpg"
                   ],
        "sortOrder":  76
    },
    {
        "id":  "prod-81",
        "name":  "PROCESADOR RYZEN 5 5500 AM4",
        "category":  "Procesadores",
        "price":  367,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PROCESADOR RYZEN 5 5500 AM4",
        "fullDescription":  "PROCESADOR RYZEN 5 5500 AM4",
        "orderCount":  99,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745686647-prod-81-procesador-ryzen-5-550.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745686647-prod-81-procesador-ryzen-5-550.jpg"
                   ],
        "sortOrder":  77
    },
    {
        "id":  "prod-82",
        "name":  "PROCESADOR RYZEN 5 5600GT AM4",
        "category":  "Procesadores",
        "price":  691,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR AMD RYZEN 5 5600GT 3.6GHZ HASTA 4.6GHZ 19MB (100-100001488BOX) AM4, 6 NUCLEOS",
        "fullDescription":  "PROCESADOR AMD RYZEN 5 5600GT 3.6GHZ HASTA 4.6GHZ 19MB (100-100001488BOX) AM4, 6 NUCLEOS",
        "orderCount":  98,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745687751-prod-82-procesador-ryzen-5-560.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745687751-prod-82-procesador-ryzen-5-560.jpg"
                   ],
        "sortOrder":  78
    },
    {
        "id":  "prod-83",
        "name":  "PROCESADOR AMD RYZEN 7 5700G CON GRAFICOS",
        "category":  "Procesadores",
        "price":  790,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "PROCESADOR AMD RYZEN 7 5700G 3.8GHZ HASTA 4.6GHZ 20MB (100-100000263BOX) AM4, 8 NUCLEOS, RADEON GRAPHICS\nCON GRAFICOS",
        "fullDescription":  "PROCESADOR AMD RYZEN 7 5700G 3.8GHZ HASTA 4.6GHZ 20MB (100-100000263BOX) AM4, 8 NUCLEOS, RADEON GRAPHICS\nCON GRAFICOS",
        "orderCount":  97,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745688709-prod-83-procesador-amd-ryzen-7.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745688709-prod-83-procesador-amd-ryzen-7.jpg"
                   ],
        "sortOrder":  79
    },
    {
        "id":  "prod-84",
        "name":  "PROCESADOR RYZEN 5 7600X AM5",
        "category":  "Procesadores",
        "price":  710,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PROCESADOR RYZEN 5 7600X AM5.   4.7Ghz Hasta 5.3Ghz 6 núcleos y 12",
        "fullDescription":  "PROCESADOR RYZEN 5 7600X AM5.   4.7Ghz Hasta 5.3Ghz 6 núcleos y 12",
        "orderCount":  96,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745689473-prod-84-procesador-ryzen-5-760.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745689473-prod-84-procesador-ryzen-5-760.jpg"
                   ],
        "sortOrder":  80
    },
    {
        "id":  "prod-85",
        "name":  "MEMORIA PNY LR8 DUO 2X16 3200MHZ 32GB DDR4 RGB (PC)",
        "category":  "Memoria Ram",
        "price":  800,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA PNY LR8 DUO 2X16 3200MHZ 32GB",
        "fullDescription":  "MEMORIA PNY LR8 DUO 2X16 3200MHZ 32GB",
        "orderCount":  95,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745690597-prod-85-memoria-pny-lr8-duo-2x.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745690597-prod-85-memoria-pny-lr8-duo-2x.jpg"
                   ],
        "sortOrder":  81
    },
    {
        "id":  "prod-86",
        "name":  "MEMORIA CORSAIR VENGEANCE DUO 2X8 3600HZ 16GB DDR4 (PC)",
        "category":  "Memoria Ram",
        "price":  604,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA CORSAIR  VENGEANCE DUO 2X8 3600HZ 16GB DDR4",
        "fullDescription":  "MEMORIA CORSAIR  VENGEANCE DUO 2X8 3600HZ 16GB DDR4",
        "orderCount":  94,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745691554-prod-86-memoria-corsair-vengea.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745691554-prod-86-memoria-corsair-vengea.jpg"
                   ],
        "sortOrder":  82
    },
    {
        "id":  "prod-87",
        "name":  "MEMORIA DDR4 XPG SPECTRIX D60G 8GB 3200MHZ (PC)",
        "category":  "Memoria Ram",
        "price":  255,
        "badge":  "",
        "inStock":  true,
        "description":  "memoria xpg spectrix d60g 8gb 3200mz",
        "fullDescription":  "memoria xpg spectrix d60g 8gb 3200mz",
        "orderCount":  93,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745692339-prod-87-memoria-ddr4-xpg-spect.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745692339-prod-87-memoria-ddr4-xpg-spect.jpg"
                   ],
        "sortOrder":  83
    },
    {
        "id":  "prod-88",
        "name":  "MEMORIA DDR4 RGB LED HP 3600MHZ 8GB (PC)",
        "category":  "Memoria Ram",
        "price":  274,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA DDR4 RGB LED HP 3600MHZ 8GB PC CARCASA DE REFRIGERACION  DE METAL CEPILLADO",
        "fullDescription":  "MEMORIA DDR4 RGB LED HP 3600MHZ 8GB PC CARCASA DE REFRIGERACION  DE METAL CEPILLADO",
        "orderCount":  92,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745693309-prod-88-memoria-ddr4-rgb-led-h.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745693309-prod-88-memoria-ddr4-rgb-led-h.jpg"
                   ],
        "sortOrder":  84
    },
    {
        "id":  "prod-89",
        "name":  "MEMORIA DDR4 XPG DE 16GB BUSS 3200 BLANCO",
        "category":  "Memoria Ram",
        "price":  405,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA RAM XPG 16GB 3200MHZ D35 GAMMIX WHITE",
        "fullDescription":  "MEMORIA RAM XPG 16GB 3200MHZ D35 GAMMIX WHITE",
        "orderCount":  91,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745694542-prod-89-memoria-ddr4-xpg-de-16.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745694542-prod-89-memoria-ddr4-xpg-de-16.jpg"
                   ],
        "sortOrder":  85
    },
    {
        "id":  "prod-90",
        "name":  "MEMORIA DDR4 XPG 8GB D35 BUSS 3200",
        "category":  "Memoria Ram",
        "price":  225,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA RAM XPG 8GB 3200MHZ D35 GAMMIX WHITE",
        "fullDescription":  "MEMORIA RAM XPG 8GB 3200MHZ D35 GAMMIX WHITE",
        "orderCount":  90,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745695744-prod-90-memoria-ddr4-xpg-8gb-d.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745695744-prod-90-memoria-ddr4-xpg-8gb-d.jpg"
                   ],
        "sortOrder":  86
    },
    {
        "id":  "prod-91",
        "name":  "MEMORIA DDR4 ADATA BUSS 3200 8GB",
        "category":  "Memoria Ram",
        "price":  215,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIAS DDR4 8GB 3200 ADATA AD4U32008G22SGN",
        "fullDescription":  "MEMORIAS DDR4 8GB 3200 ADATA AD4U32008G22SGN",
        "orderCount":  89,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745696555-prod-91-memoria-ddr4-adata-bus.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745696555-prod-91-memoria-ddr4-adata-bus.jpg"
                   ],
        "sortOrder":  87
    },
    {
        "id":  "prod-92",
        "name":  "MEMORIA DDR3 FURY HYPERX 1600MHZ 8GB (PC)",
        "category":  "Tarjetas de Video",
        "price":  95,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MEMORIA DDR3 KINGSTON FURY HYPERX 8GB 1600MHZ 8GB PARA PC",
        "fullDescription":  "MEMORIA DDR3 KINGSTON FURY HYPERX 8GB 1600MHZ 8GB PARA PC",
        "orderCount":  88,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745697431-prod-92-memoria-ddr3-fury-hype.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745697431-prod-92-memoria-ddr3-fury-hype.jpg"
                   ],
        "sortOrder":  88
    },
    {
        "id":  "prod-93",
        "name":  "MEMORIA KINGSTON FURY DDR4 DE 16GB BUSS 3200",
        "category":  "Memoria Ram",
        "price":  415,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON FURY BEAST 16GB DDR4 3200 BLACK KF432C16BB1/16\nSIN DISIPADOR, ORIGINAL",
        "fullDescription":  "MEMORIA KINGSTON FURY BEAST 16GB DDR4 3200 BLACK KF432C16BB1/16\nSIN DISIPADOR, ORIGINAL",
        "orderCount":  87,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745698369-prod-93-memoria-kingston-fury-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745698369-prod-93-memoria-kingston-fury-.jpg"
                   ],
        "sortOrder":  89
    },
    {
        "id":  "prod-94",
        "name":  "MEMORIA KINGSTON FURY DDR4 DE 8GB BUSS 3200",
        "category":  "Memoria Ram",
        "price":  225,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON FURY BEAST 8GB DDR4 3200 MHZ ( KF432C16BB/8 ) SIN DISIPADOR, ORIGINAL",
        "fullDescription":  "MEMORIA KINGSTON FURY BEAST 8GB DDR4 3200 MHZ ( KF432C16BB/8 ) SIN DISIPADOR, ORIGINAL",
        "orderCount":  86,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745699169-prod-94-memoria-kingston-fury-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745699169-prod-94-memoria-kingston-fury-.jpg"
                   ],
        "sortOrder":  90
    },
    {
        "id":  "prod-95",
        "name":  "MEMORIA KINGSTON FURY DE 16GB DDR5 BUSS 5600",
        "category":  "Memoria Ram",
        "price":  415,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON FURY BEAST 16GB DDR4 3200 BLACK KF432C16BB1/16\nSIN DISIPADOR, ORIGINAL",
        "fullDescription":  "MEMORIA KINGSTON FURY BEAST 16GB DDR4 3200 BLACK KF432C16BB1/16\nSIN DISIPADOR, ORIGINAL",
        "orderCount":  85,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745699936-prod-95-memoria-kingston-fury-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745699936-prod-95-memoria-kingston-fury-.jpg"
                   ],
        "sortOrder":  91
    },
    {
        "id":  "prod-96",
        "name":  "MEMORIA KINGSTON DDR4 32GB 3200 MHZ ori (PC )",
        "category":  "Memoria Ram",
        "price":  775,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON DDR4 32GB PARA  ( PC )",
        "fullDescription":  "MEMORIA KINGSTON DDR4 32GB PARA  ( PC )",
        "orderCount":  84,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745700680-prod-96-memoria-kingston-ddr4-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745700680-prod-96-memoria-kingston-ddr4-.jpg"
                   ],
        "sortOrder":  92
    },
    {
        "id":  "prod-97",
        "name":  "MEMORIA OEM LAPTOP 8GB HYNIX DRR4 2400MHZ",
        "category":  "Memoria Ram",
        "price":  160,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA OEM LAPTOP 8GB SAMSUNG DRR4 2666",
        "fullDescription":  "MEMORIA OEM LAPTOP 8GB SAMSUNG DRR4 2666",
        "orderCount":  83,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745701826-prod-97-memoria-oem-laptop-8gb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745701826-prod-97-memoria-oem-laptop-8gb.jpg"
                   ],
        "sortOrder":  93
    },
    {
        "id":  "prod-98",
        "name":  "MEMORIA OEM LAPTOP 8GB SAMSUNG DRR4 2666",
        "category":  "Memoria Ram",
        "price":  160,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA OEM LAPTOP 8GB SAMSUNG DRR4 2666",
        "fullDescription":  "MEMORIA OEM LAPTOP 8GB SAMSUNG DRR4 2666",
        "orderCount":  82,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745702953-prod-98-memoria-oem-laptop-8gb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745702953-prod-98-memoria-oem-laptop-8gb.jpg"
                   ],
        "sortOrder":  94
    },
    {
        "id":  "prod-99",
        "name":  "MEMORIA KINGSTON LAPTOP 16GB DDR4 3200 CL22 (SODIM)",
        "category":  "Memoria Ram",
        "price":  377,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA RAM PARA LAPTOP 16GB DDR4 3200 CL22",
        "fullDescription":  "MEMORIA RAM PARA LAPTOP 16GB DDR4 3200 CL22",
        "orderCount":  81,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745704120-prod-99-memoria-kingston-lapto.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745704120-prod-99-memoria-kingston-lapto.jpg"
                   ],
        "sortOrder":  95
    },
    {
        "id":  "prod-100",
        "name":  "SSD KINGSTON NV3, 500GB, M.2, 2280, NVMe PCIe 4.0 x4",
        "category":  "Almacenamiento",
        "price":  391,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "SSD KINGSTON NV3, 500GB, M.2, 2280, NVMe PCIe 4.0 x4",
        "fullDescription":  "SSD KINGSTON NV3, 500GB, M.2, 2280, NVMe PCIe 4.0 x4",
        "orderCount":  80,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745705419-prod-100-ssd-kingston-nv3--500.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745705419-prod-100-ssd-kingston-nv3--500.jpg"
                   ],
        "sortOrder":  96
    },
    {
        "id":  "prod-101",
        "name":  "SSD KINGSTON NV3 1000GB , M.2 4.0 PCLe",
        "category":  "Almacenamiento",
        "price":  585,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Unidad en estado solido Kingston 1000GB NV3 PCIe 4.0 NVMe M.2 SSD",
        "fullDescription":  "Unidad en estado solido Kingston 1000GB NV3 PCIe 4.0 NVMe M.2 SSD",
        "orderCount":  79,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745706537-prod-101-ssd-kingston-nv3-1000.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745706537-prod-101-ssd-kingston-nv3-1000.jpg"
                   ],
        "sortOrder":  97
    },
    {
        "id":  "prod-102",
        "name":  "SSD KINGSTON FURY RENEGADE M.2 PCLE 4.0 ( 1TB )",
        "category":  "Almacenamiento",
        "price":  1083,
        "badge":  "",
        "inStock":  true,
        "description":  "SSD KINGSTON FURY RENEGADE G5, 1TB , M.2 2280, NVMe PCIe 5.0x4",
        "fullDescription":  "SSD KINGSTON FURY RENEGADE G5, 1TB , M.2 2280, NVMe PCIe 5.0x4",
        "orderCount":  78,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745707795-prod-102-ssd-kingston-fury-ren.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745707795-prod-102-ssd-kingston-fury-ren.jpg"
                   ],
        "sortOrder":  98
    },
    {
        "id":  "prod-103",
        "name":  "SSD M.2 ABADDONX DE 1TB",
        "category":  "Sillas Gamer",
        "price":  494,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "SSD M.2 ABADDONX DE 1TB",
        "fullDescription":  "SSD M.2 ABADDONX DE 1TB",
        "orderCount":  77,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745709059-prod-103-ssd-m-2-abaddonx-de-1.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745709059-prod-103-ssd-m-2-abaddonx-de-1.jpg"
                   ],
        "sortOrder":  99
    },
    {
        "id":  "prod-104",
        "name":  "SSD M.2 ABADDONX 256 GB",
        "category":  "Sillas Gamer",
        "price":  184,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "SSD M.2 ABADDONIX  256GB",
        "fullDescription":  "SSD M.2 ABADDONIX  256GB",
        "orderCount":  76,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745710252-prod-104-ssd-m-2-abaddonx-256-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745710252-prod-104-ssd-m-2-abaddonx-256-.jpg"
                   ],
        "sortOrder":  100
    },
    {
        "id":  "prod-105",
        "name":  "SSD M.2 ABADDONX 512 GB",
        "category":  "Sillas Gamer",
        "price":  294,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "SSD M.2 ABADDONIX  512GB",
        "fullDescription":  "SSD M.2 ABADDONIX  512GB",
        "orderCount":  75,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745711498-prod-105-ssd-m-2-abaddonx-512-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745711498-prod-105-ssd-m-2-abaddonx-512-.jpg"
                   ],
        "sortOrder":  101
    },
    {
        "id":  "prod-106",
        "name":  "SSD CEAMERE - 240GB SATA",
        "category":  "Almacenamiento",
        "price":  155,
        "badge":  "",
        "inStock":  true,
        "description":  "CEAMERE 2-10 Uds SSD personalizado 120GB 240GB 480GB 960GB unidad interna Sata3 de estado sólido 2,5 128GB",
        "fullDescription":  "CEAMERE 2-10 Uds SSD personalizado 120GB 240GB 480GB 960GB unidad interna Sata3 de estado sólido 2,5 128GB",
        "orderCount":  74,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745712515-prod-106-ssd-ceamere---240gb-s.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745712515-prod-106-ssd-ceamere---240gb-s.jpg"
                   ],
        "sortOrder":  102
    },
    {
        "id":  "prod-107",
        "name":  "SSD ADATA 480GB SATA 2.5 SU630",
        "category":  "Almacenamiento",
        "price":  285,
        "badge":  "",
        "inStock":  true,
        "description":  "DISCO SOLIDO SSD SATA 2.5 ADATA 480GB SU630, UNIDAD DE ALMACENAMIENTO, COMPATIBLE CON LAPTOP Y PC DE ESCRITORIO ( ASU630",
        "fullDescription":  "DISCO SOLIDO SSD SATA 2.5 ADATA 480GB SU630, UNIDAD DE ALMACENAMIENTO, COMPATIBLE CON LAPTOP Y PC DE ESCRITORIO ( ASU630",
        "orderCount":  73,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745713510-prod-107-ssd-adata-480gb-sata-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745713510-prod-107-ssd-adata-480gb-sata-.jpg"
                   ],
        "sortOrder":  103
    },
    {
        "id":  "prod-108",
        "name":  "SSD ADATA 256GB SATA 2.5 SU650",
        "category":  "Almacenamiento",
        "price":  170,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "DISCO SOLIDO SSD SATA 2.5 ADATA  256GB SU630, UNIDAD DE ALMACENAMIENTO, COMPATIBLE CON LAPTOP Y PC DE ESCRITORIO ( ASU630",
        "fullDescription":  "DISCO SOLIDO SSD SATA 2.5 ADATA  256GB SU630, UNIDAD DE ALMACENAMIENTO, COMPATIBLE CON LAPTOP Y PC DE ESCRITORIO ( ASU630",
        "orderCount":  72,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745714641-prod-108-ssd-adata-256gb-sata-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745714641-prod-108-ssd-adata-256gb-sata-.jpg"
                   ],
        "sortOrder":  104
    },
    {
        "id":  "prod-110",
        "name":  "TARJETA GRAF PELAND . GT 730 4GB DDR3",
        "category":  "Tarjetas de Video",
        "price":  290,
        "badge":  "",
        "inStock":  true,
        "description":  "Tarjeta gráfica PELAND GT730 NVIDIA GeForce GT 730, 4 GB DDR3, 128 bits, 700 MHz, Tarjeta de vídeo GPU para PC Gaming, DVI, HDMI, VGA, PCI Express 2.0, Compatible con Dir  ( VIENE - CON PERFIL BAJO )",
        "fullDescription":  "Tarjeta gráfica PELAND GT730 NVIDIA GeForce GT 730, 4 GB DDR3, 128 bits, 700 MHz, Tarjeta de vídeo GPU para PC Gaming, DVI, HDMI, VGA, PCI Express 2.0, Compatible con Dir  ( VIENE - CON PERFIL BAJO )",
        "orderCount":  70,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745716358-prod-110-tarjeta-graf-peland--.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745716358-prod-110-tarjeta-graf-peland--.jpg"
                   ],
        "sortOrder":  105
    },
    {
        "id":  "prod-111",
        "name":  "TARJETA DE VIDEO WINNFOX GT730 (4GB) DDR3",
        "category":  "Tarjetas de Video",
        "price":  290,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Geforce Gt 730 4gb Gddr3 128bits - Winnfox - Gt730lp-4gd3-a",
        "fullDescription":  "Geforce Gt 730 4gb Gddr3 128bits - Winnfox - Gt730lp-4gd3-a",
        "orderCount":  69,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745717458-prod-111-tarjeta-de-video-winn.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745717458-prod-111-tarjeta-de-video-winn.jpg"
                   ],
        "sortOrder":  106
    },
    {
        "id":  "prod-112",
        "name":  "TARJE. GRAFIC ROG GAMING GT610 (2GB) DDR3",
        "category":  "Memoria Ram",
        "price":  180,
        "badge":  "",
        "inStock":  true,
        "description":  "La NVIDIA GeForce GT 610 de 2GB DDR3",
        "fullDescription":  "La NVIDIA GeForce GT 610 de 2GB DDR3",
        "orderCount":  68,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745718412-prod-112-tarje--grafic-rog-gam.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745718412-prod-112-tarje--grafic-rog-gam.jpg"
                   ],
        "sortOrder":  107
    },
    {
        "id":  "prod-113",
        "name":  "RX 5500 PELAND 8GD6 Gaming Graphics Card",
        "category":  "Tarjetas de Video",
        "price":  720,
        "badge":  "",
        "inStock":  true,
        "description":  "RX 5500 XT 8GD6 Gaming Graphics Card  Product Series\nRX 5000\nGraphics chip\nNavi 14\nChipset Process\n7 nm\nBase frequency\n1717MHz\nMemory Capacity\n8G\nMemory Type\nGDDR6\nMemory Clock\n1750 MHz\nBus Width\n128 bit",
        "fullDescription":  "RX 5500 XT 8GD6 Gaming Graphics Card  Product Series\nRX 5000\nGraphics chip\nNavi 14\nChipset Process\n7 nm\nBase frequency\n1717MHz\nMemory Capacity\n8G\nMemory Type\nGDDR6\nMemory Clock\n1750 MHz\nBus Width\n128 bit",
        "orderCount":  67,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745719514-prod-113-rx-5500-peland-8gd6-g.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745719514-prod-113-rx-5500-peland-8gd6-g.jpg"
                   ],
        "sortOrder":  108
    },
    {
        "id":  "prod-114",
        "name":  "TARJETA DE VIDEO TEROS RX 580 8GB GDDR5 ( 256 BIT)",
        "category":  "Tarjetas de Video",
        "price":  635,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "Tarjeta de video TEROS AMD Radeon RX 580 8GB GDDR5, PCI Express Gen 3.0 x16",
        "fullDescription":  "Tarjeta de video TEROS AMD Radeon RX 580 8GB GDDR5, PCI Express Gen 3.0 x16",
        "orderCount":  66,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745720820-prod-114-tarjeta-de-video-tero.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745720820-prod-114-tarjeta-de-video-tero.jpg"
                   ],
        "sortOrder":  109
    },
    {
        "id":  "prod-115",
        "name":  "T. VIDEO ASUS GEFORCE NVIDIA RTX 3050 DUAL 6GB GDDR6",
        "category":  "Tarjetas de Video",
        "price":  950,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "TARJETA DE VIDEO ASUS GEFORCE RTX 3050 DUAL  6GB GDDR6 (90YV0K60-M0AA00) GEFORCE NVIDIA 96 BITS, 2 VENTILADORES",
        "fullDescription":  "TARJETA DE VIDEO ASUS GEFORCE RTX 3050 DUAL  6GB GDDR6 (90YV0K60-M0AA00) GEFORCE NVIDIA 96 BITS, 2 VENTILADORES",
        "orderCount":  65,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745721908-prod-115-t--video-asus-geforce.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745721908-prod-115-t--video-asus-geforce.jpg"
                   ],
        "sortOrder":  110
    },
    {
        "id":  "prod-116",
        "name":  "PALIT GEFORCE PALIT RTX 3050 StormX 6GB",
        "category":  "Tarjetas de Video",
        "price":  885,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "VGA PALIT GEFORCE RTX 3050 StormX 6GB GDDR6 1 FANS",
        "fullDescription":  "VGA PALIT GEFORCE RTX 3050 StormX 6GB GDDR6 1 FANS",
        "orderCount":  64,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745723352-prod-116-palit-geforce-palit-r.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745723352-prod-116-palit-geforce-palit-r.jpg"
                   ],
        "sortOrder":  111
    },
    {
        "id":  "prod-117",
        "name":  "PLACA ROG GAMING H610M DDR5 12 AVA 13 AVA 14 AVA",
        "category":  "Placas Madres",
        "price":  268,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA H610M ROG GAMING LGA DDR5 1700 para 12va a 14va generación DDR5",
        "fullDescription":  "PLACA H610M ROG GAMING LGA DDR5 1700 para 12va a 14va generación DDR5",
        "orderCount":  63,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745724110-prod-117-placa-rog-gaming-h610.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745724110-prod-117-placa-rog-gaming-h610.jpg"
                   ],
        "sortOrder":  112
    },
    {
        "id":  "prod-119",
        "name":  "PLACA B550 M-A WIFI ASUS",
        "category":  "Placas Madres",
        "price":  360,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Motherboard Asus PRIME B550M-A AC, Chipset AMD B550, Socket AMD AM4, mATX",
        "fullDescription":  "Motherboard Asus PRIME B550M-A AC, Chipset AMD B550, Socket AMD AM4, mATX",
        "orderCount":  61,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745726285-prod-119-placa-b550-m-a-wifi-a.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745726285-prod-119-placa-b550-m-a-wifi-a.jpg"
                   ],
        "sortOrder":  113
    },
    {
        "id":  "prod-120",
        "name":  "PLACA MADRE GIGABYTE A520M K V2 (A520M K V2) SOCKET AM4, RAM DDR4 BUSS 5100OC MHZ",
        "category":  "Placas Madres",
        "price":  210,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PLACA MADRE GIGABYTE A520M K V2 (A520M K V2) SOCKET AM4, RAM DDR4 BUSS 5100OC MHZ Soporta Ryzen 5000/4000/3000 y sus versiones G-Series , x2 ranuras (Admite hasta 64 GB)",
        "fullDescription":  "PLACA MADRE GIGABYTE A520M K V2 (A520M K V2) SOCKET AM4, RAM DDR4 BUSS 5100OC MHZ Soporta Ryzen 5000/4000/3000 y sus versiones G-Series , x2 ranuras (Admite hasta 64 GB)",
        "orderCount":  60,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745727584-prod-120-placa-madre-gigabyte-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745727584-prod-120-placa-madre-gigabyte-.jpg"
                   ],
        "sortOrder":  114
    },
    {
        "id":  "prod-121",
        "name":  "PLACA GIGABYTE H610M K DRR4",
        "category":  "Placas Madres",
        "price":  283,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA GIGABYTE  H610M K DRR4",
        "fullDescription":  "PLACA GIGABYTE  H610M K DRR4",
        "orderCount":  59,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745728376-prod-121-placa-gigabyte-h610m-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745728376-prod-121-placa-gigabyte-h610m-.jpg"
                   ],
        "sortOrder":  115
    },
    {
        "id":  "prod-122",
        "name":  "PLACA ASUS A520M-K",
        "category":  "Placas Madres",
        "price":  207,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Placa ASUS A520M-K Socket AM4",
        "fullDescription":  "Placa ASUS A520M-K Socket AM4",
        "orderCount":  58,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745729280-prod-122-placa-asus-a520m-k.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745729280-prod-122-placa-asus-a520m-k.jpg"
                   ],
        "sortOrder":  116
    },
    {
        "id":  "prod-123",
        "name":  "Asus H610 DDR5 LGA 1700",
        "category":  "Placas Madres",
        "price":  268,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Asus H610 DDR5  LGA 1700 PARA 12VA,13VA,14VA GEN",
        "fullDescription":  "Asus H610 DDR5  LGA 1700 PARA 12VA,13VA,14VA GEN",
        "orderCount":  57,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745730034-prod-123-asus-h610-ddr5-lga-17.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745730034-prod-123-asus-h610-ddr5-lga-17.jpg"
                   ],
        "sortOrder":  117
    },
    {
        "id":  "prod-124",
        "name":  "PLACA MADRE H110 WINNFOX DDR4 PARA 6TA A 9NA GEN",
        "category":  "Placas Madres",
        "price":  235,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "PLACA WINNFOX H110 DDR4 LGA 1151 PARA 6TA \u0026 9NA GENERACION",
        "fullDescription":  "PLACA WINNFOX H110 DDR4 LGA 1151 PARA 6TA \u0026 9NA GENERACION",
        "orderCount":  56,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745731169-prod-124-placa-madre-h110-winn.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745731169-prod-124-placa-madre-h110-winn.jpg"
                   ],
        "sortOrder":  118
    },
    {
        "id":  "prod-125",
        "name":  "PLACA ASTROM AST B450-2 DE MICRONICS BY DE 1000 A 5000 MIL",
        "category":  "Placas Madres",
        "price":  190,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Procesador B450 -2 DE MICRONICS \nSocke  AMD AM4\nCompatible Procesadores: Ryzen 1000 al 5000 DDR4  2 Ranuras\nFrecuencias   2133 - 2400 - 2666 - 2933 - 3200 MHz\nCapacidad máxima  64 GB, Puertos 1 HDMI - 1 VGA - 1 RJ-45 - 2 USB 2.0 - 4 USB 3.0.\nConectores de Audio: 3 Line IN - Line OUT - MIC IN",
        "fullDescription":  "Procesador B450 -2 DE MICRONICS \nSocke  AMD AM4\nCompatible Procesadores: Ryzen 1000 al 5000 DDR4  2 Ranuras\nFrecuencias   2133 - 2400 - 2666 - 2933 - 3200 MHz\nCapacidad máxima  64 GB, Puertos 1 HDMI - 1 VGA - 1 RJ-45 - 2 USB 2.0 - 4 USB 3.0.\nConectores de Audio: 3 Line IN - Line OUT - MIC IN",
        "orderCount":  55,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745732335-prod-125-placa-astrom-ast-b450.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745732335-prod-125-placa-astrom-ast-b450.jpg"
                   ],
        "sortOrder":  119
    },
    {
        "id":  "prod-126",
        "name":  "PLACA WINNFOX A320 | AM4 | DDR4 | M.2 NVME | USB 3.0 | HDMI-VGA | RYZEN 1RA-3RA GEN",
        "category":  "Placas Madres",
        "price":  215,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA WINNFOX A320 | AM4 | DDR4 | M.2 NVME | USB 3.0 | HDMI-VGA | RYZEN 1RA-3RA GEN",
        "fullDescription":  "PLACA WINNFOX A320 | AM4 | DDR4 | M.2 NVME | USB 3.0 | HDMI-VGA | RYZEN 1RA-3RA GEN",
        "orderCount":  54,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745733501-prod-126-placa-winnfox-a320---.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745733501-prod-126-placa-winnfox-a320---.jpg"
                   ],
        "sortOrder":  120
    },
    {
        "id":  "prod-127",
        "name":  "PLACA ESONIC H81DA DDR3 LGA 1150 4TA GEN",
        "category":  "Placas Madres",
        "price":  150,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA  ESONIC H81DA DDR3  LGAN 1150 4TA GENERACION SATA /NV ME M.2 SSD",
        "fullDescription":  "PLACA  ESONIC H81DA DDR3  LGAN 1150 4TA GENERACION SATA /NV ME M.2 SSD",
        "orderCount":  53,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745734692-prod-127-placa-esonic-h81da-dd.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745734692-prod-127-placa-esonic-h81da-dd.jpg"
                   ],
        "sortOrder":  121
    },
    {
        "id":  "prod-128",
        "name":  "PLACA ESONIC H61DA DDR3",
        "category":  "Placas Madres",
        "price":  135,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA ESONIC H61DA DDR3 LGA 1155 2DA \u0026 3ERA GENERACION",
        "fullDescription":  "PLACA ESONIC H61DA DDR3 LGA 1155 2DA \u0026 3ERA GENERACION",
        "orderCount":  52,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745736133-prod-128-placa-esonic-h61da-dd.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745736133-prod-128-placa-esonic-h61da-dd.jpg"
                   ],
        "sortOrder":  122
    },
    {
        "id":  "prod-129",
        "name":  "PLACA HA310DA ESONIC DDR4",
        "category":  "Placas Madres",
        "price":  235,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "H310 Placa base de escritorio Esonic LGA1151 Placa base Matx para Intel 6TA - 7MA- 8VA- 9NA Generación",
        "fullDescription":  "H310 Placa base de escritorio Esonic LGA1151 Placa base Matx para Intel 6TA - 7MA- 8VA- 9NA Generación",
        "orderCount":  51,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745737785-prod-129-placa-ha310da-esonic-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745737785-prod-129-placa-ha310da-esonic-.jpg"
                   ],
        "sortOrder":  123
    },
    {
        "id":  "prod-130",
        "name":  "UPS SAT UR1000+ 1000VA/500W",
        "category":  "Fuente de Poder",
        "price":  175,
        "badge":  "",
        "inStock":  true,
        "description":  "UPS SAT UR1000+, 1000VA/500W, 220V, Interactiva, AVR, 6 Tomas",
        "fullDescription":  "UPS SAT UR1000+, 1000VA/500W, 220V, Interactiva, AVR, 6 Tomas",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745738562-prod-130-ups-sat-ur1000--1000v.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745738562-prod-130-ups-sat-ur1000--1000v.jpg"
                   ],
        "sortOrder":  124
    },
    {
        "id":  "prod-131",
        "name":  "FUENTE DE PODER SEASONIC FOCUS GX-1000W 80 PLUS GOLD ( WHITE )",
        "category":  "Fuente de Poder",
        "price":  524,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER SEASONIC FOCUS GX-1000W 80PLUS GOLD FULL MODULAR SSR-102-A5A32SF Totalmente compatible con ATX 3.1 y PCIe Normas 5.1.\r\nModularidad total para las mejores opciones de gestión de cables.\r\nSe agregó un cable 12V-2×6 para cumplir con las nuevas tarjetas gráficas.\r\nCojinete dinámico de fluidos de 135 mm ( FDB ) Ventilador para un funcionamiento silencioso.",
        "fullDescription":  "FUENTE DE PODER SEASONIC FOCUS GX-1000W 80PLUS GOLD FULL MODULAR SSR-102-A5A32SF Totalmente compatible con ATX 3.1 y PCIe Normas 5.1.\r\nModularidad total para las mejores opciones de gestión de cables.\r\nSe agregó un cable 12V-2×6 para cumplir con las nuevas tarjetas gráficas.\r\nCojinete dinámico de fluidos de 135 mm ( FDB ) Ventilador para un funcionamiento silencioso.",
        "orderCount":  49,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745739183-prod-131-fuente-de-poder-seaso.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745739183-prod-131-fuente-de-poder-seaso.jpg"
                   ],
        "sortOrder":  125
    },
    {
        "id":  "prod-132",
        "name":  "FUENTE DE PODER EVGA 500W W2 80 PLUS (100-W2-0500-K1)",
        "category":  "Fuente de Poder",
        "price":  155,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER EVGA 500W W2 80 PLUS (100-W2-0500-K1)",
        "fullDescription":  "FUENTE DE PODER EVGA 500W W2 80 PLUS (100-W2-0500-K1)",
        "orderCount":  48,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745740119-prod-132-fuente-de-poder-evga-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745740119-prod-132-fuente-de-poder-evga-.jpg"
                   ],
        "sortOrder":  126
    },
    {
        "id":  "prod-133",
        "name":  "FUENTE DE PODER COUGAR 450W ATX 80 PLUS, XTC ARGB WHITE",
        "category":  "Fuente de Poder",
        "price":  110,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER COUGAR XTC450 ARGB 80P WHITE (31XG045.0002P)",
        "fullDescription":  "FUENTE DE PODER COUGAR XTC450 ARGB 80P WHITE (31XG045.0002P)",
        "orderCount":  47,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745741053-prod-133-fuente-de-poder-couga.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745741053-prod-133-fuente-de-poder-couga.jpg"
                   ],
        "sortOrder":  127
    },
    {
        "id":  "prod-134",
        "name":  "Fuente De Poder Corsair Cv450 450w 80 Plus Bronze",
        "category":  "Fuente de Poder",
        "price":  110,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER COUGAR XTC450 ARGB 80P WHITE (31XG045.0002P)",
        "fullDescription":  "FUENTE DE PODER COUGAR XTC450 ARGB 80P WHITE (31XG045.0002P)",
        "orderCount":  46,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745741810-prod-134-fuente-de-poder-corsa.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745741810-prod-134-fuente-de-poder-corsa.jpg"
                   ],
        "sortOrder":  128
    },
    {
        "id":  "prod-135",
        "name":  "FUENTE TEROS 7160 600W BRONZE",
        "category":  "Fuente de Poder",
        "price":  135,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE TEROS 600W 7160 80 PLUS BRONZE",
        "fullDescription":  "FUENTE TEROS 600W 7160 80 PLUS BRONZE",
        "orderCount":  45,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745742748-prod-135-fuente-teros-7160-600.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745742748-prod-135-fuente-teros-7160-600.jpg"
                   ],
        "sortOrder":  129
    },
    {
        "id":  "prod-136",
        "name":  "FUENTE XPG PYLON 650W 80 PLUS BRONZE",
        "category":  "Fuente de Poder",
        "price":  224,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE XPG PYLON 650W 80PLUS BRONCE  PYLON",
        "fullDescription":  "FUENTE XPG PYLON 650W 80PLUS BRONCE  PYLON",
        "orderCount":  44,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745743398-prod-136-fuente-xpg-pylon-650w.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745743398-prod-136-fuente-xpg-pylon-650w.jpg"
                   ],
        "sortOrder":  130
    },
    {
        "id":  "prod-137",
        "name":  "FUENTE DE PODER ROG GAMING ATX- 600W 80 WHITE",
        "category":  "Fuente de Poder",
        "price":  155,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER ASUS 600W ATX, WHITE 80 PLUS, ROG STRIX 650G MODULAR, black (90YE00A1-B0AA00)",
        "fullDescription":  "FUENTE DE PODER ASUS 600W ATX, WHITE 80 PLUS, ROG STRIX 650G MODULAR, black (90YE00A1-B0AA00)",
        "orderCount":  43,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745744163-prod-137-fuente-de-poder-rog-g.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745744163-prod-137-fuente-de-poder-rog-g.jpg"
                   ],
        "sortOrder":  131
    },
    {
        "id":  "prod-138",
        "name":  "FUENTE CYBERTEL 350W GAMING CYBERMAX",
        "category":  "Fuente de Poder",
        "price":  79,
        "badge":  "",
        "inStock":  true,
        "description":  "La fuente Cybertel 350W es un modelo ATX de 350 vatios, diseñada para PCs de oficina o básicos, que utiliza un ventilador de 12 cm para refrigeración por aire. Incluye conectores comunes como ATX 20+4, P8, 3 SATA y 1 ATA, además de cables planos de 40 cm para una mejor organización.",
        "fullDescription":  "La fuente Cybertel 350W es un modelo ATX de 350 vatios, diseñada para PCs de oficina o básicos, que utiliza un ventilador de 12 cm para refrigeración por aire. Incluye conectores comunes como ATX 20+4, P8, 3 SATA y 1 ATA, además de cables planos de 40 cm para una mejor organización.",
        "orderCount":  42,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745744952-prod-138-fuente-cybertel-350w-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745744952-prod-138-fuente-cybertel-350w-.jpg"
                   ],
        "sortOrder":  132
    },
    {
        "id":  "prod-139",
        "name":  "FUENTE MICRONICS GAMER MACHINE 80 PLUS BRONZE 650w",
        "category":  "Fuente de Poder",
        "price":  150,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "FUENTE MICRONICS GAMER MACHINE 80 PLUS  BRONZE Fuente de poder de 650w.\nAPFC (Active Power Factor Controller).\nCable de alimentación incluido.\nConectores con cables planos\n1 Ventilador de 12 cm\n1 Conector ATX 20 + 4 pines / Cable plano de 680 mm\n2 Conector P8 (4 + 4) pines / Longitudes: 830 mm - 690 mm",
        "fullDescription":  "FUENTE MICRONICS GAMER MACHINE 80 PLUS  BRONZE Fuente de poder de 650w.\nAPFC (Active Power Factor Controller).\nCable de alimentación incluido.\nConectores con cables planos\n1 Ventilador de 12 cm\n1 Conector ATX 20 + 4 pines / Cable plano de 680 mm\n2 Conector P8 (4 + 4) pines / Longitudes: 830 mm - 690 mm",
        "orderCount":  41,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745745870-prod-139-fuente-micronics-game.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745745870-prod-139-fuente-micronics-game.jpg"
                   ],
        "sortOrder":  133
    },
    {
        "id":  "prod-140",
        "name":  "FUNTE DE PODER ATX 500W REALES MICRONICS FANATIC",
        "category":  "Fuente de Poder",
        "price":  106,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Fuente De Poder Gamer Atx 500w Reales Micronics Fanatic",
        "fullDescription":  "Fuente De Poder Gamer Atx 500w Reales Micronics Fanatic",
        "orderCount":  40,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745747099-prod-140-funte-de-poder-atx-50.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745747099-prod-140-funte-de-poder-atx-50.jpg"
                   ],
        "sortOrder":  134
    },
    {
        "id":  "prod-141",
        "name":  "FUENTE DE PODER MICRONICS 500W ATX 5500 SERIES",
        "category":  "Fuente de Poder",
        "price":  115,
        "badge":  "",
        "inStock":  true,
        "description":  "Fuente De Poder Micronics 500w (mic P5000) Atx | Basic | Negro/rojo",
        "fullDescription":  "Fuente De Poder Micronics 500w (mic P5000) Atx | Basic | Negro/rojo",
        "orderCount":  39,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745748313-prod-141-fuente-de-poder-micro.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745748313-prod-141-fuente-de-poder-micro.jpg"
                   ],
        "sortOrder":  135
    },
    {
        "id":  "prod-142",
        "name":  "FUENTE MSI MAG 650W 80 PLUS BROZE",
        "category":  "Fuente de Poder",
        "price":  181,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "FUENTE DE PODER MSI MAG A650W 80 PLUS BRONZE CERTIFICADA",
        "fullDescription":  "FUENTE DE PODER MSI MAG A650W 80 PLUS BRONZE CERTIFICADA",
        "orderCount":  38,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745749342-prod-142-fuente-msi-mag-650w-8.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745749342-prod-142-fuente-msi-mag-650w-8.jpg"
                   ],
        "sortOrder":  136
    },
    {
        "id":  "prod-143",
        "name":  "FUENTE GIGABYTE 850 W 80 PLUS GOLD",
        "category":  "Fuente de Poder",
        "price":  454,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER GIGABYTE 850WATTS FULL MODULAR 80PLUS GOLD CERTIFICADA",
        "fullDescription":  "FUENTE DE PODER GIGABYTE 850WATTS FULL MODULAR 80PLUS GOLD CERTIFICADA",
        "orderCount":  37,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745750156-prod-143-fuente-gigabyte-850-w.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745750156-prod-143-fuente-gigabyte-850-w.jpg"
                   ],
        "sortOrder":  137
    },
    {
        "id":  "prod-144",
        "name":  "FUENTE GIGABYTE P750W 80 PLUS GOLD",
        "category":  "Fuente de Poder",
        "price":  351,
        "badge":  "",
        "inStock":  true,
        "description":  "Fuente Certificada GIGABYTE P750W GM, 80+ GOLD",
        "fullDescription":  "Fuente Certificada GIGABYTE P750W GM, 80+ GOLD",
        "orderCount":  36,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745751664-prod-144-fuente-gigabyte-p750w.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745751664-prod-144-fuente-gigabyte-p750w.jpg"
                   ],
        "sortOrder":  138
    },
    {
        "id":  "prod-145",
        "name":  "FUENTE DE PODER ANTRIX KIRIN 850W GOLD",
        "category":  "Fuente de Poder",
        "price":  490,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER ANTRIX KIRIN 850W GOLD",
        "fullDescription":  "FUENTE DE PODER ANTRIX KIRIN 850W GOLD",
        "orderCount":  35,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745752440-prod-145-fuente-de-poder-antri.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745752440-prod-145-fuente-de-poder-antri.jpg"
                   ],
        "sortOrder":  139
    },
    {
        "id":  "prod-146",
        "name":  "FUENTE DE PODER EVGA 750W GOLD",
        "category":  "Fuente de Poder",
        "price":  454,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER EVGA 750W GOLD",
        "fullDescription":  "FUENTE DE PODER EVGA 750W GOLD",
        "orderCount":  34,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745753202-prod-146-fuente-de-poder-evga-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745753202-prod-146-fuente-de-poder-evga-.jpg"
                   ],
        "sortOrder":  140
    },
    {
        "id":  "prod-147",
        "name":  "FUENTE ROG GAMING X GX850 80 PLUS 850 BRONZE",
        "category":  "Fuente de Poder",
        "price":  211,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER ROG GAMING X GX850 80+ BRONZE CON CONECTOR  PCI E GEN5",
        "fullDescription":  "FUENTE DE PODER ROG GAMING X GX850 80+ BRONZE CON CONECTOR  PCI E GEN5",
        "orderCount":  33,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745754336-prod-147-fuente-rog-gaming-x-g.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745754336-prod-147-fuente-rog-gaming-x-g.jpg"
                   ],
        "sortOrder":  141
    },
    {
        "id":  "prod-148",
        "name":  "FUENTE REAL AVATEC 350W",
        "category":  "Fuente de Poder",
        "price":  76,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER AVATEC 350W PFH350W (AV-PSA-PFH350W) ATX | NO MODULAR | NEGRO",
        "fullDescription":  "FUENTE DE PODER AVATEC 350W PFH350W (AV-PSA-PFH350W) ATX | NO MODULAR | NEGRO",
        "orderCount":  32,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745755429-prod-148-fuente-real-avatec-35.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745755429-prod-148-fuente-real-avatec-35.jpg"
                   ],
        "sortOrder":  142
    },
    {
        "id":  "prod-149",
        "name":  "FUENTE REAL AVATEC 550W NEGRO",
        "category":  "Fuente de Poder",
        "price":  106,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE AVATEC 550W ENERMAX ATX, NO MODULAR, COLOR NEGRO (PSA-PRP550)",
        "fullDescription":  "FUENTE AVATEC 550W ENERMAX ATX, NO MODULAR, COLOR NEGRO (PSA-PRP550)",
        "orderCount":  31,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745756524-prod-149-fuente-real-avatec-55.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745756524-prod-149-fuente-real-avatec-55.jpg"
                   ],
        "sortOrder":  143
    },
    {
        "id":  "prod-150",
        "name":  "FUENTE PODER ATX 250W MICRONICS LONG CABLE",
        "category":  "Fuente de Poder",
        "price":  69,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER MICRONINC 250W\n1 Ventilador de 12 cm\n1 Conector ATX 20 + 4 pines / Cable LARGO PLANO de 580 mm \n1 Conector P8 (4 + 4) pines / Longitudes: 610 mm\n1 conectores ATA / IDE (535 mm)\n3 conectores SATA (805 mm - 72 mm - 580mm)\nDisipador grande",
        "fullDescription":  "FUENTE DE PODER MICRONINC 250W\n1 Ventilador de 12 cm\n1 Conector ATX 20 + 4 pines / Cable LARGO PLANO de 580 mm \n1 Conector P8 (4 + 4) pines / Longitudes: 610 mm\n1 conectores ATA / IDE (535 mm)\n3 conectores SATA (805 mm - 72 mm - 580mm)\nDisipador grande",
        "orderCount":  30,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745757760-prod-150-fuente-poder-atx-250w.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745757760-prod-150-fuente-poder-atx-250w.jpg"
                   ],
        "sortOrder":  144
    },
    {
        "id":  "prod-151",
        "name":  "FUENTE DE PODER, CYBERTEL PS SX2000, 230W FAN 12CM ATX",
        "category":  "Fuente de Poder",
        "price":  65,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER, CYBERTEL PS SX2000, 230W FAN 12CM ATX",
        "fullDescription":  "FUENTE DE PODER, CYBERTEL PS SX2000, 230W FAN 12CM ATX",
        "orderCount":  29,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745758815-prod-151-fuente-de-poder--cybe.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745758815-prod-151-fuente-de-poder--cybe.jpg"
                   ],
        "sortOrder":  145
    },
    {
        "id":  "prod-152",
        "name":  "FUENTE BASICA AVATEC 600W",
        "category":  "Fuente de Poder",
        "price":  65,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE BASICA AVATEC 600W",
        "fullDescription":  "FUENTE BASICA AVATEC 600W",
        "orderCount":  28,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745759966-prod-152-fuente-basica-avatec-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745759966-prod-152-fuente-basica-avatec-.jpg"
                   ],
        "sortOrder":  146
    },
    {
        "id":  "prod-153",
        "name":  "FUNTE DE PODER MICRO ATX DE 250W (PARA SLIM)",
        "category":  "Fuente de Poder",
        "price":  73,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER PSU - Micro ATX 250W",
        "fullDescription":  "FUENTE DE PODER PSU - Micro ATX 250W",
        "orderCount":  27,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745761254-prod-153-funte-de-poder-micro-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745761254-prod-153-funte-de-poder-micro-.jpg"
                   ],
        "sortOrder":  147
    },
    {
        "id":  "prod-154",
        "name":  "FUENTE AVATEC ENERMAX 450 W REAL",
        "category":  "Fuente de Poder",
        "price":  96,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE AVATEC ENERMAX 450 W REAL",
        "fullDescription":  "FUENTE AVATEC ENERMAX 450 W REAL",
        "orderCount":  26,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745762265-prod-154-fuente-avatec-enermax.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745762265-prod-154-fuente-avatec-enermax.jpg"
                   ],
        "sortOrder":  148
    },
    {
        "id":  "prod-155",
        "name":  "FUENTE RUIX 5OO 80+ WHITE",
        "category":  "Fuente de Poder",
        "price":  129,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE RUIX 5OO 80+ WHITE",
        "fullDescription":  "FUENTE RUIX 5OO 80+ WHITE",
        "orderCount":  25,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745762918-prod-155-fuente-ruix-5oo-80--w.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745762918-prod-155-fuente-ruix-5oo-80--w.jpg"
                   ],
        "sortOrder":  149
    },
    {
        "id":  "prod-156",
        "name":  "FUETE DE PODER ROG GAMING PLUS 600W 80+ WHITE",
        "category":  "Fuente de Poder",
        "price":  139,
        "badge":  "",
        "inStock":  true,
        "description":  "FUETE DE PODER ROG GAMING PLUS 600W 80+ WHITE",
        "fullDescription":  "FUETE DE PODER ROG GAMING PLUS 600W 80+ WHITE",
        "orderCount":  24,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745764065-prod-156-fuete-de-poder-rog-ga.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745764065-prod-156-fuete-de-poder-rog-ga.jpg"
                   ],
        "sortOrder":  150
    },
    {
        "id":  "prod-157",
        "name":  "FUENTE DE PODER ABKO COREMAX CM-700B BLACK 700W BRONZE",
        "category":  "Fuente de Poder",
        "price":  154,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "FUENTE DE PODER ABKO COREMAX CM-700B BLACK 700W CYBENETICS 230EU BRONZE (PN:CM-700B)",
        "fullDescription":  "FUENTE DE PODER ABKO COREMAX CM-700B BLACK 700W CYBENETICS 230EU BRONZE (PN:CM-700B)",
        "orderCount":  23,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745765165-prod-157-fuente-de-poder-abko-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745765165-prod-157-fuente-de-poder-abko-.jpg"
                   ],
        "sortOrder":  151
    },
    {
        "id":  "prod-158",
        "name":  "FUENTE 800W ABKO SETTLER HYBRID PCIE5.1 BRONZE 800W",
        "category":  "Fuente de Poder",
        "price":  174,
        "badge":  "Precio Actualizado",
        "inStock":  true,
        "description":  "FUENTE 800W ABKO SETTLER HYBRID PCIE5.1 BRONZE 800W WHITE PCIE5.1 STH-800B",
        "fullDescription":  "FUENTE 800W ABKO SETTLER HYBRID PCIE5.1 BRONZE 800W WHITE PCIE5.1 STH-800B",
        "orderCount":  22,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745766450-prod-158-fuente-800w-abko-sett.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745766450-prod-158-fuente-800w-abko-sett.jpg"
                   ],
        "sortOrder":  152
    },
    {
        "id":  "prod-159",
        "name":  "PARLANTE INALAMBRICO TEROS 6045",
        "category":  "Periféricos",
        "price":  179,
        "badge":  "",
        "inStock":  true,
        "description":  "PARLANTE INALAMBRICO TEROS 6045N LUCES LED, RESISTENTE AL AGUA  60W",
        "fullDescription":  "PARLANTE INALAMBRICO TEROS 6045N LUCES LED, RESISTENTE AL AGUA  60W",
        "orderCount":  21,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745767124-prod-159-parlante-inalambrico-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745767124-prod-159-parlante-inalambrico-.jpg"
                   ],
        "sortOrder":  153
    },
    {
        "id":  "prod-160",
        "name":  "PARLANTE INALAMBRICO TEROS 6047N",
        "category":  "Periféricos",
        "price":  124,
        "badge":  "",
        "inStock":  true,
        "description":  "PARLANTE INALAMBRICO TEROS 6047N LUCES RGB 20W",
        "fullDescription":  "PARLANTE INALAMBRICO TEROS 6047N LUCES RGB 20W",
        "orderCount":  20,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745768172-prod-160-parlante-inalambrico-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745768172-prod-160-parlante-inalambrico-.jpg"
                   ],
        "sortOrder":  154
    },
    {
        "id":  "prod-161",
        "name":  "AUDIFONOS ANTRYX CHROME STORM GH-530",
        "category":  "Periféricos",
        "price":  98,
        "badge":  "",
        "inStock":  true,
        "description":  "Auriculares para juegos con iluminación RGB Rainbow · El sonido envolvente estéreo 2.1 es adecuado para PC, portátiles, PS4, Xbox, teléfonos móviles, etc.",
        "fullDescription":  "Auriculares para juegos con iluminación RGB Rainbow · El sonido envolvente estéreo 2.1 es adecuado para PC, portátiles, PS4, Xbox, teléfonos móviles, etc.",
        "orderCount":  19,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745769257-prod-161-audifonos-antryx-chro.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745769257-prod-161-audifonos-antryx-chro.jpg"
                   ],
        "sortOrder":  155
    },
    {
        "id":  "prod-162",
        "name":  "AUDIFONO GAMER ENKORE KINGDOM EKHG 1000",
        "category":  "Periféricos",
        "price":  66,
        "badge":  "",
        "inStock":  true,
        "description":  "Auricular Gamer cmicro Rainbow USB Brain 5.1",
        "fullDescription":  "Auricular Gamer cmicro Rainbow USB Brain 5.1",
        "orderCount":  18,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745770495-prod-162-audifono-gamer-enkore.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745770495-prod-162-audifono-gamer-enkore.jpg"
                   ],
        "sortOrder":  156
    },
    {
        "id":  "prod-163",
        "name":  "AUDIFONO KLIP XTREME AKOUSTIK FX",
        "category":  "Periféricos",
        "price":  66,
        "badge":  "",
        "inStock":  true,
        "description":  "Audífonos con sonido de alta fidelidad y diseño de diadema con auriculares giratorios, cable largo modular con controles y micrófono integrado.",
        "fullDescription":  "Audífonos con sonido de alta fidelidad y diseño de diadema con auriculares giratorios, cable largo modular con controles y micrófono integrado.",
        "orderCount":  17,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745771586-prod-163-audifono-klip-xtreme-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745771586-prod-163-audifono-klip-xtreme-.jpg"
                   ],
        "sortOrder":  157
    },
    {
        "id":  "prod-164",
        "name":  "AUDIFONOS RGB IO ESPORTS PHANTOM",
        "category":  "Periféricos",
        "price":  97,
        "badge":  "",
        "inStock":  true,
        "description":  "Audífonos Gaming RGB para PC / Laptop / PS4 / Celulares, Sonido 2.1 Stereo y Micrófono flexible",
        "fullDescription":  "Audífonos Gaming RGB para PC / Laptop / PS4 / Celulares, Sonido 2.1 Stereo y Micrófono flexible",
        "orderCount":  16,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745772696-prod-164-audifonos-rgb-io-espo.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745772696-prod-164-audifonos-rgb-io-espo.jpg"
                   ],
        "sortOrder":  158
    },
    {
        "id":  "prod-165",
        "name":  "AUDIFONOS RGB IO ESPORTS CRUSADER",
        "category":  "Periféricos",
        "price":  93,
        "badge":  "",
        "inStock":  true,
        "description":  "AUDIFONOS IO ESPORTS CRUSADER 2.1 STEREO",
        "fullDescription":  "AUDIFONOS IO ESPORTS CRUSADER 2.1 STEREO",
        "orderCount":  15,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745773905-prod-165-audifonos-rgb-io-espo.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745773905-prod-165-audifonos-rgb-io-espo.jpg"
                   ],
        "sortOrder":  159
    },
    {
        "id":  "prod-166",
        "name":  "AUDIFONOS iBLUE SCREAM S019",
        "category":  "Periféricos",
        "price":  66,
        "badge":  "",
        "inStock":  true,
        "description":  "Ergonómico con vincha ajustable. Conecte inalámbricamente con su dispositivo móvil y responda sus llamadas telefónicas con la opción hands free.",
        "fullDescription":  "Ergonómico con vincha ajustable. Conecte inalámbricamente con su dispositivo móvil y responda sus llamadas telefónicas con la opción hands free.",
        "orderCount":  14,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745774903-prod-166-audifonos-iblue-screa.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745774903-prod-166-audifonos-iblue-screa.jpg"
                   ],
        "sortOrder":  160
    },
    {
        "id":  "prod-167",
        "name":  "AUDIFONO MSI DS501 GAMING",
        "category":  "Periféricos",
        "price":  76,
        "badge":  "",
        "inStock":  true,
        "description":  "Tipo de Conector: Jack 3.5 X2; Iluminación: Sin RGB; Micrófono: Omnidireccional",
        "fullDescription":  "Tipo de Conector: Jack 3.5 X2; Iluminación: Sin RGB; Micrófono: Omnidireccional",
        "orderCount":  13,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745775880-prod-167-audifono-msi-ds501-ga.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745775880-prod-167-audifono-msi-ds501-ga.jpg"
                   ],
        "sortOrder":  161
    },
    {
        "id":  "prod-168",
        "name":  "COMBO GAMER 3 EN 1 MICRONICS GAMER MACHINE MIRAGE BLACK RGB GTX2003-3K",
        "category":  "Periféricos",
        "price":  164,
        "badge":  "",
        "inStock":  true,
        "description":  "COMBO GAMER 4 EN 1  MICRONICS GAMER MACHINE MIRAGE   BLACK  RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "fullDescription":  "COMBO GAMER 4 EN 1  MICRONICS GAMER MACHINE MIRAGE   BLACK  RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "orderCount":  12,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745776980-prod-168-combo-gamer-3-en-1-mi.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745776980-prod-168-combo-gamer-3-en-1-mi.jpg"
                   ],
        "sortOrder":  162
    },
    {
        "id":  "prod-169",
        "name":  "COMBO GAMER 4 EN 1 MICRONICS GAMER MACHINE MIRAGE WHITE RGB",
        "category":  "Periféricos",
        "price":  170,
        "badge":  "",
        "inStock":  true,
        "description":  "COMBO GAMER 4 EN 1  MICRONICS GAMER MACHINE MIRAGE   WHITE  RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "fullDescription":  "COMBO GAMER 4 EN 1  MICRONICS GAMER MACHINE MIRAGE   WHITE  RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "orderCount":  11,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745778200-prod-169-combo-gamer-4-en-1-mi.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745778200-prod-169-combo-gamer-4-en-1-mi.jpg"
                   ],
        "sortOrder":  163
    },
    {
        "id":  "prod-170",
        "name":  "KIT 4 EN 1 TEROS TE-5014S RGB ( AUDIFONO, MOUSE, PAD MOUSE, TECLADO )",
        "category":  "Periféricos",
        "price":  84,
        "badge":  "",
        "inStock":  true,
        "description":  "KIT 4 EN 1 TEROS TE-5014S  RGB ( AUDIFONO, MOUSE, PAD MOUSE, TECLADO )",
        "fullDescription":  "KIT 4 EN 1 TEROS TE-5014S  RGB ( AUDIFONO, MOUSE, PAD MOUSE, TECLADO )",
        "orderCount":  10,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745779619-prod-170-kit-4-en-1-teros-te-5.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745779619-prod-170-kit-4-en-1-teros-te-5.jpg"
                   ],
        "sortOrder":  164
    },
    {
        "id":  "prod-171",
        "name":  "CABLE CONTROLADOR DE SISTEMA DE COOLER PARA ARGB",
        "category":  "Refrigeración",
        "price":  40,
        "badge":  "",
        "inStock":  true,
        "description":  "CABLE CONTROLADOR DE SISTEMA DE COOLER PARA ARGB",
        "fullDescription":  "CABLE CONTROLADOR DE SISTEMA DE COOLER PARA ARGB",
        "orderCount":  9,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745780866-prod-171-cable-controlador-de-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745780866-prod-171-cable-controlador-de-.jpg"
                   ],
        "sortOrder":  165
    },
    {
        "id":  "prod-172",
        "name":  "MESA PORTATIL NOTEBOOK DELTRON MESA PORTATIL",
        "category":  "Periféricos",
        "price":  80,
        "badge":  "",
        "inStock":  true,
        "description":  "MESA PORTATIL /P NOTEBOOK DELTRON MESA PORTATIL (ACGDTABLEP)",
        "fullDescription":  "MESA PORTATIL /P NOTEBOOK DELTRON MESA PORTATIL (ACGDTABLEP)",
        "orderCount":  8,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745782110-prod-172-mesa-portatil-noteboo.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745782110-prod-172-mesa-portatil-noteboo.jpg"
                   ],
        "sortOrder":  166
    },
    {
        "id":  "prod-173",
        "name":  "PASTA TERMICA Z10 DEEPCOOL",
        "category":  "Periféricos",
        "price":  55,
        "badge":  "",
        "inStock":  true,
        "description":  "PASTA TERMICA Z10 DEEPCOOL  El valor térmico principal de la pasta térmica DeepCool Z10 es una conductividad de 6,5 W/m·K y una impedancia de 0,08 °C·cm²/W",
        "fullDescription":  "PASTA TERMICA Z10 DEEPCOOL  El valor térmico principal de la pasta térmica DeepCool Z10 es una conductividad de 6,5 W/m·K y una impedancia de 0,08 °C·cm²/W",
        "orderCount":  7,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745782910-prod-173-pasta-termica-z10-dee.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745782910-prod-173-pasta-termica-z10-dee.jpg"
                   ],
        "sortOrder":  167
    },
    {
        "id":  "prod-174",
        "name":  "MOUSE PAD TE 3018S",
        "category":  "Periféricos",
        "price":  31,
        "badge":  "",
        "inStock":  true,
        "description":  "MOUSE PAD TE 3018S 320 x 270 x 3MM",
        "fullDescription":  "MOUSE PAD TE 3018S 320 x 270 x 3MM",
        "orderCount":  6,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745783660-prod-174-mouse-pad-te-3018s.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1790745783660-prod-174-mouse-pad-te-3018s.jpg"
                   ],
        "sortOrder":  168
    },
    {
        "id":  "prod-175",
        "name":  "MONITOR LG 24 U4 DE 144HZ",
        "category":  "Monitores",
        "price":  322,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Monitor Lg U4 24u411b-b, 24 Ips, Fhd, 144hz, 1ms, Freesync PLANO IPS (Tecnología de pantalla de alta calidad)",
        "fullDescription":  "Monitor Lg U4 24u411b-b, 24 Ips, Fhd, 144hz, 1ms, Freesync PLANO IPS (Tecnología de pantalla de alta calidad)",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608082243-prod-monitor-lg-24-u4-144hz.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608082243-prod-monitor-lg-24-u4-144hz.jpg"
                   ],
        "sortOrder":  169
    },
    {
        "id":  "prod-176",
        "name":  "PROCESADOR RYZEN 7 5700X - OEM NUEVO",
        "category":  "Procesadores",
        "price":  785,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR RYZEN 7 5700X - OEM - NUEVO AM4 8 Núcleos 16 Hilos 3.4GHz / 4.6GHz Turbo",
        "fullDescription":  "PROCESADOR RYZEN 7 5700X - OEM - NUEVO AM4 8 Núcleos 16 Hilos 3.4GHz / 4.6GHz Turbo",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608083536-prod-procesador-ryzen-7-5700x-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608083536-prod-procesador-ryzen-7-5700x-.jpg"
                   ],
        "sortOrder":  170
    },
    {
        "id":  "prod-177",
        "name":  "MEMORIA PARA LAPTOP 8GB HYNIX DRR4 2400MHZ",
        "category":  "Memoria Ram",
        "price":  160,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA PARA LAPTOP 8GB HYNIX DRR4 2400MHZ SODIMM ALTO RENDIMIENTO",
        "fullDescription":  "MEMORIA PARA LAPTOP 8GB HYNIX DRR4 2400MHZ SODIMM ALTO RENDIMIENTO",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608084421-prod-memoria-laptop-8gb-hynix-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608084421-prod-memoria-laptop-8gb-hynix-.jpg"
                   ],
        "sortOrder":  171
    },
    {
        "id":  "prod-178",
        "name":  "SSD HIKSEMI DE 256GB M.2 PCLe 3.0 WAVE NVMe",
        "category":  "Almacenamiento",
        "price":  210,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "SSD 256GB HIKSEMI WAVE (P) M.2 2280 NVMe PCIe GEN3x4 (PN:HS-SSD-WAVE(P) 256G)",
        "fullDescription":  "SSD 256GB HIKSEMI WAVE (P) M.2 2280 NVMe PCIe GEN3x4 (PN:HS-SSD-WAVE(P) 256G)",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608085810-prod-ssd-hiksemi-256gb-nvme.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608085810-prod-ssd-hiksemi-256gb-nvme.jpg"
                   ],
        "sortOrder":  172
    },
    {
        "id":  "prod-179",
        "name":  "PLACA ESONIC H110 ESONIC DDR4",
        "category":  "Placas Madres",
        "price":  235,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA MADRE ESONIC H110DA LGA 1151 I6 /I7 - 6TH/7TH/8TH/9TH M.2 NVM DDR4",
        "fullDescription":  "PLACA MADRE ESONIC H110DA LGA 1151 I6 /I7 - 6TH/7TH/8TH/9TH M.2 NVM DDR4",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608087214-prod-placa-esonic-h110-ddr4.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608087214-prod-placa-esonic-h110-ddr4.jpg"
                   ],
        "sortOrder":  173
    },
    {
        "id":  "prod-180",
        "name":  "PARLANTE TEROS MERRY CHRISTMAS TE-6018R, INALAMBRICO",
        "category":  "Periféricos",
        "price":  35,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "PARLANTE TEROS MERRY CHRISTMAS TE-6018R, INALAMBRICO/BT, TIPO USB-C, COLOR ROJO",
        "fullDescription":  "PARLANTE TEROS MERRY CHRISTMAS TE-6018R, INALAMBRICO/BT, TIPO USB-C, COLOR ROJO",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608089159-prod-parlante-teros-te-6018r.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608089159-prod-parlante-teros-te-6018r.jpg"
                   ],
        "sortOrder":  174
    },
    {
        "id":  "prod-181",
        "name":  "ESTABILIZADOR TEROS TE-7056N GIMBAL CON IA RASTREADOR",
        "category":  "Periféricos",
        "price":  175,
        "badge":  "",
        "inStock":  true,
        "description":  "ESTABILIZADOR TEROS TE-7056N GIMBAL DE 3 EJES 360 CON RASTREADOR IA ENFOQUE Y MOVIMIENTO AUTOMATICO PRO",
        "fullDescription":  "ESTABILIZADOR TEROS TE-7056N GIMBAL DE 3 EJES 360 CON RASTREADOR IA ENFOQUE Y MOVIMIENTO AUTOMATICO PRO",
        "orderCount":  50,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608090557-prod-estabilizador-teros-te-70.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608090557-prod-estabilizador-teros-te-70.jpg"
                   ],
        "sortOrder":  175
    },
    {
        "id":  "prod-182",
        "name":  "TECLADO OFICINA HALION HA-K390 USB",
        "category":  "Periféricos",
        "price":  40,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "TECLADO OFICINA HALION HA-K390 USB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO OFICINA HALION HA-K390 USB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  30,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608918160-prod-teclado-oficina-halion-ha.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608918160-prod-teclado-oficina-halion-ha.jpg"
                   ],
        "sortOrder":  176
    },
    {
        "id":  "prod-183",
        "name":  "AUDIFONO GAMER HALION HA-S8 LED ROJO",
        "category":  "Periféricos",
        "price":  47,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION HA-S8 LED ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION HA-S8 LED ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  20,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608919861-prod-audifono-gamer-halion-ha-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608919861-prod-audifono-gamer-halion-ha-.jpg"
                   ],
        "sortOrder":  177
    },
    {
        "id":  "prod-184",
        "name":  "MOUSE GAMER HALION XTREME M607 BLACK/WHITE RGB 7200DPI",
        "category":  "Periféricos",
        "price":  48,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MOUSE GAMER HALION XTREME M607 BLACK/WHITE RGB 7200DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE GAMER HALION XTREME M607 BLACK/WHITE RGB 7200DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  45,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608920679-prod-mouse-gamer-halion-xtreme.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608920679-prod-mouse-gamer-halion-xtreme.jpg"
                   ],
        "sortOrder":  178
    },
    {
        "id":  "prod-185",
        "name":  "MOUSE OFICINA HALION ZIGMA HA-M209D BLACK DUAL MODE",
        "category":  "Periféricos",
        "price":  52,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MOUSE OFICINA HALION ZIGMA HA-M209D BLACK DUAL MODE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE OFICINA HALION ZIGMA HA-M209D BLACK DUAL MODE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  36,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608921245-prod-mouse-oficina-halion-zigm.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608921245-prod-mouse-oficina-halion-zigm.jpg"
                   ],
        "sortOrder":  179
    },
    {
        "id":  "prod-186",
        "name":  "TECLADO GAMER HALION K330 PANTRO RAINBOW MEMBRANA",
        "category":  "Periféricos",
        "price":  52,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "TECLADO GAMER HALION K330 PANTRO RAINBOW MEMBRANA - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO GAMER HALION K330 PANTRO RAINBOW MEMBRANA - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  40,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608921967-prod-teclado-gamer-halion-k330.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608921967-prod-teclado-gamer-halion-k330.jpg"
                   ],
        "sortOrder":  180
    },
    {
        "id":  "prod-187",
        "name":  "AUDIFONO GAMER HALION USB TRRS JAGUAR HA-H857 RGB JACK",
        "category":  "Periféricos",
        "price":  52,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION USB TRRS JAGUAR HA-H857 RGB JACK - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION USB TRRS JAGUAR HA-H857 RGB JACK - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  43,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608922866-prod-audifono-gamer-halion-usb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608922866-prod-audifono-gamer-halion-usb.jpg"
                   ],
        "sortOrder":  181
    },
    {
        "id":  "prod-188",
        "name":  "MOUSE GAMER HALION ASSASIN M602 7200DPI 7B RGB NEGRO",
        "category":  "Periféricos",
        "price":  54,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MOUSE GAMER HALION ASSASIN M602 7200DPI 7B RGB NEGRO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE GAMER HALION ASSASIN M602 7200DPI 7B RGB NEGRO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  30,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608923574-prod-mouse-gamer-halion-assasi.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608923574-prod-mouse-gamer-halion-assasi.jpg"
                   ],
        "sortOrder":  182
    },
    {
        "id":  "prod-189",
        "name":  "KIT TECLADO Y MOUSE GAMER HALION SPARTAN HA-808C LED",
        "category":  "Periféricos",
        "price":  60,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT TECLADO Y MOUSE GAMER HALION SPARTAN HA-808C LED - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT TECLADO Y MOUSE GAMER HALION SPARTAN HA-808C LED - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  46,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608925051-prod-kit-teclado-y-mouse-gamer.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608925051-prod-kit-teclado-y-mouse-gamer.jpg"
                   ],
        "sortOrder":  183
    },
    {
        "id":  "prod-190",
        "name":  "MOUSE GAMER TRIMODE HALION MANTIS M705 10000DPI RGB BLACK",
        "category":  "Periféricos",
        "price":  68,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MOUSE GAMER TRIMODE HALION MANTIS M705 10000DPI RGB BLACK - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE GAMER TRIMODE HALION MANTIS M705 10000DPI RGB BLACK - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  39,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608925665-prod-mouse-gamer-trimode-halio.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608925665-prod-mouse-gamer-trimode-halio.jpg"
                   ],
        "sortOrder":  184
    },
    {
        "id":  "prod-191",
        "name":  "PARLANTE GAMER 2.0 HALION S257 RGB",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PARLANTE GAMER 2.0 HALION S257 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "PARLANTE GAMER 2.0 HALION S257 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  22,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608926231-prod-parlante-gamer-2-0-halion.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608926231-prod-parlante-gamer-2-0-halion.jpg"
                   ],
        "sortOrder":  185
    },
    {
        "id":  "prod-192",
        "name":  "KIT 2 EN 1 HALION TECLADO Y MOUSE HA-K662C INALAMBRICO",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT 2 EN 1 HALION TECLADO Y MOUSE HA-K662C INALAMBRICO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT 2 EN 1 HALION TECLADO Y MOUSE HA-K662C INALAMBRICO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  23,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608927356-prod-kit-2-en-1-halion-teclado.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608927356-prod-kit-2-en-1-halion-teclado.jpg"
                   ],
        "sortOrder":  186
    },
    {
        "id":  "prod-193",
        "name":  "KIT 2 EN 1 HALION TECLADO Y MOUSE HA-K652C WHITE INALAMBRICO",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT 2 EN 1 HALION TECLADO Y MOUSE HA-K652C WHITE INALAMBRICO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT 2 EN 1 HALION TECLADO Y MOUSE HA-K652C WHITE INALAMBRICO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  40,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608927937-prod-kit-2-en-1-halion-teclado.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608927937-prod-kit-2-en-1-halion-teclado.jpg"
                   ],
        "sortOrder":  187
    },
    {
        "id":  "prod-194",
        "name":  "KIT GAMER 2 EN 1 HALION COBRA K426C TRICOLOR TECLADO Y MOUSE RGB 7200 DPI",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT GAMER 2 EN 1 HALION COBRA K426C TRICOLOR TECLADO Y MOUSE RGB 7200 DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT GAMER 2 EN 1 HALION COBRA K426C TRICOLOR TECLADO Y MOUSE RGB 7200 DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  22,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608928659-prod-kit-gamer-2-en-1-halion-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608928659-prod-kit-gamer-2-en-1-halion-c.jpg"
                   ],
        "sortOrder":  188
    },
    {
        "id":  "prod-195",
        "name":  "KIT GAMER 2 EN 1 HALION COBRA K425C TRICOLOR TECLADO Y MOUSE RAINBOW 7200 DPI",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT GAMER 2 EN 1 HALION COBRA K425C TRICOLOR TECLADO Y MOUSE RAINBOW 7200 DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT GAMER 2 EN 1 HALION COBRA K425C TRICOLOR TECLADO Y MOUSE RAINBOW 7200 DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  27,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608930049-prod-kit-gamer-2-en-1-halion-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608930049-prod-kit-gamer-2-en-1-halion-c.jpg"
                   ],
        "sortOrder":  189
    },
    {
        "id":  "prod-196",
        "name":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES LILA",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES LILA - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES LILA - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  35,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608930844-prod-audifono-gamer-halion-usb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608930844-prod-audifono-gamer-halion-usb.jpg"
                   ],
        "sortOrder":  190
    },
    {
        "id":  "prod-197",
        "name":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES ROSADO",
        "category":  "Periféricos",
        "price":  70,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES ROSADO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES ROSADO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  44,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608931445-prod-audifono-gamer-halion-usb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608931445-prod-audifono-gamer-halion-usb.jpg"
                   ],
        "sortOrder":  191
    },
    {
        "id":  "prod-198",
        "name":  "MOUSE GAMER TRIMODE HALION LASER M703 12800DPI RGB WHITE",
        "category":  "Periféricos",
        "price":  72,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MOUSE GAMER TRIMODE HALION LASER M703 12800DPI RGB WHITE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE GAMER TRIMODE HALION LASER M703 12800DPI RGB WHITE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  28,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608932071-prod-mouse-gamer-trimode-halio.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608932071-prod-mouse-gamer-trimode-halio.jpg"
                   ],
        "sortOrder":  192
    },
    {
        "id":  "prod-199",
        "name":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES NEGRO",
        "category":  "Periféricos",
        "price":  72,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES NEGRO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION USB 2.0 HA-H553 HADES NEGRO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  42,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608932742-prod-audifono-gamer-halion-usb.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608932742-prod-audifono-gamer-halion-usb.jpg"
                   ],
        "sortOrder":  193
    },
    {
        "id":  "prod-200",
        "name":  "TECLADO MECANICO HALION COMANCHE 62 KM201 RAINBOW SWITCH ROJO",
        "category":  "Periféricos",
        "price":  73,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "TECLADO MECANICO HALION COMANCHE 62 KM201 RAINBOW SWITCH ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO MECANICO HALION COMANCHE 62 KM201 RAINBOW SWITCH ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  34,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608934084-prod-teclado-mecanico-halion-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608934084-prod-teclado-mecanico-halion-c.jpg"
                   ],
        "sortOrder":  194
    },
    {
        "id":  "prod-201",
        "name":  "AUDIFONO GAMER HALION GORDON H559 RGB",
        "category":  "Periféricos",
        "price":  76,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION GORDON H559 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION GORDON H559 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  22,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608934775-prod-audifono-gamer-halion-gor.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608934775-prod-audifono-gamer-halion-gor.jpg"
                   ],
        "sortOrder":  195
    },
    {
        "id":  "prod-202",
        "name":  "AUDIFONO GAMER HALION AVALON H557 RGB",
        "category":  "Periféricos",
        "price":  76,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "AUDIFONO GAMER HALION AVALON H557 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONO GAMER HALION AVALON H557 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  29,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608935349-prod-audifono-gamer-halion-ava.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608935349-prod-audifono-gamer-halion-ava.jpg"
                   ],
        "sortOrder":  196
    },
    {
        "id":  "prod-203",
        "name":  "TECLADO MECANICO HALION COMANCHE 88 KM202 RAINBOW SWITCH ROJO",
        "category":  "Periféricos",
        "price":  78,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "TECLADO MECANICO HALION COMANCHE 88 KM202 RAINBOW SWITCH ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO MECANICO HALION COMANCHE 88 KM202 RAINBOW SWITCH ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  26,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608936759-prod-teclado-mecanico-halion-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608936759-prod-teclado-mecanico-halion-c.jpg"
                   ],
        "sortOrder":  197
    },
    {
        "id":  "prod-204",
        "name":  "TECLADO OFICINA HALION HA-K819 ROSADO RECARGABLE",
        "category":  "Periféricos",
        "price":  80,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "TECLADO OFICINA HALION HA-K819 ROSADO RECARGABLE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO OFICINA HALION HA-K819 ROSADO RECARGABLE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  32,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608937614-prod-teclado-oficina-halion-ha.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608937614-prod-teclado-oficina-halion-ha.jpg"
                   ],
        "sortOrder":  198
    },
    {
        "id":  "prod-205",
        "name":  "PARLANTE GAMER 2.0 HALION HA-S272 RGB BLUETOOTH",
        "category":  "Periféricos",
        "price":  82,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PARLANTE GAMER 2.0 HALION HA-S272 RGB BLUETOOTH - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "PARLANTE GAMER 2.0 HALION HA-S272 RGB BLUETOOTH - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  26,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608938397-prod-parlante-gamer-2-0-halion.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608938397-prod-parlante-gamer-2-0-halion.jpg"
                   ],
        "sortOrder":  199
    },
    {
        "id":  "prod-206",
        "name":  "TECLADO MECANICO HALION COMANCHE 105 KM203 RAINBOW SWITCH ROJO",
        "category":  "Periféricos",
        "price":  82,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "TECLADO MECANICO HALION COMANCHE 105 KM203 RAINBOW SWITCH ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO MECANICO HALION COMANCHE 105 KM203 RAINBOW SWITCH ROJO - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  33,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608939103-prod-teclado-mecanico-halion-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608939103-prod-teclado-mecanico-halion-c.jpg"
                   ],
        "sortOrder":  200
    },
    {
        "id":  "prod-207",
        "name":  "CASE OFICINA HALION 6519 WH 600W USB 3.0",
        "category":  "Case",
        "price":  84,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE OFICINA HALION 6519 WH 600W USB 3.0 - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE OFICINA HALION 6519 WH 600W USB 3.0 - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  25,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608939888-prod-case-oficina-halion-6519-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608939888-prod-case-oficina-halion-6519-.jpg"
                   ],
        "sortOrder":  201
    },
    {
        "id":  "prod-208",
        "name":  "AUDIFONOS GAMER HALION SHADOW H908 TRIMODE BLACK",
        "category":  "Periféricos",
        "price":  91,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "AUDIFONOS GAMER HALION SHADOW H908 TRIMODE BLACK - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "AUDIFONOS GAMER HALION SHADOW H908 TRIMODE BLACK - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  29,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608940505-prod-audifonos-gamer-halion-sh.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608940505-prod-audifonos-gamer-halion-sh.jpg"
                   ],
        "sortOrder":  202
    },
    {
        "id":  "prod-209",
        "name":  "TECLADO MECANICO HALION STELLAR HA-KG916 RAINBOW",
        "category":  "Periféricos",
        "price":  95,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "TECLADO MECANICO HALION STELLAR HA-KG916 RAINBOW - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO MECANICO HALION STELLAR HA-KG916 RAINBOW - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  36,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608941360-prod-teclado-mecanico-halion-s.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608941360-prod-teclado-mecanico-halion-s.jpg"
                   ],
        "sortOrder":  203
    },
    {
        "id":  "prod-210",
        "name":  "KIT TECLADO Y MOUSE MECANICO HALION MECANO K203C 88 TECLAS RAINBOW MOUSE RGB 7200DPI",
        "category":  "Periféricos",
        "price":  97,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT TECLADO Y MOUSE MECANICO HALION MECANO K203C 88 TECLAS RAINBOW MOUSE RGB 7200DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT TECLADO Y MOUSE MECANICO HALION MECANO K203C 88 TECLAS RAINBOW MOUSE RGB 7200DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  31,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608942085-prod-kit-teclado-y-mouse-mecan.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608942085-prod-kit-teclado-y-mouse-mecan.jpg"
                   ],
        "sortOrder":  204
    },
    {
        "id":  "prod-211",
        "name":  "CASE GAMER DATAONE ZIGMA G03 MALLA 4FAN ARGB S/F",
        "category":  "Case",
        "price":  99,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER DATAONE ZIGMA G03 MALLA 4FAN ARGB S/F - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER DATAONE ZIGMA G03 MALLA 4FAN ARGB S/F - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  35,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608942649-prod-case-gamer-dataone-zigma-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608942649-prod-case-gamer-dataone-zigma-.jpg"
                   ],
        "sortOrder":  205
    },
    {
        "id":  "prod-212",
        "name":  "TECLADO MECANICO HALION ENIGMA HA-KG912 RGB",
        "category":  "Periféricos",
        "price":  101,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "TECLADO MECANICO HALION ENIGMA HA-KG912 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "TECLADO MECANICO HALION ENIGMA HA-KG912 RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  24,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608943406-prod-teclado-mecanico-halion-e.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608943406-prod-teclado-mecanico-halion-e.jpg"
                   ],
        "sortOrder":  206
    },
    {
        "id":  "prod-213",
        "name":  "CASE GAMER DATAONE NOVA T29 MESH 3FAN C/F 600W REALES",
        "category":  "Case",
        "price":  110,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER DATAONE NOVA T29 MESH 3FAN C/F 600W REALES - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER DATAONE NOVA T29 MESH 3FAN C/F 600W REALES - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  34,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608944138-prod-case-gamer-dataone-nova-t.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608944138-prod-case-gamer-dataone-nova-t.jpg"
                   ],
        "sortOrder":  207
    },
    {
        "id":  "prod-214",
        "name":  "KIT GAMER 2 EN 1 MECANICO HALION HARRIER K201C TECLADO Y MOUSE RGB",
        "category":  "Periféricos",
        "price":  110,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT GAMER 2 EN 1 MECANICO HALION HARRIER K201C TECLADO Y MOUSE RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT GAMER 2 EN 1 MECANICO HALION HARRIER K201C TECLADO Y MOUSE RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  44,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608945028-prod-kit-gamer-2-en-1-mecanico.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608945028-prod-kit-gamer-2-en-1-mecanico.jpg"
                   ],
        "sortOrder":  208
    },
    {
        "id":  "prod-215",
        "name":  "CASE GAMER HALION TITAN 107 MALLA 4 FANS ARGB S/F",
        "category":  "Case",
        "price":  118,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION TITAN 107 MALLA 4 FANS ARGB S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION TITAN 107 MALLA 4 FANS ARGB S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  27,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608945807-prod-case-gamer-halion-titan-1.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608945807-prod-case-gamer-halion-titan-1.jpg"
                   ],
        "sortOrder":  209
    },
    {
        "id":  "prod-216",
        "name":  "CASE GAMER HALION TITAN 109 VIDRIO WHITE 4 FANS ARGB S/F",
        "category":  "Case",
        "price":  128,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION TITAN 109 VIDRIO WHITE 4 FANS ARGB S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION TITAN 109 VIDRIO WHITE 4 FANS ARGB S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  22,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608946301-prod-case-gamer-halion-titan-1.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608946301-prod-case-gamer-halion-titan-1.jpg"
                   ],
        "sortOrder":  210
    },
    {
        "id":  "prod-217",
        "name":  "KIT 3 EN 1 GAMER ICECOOL K431C MECANICO WHITE 7200DPI",
        "category":  "Periféricos",
        "price":  138,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "KIT 3 EN 1 GAMER ICECOOL K431C MECANICO WHITE 7200DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "KIT 3 EN 1 GAMER ICECOOL K431C MECANICO WHITE 7200DPI - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  25,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608946964-prod-kit-3-en-1-gamer-icecool-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608946964-prod-kit-3-en-1-gamer-icecool-.jpg"
                   ],
        "sortOrder":  211
    },
    {
        "id":  "prod-218",
        "name":  "CASE GAMER DATAONE LUNA BP15D DIGITAL 3FAN ARGB S/F",
        "category":  "Case",
        "price":  140,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER DATAONE LUNA BP15D DIGITAL 3FAN ARGB S/F - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER DATAONE LUNA BP15D DIGITAL 3FAN ARGB S/F - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  28,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608947583-prod-case-gamer-dataone-luna-b.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608947583-prod-case-gamer-dataone-luna-b.jpg"
                   ],
        "sortOrder":  212
    },
    {
        "id":  "prod-219",
        "name":  "CASE GAMER DATAONE LUNA C14M MALLA 550W 4 FANS RGB",
        "category":  "Case",
        "price":  150,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER DATAONE LUNA C14M MALLA 550W 4 FANS RGB - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER DATAONE LUNA C14M MALLA 550W 4 FANS RGB - Marca DATAONE. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  43,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608948298-prod-case-gamer-dataone-luna-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608948298-prod-case-gamer-dataone-luna-c.jpg"
                   ],
        "sortOrder":  213
    },
    {
        "id":  "prod-220",
        "name":  "CASE GAMER HALION RAGNAROK 321 550W 4 FANS RGB",
        "category":  "Case",
        "price":  170,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION RAGNAROK 321 550W 4 FANS RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION RAGNAROK 321 550W 4 FANS RGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  31,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608948976-prod-case-gamer-halion-ragnaro.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608948976-prod-case-gamer-halion-ragnaro.jpg"
                   ],
        "sortOrder":  214
    },
    {
        "id":  "prod-221",
        "name":  "CASE GAMER HALION STUKA WHITE CR11 C/F 500W REALES",
        "category":  "Case",
        "price":  184,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION STUKA WHITE CR11 C/F 500W REALES - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION STUKA WHITE CR11 C/F 500W REALES - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  43,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608949647-prod-case-gamer-halion-stuka-w.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608949647-prod-case-gamer-halion-stuka-w.jpg"
                   ],
        "sortOrder":  215
    },
    {
        "id":  "prod-222",
        "name":  "CASE GAMER HALION DRAGON CR15 C/F 500W REALES",
        "category":  "Case",
        "price":  190,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION DRAGON CR15 C/F 500W REALES - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION DRAGON CR15 C/F 500W REALES - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  20,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608950412-prod-case-gamer-halion-dragon-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608950412-prod-case-gamer-halion-dragon-.jpg"
                   ],
        "sortOrder":  216
    },
    {
        "id":  "prod-223",
        "name":  "CASE GAMER HALION DRAGON CR15 WHITE C/F 500W REALES",
        "category":  "Case",
        "price":  197,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION DRAGON CR15 WHITE C/F 500W REALES - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION DRAGON CR15 WHITE C/F 500W REALES - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  21,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608951227-prod-case-gamer-halion-dragon-.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608951227-prod-case-gamer-halion-dragon-.jpg"
                   ],
        "sortOrder":  217
    },
    {
        "id":  "prod-224",
        "name":  "CASE GAMER HALION HPRO-700 BLACK TYPE-C S/F",
        "category":  "Case",
        "price":  204,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION HPRO-700 BLACK TYPE-C S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION HPRO-700 BLACK TYPE-C S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  26,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608951981-prod-case-gamer-halion-hpro-70.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608951981-prod-case-gamer-halion-hpro-70.jpg"
                   ],
        "sortOrder":  218
    },
    {
        "id":  "prod-225",
        "name":  "CASE GAMER HALION HPRO-700W WHITE TYPE-C S/F",
        "category":  "Case",
        "price":  214,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION HPRO-700W WHITE TYPE-C S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION HPRO-700W WHITE TYPE-C S/F - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  37,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608952701-prod-case-gamer-halion-hpro-70.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608952701-prod-case-gamer-halion-hpro-70.jpg"
                   ],
        "sortOrder":  219
    },
    {
        "id":  "prod-226",
        "name":  "CASE GAMER HALION FISH TANK C708 VIDRIO TEMPLADO 6 FANS ARGB",
        "category":  "Case",
        "price":  214,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION FISH TANK C708 VIDRIO TEMPLADO 6 FANS ARGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION FISH TANK C708 VIDRIO TEMPLADO 6 FANS ARGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  25,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608953368-prod-case-gamer-halion-fish-ta.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608953368-prod-case-gamer-halion-fish-ta.jpg"
                   ],
        "sortOrder":  220
    },
    {
        "id":  "prod-227",
        "name":  "CASE GAMER HALION FISH TANK C708 VIDRIO TEMPLADO 6 FANS ARGB WHITE",
        "category":  "Case",
        "price":  223,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION FISH TANK C708 VIDRIO TEMPLADO 6 FANS ARGB WHITE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION FISH TANK C708 VIDRIO TEMPLADO 6 FANS ARGB WHITE - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  26,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608954152-prod-case-gamer-halion-fish-ta.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608954152-prod-case-gamer-halion-fish-ta.jpg"
                   ],
        "sortOrder":  221
    },
    {
        "id":  "prod-228",
        "name":  "CASE GAMER HALION INFINITY 415 VIDRIO + FILTRO 600W 4 FANS ARGB",
        "category":  "Case",
        "price":  225,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "CASE GAMER HALION INFINITY 415 VIDRIO + FILTRO 600W 4 FANS ARGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "CASE GAMER HALION INFINITY 415 VIDRIO + FILTRO 600W 4 FANS ARGB - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  30,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608954767-prod-case-gamer-halion-infinit.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608954767-prod-case-gamer-halion-infinit.jpg"
                   ],
        "sortOrder":  222
    },
    {
        "id":  "prod-229",
        "name":  "MONITOR GAMER HALION 24\" HG2406FC CURVO VA180HZ 1MS FHD",
        "category":  "Monitores",
        "price":  260,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER HALION 24\" HG2406FC CURVO VA180HZ 1MS FHD - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER HALION 24\" HG2406FC CURVO VA180HZ 1MS FHD - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  34,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608955436-prod-monitor-gamer-halion-24-h.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608955436-prod-monitor-gamer-halion-24-h.jpg"
                   ],
        "sortOrder":  223
    },
    {
        "id":  "prod-230",
        "name":  "MONITOR GAMER HALION 27\" HS2714FF PLANO IPS 144HZ 1MS FHD",
        "category":  "Monitores",
        "price":  309,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER HALION 27\" HS2714FF PLANO IPS 144HZ 1MS FHD - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER HALION 27\" HS2714FF PLANO IPS 144HZ 1MS FHD - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  45,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608956241-prod-monitor-gamer-halion-27-h.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608956241-prod-monitor-gamer-halion-27-h.jpg"
                   ],
        "sortOrder":  224
    },
    {
        "id":  "prod-231",
        "name":  "MONITOR GAMER HALION 27\" HS2703FC CURVO VA 144HZ 1MS FHD",
        "category":  "Monitores",
        "price":  320,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER HALION 27\" HS2703FC CURVO VA 144HZ 1MS FHD - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER HALION 27\" HS2703FC CURVO VA 144HZ 1MS FHD - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  32,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608956916-prod-monitor-gamer-halion-27-h.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608956916-prod-monitor-gamer-halion-27-h.jpg"
                   ],
        "sortOrder":  225
    },
    {
        "id":  "prod-232",
        "name":  "MONITOR GAMER HALION 27\" HG2730QF 2K QHD PLANO IPS 200HZ 1MS RGB PIVOT",
        "category":  "Monitores",
        "price":  507,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER HALION 27\" HG2730QF 2K QHD PLANO IPS 200HZ 1MS RGB PIVOT - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER HALION 27\" HG2730QF 2K QHD PLANO IPS 200HZ 1MS RGB PIVOT - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  39,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608957556-prod-monitor-gamer-halion-27-h.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608957556-prod-monitor-gamer-halion-27-h.jpg"
                   ],
        "sortOrder":  226
    },
    {
        "id":  "prod-233",
        "name":  "MONITOR GAMER HALION 27\" HG2732QC 2K QHD CURVO VA 180HZ 1MS RGB PIVOT",
        "category":  "Monitores",
        "price":  547,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER HALION 27\" HG2732QC 2K QHD CURVO VA 180HZ 1MS RGB PIVOT - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER HALION 27\" HG2732QC 2K QHD CURVO VA 180HZ 1MS RGB PIVOT - Marca HALION. Alta durabilidad y rendimiento garantizado por Tecnosistemas MDOS.",
        "orderCount":  41,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608958178-prod-monitor-gamer-halion-27-h.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791608958178-prod-monitor-gamer-halion-27-h.jpg"
                   ],
        "sortOrder":  227
    },
    {
        "id":  "prod-234",
        "name":  "MOUSE MSI VERSA 300 WIRELESS 8000DPI BLACK",
        "category":  "Periféricos",
        "price":  87,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MOUSE MSI VERSA 300 WIRELESS 8000DPI BLACK - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE MSI VERSA 300 WIRELESS 8000DPI BLACK - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  46,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609394499-prod-mouse-msi-versa-300-wirel.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609394499-prod-mouse-msi-versa-300-wirel.jpg"
                   ],
        "sortOrder":  228
    },
    {
        "id":  "prod-235",
        "name":  "DISIPADOR TORRE MSI MAG COREFROZR AA13 ARGB",
        "category":  "Refrigeración",
        "price":  89,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "DISIPADOR TORRE MSI MAG COREFROZR AA13 ARGB - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "DISIPADOR TORRE MSI MAG COREFROZR AA13 ARGB - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  37,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609395447-prod-disipador-torre-msi-mag-c.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609395447-prod-disipador-torre-msi-mag-c.jpg"
                   ],
        "sortOrder":  229
    },
    {
        "id":  "prod-236",
        "name":  "MOUSEPAD GAMER MSI AGILITY GD70",
        "category":  "Periféricos",
        "price":  125,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MOUSEPAD GAMER MSI AGILITY GD70 - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MOUSEPAD GAMER MSI AGILITY GD70 - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  37,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609396442-prod-mousepad-gamer-msi-agilit.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609396442-prod-mousepad-gamer-msi-agilit.jpg"
                   ],
        "sortOrder":  230
    },
    {
        "id":  "prod-237",
        "name":  "MOUSEPAD GAMER MSI AGILITY GD72",
        "category":  "Periféricos",
        "price":  125,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MOUSEPAD GAMER MSI AGILITY GD72 - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MOUSEPAD GAMER MSI AGILITY GD72 - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  40,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609397317-prod-mousepad-gamer-msi-agilit.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609397317-prod-mousepad-gamer-msi-agilit.jpg"
                   ],
        "sortOrder":  231
    },
    {
        "id":  "prod-238",
        "name":  "PLACA MADRE MSI A520M - A PRO (AM4) (DDR4)",
        "category":  "Placas Madres",
        "price":  200,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA MADRE MSI A520M - A PRO (AM4) (DDR4) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "PLACA MADRE MSI A520M - A PRO (AM4) (DDR4) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  35,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609398011-prod-placa-madre-msi-a520m-a-p.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609398011-prod-placa-madre-msi-a520m-a-p.jpg"
                   ],
        "sortOrder":  232
    },
    {
        "id":  "prod-239",
        "name":  "REFRIGERACION LIQUIDA MSI MAG CORELIQUID A13 ARGB 240MM",
        "category":  "Refrigeración",
        "price":  210,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "REFRIGERACION LIQUIDA MSI MAG CORELIQUID A13 ARGB 240MM - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "REFRIGERACION LIQUIDA MSI MAG CORELIQUID A13 ARGB 240MM - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  52,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609398531-prod-refrigeracion-liquida-msi.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609398531-prod-refrigeracion-liquida-msi.jpg"
                   ],
        "sortOrder":  233
    },
    {
        "id":  "prod-240",
        "name":  "MOUSE GAMER MSI VERSA PRO WIRELESS 26000DPI BLACK",
        "category":  "Periféricos",
        "price":  268,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MOUSE GAMER MSI VERSA PRO WIRELESS 26000DPI BLACK - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MOUSE GAMER MSI VERSA PRO WIRELESS 26000DPI BLACK - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  32,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609400089-prod-mouse-gamer-msi-versa-pro.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609400089-prod-mouse-gamer-msi-versa-pro.jpg"
                   ],
        "sortOrder":  234
    },
    {
        "id":  "prod-241",
        "name":  "PLACA MADRE MSI PRO A620M-B EVO SVL (AM5) (DDR5)",
        "category":  "Placas Madres",
        "price":  290,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA MADRE MSI PRO A620M-B EVO SVL (AM5) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "PLACA MADRE MSI PRO A620M-B EVO SVL (AM5) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  51,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609401072-prod-placa-madre-msi-pro-a620m.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609401072-prod-placa-madre-msi-pro-a620m.jpg"
                   ],
        "sortOrder":  235
    },
    {
        "id":  "prod-242",
        "name":  "PLACA MADRE MSI PRO B650M-B SVL (AM5) (DDR5)",
        "category":  "Placas Madres",
        "price":  304,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA MADRE MSI PRO B650M-B SVL (AM5) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "PLACA MADRE MSI PRO B650M-B SVL (AM5) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  26,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609401887-prod-placa-madre-msi-pro-b650m.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609401887-prod-placa-madre-msi-pro-b650m.jpg"
                   ],
        "sortOrder":  236
    },
    {
        "id":  "prod-243",
        "name":  "REFRIGERACION LIQUIDA MSI MAG CORELIQUID C360 V2 BLACK ARGB",
        "category":  "Refrigeración",
        "price":  409,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "REFRIGERACION LIQUIDA MSI MAG CORELIQUID C360 V2 BLACK ARGB - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "REFRIGERACION LIQUIDA MSI MAG CORELIQUID C360 V2 BLACK ARGB - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  41,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609402878-prod-refrigeracion-liquida-msi.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609402878-prod-refrigeracion-liquida-msi.jpg"
                   ],
        "sortOrder":  237
    },
    {
        "id":  "prod-244",
        "name":  "PLACA MADRE MSI B760 GAMING PLUS WIFI (LGA1700) (DDR5)",
        "category":  "Placas Madres",
        "price":  624,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA MADRE MSI B760 GAMING PLUS WIFI (LGA1700) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "PLACA MADRE MSI B760 GAMING PLUS WIFI (LGA1700) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  41,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609403587-prod-placa-madre-msi-b760-gami.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609403587-prod-placa-madre-msi-b760-gami.jpg"
                   ],
        "sortOrder":  238
    },
    {
        "id":  "prod-245",
        "name":  "MONITOR GAMER MSI MAG 275CQF-E18 27\" RAPID VA 2K QHD 180HZ 0.5MS HDMI",
        "category":  "Monitores",
        "price":  640,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER MSI MAG 275CQF-E18 27\" RAPID VA 2K QHD 180HZ 0.5MS HDMI - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER MSI MAG 275CQF-E18 27\" RAPID VA 2K QHD 180HZ 0.5MS HDMI - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  20,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609404977-prod-monitor-gamer-msi-mag-275.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609404977-prod-monitor-gamer-msi-mag-275.jpg"
                   ],
        "sortOrder":  239
    },
    {
        "id":  "prod-246",
        "name":  "PLACA MADRE MSI Z890 GAMING PLUS WIFI6E (LAG1851) (DDR5)",
        "category":  "Placas Madres",
        "price":  825,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA MADRE MSI Z890 GAMING PLUS WIFI6E (LAG1851) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "PLACA MADRE MSI Z890 GAMING PLUS WIFI6E (LAG1851) (DDR5) - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  28,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609405651-prod-placa-madre-msi-z890-gami.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609405651-prod-placa-madre-msi-z890-gami.jpg"
                   ],
        "sortOrder":  240
    },
    {
        "id":  "prod-247",
        "name":  "MONITOR GAMER MSI MAG 321CQF-E18 32\" RAPID VA 2K 180HZ 0.5MS",
        "category":  "Monitores",
        "price":  911,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER MSI MAG 321CQF-E18 32\" RAPID VA 2K 180HZ 0.5MS - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER MSI MAG 321CQF-E18 32\" RAPID VA 2K 180HZ 0.5MS - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  38,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609406932-prod-monitor-gamer-msi-mag-321.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609406932-prod-monitor-gamer-msi-mag-321.jpg"
                   ],
        "sortOrder":  241
    },
    {
        "id":  "prod-248",
        "name":  "MONITOR GAMER MSI MAG 274QRFW-X32 27’ 2K QHD 320HZ 0.5MS HDMI DP WHITE",
        "category":  "Monitores",
        "price":  984,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER MSI MAG 274QRFW-X32 27’ 2K QHD 320HZ 0.5MS HDMI DP WHITE - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER MSI MAG 274QRFW-X32 27’ 2K QHD 320HZ 0.5MS HDMI DP WHITE - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  29,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609407785-prod-monitor-gamer-msi-mag-274.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609407785-prod-monitor-gamer-msi-mag-274.jpg"
                   ],
        "sortOrder":  242
    },
    {
        "id":  "prod-249",
        "name":  "MONITOR GAMER MSI MAG 272QPW-QD-OLED X28 WHITE 27\" 2K 280HZ 0.03MS USB TYPE-C",
        "category":  "Monitores",
        "price":  2294,
        "badge":  "Premium",
        "inStock":  true,
        "description":  "MONITOR GAMER MSI MAG 272QPW-QD-OLED X28 WHITE 27\" 2K 280HZ 0.03MS USB TYPE-C - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER MSI MAG 272QPW-QD-OLED X28 WHITE 27\" 2K 280HZ 0.03MS USB TYPE-C - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  54,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609408523-prod-monitor-gamer-msi-mag-272.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609408523-prod-monitor-gamer-msi-mag-272.jpg"
                   ],
        "sortOrder":  243
    },
    {
        "id":  "prod-250",
        "name":  "MONITOR GAMER MSI MAG 272QP-QD-OLED X50 27\" 2K 500HZ 0.03MS",
        "category":  "Monitores",
        "price":  3324,
        "badge":  "Premium",
        "inStock":  true,
        "description":  "MONITOR GAMER MSI MAG 272QP-QD-OLED X50 27\" 2K 500HZ 0.03MS - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "MONITOR GAMER MSI MAG 272QP-QD-OLED X50 27\" 2K 500HZ 0.03MS - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  44,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609409370-prod-monitor-gamer-msi-mag-272.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609409370-prod-monitor-gamer-msi-mag-272.jpg"
                   ],
        "sortOrder":  244
    },
    {
        "id":  "prod-251",
        "name":  "TARJETA DE VIDEO MSI FRIEREN EDITION RTX 5070 TI 16GB GDDR7 OC",
        "category":  "Tarjetas de Video",
        "price":  4874,
        "badge":  "Premium",
        "inStock":  true,
        "description":  "TARJETA DE VIDEO MSI FRIEREN EDITION RTX 5070 TI 16GB GDDR7 OC - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "fullDescription":  "TARJETA DE VIDEO MSI FRIEREN EDITION RTX 5070 TI 16GB GDDR7 OC - Calidad MSI Gaming. Componentes de alta gama con garantía oficial en Tecnosistemas MDOS.",
        "orderCount":  29,
        "image":  "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609410055-prod-tarjeta-de-video-msi-frie.jpg",
        "images":  [
                       "https://pub-03357662772540c68740c6e96697d46b.r2.dev/products/1791609410055-prod-tarjeta-de-video-msi-frie.jpg"
                   ],
        "sortOrder":  245
    }
];

const initialProducts = DEFAULT_PRODUCTS;

// Exportar datos a window para su uso en la app
if (typeof window !== 'undefined') {
    window.OFFICIAL_CATEGORIES = OFFICIAL_CATEGORIES;
    window.PAYMENT_METHODS = PAYMENT_METHODS;
    window.DEFAULT_CONFIG = DEFAULT_CONFIG;
    window.DEFAULT_PRODUCTS = DEFAULT_PRODUCTS;
    window.INITIAL_PRODUCTS = DEFAULT_PRODUCTS;
    window.initialProducts = DEFAULT_PRODUCTS;
    window.STORE_DATA = {
        OFFICIAL_CATEGORIES,
        PAYMENT_METHODS,
        DEFAULT_CONFIG,
        DEFAULT_PRODUCTS
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initialProducts,
        DEFAULT_PRODUCTS,
        OFFICIAL_CATEGORIES,
        PAYMENT_METHODS,
        DEFAULT_CONFIG
    };
}