/**
 * Datos iniciales y configuración estándar para Tecnosistemas MDOS (Perú)
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
    whatsappNumber: "51900000000",
    currencySymbol: "S/",
    currencyCode: "PEN",
    bannerMessage: "🚀 ¡Envíos a todo el Perú y recojo en tienda! Pagos por Yape, Plin, BCP e Interbank.",
    adminPin: "1234",
    totalOrdersCount: 38
};

// Catálogo de productos importado del proveedor (+S/ 25 por producto)
const DEFAULT_PRODUCTS = [
    {
        "id":  "prod-1",
        "name":  "MONITOR \" MSI 22 PULG \" PRO MP225 E12VL DE 120HZ",
        "category":  "Monitores",
        "price":  240,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR MSI 22 PULGADAS (PRO MP225 E12VL) GAMING FHD VA, FRECUENCIA 120HZ, 1MS . Su conectividad incluye puertos HDMI y VGA,",
        "fullDescription":  "MONITOR MSI 22 PULGADAS (PRO MP225 E12VL) GAMING FHD VA, FRECUENCIA 120HZ, 1MS . Su conectividad incluye puertos HDMI y VGA,",
        "orderCount":  179,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYdU4TeT65JfjOWSVqNxhxMquCmzQzioiZzpDi5N3GFrGhHy3EmLH72AployZ2yPVq0PhYPsQMSHRrf9KdhNU6fNhUzfRfRZNVG9nY7d5Y-6x_ztQGFJbKJ2JPmFw_iIA4mfcE_5Jw3zbJc6ZKmztGSQuAlTBbY7w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYdU4TeT65JfjOWSVqNxhxMquCmzQzioiZzpDi5N3GFrGhHy3EmLH72AployZ2yPVq0PhYPsQMSHRrf9KdhNU6fNhUzfRfRZNVG9nY7d5Y-6x_ztQGFJbKJ2JPmFw_iIA4mfcE_5Jw3zbJc6ZKmztGSQuAlTBbY7w=s2048"
                   ],
        "sortOrder":  0
    },
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb0-PqPk3OTD6cSxya9B4Xkrml4rXTSsVqZR_P3-gl35UKSESzbpX_a9MI1OgaUZNvTbqTgowIq5ozhYEwZWZxaQi06KPhOp2h3F_qAFKtAYVwgJiq0HmOkcrg1gYGBDR_C9PQGEu0oaI08aD8qD6ugvcSjMcjlZg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb0-PqPk3OTD6cSxya9B4Xkrml4rXTSsVqZR_P3-gl35UKSESzbpX_a9MI1OgaUZNvTbqTgowIq5ozhYEwZWZxaQi06KPhOp2h3F_qAFKtAYVwgJiq0HmOkcrg1gYGBDR_C9PQGEu0oaI08aD8qD6ugvcSjMcjlZg=s2048"
                   ],
        "sortOrder":  1
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLacpdXDCBix3Oshs3lTLlHdeQi6o7_kIxs-FK2KI1_rgIB6WxTAwBd4ggorR4hjXynIy1vXVaQHYNid284TE-C0hVyoahrfYKaekKZfaVdQI6hp-aUU8P_5LTGzcwL9FKQRrkCG6Fmx4vAgqrSmx4JbvN9pN0U=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLacpdXDCBix3Oshs3lTLlHdeQi6o7_kIxs-FK2KI1_rgIB6WxTAwBd4ggorR4hjXynIy1vXVaQHYNid284TE-C0hVyoahrfYKaekKZfaVdQI6hp-aUU8P_5LTGzcwL9FKQRrkCG6Fmx4vAgqrSmx4JbvN9pN0U=s2048"
                   ],
        "sortOrder":  2
    },
    {
        "id":  "prod-4",
        "name":  "MONITOR SAMSUNG 24 PLANO ODYSSEY G3 LS24DG300ELXPE 180HZ PIVOT 90°",
        "category":  "Monitores",
        "price":  410,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "MONITOR SAMSUNG ODYSSEY G3 LS24DG300ELXPE 24\" FHD 1920x1080/180HZ/1MS/AMD RADEON FREESYNC PIVOT 90°",
        "fullDescription":  "MONITOR SAMSUNG ODYSSEY G3 LS24DG300ELXPE 24\" FHD 1920x1080/180HZ/1MS/AMD RADEON FREESYNC PIVOT 90°",
        "orderCount":  176,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbiRG7CnPlNyrPpFV2HX08yCujE-dS-pq4UMK9mHo9OYzVVtBeNAgx2VNa3Aui1U1RR9BS5efgHMQuTc4FLn_J3JIucz0xZUjHdKAL_YsvmgDKnzInTOP29KKosFyXUFu5-bm5DezkH_BE9dK2rw15M-jZepoM=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbiRG7CnPlNyrPpFV2HX08yCujE-dS-pq4UMK9mHo9OYzVVtBeNAgx2VNa3Aui1U1RR9BS5efgHMQuTc4FLn_J3JIucz0xZUjHdKAL_YsvmgDKnzInTOP29KKosFyXUFu5-bm5DezkH_BE9dK2rw15M-jZepoM=s2048"
                   ],
        "sortOrder":  3
    },
    {
        "id":  "prod-5",
        "name":  "Monitor Gaming Odyssey G5 de 27\" QHD IPS LS27FG500ELXPE ( 2K ) PIVOT 180HZ",
        "category":  "Monitores",
        "price":  808,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR SAMSUNG ODYSSEY G5 27\" (LS27FG500ELXPE) 180HZ / 1MS / QHD /2K/ 2560 X 1440 / IPS / NEGRO 2K",
        "fullDescription":  "MONITOR SAMSUNG ODYSSEY G5 27\" (LS27FG500ELXPE) 180HZ / 1MS / QHD /2K/ 2560 X 1440 / IPS / NEGRO 2K",
        "orderCount":  175,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbiRG7CnPlNyrPpFV2HX08yCujE-dS-pq4UMK9mHo9OYzVVtBeNAgx2VNa3Aui1U1RR9BS5efgHMQuTc4FLn_J3JIucz0xZUjHdKAL_YsvmgDKnzInTOP29KKosFyXUFu5-bm5DezkH_BE9dK2rw15M-jZepoM=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbiRG7CnPlNyrPpFV2HX08yCujE-dS-pq4UMK9mHo9OYzVVtBeNAgx2VNa3Aui1U1RR9BS5efgHMQuTc4FLn_J3JIucz0xZUjHdKAL_YsvmgDKnzInTOP29KKosFyXUFu5-bm5DezkH_BE9dK2rw15M-jZepoM=s2048"
                   ],
        "sortOrder":  4
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaUNu5r9omCXL06w6fBtK5UgeC9nEoI_78NMvA0eTlo09aVRxjbwAYpbUCFAb1YENPCN2lSo2sIp--1_VM3Ekm-ZxF3iI3CSu52fN7ZfXfLRySjDH-Xvaxdp0w0HHRKSGLcomu3-ujmAS7dQjjSL4okbvlF2sU=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaUNu5r9omCXL06w6fBtK5UgeC9nEoI_78NMvA0eTlo09aVRxjbwAYpbUCFAb1YENPCN2lSo2sIp--1_VM3Ekm-ZxF3iI3CSu52fN7ZfXfLRySjDH-Xvaxdp0w0HHRKSGLcomu3-ujmAS7dQjjSL4okbvlF2sU=s2048"
                   ],
        "sortOrder":  5
    },
    {
        "id":  "prod-7",
        "name":  "TEROS MONITOR 2133S DE 120HZ ( 21.5 )",
        "category":  "Monitores",
        "price":  234,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR TEROS TE-2133S 21.5P FHD/IPS/120HZ/1MS",
        "fullDescription":  "MONITOR TEROS TE-2133S 21.5P FHD/IPS/120HZ/1MS",
        "orderCount":  173,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZQgfJX4YpV4c8oQmRfUQSnKRnwlXMAYSOI-lWkUMiC1jmfT6rFzcpFeloPYOszXzKZLq1y3aE1g6LaakyQWV1VDv86-HGh-fWD3W3p-f2BcjjjHN8xvYqgOBkObFFlW2e-_NBY5rR3bJiRV0wWj-ClGRkzdrm17w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZQgfJX4YpV4c8oQmRfUQSnKRnwlXMAYSOI-lWkUMiC1jmfT6rFzcpFeloPYOszXzKZLq1y3aE1g6LaakyQWV1VDv86-HGh-fWD3W3p-f2BcjjjHN8xvYqgOBkObFFlW2e-_NBY5rR3bJiRV0wWj-ClGRkzdrm17w=s2048"
                   ],
        "sortOrder":  6
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLayqrUZXYfB1z2oxi7Cx85d9SDw4oCPHYqo78TP2SOfeg7F66vu34aT-BDzAY2-skBOuNMvj8urpriIGx8rpwXvstOpaiR0wjJZvQ9s8YvqxK9k_k8zW7PXMk4jZfZd1H9MdiSlAp3JppV2niThHxj6MRBd3FXIIw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLayqrUZXYfB1z2oxi7Cx85d9SDw4oCPHYqo78TP2SOfeg7F66vu34aT-BDzAY2-skBOuNMvj8urpriIGx8rpwXvstOpaiR0wjJZvQ9s8YvqxK9k_k8zW7PXMk4jZfZd1H9MdiSlAp3JppV2niThHxj6MRBd3FXIIw=s2048"
                   ],
        "sortOrder":  7
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaAs5enkKGqO40WtCpV8u9M437qm_tNRP-ZzhJCrAfUe97lanD38X2b1h8uHpsKPHhbVUoq-3SSkTSy2cJDHXzX0Mvs0Lre9nqWyKaN_hzBb894Py3kV3f4WQ34WG9ZczPI5wpvJ1jQSK8CAszjm82lUrqN8mS-Xw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaAs5enkKGqO40WtCpV8u9M437qm_tNRP-ZzhJCrAfUe97lanD38X2b1h8uHpsKPHhbVUoq-3SSkTSy2cJDHXzX0Mvs0Lre9nqWyKaN_hzBb894Py3kV3f4WQ34WG9ZczPI5wpvJ1jQSK8CAszjm82lUrqN8mS-Xw=s2048"
                   ],
        "sortOrder":  8
    },
    {
        "id":  "prod-10",
        "name":  "MONITOR TEROS 2416CS - 23.8 PLANO DE 100HZ 2K QHD 1MS (CON PARLANTE MAS CAMARA INCORPORADA)",
        "category":  "Periféricos",
        "price":  442,
        "badge":  "",
        "inStock":  true,
        "description":  "Monitor plano TEROS TE-2416CS, 23.8\" QHD IPS, 100Hz, 1ms, X2 HDMI, DP, Cámara, Micrófono, Parlantes full equipo, PIVOT 90* 2K",
        "fullDescription":  "Monitor plano TEROS TE-2416CS, 23.8\" QHD IPS, 100Hz, 1ms, X2 HDMI, DP, Cámara, Micrófono, Parlantes full equipo, PIVOT 90* 2K",
        "orderCount":  170,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaAs5enkKGqO40WtCpV8u9M437qm_tNRP-ZzhJCrAfUe97lanD38X2b1h8uHpsKPHhbVUoq-3SSkTSy2cJDHXzX0Mvs0Lre9nqWyKaN_hzBb894Py3kV3f4WQ34WG9ZczPI5wpvJ1jQSK8CAszjm82lUrqN8mS-Xw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaAs5enkKGqO40WtCpV8u9M437qm_tNRP-ZzhJCrAfUe97lanD38X2b1h8uHpsKPHhbVUoq-3SSkTSy2cJDHXzX0Mvs0Lre9nqWyKaN_hzBb894Py3kV3f4WQ34WG9ZczPI5wpvJ1jQSK8CAszjm82lUrqN8mS-Xw=s2048"
                   ],
        "sortOrder":  9
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZy0Hcb_Iab2tcaMLjzEN-jPO0auUGAdPBxbXU1P1DPgd9HIR9WwDF1cibtxulhcFamAvIng0mkJt_nYDTLNTbGiu01DEe43YR-nBY8YpyQZ5ecOjjQSct3pGtMzliMG0jP5TFsXRn0SYaoruGkT2HVzWWOWI0=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZy0Hcb_Iab2tcaMLjzEN-jPO0auUGAdPBxbXU1P1DPgd9HIR9WwDF1cibtxulhcFamAvIng0mkJt_nYDTLNTbGiu01DEe43YR-nBY8YpyQZ5ecOjjQSct3pGtMzliMG0jP5TFsXRn0SYaoruGkT2HVzWWOWI0=s2048"
                   ],
        "sortOrder":  10
    },
    {
        "id":  "prod-12",
        "name":  "MONITOR TEROS 2417S PLANO 144HS 1MS FH D 24¨",
        "category":  "Monitores",
        "price":  260,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR TEROS 2417S 144HS 1MS FHD 24¨ PLANO IPS HDMI DP PARLANTES AUDIO OUT",
        "fullDescription":  "MONITOR TEROS 2417S 144HS 1MS FHD 24¨ PLANO IPS HDMI DP PARLANTES AUDIO OUT",
        "orderCount":  168,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaCHpdXGrkmeC6znY3ZSQ0XDnP2wEEhrwCjXyHvftYztdfYvMwP_hQabq9lAIYd0zFn_x7tX-n_NL6YYM6Sk8Ds9cfdUdVUf7iDJ4DsGynjEDrjgWW8PoiA9S_3E6mF8mDL74YxGRtdKQOBTZB_XvDfjbtvI-s0OA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaCHpdXGrkmeC6znY3ZSQ0XDnP2wEEhrwCjXyHvftYztdfYvMwP_hQabq9lAIYd0zFn_x7tX-n_NL6YYM6Sk8Ds9cfdUdVUf7iDJ4DsGynjEDrjgWW8PoiA9S_3E6mF8mDL74YxGRtdKQOBTZB_XvDfjbtvI-s0OA=w800-h800"
                   ],
        "sortOrder":  11
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa0mW0RuII_gTPc9xkpeEmlDT1ZarbJ0xu3GxF6kN3I1SRwV6GHaNbB9C3jDGzt_iwl6tazXM_8-y3nzJ4ZNe2T5orZsysCauNiyAIb-GyjGJHljXEe5tK2-cNWWbAGu_ekCWb8fpXM0hN06bEW6PxO3Nf2qiiNuw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa0mW0RuII_gTPc9xkpeEmlDT1ZarbJ0xu3GxF6kN3I1SRwV6GHaNbB9C3jDGzt_iwl6tazXM_8-y3nzJ4ZNe2T5orZsysCauNiyAIb-GyjGJHljXEe5tK2-cNWWbAGu_ekCWb8fpXM0hN06bEW6PxO3Nf2qiiNuw=w800-h800"
                   ],
        "sortOrder":  12
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLapPtxiuqB7hyhhnOJgfJZT8Bk9bTaZYbQNWYOzzEtvhjqSnoa_P_7dq0_wmuPKdOKHAxJvY-sFp6l88hDFriZMFlyJCLq7kZlupnIJGC5Tt13I8JPzImLzNJ5PyZHvg_zQVwb210V6LfYF5acMnP_MLSfVTa1mRQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLapPtxiuqB7hyhhnOJgfJZT8Bk9bTaZYbQNWYOzzEtvhjqSnoa_P_7dq0_wmuPKdOKHAxJvY-sFp6l88hDFriZMFlyJCLq7kZlupnIJGC5Tt13I8JPzImLzNJ5PyZHvg_zQVwb210V6LfYF5acMnP_MLSfVTa1mRQ=s2048"
                   ],
        "sortOrder":  13
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLapPtxiuqB7hyhhnOJgfJZT8Bk9bTaZYbQNWYOzzEtvhjqSnoa_P_7dq0_wmuPKdOKHAxJvY-sFp6l88hDFriZMFlyJCLq7kZlupnIJGC5Tt13I8JPzImLzNJ5PyZHvg_zQVwb210V6LfYF5acMnP_MLSfVTa1mRQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLapPtxiuqB7hyhhnOJgfJZT8Bk9bTaZYbQNWYOzzEtvhjqSnoa_P_7dq0_wmuPKdOKHAxJvY-sFp6l88hDFriZMFlyJCLq7kZlupnIJGC5Tt13I8JPzImLzNJ5PyZHvg_zQVwb210V6LfYF5acMnP_MLSfVTa1mRQ=s2048"
                   ],
        "sortOrder":  14
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLazdJpf4fpbsCZWRSnFsQ7p8WV4cDv_zJXjclWfGZNHSC28gz0D9QhqgyXXTXdeF9OQNoDp3Qu0T-jKPdq2TR-FQzZUVxGRbWihiGDxof1MSxdP99fwD0tbacll8oTDyAANZM6CKE228QFXyhva48h87Vt_JAWlvQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLazdJpf4fpbsCZWRSnFsQ7p8WV4cDv_zJXjclWfGZNHSC28gz0D9QhqgyXXTXdeF9OQNoDp3Qu0T-jKPdq2TR-FQzZUVxGRbWihiGDxof1MSxdP99fwD0tbacll8oTDyAANZM6CKE228QFXyhva48h87Vt_JAWlvQ=w800-h800"
                   ],
        "sortOrder":  15
    },
    {
        "id":  "prod-17",
        "name":  "MONITOR XIAOMI 27\" G27i PLANO IPS FHD 165 HZ 1MS.",
        "category":  "Monitores",
        "price":  427,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR XIAOMI 27\" G27i PLANO IPS FHD 165 HZ 1MS. GAMING",
        "fullDescription":  "MONITOR XIAOMI 27\" G27i PLANO IPS FHD 165 HZ 1MS. GAMING",
        "orderCount":  163,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbXqAmtTU9rb0H6jckY0WFZnqm8y5yDAQjI_t7BPp1jjnYydX-O9fhtyLUiNEAwcweZiEQkmrOB8euYPbuIxL_FcaaJnGYAs_TLB7OtwagrpCBwFk0nWl8cBO7IgjBpa9Rl85yzfVq9b4FcSXMvNSmeEt7hiyNHSQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbXqAmtTU9rb0H6jckY0WFZnqm8y5yDAQjI_t7BPp1jjnYydX-O9fhtyLUiNEAwcweZiEQkmrOB8euYPbuIxL_FcaaJnGYAs_TLB7OtwagrpCBwFk0nWl8cBO7IgjBpa9Rl85yzfVq9b4FcSXMvNSmeEt7hiyNHSQ=w800-h800"
                   ],
        "sortOrder":  16
    },
    {
        "id":  "prod-18",
        "name":  "MONITOR XIAOMI 34 CURVO WQHD (2K) 180HZ/1MS",
        "category":  "Monitores",
        "price":  974,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR XIAOMI 34 CURVO WQHD (2K) 180HZ/1MS",
        "fullDescription":  "MONITOR XIAOMI 34 CURVO WQHD (2K) 180HZ/1MS",
        "orderCount":  162,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYZQUeB_oicvqnxO-leFc6Cdr9PVd23yMVLY7NcsrnTJDYGwQeFK6evhKzm0rzbOcf88fb2haj9hY8lu-w_enHiJoVNf8KPOEb91bZ3lwhS95i_0Z8j5sQ7YDvYR4CGczqGdPVoFMVNXynltlsG_wmshqvqa04=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYZQUeB_oicvqnxO-leFc6Cdr9PVd23yMVLY7NcsrnTJDYGwQeFK6evhKzm0rzbOcf88fb2haj9hY8lu-w_enHiJoVNf8KPOEb91bZ3lwhS95i_0Z8j5sQ7YDvYR4CGczqGdPVoFMVNXynltlsG_wmshqvqa04=s2048"
                   ],
        "sortOrder":  17
    },
    {
        "id":  "prod-19",
        "name":  "MONITOR MICRONICS FENIX 24\" 144HZ FHD",
        "category":  "Monitores",
        "price":  272,
        "badge":  "",
        "inStock":  true,
        "description":  "Tamaño 24 Pulgadas Resolución FHD (1920 x 1080) ación de pantalla: +5° a -20° Panel A+: 0 Píxeles PPI 92 (Píxeles por Pulgada) Panel Plano IPS Tasa de Refresco: 144 Hz Tiempo de Respuesta 1ms. Contraste 4,000:1. Puertos: 1 HDMI y 1 DisplayPort Reducción de Luz Azul ESA: 100*100 reesync Sincronización Entre PC y Monitor. Incluye: Cable HDMI, Adaptador, Cable de poder y Manual",
        "fullDescription":  "Tamaño 24 Pulgadas Resolución FHD (1920 x 1080) ación de pantalla: +5° a -20° Panel A+: 0 Píxeles PPI 92 (Píxeles por Pulgada) Panel Plano IPS Tasa de Refresco: 144 Hz Tiempo de Respuesta 1ms. Contraste 4,000:1. Puertos: 1 HDMI y 1 DisplayPort Reducción de Luz Azul ESA: 100*100 reesync Sincronización Entre PC y Monitor. Incluye: Cable HDMI, Adaptador, Cable de poder y Manual",
        "orderCount":  161,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbVJT_94nMFZ4eFDOuE3MXurBPL9q52YSuSDW0MjAPSYdugdwocP1XMsyrBMsDk0_6hzuO3dqrN9GXhjLURpvT57GJaWV41JzRSABscqf4XQkezpQsNczdrYMe3UMEzEr8Gl4ECGJZIOAFrN702tvivjlEMD4fRFw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbVJT_94nMFZ4eFDOuE3MXurBPL9q52YSuSDW0MjAPSYdugdwocP1XMsyrBMsDk0_6hzuO3dqrN9GXhjLURpvT57GJaWV41JzRSABscqf4XQkezpQsNczdrYMe3UMEzEr8Gl4ECGJZIOAFrN702tvivjlEMD4fRFw=s2048"
                   ],
        "sortOrder":  18
    },
    {
        "id":  "prod-20",
        "name":  "M. MICRONIC MATRIX XT GAMER MACH INE 27\" 180HZ QHD PIVOT PLANO 2K",
        "category":  "Monitores",
        "price":  473,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR MICRONIC MATRIX XT GAMER MACHINE 27\" 180 HZ QHD PIVOT Tamaño 27 Pulgadas. Grado de Inclinación de pantalla: +5° a -13° Panel A+: 0 Pixeles PPI 92 (Pixeles por Pulgada) Panel Plano IPS Tasa de Refresco: 180 Hz Tiempo de Respuesta 1ms. Freesync Sincronizacion Entre PC y Monitor. 2K",
        "fullDescription":  "MONITOR MICRONIC MATRIX XT GAMER MACHINE 27\" 180 HZ QHD PIVOT Tamaño 27 Pulgadas. Grado de Inclinación de pantalla: +5° a -13° Panel A+: 0 Pixeles PPI 92 (Pixeles por Pulgada) Panel Plano IPS Tasa de Refresco: 180 Hz Tiempo de Respuesta 1ms. Freesync Sincronizacion Entre PC y Monitor. 2K",
        "orderCount":  160,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbVJT_94nMFZ4eFDOuE3MXurBPL9q52YSuSDW0MjAPSYdugdwocP1XMsyrBMsDk0_6hzuO3dqrN9GXhjLURpvT57GJaWV41JzRSABscqf4XQkezpQsNczdrYMe3UMEzEr8Gl4ECGJZIOAFrN702tvivjlEMD4fRFw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbVJT_94nMFZ4eFDOuE3MXurBPL9q52YSuSDW0MjAPSYdugdwocP1XMsyrBMsDk0_6hzuO3dqrN9GXhjLURpvT57GJaWV41JzRSABscqf4XQkezpQsNczdrYMe3UMEzEr8Gl4ECGJZIOAFrN702tvivjlEMD4fRFw=s2048"
                   ],
        "sortOrder":  19
    },
    {
        "id":  "prod-21",
        "name":  "MONITOR MICRONICS BRICKELL CURVO 27\" 1OO HZ 3 ms VA",
        "category":  "Monitores",
        "price":  332,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR MICRONICS CURVO 27\" BRIKELL MIC DG27FC 1OO hz 3 ms VA FHD HDMI DP VESA FRESYNC brickel",
        "fullDescription":  "MONITOR MICRONICS CURVO 27\" BRIKELL MIC DG27FC 1OO hz 3 ms VA FHD HDMI DP VESA FRESYNC brickel",
        "orderCount":  159,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZsdzjfaiAbQTDsvs8WGqZGFSDdpeXgOSgmktIpwqZSMfjLhjq3TpR0aMTaQHtJjuxnlw7Ptx4EgSC207dbBMOsdEyltwISIqVV5HP1yBzm4WXef_NpXEz26wnjKygyfxR8SQHkXD1-OxPwui2OzwStzuRX3UY=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZsdzjfaiAbQTDsvs8WGqZGFSDdpeXgOSgmktIpwqZSMfjLhjq3TpR0aMTaQHtJjuxnlw7Ptx4EgSC207dbBMOsdEyltwISIqVV5HP1yBzm4WXef_NpXEz26wnjKygyfxR8SQHkXD1-OxPwui2OzwStzuRX3UY=w800-h800"
                   ],
        "sortOrder":  20
    },
    {
        "id":  "prod-22",
        "name":  "MONITOR MICRONICS PLAYER 27¨ 200HZ 1MS FHD FREE SYNC PLANO CON PARLANTES",
        "category":  "Monitores",
        "price":  391,
        "badge":  "",
        "inStock":  true,
        "description":  "MONITOR MICRONICS PLAYER 27¨ 200HZ 1MS FHD FREE SYNC PLANO IPS INCLUYE PARLANTES",
        "fullDescription":  "MONITOR MICRONICS PLAYER 27¨ 200HZ 1MS FHD FREE SYNC PLANO IPS INCLUYE PARLANTES",
        "orderCount":  158,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYwWfVPWz8b_sxo06if4MGAuh1biCnQCUzOmoN1TcbwVb6vKrXGG-9JG2YmZV4A9rG1W-YPTolx-X0yAcLJcQaQ2NmQ0uUjGcbMzNQDaSSfo-QqIl0N-g7L5-FFI2YPIMvJRMT71JQf7pdz1nuRtyyvSbOyDVY=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYwWfVPWz8b_sxo06if4MGAuh1biCnQCUzOmoN1TcbwVb6vKrXGG-9JG2YmZV4A9rG1W-YPTolx-X0yAcLJcQaQ2NmQ0uUjGcbMzNQDaSSfo-QqIl0N-g7L5-FFI2YPIMvJRMT71JQf7pdz1nuRtyyvSbOyDVY=w800-h800"
                   ],
        "sortOrder":  21
    },
    {
        "id":  "prod-23",
        "name":  "MONITOR GAMER BUSINESS, CYBERTEL MO27FF 27P PLANO FHD 100HZ",
        "category":  "Monitores",
        "price":  305,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER BUSINESS CYBERTEL MO27FF 27P FHD 100HZ 3MS PLANO Puerto HDMI.Puerto DisplayPort.",
        "fullDescription":  "MONITOR GAMER BUSINESS CYBERTEL MO27FF 27P FHD 100HZ 3MS PLANO Puerto HDMI.Puerto DisplayPort.",
        "orderCount":  157,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY3aM3r9awFYbkqlQsx2mkidf-2IVgIIpZxbOJE0cW30BzmW4xLykp3oCKw8iv-2ojBKXulVrlLGQxd_92sESM9t1gHR8bL3gyB4ox6A8qkLinT1sC1JTaCqZPpdBK0VPXqh37W-I_cHeAUS-KcHO409toVxVBHwA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY3aM3r9awFYbkqlQsx2mkidf-2IVgIIpZxbOJE0cW30BzmW4xLykp3oCKw8iv-2ojBKXulVrlLGQxd_92sESM9t1gHR8bL3gyB4ox6A8qkLinT1sC1JTaCqZPpdBK0VPXqh37W-I_cHeAUS-KcHO409toVxVBHwA=s2048"
                   ],
        "sortOrder":  22
    },
    {
        "id":  "prod-24",
        "name":  "MONITOR GAMER BUSINESS CYBERTEL MF24-120FF 24P FHD 120HZ grp-001",
        "category":  "Monitores",
        "price":  239,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MONITOR GAMER BUSINESS CYBERTEL MF24-120FF 24P FHD 120HZ grp-001",
        "fullDescription":  "MONITOR GAMER BUSINESS CYBERTEL MF24-120FF 24P FHD 120HZ grp-001",
        "orderCount":  156,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  23
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYIJhXKsVL9QFs3Tnvwe7u6UPMamROWnPl_D4NxLWPNUcoykUbtqFUSTcfu90SGy0sCmkhSmGyDCGOT26KpoCQUNWPlujyFUPymNd6cQ9jKCgxOWc3ONwv3GcVF25I1xjXk1vUNxoydAlgtw5klpAcSw8zy2VtX4A=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYIJhXKsVL9QFs3Tnvwe7u6UPMamROWnPl_D4NxLWPNUcoykUbtqFUSTcfu90SGy0sCmkhSmGyDCGOT26KpoCQUNWPlujyFUPymNd6cQ9jKCgxOWc3ONwv3GcVF25I1xjXk1vUNxoydAlgtw5klpAcSw8zy2VtX4A=w800-h800"
                   ],
        "sortOrder":  24
    },
    {
        "id":  "prod-26",
        "name":  "REFRIGERACION ROG GAMING 240PRO BLANCO RELOJ",
        "category":  "Refrigeración",
        "price":  201,
        "badge":  "",
        "inStock":  true,
        "description":  "REFRIGERACION ROG GAMING 240PRO NEGRO CON RELOJ DE TEMPERATURA",
        "fullDescription":  "REFRIGERACION ROG GAMING 240PRO NEGRO CON RELOJ DE TEMPERATURA",
        "orderCount":  154,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZJ5mMuONYLGIVMBDDffGRjXBahIm_hEm6zUHtOltl1qMcvnmSdqaAogRaeLWazHnC9xoFRxW4LSFbxEl8FILB9N2dxRSZalTHj1bMvty-lYn6JM9t4r2qse3pzW3GWrJKBy5n_Z9N-e7UhMxJ_qooOuIBx8xbJug=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZJ5mMuONYLGIVMBDDffGRjXBahIm_hEm6zUHtOltl1qMcvnmSdqaAogRaeLWazHnC9xoFRxW4LSFbxEl8FILB9N2dxRSZalTHj1bMvty-lYn6JM9t4r2qse3pzW3GWrJKBy5n_Z9N-e7UhMxJ_qooOuIBx8xbJug=s2048"
                   ],
        "sortOrder":  25
    },
    {
        "id":  "prod-27",
        "name":  "REFRIGERACION ROG GAMING 240PRO BLANCO RELOJ",
        "category":  "Refrigeración",
        "price":  211,
        "badge":  "",
        "inStock":  true,
        "description":  "REFRIGERACION ROG GAMING 240PRO BLANCO RELOJ DE TEMPERATURA",
        "fullDescription":  "REFRIGERACION ROG GAMING 240PRO BLANCO RELOJ DE TEMPERATURA",
        "orderCount":  153,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbQGZqPZdsqbwmsG2zKhNUHOqoeHr4Eaxaoyo7ot6YZJX5vxABlgnOIBE0mrU3eOMUoNpdgGic85xbfKHGxG_G-BuHej_tj3KzNe1WTH1VeK-B7wiMR8ReRpH4GT9P0G6A0p-x64AUoy0nUxyhBkKR2j9KKecKTag=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbQGZqPZdsqbwmsG2zKhNUHOqoeHr4Eaxaoyo7ot6YZJX5vxABlgnOIBE0mrU3eOMUoNpdgGic85xbfKHGxG_G-BuHej_tj3KzNe1WTH1VeK-B7wiMR8ReRpH4GT9P0G6A0p-x64AUoy0nUxyhBkKR2j9KKecKTag=s2048"
                   ],
        "sortOrder":  26
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbQGZqPZdsqbwmsG2zKhNUHOqoeHr4Eaxaoyo7ot6YZJX5vxABlgnOIBE0mrU3eOMUoNpdgGic85xbfKHGxG_G-BuHej_tj3KzNe1WTH1VeK-B7wiMR8ReRpH4GT9P0G6A0p-x64AUoy0nUxyhBkKR2j9KKecKTag=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbQGZqPZdsqbwmsG2zKhNUHOqoeHr4Eaxaoyo7ot6YZJX5vxABlgnOIBE0mrU3eOMUoNpdgGic85xbfKHGxG_G-BuHej_tj3KzNe1WTH1VeK-B7wiMR8ReRpH4GT9P0G6A0p-x64AUoy0nUxyhBkKR2j9KKecKTag=s2048"
                   ],
        "sortOrder":  27
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYYBAglb5sHAjqb2svJ_QQ7X4iWT4E9igSGUJpP-5ibnq1MOTXYF2sGI70WhVhY5_Ht-n6YfPvWm-rd-78pzwWhOj_CAvUiw1j4WoZW98wmnyFPsf6tUsfJqD2tEkPZcW39hUIR8kwPiA085Om30ibCzO5N9e9TIg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYYBAglb5sHAjqb2svJ_QQ7X4iWT4E9igSGUJpP-5ibnq1MOTXYF2sGI70WhVhY5_Ht-n6YfPvWm-rd-78pzwWhOj_CAvUiw1j4WoZW98wmnyFPsf6tUsfJqD2tEkPZcW39hUIR8kwPiA085Om30ibCzO5N9e9TIg=s2048"
                   ],
        "sortOrder":  28
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYYBAglb5sHAjqb2svJ_QQ7X4iWT4E9igSGUJpP-5ibnq1MOTXYF2sGI70WhVhY5_Ht-n6YfPvWm-rd-78pzwWhOj_CAvUiw1j4WoZW98wmnyFPsf6tUsfJqD2tEkPZcW39hUIR8kwPiA085Om30ibCzO5N9e9TIg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYYBAglb5sHAjqb2svJ_QQ7X4iWT4E9igSGUJpP-5ibnq1MOTXYF2sGI70WhVhY5_Ht-n6YfPvWm-rd-78pzwWhOj_CAvUiw1j4WoZW98wmnyFPsf6tUsfJqD2tEkPZcW39hUIR8kwPiA085Om30ibCzO5N9e9TIg=s2048"
                   ],
        "sortOrder":  29
    },
    {
        "id":  "prod-31",
        "name":  "COOLER CYBERTEL DE COBRE PARA PROC. INTEL PARA 2DA Y 10MA GEN.",
        "category":  "Refrigeración",
        "price":  825,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "CYBERTEL COOLER CPU - CBX ACX115. TAMAÑO 90X90X25MM. PESO TOTAL 210 G . VELOCIDAD VENTILADOR : 2200 RPM VOLTAJE 12V. NIVEL DE RUIDO 20 DB. COMPATIBILIDAD. INTEL CORE I3/I5/I7/I9/ DE 2TA A 10MA GENERACION",
        "fullDescription":  "CYBERTEL COOLER CPU - CBX ACX115. TAMAÑO 90X90X25MM. PESO TOTAL 210 G . VELOCIDAD VENTILADOR : 2200 RPM VOLTAJE 12V. NIVEL DE RUIDO 20 DB. COMPATIBILIDAD. INTEL CORE I3/I5/I7/I9/ DE 2TA A 10MA GENERACION",
        "orderCount":  149,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  30
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaSRp7TwTFSOrkLaNhmMWyiWFzZStsimekMmitVRLlW0Lqzv5-VDyMG68zfdzaxsBButnh3eiVH4VKt1mdcNIICrcb3CEXI-qEGwtIM7CIA9iNPebtZzHNdpi3-1wInO2Vr55_xMV6DnJPGQZaCcpa8ZWX8FxOjfw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaSRp7TwTFSOrkLaNhmMWyiWFzZStsimekMmitVRLlW0Lqzv5-VDyMG68zfdzaxsBButnh3eiVH4VKt1mdcNIICrcb3CEXI-qEGwtIM7CIA9iNPebtZzHNdpi3-1wInO2Vr55_xMV6DnJPGQZaCcpa8ZWX8FxOjfw=w800-h800"
                   ],
        "sortOrder":  31
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb-9pNDiI58KDWv1vwTIRWCJUcUGJqrLGSxwPR1efWiP-H-ItSWCYx1FzNJF4-H8T8WCpGqY667vCzsXvA1zF---PWbfxa_nedXCcE7THVMxXP9BnOC3YU95-LsA3iTjzFtfFqCtoDNf60jUYaP_-3iqF1Nj-U=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb-9pNDiI58KDWv1vwTIRWCJUcUGJqrLGSxwPR1efWiP-H-ItSWCYx1FzNJF4-H8T8WCpGqY667vCzsXvA1zF---PWbfxa_nedXCcE7THVMxXP9BnOC3YU95-LsA3iTjzFtfFqCtoDNf60jUYaP_-3iqF1Nj-U=w800-h800"
                   ],
        "sortOrder":  32
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbdVsNchrKaj8VDUMiuCn7X63S1hLHgLEiZQq8IJwQ85ZP-cMw_yKiL7J0hTprhs-QQaB3gcJ4YlcoiKLFZbAUD7aM_SGdWljFV5pGTMba7NOG92xULM3_hhBfabuyaW5rT4F9vbH6tVUZQ2zAojY_UCh6Oz4qWCg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbdVsNchrKaj8VDUMiuCn7X63S1hLHgLEiZQq8IJwQ85ZP-cMw_yKiL7J0hTprhs-QQaB3gcJ4YlcoiKLFZbAUD7aM_SGdWljFV5pGTMba7NOG92xULM3_hhBfabuyaW5rT4F9vbH6tVUZQ2zAojY_UCh6Oz4qWCg=w800-h800"
                   ],
        "sortOrder":  33
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaLQScUohl8ykhW_4e0HkBFcfCi6qIOLVEJy1ZcOQexNGLHyhu7ALXDh1LuxIedekFCVwi5rlQAE0Nx245sB6jwROpQ9ls3Sgg4vhmNH_uRX210-2vYZXZj2uwkUjyE0LiN2GaywE5VAXwOsNaDdJiWS9Cs_W1ZpA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaLQScUohl8ykhW_4e0HkBFcfCi6qIOLVEJy1ZcOQexNGLHyhu7ALXDh1LuxIedekFCVwi5rlQAE0Nx245sB6jwROpQ9ls3Sgg4vhmNH_uRX210-2vYZXZj2uwkUjyE0LiN2GaywE5VAXwOsNaDdJiWS9Cs_W1ZpA=w800-h800"
                   ],
        "sortOrder":  34
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
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  35
    },
    {
        "id":  "prod-37",
        "name":  "COOLER INTEL BASICO, CON BASE DE COBRE",
        "category":  "Refrigeración",
        "price":  44,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER INTEL BASICO CON BASE DE COBRE",
        "fullDescription":  "COOLER INTEL BASICO CON BASE DE COBRE",
        "orderCount":  143,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZIy5HWKXpvV_5MLvKJOra-NDC-pDFKxyZN1k0Ndcb_4Ab5cJfyR8m4eg3Ji-Xzp5su4E3GIWCctHWYG69VaZMuuqAPvFM0WZgv1esP-PKO4dsCozhwo37Gl8iPS-OFiXal3ZualQeN3Zm318q_HfaTNzVdwiWjtA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZIy5HWKXpvV_5MLvKJOra-NDC-pDFKxyZN1k0Ndcb_4Ab5cJfyR8m4eg3Ji-Xzp5su4E3GIWCctHWYG69VaZMuuqAPvFM0WZgv1esP-PKO4dsCozhwo37Gl8iPS-OFiXal3ZualQeN3Zm318q_HfaTNzVdwiWjtA=w800-h800"
                   ],
        "sortOrder":  36
    },
    {
        "id":  "prod-38",
        "name":  "COOLER INTEL BASICO, CON BASE DE ALUMINIO",
        "category":  "Refrigeración",
        "price":  41,
        "badge":  "",
        "inStock":  true,
        "description":  "COOLER INTEL BASICO CON BASE DE ALUMINIO",
        "fullDescription":  "COOLER INTEL BASICO CON BASE DE ALUMINIO",
        "orderCount":  142,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZIy5HWKXpvV_5MLvKJOra-NDC-pDFKxyZN1k0Ndcb_4Ab5cJfyR8m4eg3Ji-Xzp5su4E3GIWCctHWYG69VaZMuuqAPvFM0WZgv1esP-PKO4dsCozhwo37Gl8iPS-OFiXal3ZualQeN3Zm318q_HfaTNzVdwiWjtA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZIy5HWKXpvV_5MLvKJOra-NDC-pDFKxyZN1k0Ndcb_4Ab5cJfyR8m4eg3Ji-Xzp5su4E3GIWCctHWYG69VaZMuuqAPvFM0WZgv1esP-PKO4dsCozhwo37Gl8iPS-OFiXal3ZualQeN3Zm318q_HfaTNzVdwiWjtA=w800-h800"
                   ],
        "sortOrder":  37
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb3qCHBct4iPI1lVtA-ksVoB-C1bS_04XtRsgkZ-_-k9EX5isHQDEJeQgv6OJBZDdggx77-geqpPYxEttFeUi6BiKw1l3QnyquLDTkNjsorXUUCGRm45TxhCAxPmDQP4Alrkcx0c55z7DOCwEUVk9CNFJ0xqbYqsw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb3qCHBct4iPI1lVtA-ksVoB-C1bS_04XtRsgkZ-_-k9EX5isHQDEJeQgv6OJBZDdggx77-geqpPYxEttFeUi6BiKw1l3QnyquLDTkNjsorXUUCGRm45TxhCAxPmDQP4Alrkcx0c55z7DOCwEUVk9CNFJ0xqbYqsw=s2048"
                   ],
        "sortOrder":  38
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb3qCHBct4iPI1lVtA-ksVoB-C1bS_04XtRsgkZ-_-k9EX5isHQDEJeQgv6OJBZDdggx77-geqpPYxEttFeUi6BiKw1l3QnyquLDTkNjsorXUUCGRm45TxhCAxPmDQP4Alrkcx0c55z7DOCwEUVk9CNFJ0xqbYqsw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb3qCHBct4iPI1lVtA-ksVoB-C1bS_04XtRsgkZ-_-k9EX5isHQDEJeQgv6OJBZDdggx77-geqpPYxEttFeUi6BiKw1l3QnyquLDTkNjsorXUUCGRm45TxhCAxPmDQP4Alrkcx0c55z7DOCwEUVk9CNFJ0xqbYqsw=s2048"
                   ],
        "sortOrder":  39
    },
    {
        "id":  "prod-41",
        "name":  "CAMARA WEB 2K QUAD HD MICRONICS QUANTUM MAS TRIPODE",
        "category":  "Periféricos",
        "price":  68,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Quantum - MIC W700 Resolución 2K Quad HD: 2560 × 1440 px. Micrófono incorporado. Formato de video: 2560 × 1440 px a 30 fps. Conexión USB. Diseño compacto con soporte enganchable. Compatible con sistemas operativos Windows y otros.",
        "fullDescription":  "Quantum - MIC W700 Resolución 2K Quad HD: 2560 × 1440 px. Micrófono incorporado. Formato de video: 2560 × 1440 px a 30 fps. Conexión USB. Diseño compacto con soporte enganchable. Compatible con sistemas operativos Windows y otros.",
        "orderCount":  139,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  40
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYMzI5awFczHOhrWvn9tHkEDc8SnT6sW9G-2AAlW5Oiy_9xCwnqEBSt2GEzIVc-ALXkaGyvTqz9j0RTbBbMSGsmOBvsZtZCt_mZIoEq1a64eFl9CM0nWVaA1NFky1NCZ0tiXBnsQHOxXVpOJo4ZMkmXEGzkqCqE_w=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYMzI5awFczHOhrWvn9tHkEDc8SnT6sW9G-2AAlW5Oiy_9xCwnqEBSt2GEzIVc-ALXkaGyvTqz9j0RTbBbMSGsmOBvsZtZCt_mZIoEq1a64eFl9CM0nWVaA1NFky1NCZ0tiXBnsQHOxXVpOJo4ZMkmXEGzkqCqE_w=w800-h800"
                   ],
        "sortOrder":  41
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa5OTWKuZvH-O-kS2b1afABq1NFQhpYEP5X44q6VYRGYBEl5GuWsb4vsTk9mD_jdcuwzgyQ3e-4xuovquQN6YEnwlVppxuOkPc1Khp4cKJxDGjxvIEnewmo7ojt_wVwCKjru--orhy3YxmDNPLnzKnZVUtpf2sFlw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa5OTWKuZvH-O-kS2b1afABq1NFQhpYEP5X44q6VYRGYBEl5GuWsb4vsTk9mD_jdcuwzgyQ3e-4xuovquQN6YEnwlVppxuOkPc1Khp4cKJxDGjxvIEnewmo7ojt_wVwCKjru--orhy3YxmDNPLnzKnZVUtpf2sFlw=w800-h800"
                   ],
        "sortOrder":  42
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaZP_THjIckTnWEfpYpb9ajrLsqOHRpTBs3G2zXClo3gitnEyroL2PQo6gfF9x8HT33ujIsggWxp9XYQmq8nVQQohHjKQ2P9aedmaQxEY64n2ZFUT5KxNpyo9BJAgL0n2JWgMyT5bJf084xiG62qwLElNIYCDCh_A=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaZP_THjIckTnWEfpYpb9ajrLsqOHRpTBs3G2zXClo3gitnEyroL2PQo6gfF9x8HT33ujIsggWxp9XYQmq8nVQQohHjKQ2P9aedmaQxEY64n2ZFUT5KxNpyo9BJAgL0n2JWgMyT5bJf084xiG62qwLElNIYCDCh_A=w800-h800"
                   ],
        "sortOrder":  43
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa5cquxO5X1gi8FeHK2WjYiDB9rUB3JPqQ7N0ECyBbUa6VcBa547Mal_ShchjfjChSl4jTOzCw2cWMHbCpxgHpWo6pU9d9fMHhoo1CoB8L_aBQ0CxIUHFxgsBT67ECkpJ1hNyo4UDzWDSIJ1uoqg9t4ihTZfxHWmQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa5cquxO5X1gi8FeHK2WjYiDB9rUB3JPqQ7N0ECyBbUa6VcBa547Mal_ShchjfjChSl4jTOzCw2cWMHbCpxgHpWo6pU9d9fMHhoo1CoB8L_aBQ0CxIUHFxgsBT67ECkpJ1hNyo4UDzWDSIJ1uoqg9t4ihTZfxHWmQ=w800-h800"
                   ],
        "sortOrder":  44
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZj3tAnWlCWqGzQSpMMHjwTbXXGjZlazCvLG4kvJNTAfKlENiZjdy-GS2GYCgwmt4BWCXCdQCSjqWUrMjXZe1lqG16HSOEaj1cGKY0IlQDOiBeDvZfYU6IvVDy4AhpXWAA2IIqQhzwhmumZV3bI9QDiFgNIWtT3_A=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZj3tAnWlCWqGzQSpMMHjwTbXXGjZlazCvLG4kvJNTAfKlENiZjdy-GS2GYCgwmt4BWCXCdQCSjqWUrMjXZe1lqG16HSOEaj1cGKY0IlQDOiBeDvZfYU6IvVDy4AhpXWAA2IIqQhzwhmumZV3bI9QDiFgNIWtT3_A=w800-h800"
                   ],
        "sortOrder":  45
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZk6r8HcMBUqd6UDNgqNTJVA9iSqSR2-7yQJenFQGvqltp9KwBRAhNN280GnheCIPiO7EF4pT8dbPj9MfYEFCpQJ44eN9x5Br5klVVRGRxuLEDLnlMuIZhb72reVw5SOZtXzSqOVYp_1otfNQrmeHcM4WrSGHXyqw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZk6r8HcMBUqd6UDNgqNTJVA9iSqSR2-7yQJenFQGvqltp9KwBRAhNN280GnheCIPiO7EF4pT8dbPj9MfYEFCpQJ44eN9x5Br5klVVRGRxuLEDLnlMuIZhb72reVw5SOZtXzSqOVYp_1otfNQrmeHcM4WrSGHXyqw=w800-h800"
                   ],
        "sortOrder":  46
    },
    {
        "id":  "prod-48",
        "name":  "CASE ATX ULTRA VISION BLANCO - 4 FAN C/CONTROL C/SOPORTE GPU - ROG GAMING X",
        "category":  "Case",
        "price":  210,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX ULTRA VISION BLANCO - 4 COOLERS - C/CONTROL C/SOPORTE GPU - ROG GAMING X",
        "fullDescription":  "CASE ATX ULTRA VISION BLANCO - 4 COOLERS - C/CONTROL C/SOPORTE GPU - ROG GAMING X",
        "orderCount":  132,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbBgoDVfozmWYtwpyWqWq2lP64RLbqjkzN6WovRehBtKcNuUJcBgdQb7J6_nkj4JeFFOJ-MMcwjAthdTfOPpO0z2IYdJgIODxmmvdoOK4WEkLXtkkczVKWbZ7hrij4VvDx7lK7rHMazHfbm2jid31F9Hqxw1PLJmA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbBgoDVfozmWYtwpyWqWq2lP64RLbqjkzN6WovRehBtKcNuUJcBgdQb7J6_nkj4JeFFOJ-MMcwjAthdTfOPpO0z2IYdJgIODxmmvdoOK4WEkLXtkkczVKWbZ7hrij4VvDx7lK7rHMazHfbm2jid31F9Hqxw1PLJmA=s2048"
                   ],
        "sortOrder":  47
    },
    {
        "id":  "prod-49",
        "name":  "CASE ATX ULTRA RGB NEGRO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO - ROG GAMING X",
        "category":  "Case",
        "price":  270,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX ULTRA RGB NEGRO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO - ROG GAMING X",
        "fullDescription":  "CASE ATX ULTRA RGB NEGRO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO - ROG GAMING X",
        "orderCount":  131,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa7mq2EmKqAsmo21-6GwGYwH05AkQjqT0mvFiXE2Rt6a8peFca7Kvl93fUvb6GwJBoxRrSsF5BGkKfgQjnGC_UzhTBKTeuuTIL1LdiUpaATTZIyoAvvW1_Y9lJVXKHzZ5khEzIVQDrNjwCO5cLQU88CGX6VrJxqsg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa7mq2EmKqAsmo21-6GwGYwH05AkQjqT0mvFiXE2Rt6a8peFca7Kvl93fUvb6GwJBoxRrSsF5BGkKfgQjnGC_UzhTBKTeuuTIL1LdiUpaATTZIyoAvvW1_Y9lJVXKHzZ5khEzIVQDrNjwCO5cLQU88CGX6VrJxqsg=s2048"
                   ],
        "sortOrder":  48
    },
    {
        "id":  "prod-50",
        "name":  "CASE ATX ULTRA RGB BLANCO X7FAN + CONTROL + SOPORTE GPU - ROG GAMING X",
        "category":  "Case",
        "price":  275,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX ULTRA RGB BLANCO X7FAN + CONTROL + SOPORTE GPU - ROG GAMING X",
        "fullDescription":  "CASE ATX ULTRA RGB BLANCO X7FAN + CONTROL + SOPORTE GPU - ROG GAMING X",
        "orderCount":  130,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZApECE0MXO7MkmjdXYjtbbwX-J3E5ZH10t7uw4BS_EVvtxIfW1IK6rAB6BvXc8c-QI-5Sl7QWa9zAvgY0RfOIKx1jx4gzXXznI-NcqYhTCyaDnTytXsY1RVn3W6vpdMTNDvb4-I58GcJTdPDpeIxOqLsXPXqQSKA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZApECE0MXO7MkmjdXYjtbbwX-J3E5ZH10t7uw4BS_EVvtxIfW1IK6rAB6BvXc8c-QI-5Sl7QWa9zAvgY0RfOIKx1jx4gzXXznI-NcqYhTCyaDnTytXsY1RVn3W6vpdMTNDvb4-I58GcJTdPDpeIxOqLsXPXqQSKA=s2048"
                   ],
        "sortOrder":  49
    },
    {
        "id":  "prod-51",
        "name":  "CASE ATX PROMAX BLANCO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO ROG GAMING X",
        "category":  "Case",
        "price":  230,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE ATX PROMAX BLANCO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO ROG GAMING X",
        "fullDescription":  "CASE ATX PROMAX BLANCO X7 FAN ARGB + SOPORTE GPU + CONTROL REMOTO ROG GAMING X",
        "orderCount":  129,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbVKwxL9dxVIxIv0gN1ro83Qux9LOegHkrmpOk7mfBR1IDbxG9z50ROCpmtGgEO7vkR4RiRrK7EodLIFH8TEPQFVkmrIabFg3AyDfx8ExVtvqvEvHo5d4-oJ6YW830U_LagkisrPmJC-y--9NFsUBUgEVIRB3RkMg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbVKwxL9dxVIxIv0gN1ro83Qux9LOegHkrmpOk7mfBR1IDbxG9z50ROCpmtGgEO7vkR4RiRrK7EodLIFH8TEPQFVkmrIabFg3AyDfx8ExVtvqvEvHo5d4-oJ6YW830U_LagkisrPmJC-y--9NFsUBUgEVIRB3RkMg=s2048"
                   ],
        "sortOrder":  50
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY9vJcsWHDSSbrL8sFRgZuJArcNe2dlLr_5TMJ5f_LBKu5QKpfFbOioboRy-oWE72iMZYx6B-yHaEajfLva9qfYB8SrVlnlmDFtw3s2d1ak4Tl_xVRX1TpdrmHk70VCFbJftFnDzeGOXIhxE2nR-HM4EfWOu9bGgg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY9vJcsWHDSSbrL8sFRgZuJArcNe2dlLr_5TMJ5f_LBKu5QKpfFbOioboRy-oWE72iMZYx6B-yHaEajfLva9qfYB8SrVlnlmDFtw3s2d1ak4Tl_xVRX1TpdrmHk70VCFbJftFnDzeGOXIhxE2nR-HM4EfWOu9bGgg=s2048"
                   ],
        "sortOrder":  51
    },
    {
        "id":  "prod-53",
        "name":  "CASE GAMER CYBERTEL SAMURAI (CBX5021W) NEGRO",
        "category":  "Case",
        "price":  135,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "CASE GAMER CYBERTEL SAMURAI ( CBX5021W ) S/FUENTE | NEGRO | PANEL VIDRIO TEMPLADO | LED-RGB | 1 FAN STRIPE",
        "fullDescription":  "CASE GAMER CYBERTEL SAMURAI ( CBX5021W ) S/FUENTE | NEGRO | PANEL VIDRIO TEMPLADO | LED-RGB | 1 FAN STRIPE",
        "orderCount":  127,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY9vJcsWHDSSbrL8sFRgZuJArcNe2dlLr_5TMJ5f_LBKu5QKpfFbOioboRy-oWE72iMZYx6B-yHaEajfLva9qfYB8SrVlnlmDFtw3s2d1ak4Tl_xVRX1TpdrmHk70VCFbJftFnDzeGOXIhxE2nR-HM4EfWOu9bGgg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY9vJcsWHDSSbrL8sFRgZuJArcNe2dlLr_5TMJ5f_LBKu5QKpfFbOioboRy-oWE72iMZYx6B-yHaEajfLva9qfYB8SrVlnlmDFtw3s2d1ak4Tl_xVRX1TpdrmHk70VCFbJftFnDzeGOXIhxE2nR-HM4EfWOu9bGgg=s2048"
                   ],
        "sortOrder":  52
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYoz9MGT18lhP74XXEEB7d3ZMNRWUpVfl8kjuTYJHckqiDZH29FnY2tocsYkMNwuyAjzkr19labwl9Xfo2vcpgnRO4w6m-brVErJm4xxWYJfcxtxRnO91z6XWC-jeeMYcIRFoIpNUTWtvkD1wSNdu1X0rmj_B9UEQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYoz9MGT18lhP74XXEEB7d3ZMNRWUpVfl8kjuTYJHckqiDZH29FnY2tocsYkMNwuyAjzkr19labwl9Xfo2vcpgnRO4w6m-brVErJm4xxWYJfcxtxRnO91z6XWC-jeeMYcIRFoIpNUTWtvkD1wSNdu1X0rmj_B9UEQ=s2048"
                   ],
        "sortOrder":  53
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbyQa7whfklwORVg6CfdxNTYNtcUZfoOR62zREh-5SPDhxIRUgzOKIRAuCMQMrqPGzX5lUNaD-_vlFQ8ywFw50SRmXyyaA1IXX-O_yn1G3hinLmWY3k0EBD8d9qV9sUcGalLHKFbDJ1ImwEpMr6MrIEToMCPbH26g=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbyQa7whfklwORVg6CfdxNTYNtcUZfoOR62zREh-5SPDhxIRUgzOKIRAuCMQMrqPGzX5lUNaD-_vlFQ8ywFw50SRmXyyaA1IXX-O_yn1G3hinLmWY3k0EBD8d9qV9sUcGalLHKFbDJ1ImwEpMr6MrIEToMCPbH26g=w800-h800"
                   ],
        "sortOrder":  54
    },
    {
        "id":  "prod-56",
        "name":  "CASE GRAN Z MODELO GZ-3303",
        "category":  "Case",
        "price":  115,
        "badge":  "Remate",
        "inStock":  true,
        "description":  "Motherboard Support Mini-ITX | Micro-ATX | ATX Puertos USB3.0 x1 | USB2.0x2 | Audio , 2 COOLER INCLUIDO",
        "fullDescription":  "Motherboard Support Mini-ITX | Micro-ATX | ATX Puertos USB3.0 x1 | USB2.0x2 | Audio , 2 COOLER INCLUIDO",
        "orderCount":  124,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZvIitwrHLCSj8s7pnP_MAkAKse51ITw2f6D1HD3XmQnjG-Ehh3vwsvtNffgv4KPTtTR3oJe_BwsXiOCNw8ZszIdYBHZAkda0Tdxfyf0_R3N3kSgOokqGK5hlRTWh9S1kqv-roG06i37liSrKlvpK2S43sDNLPmqg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZvIitwrHLCSj8s7pnP_MAkAKse51ITw2f6D1HD3XmQnjG-Ehh3vwsvtNffgv4KPTtTR3oJe_BwsXiOCNw8ZszIdYBHZAkda0Tdxfyf0_R3N3kSgOokqGK5hlRTWh9S1kqv-roG06i37liSrKlvpK2S43sDNLPmqg=w800-h800"
                   ],
        "sortOrder":  55
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYDAtwsCsqZEm6bJ9-VqXepRek4RP6kTanvsnKcX7kp58Yj7qXXEAq2oQ3K7L4b0QDgsqkCo7V0j-rmN0EgS2LAY1gjbKsznT9-WM-QTrUL0LZtpTabpfbeNThccrCDkAeYcbvoV2AkRzhpcscjwRCkV_mnc1TykQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYDAtwsCsqZEm6bJ9-VqXepRek4RP6kTanvsnKcX7kp58Yj7qXXEAq2oQ3K7L4b0QDgsqkCo7V0j-rmN0EgS2LAY1gjbKsznT9-WM-QTrUL0LZtpTabpfbeNThccrCDkAeYcbvoV2AkRzhpcscjwRCkV_mnc1TykQ=s2048"
                   ],
        "sortOrder":  56
    },
    {
        "id":  "prod-58",
        "name":  "Case TEROS GAMING TE1316G BLANCO 4 fan ARGB",
        "category":  "Case",
        "price":  174,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Case Gamer Teros TE 1316G, Blanco, USB 3.0 USB 2.0, Audio, 4 fan ARGB, MICRO ATX, MINI ATX",
        "fullDescription":  "Case Gamer Teros TE 1316G, Blanco, USB 3.0 USB 2.0, Audio, 4 fan ARGB, MICRO ATX, MINI ATX",
        "orderCount":  122,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYNP_hGToCq5PQb3JiBTdpmvvvBEq0eWgKj1_NoEroiR6dgES0MCRkdqnBn6DsJfIdcLNXv7-KDsNrILjqthlXa0D9RTCqY0k75fvKl6EOZyqZfxroBR6cYpsYOcL37w9BeSZ4UytMzWvGb1CfkrNA1GAWYgi8=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYNP_hGToCq5PQb3JiBTdpmvvvBEq0eWgKj1_NoEroiR6dgES0MCRkdqnBn6DsJfIdcLNXv7-KDsNrILjqthlXa0D9RTCqY0k75fvKl6EOZyqZfxroBR6cYpsYOcL37w9BeSZ4UytMzWvGb1CfkrNA1GAWYgi8=w800-h800"
                   ],
        "sortOrder":  57
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLadt-mjXwMOr5u6ZqtWxSEzGn8EIjLFXIGLpVGPkpkCOGqTYCHQNy9zJr-KzYpLQXu_dcixC3hLQe2dk1TLrjTpWrEeDGqJwLrsB1_A__EXsolLZcD4GgW7eJ7XlrX1ZX65DmH0pqzKB5Q6z6hAhOlUmxVMa7K4hA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLadt-mjXwMOr5u6ZqtWxSEzGn8EIjLFXIGLpVGPkpkCOGqTYCHQNy9zJr-KzYpLQXu_dcixC3hLQe2dk1TLrjTpWrEeDGqJwLrsB1_A__EXsolLZcD4GgW7eJ7XlrX1ZX65DmH0pqzKB5Q6z6hAhOlUmxVMa7K4hA=w800-h800"
                   ],
        "sortOrder":  58
    },
    {
        "id":  "prod-60",
        "name":  "CASE MICRONICS FRANTIC MIC GC702 CON FUENTE REAL DE 650W ATX.",
        "category":  "Fuente de Poder",
        "price":  230,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "CASE FRANTIC MIC GC702 GABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB, VIDRIO TEMPLADO LATERAL Y MESH FRONTAL PANEL, LIQUID COOLING SUPPORT TOP AND BOTTOM 240 MM, GRAFIC CARD 330 MM",
        "fullDescription":  "CASE FRANTIC MIC GC702 GABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB, VIDRIO TEMPLADO LATERAL Y MESH FRONTAL PANEL, LIQUID COOLING SUPPORT TOP AND BOTTOM 240 MM, GRAFIC CARD 330 MM",
        "orderCount":  120,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbkHj2jtx41NiUnrbP1yFOWl6swAGNC6qIoYmIE1mKdpSM5dgxRpEeqJVaXf2UwGEMkYgPQ_JgNd7ifno-N0PtkFd8Z4OsGT5tsrGfGvus7gFEuITVWYuG1IW0e9yzXIH1O3HsQ17rpCyjr8HAgeuZqn_rGcqAxPQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbkHj2jtx41NiUnrbP1yFOWl6swAGNC6qIoYmIE1mKdpSM5dgxRpEeqJVaXf2UwGEMkYgPQ_JgNd7ifno-N0PtkFd8Z4OsGT5tsrGfGvus7gFEuITVWYuG1IW0e9yzXIH1O3HsQ17rpCyjr8HAgeuZqn_rGcqAxPQ=w800-h800"
                   ],
        "sortOrder":  59
    },
    {
        "id":  "prod-61",
        "name":  "CASE MICRONICS FURIOUS MIC GC701 CON FUENTE REAL DE 650W ATX.",
        "category":  "Fuente de Poder",
        "price":  230,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "FURIOUS MIC GC701 GABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB (3 FRONTAL, 1 BACK) VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT TOP AND FRONTAL 240 MM, GRAFIC CARD 330 MM.",
        "fullDescription":  "FURIOUS MIC GC701 GABINETE MICRONICS ATX BLACK + PSU 650W REAL, USB 3.0, 4 FAN ARGB (3 FRONTAL, 1 BACK) VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT TOP AND FRONTAL 240 MM, GRAFIC CARD 330 MM.",
        "orderCount":  119,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaJh7xFjZGdqn2cZ1QRpfM9BZTwDeCqbwBIidkHVsufOTx6fqvOuPiZVKn3cnnIXTB3cMySzfjTi-B-Ab30fPMP6rDXxTZQZTkrCzx21ahgME5HiqkcfinvBzoUs-p-CLopDHVhA1FlYMr-rXh6CK8wuZhJOAgcNg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaJh7xFjZGdqn2cZ1QRpfM9BZTwDeCqbwBIidkHVsufOTx6fqvOuPiZVKn3cnnIXTB3cMySzfjTi-B-Ab30fPMP6rDXxTZQZTkrCzx21ahgME5HiqkcfinvBzoUs-p-CLopDHVhA1FlYMr-rXh6CK8wuZhJOAgcNg=w800-h800"
                   ],
        "sortOrder":  60
    },
    {
        "id":  "prod-62",
        "name":  "CASE FALCON ENK 5000 CON 4 FAN GAMER RGB",
        "category":  "Case",
        "price":  105,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE FALCON ENKORE ENC 5000 GABINETE ATX BLACK SIN FUENTE 04 FAN RAINBOW, VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT 240 MM, GRAFIC CARD 300 MM, ESPACIO INFERIOR PARA LA FUENTE",
        "fullDescription":  "CASE FALCON ENKORE ENC 5000 GABINETE ATX BLACK SIN FUENTE 04 FAN RAINBOW, VIDRIO TEMPLADO FRONTAL Y LATERAL, LIQUID COOLING SUPPORT 240 MM, GRAFIC CARD 300 MM, ESPACIO INFERIOR PARA LA FUENTE",
        "orderCount":  118,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZwri801F0HAIQVy5hmkjyQIeuwAb-_HiA3Qcib6LhhJLBjg1_YK3MJLtFVhkQYhuAw_1oulgWbT9bGA_Q67YiCg858M0d7a_tTHTkTPGGN76b7ahiPPvxNIz2a2KXZyvRfIjLflfb9Oo-RajdA5Q-oisUX310=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZwri801F0HAIQVy5hmkjyQIeuwAb-_HiA3Qcib6LhhJLBjg1_YK3MJLtFVhkQYhuAw_1oulgWbT9bGA_Q67YiCg858M0d7a_tTHTkTPGGN76b7ahiPPvxNIz2a2KXZyvRfIjLflfb9Oo-RajdA5Q-oisUX310=w800-h800"
                   ],
        "sortOrder":  61
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZwri801F0HAIQVy5hmkjyQIeuwAb-_HiA3Qcib6LhhJLBjg1_YK3MJLtFVhkQYhuAw_1oulgWbT9bGA_Q67YiCg858M0d7a_tTHTkTPGGN76b7ahiPPvxNIz2a2KXZyvRfIjLflfb9Oo-RajdA5Q-oisUX310=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZwri801F0HAIQVy5hmkjyQIeuwAb-_HiA3Qcib6LhhJLBjg1_YK3MJLtFVhkQYhuAw_1oulgWbT9bGA_Q67YiCg858M0d7a_tTHTkTPGGN76b7ahiPPvxNIz2a2KXZyvRfIjLflfb9Oo-RajdA5Q-oisUX310=w800-h800"
                   ],
        "sortOrder":  62
    },
    {
        "id":  "prod-64",
        "name":  "CASE MICRONICS FANATIC LEGEND FNT 8007",
        "category":  "Case",
        "price":  169,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE MICRONICS FANATIC LEGEND FNT 8007 ATX, Micro-ATX, Mini-ITX CRISTAL TEMPLADO",
        "fullDescription":  "CASE MICRONICS FANATIC LEGEND FNT 8007 ATX, Micro-ATX, Mini-ITX CRISTAL TEMPLADO",
        "orderCount":  116,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYFVwah0XwL07k-70muquVbt0OgDcuPL55E6QC3jPawtRbV2eib34m_wqazaAz3vGVXtzAwxFCNO-h9XQLIurTnt2NV19TiR1QpPMd1MWAvbaxfVnah4bGUSVuxlHCxF5BtTl4DColCdTWgBx3cMIQs2IyUgy-V2g=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYFVwah0XwL07k-70muquVbt0OgDcuPL55E6QC3jPawtRbV2eib34m_wqazaAz3vGVXtzAwxFCNO-h9XQLIurTnt2NV19TiR1QpPMd1MWAvbaxfVnah4bGUSVuxlHCxF5BtTl4DColCdTWgBx3cMIQs2IyUgy-V2g=w800-h800"
                   ],
        "sortOrder":  63
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLavoF8kcqhWi-u4frzbnrB2fS5oKfIjpf8I3cBRRjnojkztft-nxUIqPGHPAT3vsYuhmj27zkphczMvUqLJDA38TwFEOJ57ufZNgfFacOo62_CPUA-8SJGO7Xn1K4-9g-C3cby8pmQDog24Pa_EpOwbdzCxPdImRA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLavoF8kcqhWi-u4frzbnrB2fS5oKfIjpf8I3cBRRjnojkztft-nxUIqPGHPAT3vsYuhmj27zkphczMvUqLJDA38TwFEOJ57ufZNgfFacOo62_CPUA-8SJGO7Xn1K4-9g-C3cby8pmQDog24Pa_EpOwbdzCxPdImRA=w800-h800"
                   ],
        "sortOrder":  64
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZkQ1vMWHgDoiAFF2FrMnJBV-Ir8e-Db08GGCsiJoj1w9eXWZyWfB9bUejmI6dzM6D3nemSR4i1iOtQf9nMVaERFONjhcFy6LE_djynXCoeWJb458gU_TXdRft7VgKgbcu6RRINZ2yKNs3y8wRsxu3vpHOH5ytaKQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZkQ1vMWHgDoiAFF2FrMnJBV-Ir8e-Db08GGCsiJoj1w9eXWZyWfB9bUejmI6dzM6D3nemSR4i1iOtQf9nMVaERFONjhcFy6LE_djynXCoeWJb458gU_TXdRft7VgKgbcu6RRINZ2yKNs3y8wRsxu3vpHOH5ytaKQ=w800-h800"
                   ],
        "sortOrder":  65
    },
    {
        "id":  "prod-67",
        "name":  "CASE CYBERTEL DERBY CBX C1005 SLIM 230W |P8 2 FAN",
        "category":  "Case",
        "price":  115,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE CYBERTEL DERBY C1005 SLIM 230W | P8 2 FAN",
        "fullDescription":  "CASE CYBERTEL DERBY C1005 SLIM 230W | P8 2 FAN",
        "orderCount":  113,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZTPcmnn5g6DY24qeJegK9H1WNqiesQCrXe6KDU-z84M3azCRtBVvFIA6s6RIzZRrSNo6mhagpZh-n9dj359BLm6CbzVSGj_8QO5iTNZZ7QdGOFZJbNe5j0IfXhgqPx8OQXZGtIMOByRTNS2GxzbJzgJOniPeM=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZTPcmnn5g6DY24qeJegK9H1WNqiesQCrXe6KDU-z84M3azCRtBVvFIA6s6RIzZRrSNo6mhagpZh-n9dj359BLm6CbzVSGj_8QO5iTNZZ7QdGOFZJbNe5j0IfXhgqPx8OQXZGtIMOByRTNS2GxzbJzgJOniPeM=w800-h800"
                   ],
        "sortOrder":  66
    },
    {
        "id":  "prod-68",
        "name":  "CASE CYBERTEL EPICO CBX C1000 230W",
        "category":  "Case",
        "price":  127,
        "badge":  "",
        "inStock":  true,
        "description":  "CASE CYBERTEL EPICO CBX C1000 230W",
        "fullDescription":  "CASE CYBERTEL EPICO CBX C1000 230W",
        "orderCount":  112,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  67
    },
    {
        "id":  "prod-69",
        "name":  "PROC. INTEL CORE ULTRA 5 225F LGA 1851",
        "category":  "Procesadores",
        "price":  707,
        "badge":  "",
        "inStock":  true,
        "description":  "PROC. INTEL CORE ULTRA 5 225F LGA 1851",
        "fullDescription":  "PROC. INTEL CORE ULTRA 5 225F LGA 1851",
        "orderCount":  111,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaHdjz09-_cdOOaXRnfXLqGQ-752VkypDVDhu6v_L7eiqxVV4xKa8y4sJp0VjsChTjbaGxjEhZ2ALedK1y_7fMS7C6N4hyxmv3_yWcWMA5VW2lMm_Ygdt_EZ4OuMVYHCHH7UFBN550g0VBWobGiktLixuGHyjkBIw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaHdjz09-_cdOOaXRnfXLqGQ-752VkypDVDhu6v_L7eiqxVV4xKa8y4sJp0VjsChTjbaGxjEhZ2ALedK1y_7fMS7C6N4hyxmv3_yWcWMA5VW2lMm_Ygdt_EZ4OuMVYHCHH7UFBN550g0VBWobGiktLixuGHyjkBIw=w800-h800"
                   ],
        "sortOrder":  68
    },
    {
        "id":  "prod-70",
        "name":  "PROCESADOR CORE I5 12600KF LGA 1700",
        "category":  "Procesadores",
        "price":  799,
        "badge":  "",
        "inStock":  true,
        "description":  "PROCESADOR CORE I5 12600KF LGA 1700",
        "fullDescription":  "PROCESADOR CORE I5 12600KF LGA 1700",
        "orderCount":  110,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYE41oizf-deJz65_Yc2tvOkNFf0vlt5EnMIlXUvoKB7YEd8L5KaiEtKgD6bWteWLggde3d_WCUt7VNrV038E2LgUBlczRZFCtLefg4kV9wXfvM61HRTKctv45wWWR1xo-VHemQChrZ-3PmRcs7ZhybgVsLC3c=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYE41oizf-deJz65_Yc2tvOkNFf0vlt5EnMIlXUvoKB7YEd8L5KaiEtKgD6bWteWLggde3d_WCUt7VNrV038E2LgUBlczRZFCtLefg4kV9wXfvM61HRTKctv45wWWR1xo-VHemQChrZ-3PmRcs7ZhybgVsLC3c=w800-h800"
                   ],
        "sortOrder":  69
    },
    {
        "id":  "prod-71",
        "name":  "Procesador Intel Core i5-12600K LGA1700, 125W, 10 nm. (CON VIDEO)",
        "category":  "Procesadores",
        "price":  905,
        "badge":  "",
        "inStock":  true,
        "description":  "Procesador Intel Core i5-12600K 3.70 / 4.90GHz, 20MB Caché L3, LGA1700, 125W, 10 nm. CON TARJETA DE VIDEO",
        "fullDescription":  "Procesador Intel Core i5-12600K 3.70 / 4.90GHz, 20MB Caché L3, LGA1700, 125W, 10 nm. CON TARJETA DE VIDEO",
        "orderCount":  109,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLar8jIFj3mZkMehoPH59aoyAJoRYnp5z59J5sX01pcoeR3err7L9EtFLHZO1bvfDfEU9-Zqi7agI2XHisp1V-NOnuZctwROxdJqZfqNmiuL3ilJEL9BJKVO5BWzBr8xlOFzUbACZDH0XSdUw5vcvLQo4m7qyYhEVw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLar8jIFj3mZkMehoPH59aoyAJoRYnp5z59J5sX01pcoeR3err7L9EtFLHZO1bvfDfEU9-Zqi7agI2XHisp1V-NOnuZctwROxdJqZfqNmiuL3ilJEL9BJKVO5BWzBr8xlOFzUbACZDH0XSdUw5vcvLQo4m7qyYhEVw=s2048"
                   ],
        "sortOrder":  70
    },
    {
        "id":  "prod-72",
        "name":  "PROCESADOR CORE 10TH GEN CORE I3 - 10100F (LGA1200)",
        "category":  "Procesadores",
        "price":  224,
        "badge":  "",
        "inStock":  true,
        "description":  "PROCESADOR CORE 10TH GEN CORE I3 - 10100F (LGA1200)",
        "fullDescription":  "PROCESADOR CORE 10TH GEN CORE I3 - 10100F (LGA1200)",
        "orderCount":  108,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZnqfQrYSczR5x9w3o4z6hKQpjqR5aTTi6me5adJevtAQ1_73YC88tYouBTeSUyJMeUXDg5M0cpn7LfadvZqBBLr405vgJTrOfQgAhzWTk_My_4MEcjL60lQgfMihRrIRISbgahIm6WQG89Vsthnl5ANYdwP6TAaA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZnqfQrYSczR5x9w3o4z6hKQpjqR5aTTi6me5adJevtAQ1_73YC88tYouBTeSUyJMeUXDg5M0cpn7LfadvZqBBLr405vgJTrOfQgAhzWTk_My_4MEcjL60lQgfMihRrIRISbgahIm6WQG89Vsthnl5ANYdwP6TAaA=s2048"
                   ],
        "sortOrder":  71
    },
    {
        "id":  "prod-73",
        "name":  "PROCESADOR INTEL CORE i5 12400",
        "category":  "Procesadores",
        "price":  766,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Procesador intel core i5 12400 (bx8071512400) 2.5ghz-18mb | LGA 1700",
        "fullDescription":  "Procesador intel core i5 12400 (bx8071512400) 2.5ghz-18mb | LGA 1700",
        "orderCount":  107,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYL9JVfgUf0M0BLwueNhDDL_04yCAk9H_S1cTRwcoC0gS9vjeuqUCJ50iCLSuboFgsEYXwvZTIqmOrJy3pPgO8xeiqRu2x1yEViRQhV05pcFte2PG-ovQTw41OSHQpwrHojC1X6ltHOzK9KXBTbc_AV7QBV729AgQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYL9JVfgUf0M0BLwueNhDDL_04yCAk9H_S1cTRwcoC0gS9vjeuqUCJ50iCLSuboFgsEYXwvZTIqmOrJy3pPgO8xeiqRu2x1yEViRQhV05pcFte2PG-ovQTw41OSHQpwrHojC1X6ltHOzK9KXBTbc_AV7QBV729AgQ=s2048"
                   ],
        "sortOrder":  72
    },
    {
        "id":  "prod-74",
        "name":  "PROCESADOR INTEL CORE i7 14700",
        "category":  "Procesadores",
        "price":  1654,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Intel Core i7-14700 Procesador 20 Núcleos 28 Hilos 5.4GHz LGA1700",
        "fullDescription":  "Intel Core i7-14700 Procesador 20 Núcleos 28 Hilos 5.4GHz LGA1700",
        "orderCount":  106,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaGk63KAycI_7xWBYIZYmpqbJXH0MFeORleOPt-iIC8y348GJQ8eo3l9Pw9bTmN96EURU0R2beDcbNPFUDtb_A7-JX19SSUDLb3Q2VIXj_J2euOPH3zBP093lNV5o74o28rFD6yhHvOAekLP6d70q9OICFx65EeeA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaGk63KAycI_7xWBYIZYmpqbJXH0MFeORleOPt-iIC8y348GJQ8eo3l9Pw9bTmN96EURU0R2beDcbNPFUDtb_A7-JX19SSUDLb3Q2VIXj_J2euOPH3zBP093lNV5o74o28rFD6yhHvOAekLP6d70q9OICFx65EeeA=s2048"
                   ],
        "sortOrder":  73
    },
    {
        "id":  "prod-75",
        "name":  "PROCESADOR INTEL CORE i9 - 14900",
        "category":  "Procesadores",
        "price":  2561,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR INTEL CORE i9-14900, Cache 36 MB, Hasta 5.8 Ghz",
        "fullDescription":  "PROCESADOR INTEL CORE i9-14900, Cache 36 MB, Hasta 5.8 Ghz",
        "orderCount":  105,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaLISHrVzhPsF41WlZnlAlZXkAJktpFxtDpni9b7tooA4-2N_B33ayOzY77tzpg5EBzq0CxlMBEYO0_qcnrLhLQasfgAaR4YaCc6VlVAypMeiGY9e4d8_SGB9yQVIcmF_xPuSctEkty28TI_V7y-aAHejVDOfoO-w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaLISHrVzhPsF41WlZnlAlZXkAJktpFxtDpni9b7tooA4-2N_B33ayOzY77tzpg5EBzq0CxlMBEYO0_qcnrLhLQasfgAaR4YaCc6VlVAypMeiGY9e4d8_SGB9yQVIcmF_xPuSctEkty28TI_V7y-aAHejVDOfoO-w=s2048"
                   ],
        "sortOrder":  74
    },
    {
        "id":  "prod-76",
        "name":  "PROCESADOR INTEL CORE i5 - 10500T OEM",
        "category":  "Procesadores",
        "price":  475,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR INTEL CORE I5 -10500T LGA 1200 10TH GEN OEM",
        "fullDescription":  "PROCESADOR INTEL CORE I5 -10500T LGA 1200 10TH GEN OEM",
        "orderCount":  104,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaLISHrVzhPsF41WlZnlAlZXkAJktpFxtDpni9b7tooA4-2N_B33ayOzY77tzpg5EBzq0CxlMBEYO0_qcnrLhLQasfgAaR4YaCc6VlVAypMeiGY9e4d8_SGB9yQVIcmF_xPuSctEkty28TI_V7y-aAHejVDOfoO-w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaLISHrVzhPsF41WlZnlAlZXkAJktpFxtDpni9b7tooA4-2N_B33ayOzY77tzpg5EBzq0CxlMBEYO0_qcnrLhLQasfgAaR4YaCc6VlVAypMeiGY9e4d8_SGB9yQVIcmF_xPuSctEkty28TI_V7y-aAHejVDOfoO-w=s2048"
                   ],
        "sortOrder":  75
    },
    {
        "id":  "prod-77",
        "name":  "PROCESADOR CORE ULTRA 7 - 270K PLUS LGA1851",
        "category":  "Procesadores",
        "price":  1475,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR INTEL CORE ULTRA 7 270K PLUS",
        "fullDescription":  "PROCESADOR INTEL CORE ULTRA 7 270K PLUS",
        "orderCount":  103,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  76
    },
    {
        "id":  "prod-78",
        "name":  "RYZEN 9 9900X 12 NUCLEOS Y 24 HILOS",
        "category":  "Procesadores",
        "price":  1625,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "RYZEN 9 9900X 12 NUCLEOS Y 24 HILOS AM5",
        "fullDescription":  "RYZEN 9 9900X 12 NUCLEOS Y 24 HILOS AM5",
        "orderCount":  102,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZpfkNbttVtz2BLs6GLIMgjWejEarI2xFbpdkUNX6zGYzrZZvhSinEtOXxr0sY0WwieM4ybKOAajQT2FvYPDTvTmrWiIGcDDTpCh12PM9mXbqBLBIheJYIJp91eZ8ti26D0euwdAl8-mOsh7L6skuY79MTSjaL2Iw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZpfkNbttVtz2BLs6GLIMgjWejEarI2xFbpdkUNX6zGYzrZZvhSinEtOXxr0sY0WwieM4ybKOAajQT2FvYPDTvTmrWiIGcDDTpCh12PM9mXbqBLBIheJYIJp91eZ8ti26D0euwdAl8-mOsh7L6skuY79MTSjaL2Iw=w800-h800"
                   ],
        "sortOrder":  77
    },
    {
        "id":  "prod-79",
        "name":  "Ryzen 5 9600x 6 núcleos y 12 hilos",
        "category":  "Procesadores",
        "price":  750,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Ryzen 5 9600x 6 núcleos y 12 hilos AM5",
        "fullDescription":  "Ryzen 5 9600x 6 núcleos y 12 hilos AM5",
        "orderCount":  101,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbv8SyvZf--eLFahVkoCVng_S4uDBFd1s22nh5mkJgigjIgNtpa34Bx_a04cIv6wWtoqQfG0aw1_e4BtsPaj2bfIeXLnq66W4yXcv1qVf-AIi12GgCd7y-ra6GfI-SKQ_bawSnCmajATtECucZuxetgTHKBWEy9gA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbv8SyvZf--eLFahVkoCVng_S4uDBFd1s22nh5mkJgigjIgNtpa34Bx_a04cIv6wWtoqQfG0aw1_e4BtsPaj2bfIeXLnq66W4yXcv1qVf-AIi12GgCd7y-ra6GfI-SKQ_bawSnCmajATtECucZuxetgTHKBWEy9gA=w800-h800"
                   ],
        "sortOrder":  78
    },
    {
        "id":  "prod-80",
        "name":  "PROC RYZEN 5 8600G",
        "category":  "Procesadores",
        "price":  665,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PROC RYZEN 5 8600G 6 CORE 12 THREAD 5.0 GHZ",
        "fullDescription":  "PROC RYZEN 5 8600G 6 CORE 12 THREAD 5.0 GHZ",
        "orderCount":  100,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa3tH1bV3MRXbU6x3tk27QIDXH75ICx_1UtIfT15mmICB1-d4JvFS7KIUSzfV3VvSgGvqWHZSmUAE8_wYNWF_ZqSrZTSTAzOIY8hlCar6JzFGkD0E1haV75nJ4-9p_JRZVTgDzB3pX9Qn8MW-8UlpAs_sE6OcM=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa3tH1bV3MRXbU6x3tk27QIDXH75ICx_1UtIfT15mmICB1-d4JvFS7KIUSzfV3VvSgGvqWHZSmUAE8_wYNWF_ZqSrZTSTAzOIY8hlCar6JzFGkD0E1haV75nJ4-9p_JRZVTgDzB3pX9Qn8MW-8UlpAs_sE6OcM=w800-h800"
                   ],
        "sortOrder":  79
    },
    {
        "id":  "prod-81",
        "name":  "PROCESADOR RYZEN 5 5500 AM4",
        "category":  "Procesadores",
        "price":  352,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PROCESADOR RYZEN 5 5500 AM4",
        "fullDescription":  "PROCESADOR RYZEN 5 5500 AM4",
        "orderCount":  99,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbfaTjXqGRGKxGU0zQLw5F3urIh8-Fi-bYt4ULXNc5HDMOz3mc86Y3AN4EFhsbkMlz2QMez_DwEDDcorYpp1JjBMp5x4tRAZsHEciZ3G9KNzn86f9hdZj0HuDPevz9A4a2xjpa9c4Wylz7XyYnLLGtXvvoiQdc=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbfaTjXqGRGKxGU0zQLw5F3urIh8-Fi-bYt4ULXNc5HDMOz3mc86Y3AN4EFhsbkMlz2QMez_DwEDDcorYpp1JjBMp5x4tRAZsHEciZ3G9KNzn86f9hdZj0HuDPevz9A4a2xjpa9c4Wylz7XyYnLLGtXvvoiQdc=w800-h800"
                   ],
        "sortOrder":  80
    },
    {
        "id":  "prod-82",
        "name":  "PROCESADOR RYZEN 5 5600GT AM4",
        "category":  "Procesadores",
        "price":  676,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PROCESADOR AMD RYZEN 5 5600GT 3.6GHZ HASTA 4.6GHZ 19MB (100-100001488BOX) AM4, 6 NUCLEOS",
        "fullDescription":  "PROCESADOR AMD RYZEN 5 5600GT 3.6GHZ HASTA 4.6GHZ 19MB (100-100001488BOX) AM4, 6 NUCLEOS",
        "orderCount":  98,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa4TmAYMkHGtoeVjrahjj7VfICKyFXdSQJCtZ-pKw1BjbpTHGZRyse5UV_rv9zqjzXVbKyR_PUhU9qneN2ALI_708yNAW9royxuwvOei5_1y5bl5YMhkh0E-ZgsBFYSiXJJBFyuqakx_vdX0dt_6DP4t-UV16Mm7Q=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa4TmAYMkHGtoeVjrahjj7VfICKyFXdSQJCtZ-pKw1BjbpTHGZRyse5UV_rv9zqjzXVbKyR_PUhU9qneN2ALI_708yNAW9royxuwvOei5_1y5bl5YMhkh0E-ZgsBFYSiXJJBFyuqakx_vdX0dt_6DP4t-UV16Mm7Q=s2048"
                   ],
        "sortOrder":  81
    },
    {
        "id":  "prod-83",
        "name":  "PROCESADOR AMD RYZEN 7 5700G CON GRAFICOS",
        "category":  "Procesadores",
        "price":  775,
        "badge":  "",
        "inStock":  true,
        "description":  "PROCESADOR AMD RYZEN 7 5700G 3.8GHZ HASTA 4.6GHZ 20MB (100-100000263BOX) AM4, 8 NUCLEOS, RADEON GRAPHICS CON GRAFICOS",
        "fullDescription":  "PROCESADOR AMD RYZEN 7 5700G 3.8GHZ HASTA 4.6GHZ 20MB (100-100000263BOX) AM4, 8 NUCLEOS, RADEON GRAPHICS CON GRAFICOS",
        "orderCount":  97,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa4TmAYMkHGtoeVjrahjj7VfICKyFXdSQJCtZ-pKw1BjbpTHGZRyse5UV_rv9zqjzXVbKyR_PUhU9qneN2ALI_708yNAW9royxuwvOei5_1y5bl5YMhkh0E-ZgsBFYSiXJJBFyuqakx_vdX0dt_6DP4t-UV16Mm7Q=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa4TmAYMkHGtoeVjrahjj7VfICKyFXdSQJCtZ-pKw1BjbpTHGZRyse5UV_rv9zqjzXVbKyR_PUhU9qneN2ALI_708yNAW9royxuwvOei5_1y5bl5YMhkh0E-ZgsBFYSiXJJBFyuqakx_vdX0dt_6DP4t-UV16Mm7Q=s2048"
                   ],
        "sortOrder":  82
    },
    {
        "id":  "prod-84",
        "name":  "PROCESADOR RYZEN 5 7600X AM5",
        "category":  "Procesadores",
        "price":  695,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "PROCESADOR RYZEN 5 7600X AM5. 4.7Ghz Hasta 5.3Ghz 6 núcleos y 12",
        "fullDescription":  "PROCESADOR RYZEN 5 7600X AM5. 4.7Ghz Hasta 5.3Ghz 6 núcleos y 12",
        "orderCount":  96,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbxDfa6n9-jKleHwWtNyncY0aLjVW_gPxRmiNiN9xBd1a-02Hvsyw0RgW746NnieoE3RR_tkPTB14sODclmlWg-tzitTS4smsufjn8m28YfSpzJjwhDKcmCkjLz-ofRIigHW19QEpkPbg6KfkgQLCsePxRpmpyd_Q=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbxDfa6n9-jKleHwWtNyncY0aLjVW_gPxRmiNiN9xBd1a-02Hvsyw0RgW746NnieoE3RR_tkPTB14sODclmlWg-tzitTS4smsufjn8m28YfSpzJjwhDKcmCkjLz-ofRIigHW19QEpkPbg6KfkgQLCsePxRpmpyd_Q=w800-h800"
                   ],
        "sortOrder":  83
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLabzzOyRO9HsBILGMLJlgNKONstWSOsOdrqh6CmNoUNelIBE1jV7O6eVepRWicT-dbJ3o1xK8lQYivLQX-hRxLQzO10iagpRlUNFL3bqU0KO2o09irvRzJagz_d_2U83L1s_7H5yBqlTGq3DF2qx41TQRTSBByuTg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLabzzOyRO9HsBILGMLJlgNKONstWSOsOdrqh6CmNoUNelIBE1jV7O6eVepRWicT-dbJ3o1xK8lQYivLQX-hRxLQzO10iagpRlUNFL3bqU0KO2o09irvRzJagz_d_2U83L1s_7H5yBqlTGq3DF2qx41TQRTSBByuTg=w800-h800"
                   ],
        "sortOrder":  84
    },
    {
        "id":  "prod-86",
        "name":  "MEMORIA CORSAIR VENGEANCE DUO 2X8 3600HZ 16GB DDR4 (PC)",
        "category":  "Memoria Ram",
        "price":  604,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA CORSAIR VENGEANCE DUO 2X8 3600HZ 16GB DDR4",
        "fullDescription":  "MEMORIA CORSAIR VENGEANCE DUO 2X8 3600HZ 16GB DDR4",
        "orderCount":  94,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZaqTBUCRkaEuhsb_WZtDTKlzBtWdlgnIXGysu6YGKV1iJIDOvhrOf0_m-ikTlacE1TP5ioSb7YE95-1kCmx3BexcOPbM1ThDG5Hg1JToQUMuZNhr-SplL38GE9rRPJ0wjbCIpJR_wgyCXk0EtstcYurQT2ZscnUA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZaqTBUCRkaEuhsb_WZtDTKlzBtWdlgnIXGysu6YGKV1iJIDOvhrOf0_m-ikTlacE1TP5ioSb7YE95-1kCmx3BexcOPbM1ThDG5Hg1JToQUMuZNhr-SplL38GE9rRPJ0wjbCIpJR_wgyCXk0EtstcYurQT2ZscnUA=w800-h800"
                   ],
        "sortOrder":  85
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLahOeXspvFt-Vanlnlxe0S2-bLjBrE0xc4nF1nmPYCBtxNtW83yJ-fVQnY1kvqSTaji-ldh5rAPKFCg6XHTLVlYzGB_uh0_xXQxcEqT-OboInPRVJVD9bqwlYXuSpJCzSpvNzEF-5p5al6Kn9YN0NHEfpJJ-i1ILQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLahOeXspvFt-Vanlnlxe0S2-bLjBrE0xc4nF1nmPYCBtxNtW83yJ-fVQnY1kvqSTaji-ldh5rAPKFCg6XHTLVlYzGB_uh0_xXQxcEqT-OboInPRVJVD9bqwlYXuSpJCzSpvNzEF-5p5al6Kn9YN0NHEfpJJ-i1ILQ=w800-h800"
                   ],
        "sortOrder":  86
    },
    {
        "id":  "prod-88",
        "name":  "MEMORIA DDR4 RGB LED HP 3600MHZ 8GB (PC)",
        "category":  "Memoria Ram",
        "price":  274,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA DDR4 RGB LED HP 3600MHZ 8GB PC CARCASA DE REFRIGERACION DE METAL CEPILLADO",
        "fullDescription":  "MEMORIA DDR4 RGB LED HP 3600MHZ 8GB PC CARCASA DE REFRIGERACION DE METAL CEPILLADO",
        "orderCount":  92,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbgzfUmKjJGTwVlaUnsipH-coHc0fMhKdKplgKMy2WNjbOequDMUh9t--SL7bHeo5z8o5eTtVg2fzAcnAHA2Bgfo0O3nn69Xdv-7Mq5g00Hrf-c816j8udV9kJNfRbi2ioN0gLjhyQP8-J-tloPXCiv7Wvpl7_y5w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbgzfUmKjJGTwVlaUnsipH-coHc0fMhKdKplgKMy2WNjbOequDMUh9t--SL7bHeo5z8o5eTtVg2fzAcnAHA2Bgfo0O3nn69Xdv-7Mq5g00Hrf-c816j8udV9kJNfRbi2ioN0gLjhyQP8-J-tloPXCiv7Wvpl7_y5w=s2048"
                   ],
        "sortOrder":  87
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbgzfUmKjJGTwVlaUnsipH-coHc0fMhKdKplgKMy2WNjbOequDMUh9t--SL7bHeo5z8o5eTtVg2fzAcnAHA2Bgfo0O3nn69Xdv-7Mq5g00Hrf-c816j8udV9kJNfRbi2ioN0gLjhyQP8-J-tloPXCiv7Wvpl7_y5w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbgzfUmKjJGTwVlaUnsipH-coHc0fMhKdKplgKMy2WNjbOequDMUh9t--SL7bHeo5z8o5eTtVg2fzAcnAHA2Bgfo0O3nn69Xdv-7Mq5g00Hrf-c816j8udV9kJNfRbi2ioN0gLjhyQP8-J-tloPXCiv7Wvpl7_y5w=s2048"
                   ],
        "sortOrder":  88
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZbdRr8mfKnJpZ8WKlDOV7M_2Frrqo6RlPV0GeyInGpXVUDquvIy3LxRUvN_TTwTwgDDGLSaeMQRXNfhAz09b9YhJXNfrBHl2KaqaaO3KlVmeAwc53PQqZM8jRZ6lZEWUxzIAzC389i7OkjGi2_vfJU9alk9pw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZbdRr8mfKnJpZ8WKlDOV7M_2Frrqo6RlPV0GeyInGpXVUDquvIy3LxRUvN_TTwTwgDDGLSaeMQRXNfhAz09b9YhJXNfrBHl2KaqaaO3KlVmeAwc53PQqZM8jRZ6lZEWUxzIAzC389i7OkjGi2_vfJU9alk9pw=s2048"
                   ],
        "sortOrder":  89
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ9IbZZrXQM7SMCAu8NfAaU5DsA5hVOn3DvgmvGmXxm8UKDSJE_iJzpy-fq1oOrjfZmAf22vChNFH2fUARKqsX9O85uoXuuqBlNA3GlF1WK7NpR5MCABtpWrMFos3yc3uzuogJ-om0pHKECtB6V9_E_BXHeyx21VQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ9IbZZrXQM7SMCAu8NfAaU5DsA5hVOn3DvgmvGmXxm8UKDSJE_iJzpy-fq1oOrjfZmAf22vChNFH2fUARKqsX9O85uoXuuqBlNA3GlF1WK7NpR5MCABtpWrMFos3yc3uzuogJ-om0pHKECtB6V9_E_BXHeyx21VQ=s2048"
                   ],
        "sortOrder":  90
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbo4shkzqMvMaWWw3q7TMrz4jdl0uHZXxHp03X6_I911FfC3ildsVguWiSRg2JliwHZ0gCyqMiJnbPTZPjB1G1_yHepWpjw9Y-tdgGsC8DoizzcqCNyjZIGu3yFZ_8Dgjsg2SYrmlx1TmA9HxiuZkm3-PEz7VZJ9A=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbo4shkzqMvMaWWw3q7TMrz4jdl0uHZXxHp03X6_I911FfC3ildsVguWiSRg2JliwHZ0gCyqMiJnbPTZPjB1G1_yHepWpjw9Y-tdgGsC8DoizzcqCNyjZIGu3yFZ_8Dgjsg2SYrmlx1TmA9HxiuZkm3-PEz7VZJ9A=s2048"
                   ],
        "sortOrder":  91
    },
    {
        "id":  "prod-93",
        "name":  "MEMORIA KINGSTON FURY DDR4 DE 16GB BUSS 3200",
        "category":  "Memoria Ram",
        "price":  415,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON FURY BEAST 16GB DDR4 3200 BLACK KF432C16BB1/16 SIN DISIPADOR, ORIGINAL",
        "fullDescription":  "MEMORIA KINGSTON FURY BEAST 16GB DDR4 3200 BLACK KF432C16BB1/16 SIN DISIPADOR, ORIGINAL",
        "orderCount":  87,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY8ZxmduzpKtcRGd24rHPGoRFm27YpitNc7xebh3WcwpP-SKaJCaf3dQafww6OalFgJQGDw-nU6pOskuPcKRC7HBInnmn1b1mIgRUtJ0imzxNg_-oE60nzMiac1CQchQqIA_dJ8Xr6Jxb_vxZQX6K7PREnyDfUNGA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY8ZxmduzpKtcRGd24rHPGoRFm27YpitNc7xebh3WcwpP-SKaJCaf3dQafww6OalFgJQGDw-nU6pOskuPcKRC7HBInnmn1b1mIgRUtJ0imzxNg_-oE60nzMiac1CQchQqIA_dJ8Xr6Jxb_vxZQX6K7PREnyDfUNGA=s2048"
                   ],
        "sortOrder":  92
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa1gZzSjZjcxPHI95MtfYFYNd_spfH2qK4KqsbWcT0ZMAdJxPO9JeUk946P-rQByfRsNmH4eodlmQbm4YBSsRM5Uk6_8NbRb23IX89slNdd5dk6dk8pZ5DEL8P-40Ap0K9IG5MH-AoW_4Abzt7Sem83XQIdNDo=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa1gZzSjZjcxPHI95MtfYFYNd_spfH2qK4KqsbWcT0ZMAdJxPO9JeUk946P-rQByfRsNmH4eodlmQbm4YBSsRM5Uk6_8NbRb23IX89slNdd5dk6dk8pZ5DEL8P-40Ap0K9IG5MH-AoW_4Abzt7Sem83XQIdNDo=s2048"
                   ],
        "sortOrder":  93
    },
    {
        "id":  "prod-95",
        "name":  "MEMORIA KINGSTON FURY DE 16GB DDR5 BUSS 5600",
        "category":  "Memoria Ram",
        "price":  720,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON FURY DE 16GB DDR5 BUSS 5600",
        "fullDescription":  "MEMORIA KINGSTON FURY DE 16GB DDR5 BUSS 5600",
        "orderCount":  85,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa1gZzSjZjcxPHI95MtfYFYNd_spfH2qK4KqsbWcT0ZMAdJxPO9JeUk946P-rQByfRsNmH4eodlmQbm4YBSsRM5Uk6_8NbRb23IX89slNdd5dk6dk8pZ5DEL8P-40Ap0K9IG5MH-AoW_4Abzt7Sem83XQIdNDo=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa1gZzSjZjcxPHI95MtfYFYNd_spfH2qK4KqsbWcT0ZMAdJxPO9JeUk946P-rQByfRsNmH4eodlmQbm4YBSsRM5Uk6_8NbRb23IX89slNdd5dk6dk8pZ5DEL8P-40Ap0K9IG5MH-AoW_4Abzt7Sem83XQIdNDo=s2048"
                   ],
        "sortOrder":  94
    },
    {
        "id":  "prod-96",
        "name":  "MEMORIA KINGSTON DDR4 32GB 3200 MHZ ori (PC )",
        "category":  "Memoria Ram",
        "price":  775,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "MEMORIA KINGSTON DDR4 32GB PARA ( PC )",
        "fullDescription":  "MEMORIA KINGSTON DDR4 32GB PARA ( PC )",
        "orderCount":  84,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  95
    },
    {
        "id":  "prod-97",
        "name":  "MEMORIA OEM LAPTOP 8GB HYNIX DRR4 2400MHZ",
        "category":  "Memoria Ram",
        "price":  160,
        "badge":  "",
        "inStock":  true,
        "description":  "MEMORIA PARA LAPTOP 8GB HYNIX DRR4 2400MHZ",
        "fullDescription":  "MEMORIA PARA LAPTOP 8GB HYNIX DRR4 2400MHZ",
        "orderCount":  83,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZh4d8thqpSfkPsQVPQI8rOZKD7SpdDPB5vh1Z5he5Kj0hVRNjAaAZRaZ-Sgl1ztjyxIF9ZR45EqwiKKrcFp-KRxKxejZWHoD3QxF5VcRbM8jufo2IWHT6sBuNcasc2_xTklATW9-PhYY341auZsumtDz-9I-0JHg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZh4d8thqpSfkPsQVPQI8rOZKD7SpdDPB5vh1Z5he5Kj0hVRNjAaAZRaZ-Sgl1ztjyxIF9ZR45EqwiKKrcFp-KRxKxejZWHoD3QxF5VcRbM8jufo2IWHT6sBuNcasc2_xTklATW9-PhYY341auZsumtDz-9I-0JHg=w800-h800"
                   ],
        "sortOrder":  96
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZk5r4vKCOoxdclzLAYKoPkazqbMZRrGSKUBAsHXY3GJ9VR9hCNeJhmvFouQauTfIfHdpkl9znH3oBFoggkTiNpklT8HSUB6oqWHKI5b5ANgUdXMt6aeJF1LDuHzbPZ28gnqju1bDEnXP8hevIIcbAzs3TCv6J4jw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZk5r4vKCOoxdclzLAYKoPkazqbMZRrGSKUBAsHXY3GJ9VR9hCNeJhmvFouQauTfIfHdpkl9znH3oBFoggkTiNpklT8HSUB6oqWHKI5b5ANgUdXMt6aeJF1LDuHzbPZ28gnqju1bDEnXP8hevIIcbAzs3TCv6J4jw=w800-h800"
                   ],
        "sortOrder":  97
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZjMcbN6dapUFOMAhRXfLycm8bzzYoq23zcHjRtvmxH06N6YzwdhT5sZmly5Kp2U-T4Gf3anKjFo3t7IntJ2zDFJ33aZriaN9Zqs0o5Xxdta3XHB5DmhpTBsmCApnxZHjPU66PPqCanI0ZgizVaBDUaacg_rAhnDw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZjMcbN6dapUFOMAhRXfLycm8bzzYoq23zcHjRtvmxH06N6YzwdhT5sZmly5Kp2U-T4Gf3anKjFo3t7IntJ2zDFJ33aZriaN9Zqs0o5Xxdta3XHB5DmhpTBsmCApnxZHjPU66PPqCanI0ZgizVaBDUaacg_rAhnDw=w800-h800"
                   ],
        "sortOrder":  98
    },
    {
        "id":  "prod-100",
        "name":  "SSD KINGSTON NV3, 500GB, M.2, 2280, NVMe PCIe 4.0 x4",
        "category":  "Almacenamiento",
        "price":  391,
        "badge":  "",
        "inStock":  true,
        "description":  "SSD KINGSTON NV3, 500GB, M.2, 2280, NVMe PCIe 4.0 x4",
        "fullDescription":  "SSD KINGSTON NV3, 500GB, M.2, 2280, NVMe PCIe 4.0 x4",
        "orderCount":  80,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbPk9wmjO0jtxBASEExELyVCJegm07sEpc11yk4U3sK249bMlVkpjvj7Kwba9vz6mEVqhfuG_OyN1q7Pc04PlJEBjVWQXm9q_4_aF7DAM2-85SNCWtFVnZC4fZFWXrVkg0_B2fFfXVoiWwBMnbpzXWsVPjiyCM=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbPk9wmjO0jtxBASEExELyVCJegm07sEpc11yk4U3sK249bMlVkpjvj7Kwba9vz6mEVqhfuG_OyN1q7Pc04PlJEBjVWQXm9q_4_aF7DAM2-85SNCWtFVnZC4fZFWXrVkg0_B2fFfXVoiWwBMnbpzXWsVPjiyCM=w800-h800"
                   ],
        "sortOrder":  99
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ_FN1hoPgvaGkV7xw08e_t5_-MhXwNgkAEvQcTRwWVP8BMb4r1ZayaU3FTFaoHvbPq1i4sOHbAhM9QL7iK5le45O63ds0VjE1Vk2zlN1-ANm9w2k0JVQZPcYuIBGVYLWvVeUUl2vVZ9Hmi1Zbtwosaar3K8FQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ_FN1hoPgvaGkV7xw08e_t5_-MhXwNgkAEvQcTRwWVP8BMb4r1ZayaU3FTFaoHvbPq1i4sOHbAhM9QL7iK5le45O63ds0VjE1Vk2zlN1-ANm9w2k0JVQZPcYuIBGVYLWvVeUUl2vVZ9Hmi1Zbtwosaar3K8FQ=s2048"
                   ],
        "sortOrder":  100
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYkcWssnbHK2UkNfQUzVxfBPiTi4zIG0SX1TjVKPe6CJUCvsyAXtfg7RUwl-rrLNxnb7gGAtuiJdgJlAbt3Q3aCl6dkJd396HSAYKWsb0vKNmH6HCE0fXwupUQkKxT_scz9E8wlAcFuAn3nCxJmeZX5oIb04CHzrw=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYkcWssnbHK2UkNfQUzVxfBPiTi4zIG0SX1TjVKPe6CJUCvsyAXtfg7RUwl-rrLNxnb7gGAtuiJdgJlAbt3Q3aCl6dkJd396HSAYKWsb0vKNmH6HCE0fXwupUQkKxT_scz9E8wlAcFuAn3nCxJmeZX5oIb04CHzrw=s2048"
                   ],
        "sortOrder":  101
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ3aY40YXaSpI9BVF9aDjHDEeLFLN9jJeOkrFa25k9o_3HOCqARIr4d3q8l0CJLT09S7CT_uwUF_TfgIdOQqwWs73Rztm5e3F_O5Vh3PjU2P1ICFIF70x5jTzpjkJk1-Bl61N3ozqxIaS19NAR_3zHhYr8Vgy8=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ3aY40YXaSpI9BVF9aDjHDEeLFLN9jJeOkrFa25k9o_3HOCqARIr4d3q8l0CJLT09S7CT_uwUF_TfgIdOQqwWs73Rztm5e3F_O5Vh3PjU2P1ICFIF70x5jTzpjkJk1-Bl61N3ozqxIaS19NAR_3zHhYr8Vgy8=s2048"
                   ],
        "sortOrder":  102
    },
    {
        "id":  "prod-104",
        "name":  "SSD M.2 ABADDONX 256 GB",
        "category":  "Sillas Gamer",
        "price":  184,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "SSD M.2 ABADDONIX 256GB",
        "fullDescription":  "SSD M.2 ABADDONIX 256GB",
        "orderCount":  76,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ3aY40YXaSpI9BVF9aDjHDEeLFLN9jJeOkrFa25k9o_3HOCqARIr4d3q8l0CJLT09S7CT_uwUF_TfgIdOQqwWs73Rztm5e3F_O5Vh3PjU2P1ICFIF70x5jTzpjkJk1-Bl61N3ozqxIaS19NAR_3zHhYr8Vgy8=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ3aY40YXaSpI9BVF9aDjHDEeLFLN9jJeOkrFa25k9o_3HOCqARIr4d3q8l0CJLT09S7CT_uwUF_TfgIdOQqwWs73Rztm5e3F_O5Vh3PjU2P1ICFIF70x5jTzpjkJk1-Bl61N3ozqxIaS19NAR_3zHhYr8Vgy8=s2048"
                   ],
        "sortOrder":  103
    },
    {
        "id":  "prod-105",
        "name":  "SSD M.2 ABADDONX 512 GB",
        "category":  "Sillas Gamer",
        "price":  294,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "SSD M.2 ABADDONIX 512GB",
        "fullDescription":  "SSD M.2 ABADDONIX 512GB",
        "orderCount":  75,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaQ-NIj2HRC_BIZnguwtAgp9VnAoAGyn737V_QuezgssUjaTXYmAyavvFEHc5hG1dWIZgSkEp5ft71sW-X6IAx47H7qbFOZJHXk0Qg0eucEWY9zg66UsX7eVBiKQQTkDychL7XNo6_SEp8EUSTab6ASdKPjNkHo7Q=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaQ-NIj2HRC_BIZnguwtAgp9VnAoAGyn737V_QuezgssUjaTXYmAyavvFEHc5hG1dWIZgSkEp5ft71sW-X6IAx47H7qbFOZJHXk0Qg0eucEWY9zg66UsX7eVBiKQQTkDychL7XNo6_SEp8EUSTab6ASdKPjNkHo7Q=s2048"
                   ],
        "sortOrder":  104
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaQ-NIj2HRC_BIZnguwtAgp9VnAoAGyn737V_QuezgssUjaTXYmAyavvFEHc5hG1dWIZgSkEp5ft71sW-X6IAx47H7qbFOZJHXk0Qg0eucEWY9zg66UsX7eVBiKQQTkDychL7XNo6_SEp8EUSTab6ASdKPjNkHo7Q=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaQ-NIj2HRC_BIZnguwtAgp9VnAoAGyn737V_QuezgssUjaTXYmAyavvFEHc5hG1dWIZgSkEp5ft71sW-X6IAx47H7qbFOZJHXk0Qg0eucEWY9zg66UsX7eVBiKQQTkDychL7XNo6_SEp8EUSTab6ASdKPjNkHo7Q=s2048"
                   ],
        "sortOrder":  105
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYH34kvhYJ1zRJDGr6ISbcg23YL03H75QyqZIItFBRv31PwmUbCHsT3uxlFpVAhQy39u-El3nDMfULhJPvSqkVTamu7hELlwoixrd6Ey_UIpIBIYt5jANjU6hlBsvT7OENGm3Od3R-DwlDxziX4vVcfDBn5dJhbNg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYH34kvhYJ1zRJDGr6ISbcg23YL03H75QyqZIItFBRv31PwmUbCHsT3uxlFpVAhQy39u-El3nDMfULhJPvSqkVTamu7hELlwoixrd6Ey_UIpIBIYt5jANjU6hlBsvT7OENGm3Od3R-DwlDxziX4vVcfDBn5dJhbNg=s2048"
                   ],
        "sortOrder":  106
    },
    {
        "id":  "prod-108",
        "name":  "SSD ADATA 256GB SATA 2.5 SU650",
        "category":  "Almacenamiento",
        "price":  170,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "DISCO SOLIDO SSD SATA 2.5 ADATA 256GB SU630, UNIDAD DE ALMACENAMIENTO, COMPATIBLE CON LAPTOP Y PC DE ESCRITORIO ( ASU630",
        "fullDescription":  "DISCO SOLIDO SSD SATA 2.5 ADATA 256GB SU630, UNIDAD DE ALMACENAMIENTO, COMPATIBLE CON LAPTOP Y PC DE ESCRITORIO ( ASU630",
        "orderCount":  72,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYH34kvhYJ1zRJDGr6ISbcg23YL03H75QyqZIItFBRv31PwmUbCHsT3uxlFpVAhQy39u-El3nDMfULhJPvSqkVTamu7hELlwoixrd6Ey_UIpIBIYt5jANjU6hlBsvT7OENGm3Od3R-DwlDxziX4vVcfDBn5dJhbNg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYH34kvhYJ1zRJDGr6ISbcg23YL03H75QyqZIItFBRv31PwmUbCHsT3uxlFpVAhQy39u-El3nDMfULhJPvSqkVTamu7hELlwoixrd6Ey_UIpIBIYt5jANjU6hlBsvT7OENGm3Od3R-DwlDxziX4vVcfDBn5dJhbNg=s2048"
                   ],
        "sortOrder":  107
    },
    {
        "id":  "prod-109",
        "name":  "HDD SEAGATE EXOS 10TB",
        "category":  "Almacenamiento",
        "price":  975,
        "badge":  "",
        "inStock":  true,
        "description":  "HDD SEAGATE EXOS 10TB MODEL 7E10",
        "fullDescription":  "HDD SEAGATE EXOS 10TB MODEL 7E10",
        "orderCount":  71,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa2GCuKfMx6NHSQVAxglvbzl8hX2O_rjyhc8oRFh7OaJx_Zs6Ea2a_pWg3kIXA7aVlnpt-HujTW4RHhOcqLqlPQc2YXjb0b9fz0NzJAoQAju2z2GEkrM-gu5ibE63qeGtKdJpndX4X2WMyxSXuORCqyT4uGEWZ_Jg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa2GCuKfMx6NHSQVAxglvbzl8hX2O_rjyhc8oRFh7OaJx_Zs6Ea2a_pWg3kIXA7aVlnpt-HujTW4RHhOcqLqlPQc2YXjb0b9fz0NzJAoQAju2z2GEkrM-gu5ibE63qeGtKdJpndX4X2WMyxSXuORCqyT4uGEWZ_Jg=w800-h800"
                   ],
        "sortOrder":  108
    },
    {
        "id":  "prod-110",
        "name":  "TARJETA GRAF PELAND . GT 730 4GB DDR3",
        "category":  "Tarjetas de Video",
        "price":  290,
        "badge":  "",
        "inStock":  true,
        "description":  "Tarjeta gráfica PELAND GT730 NVIDIA GeForce GT 730, 4 GB DDR3, 128 bits, 700 MHz, Tarjeta de vídeo GPU para PC Gaming, DVI, HDMI, VGA, PCI Express 2.0, Compatible con Dir ( VIENE - CON PERFIL BAJO )",
        "fullDescription":  "Tarjeta gráfica PELAND GT730 NVIDIA GeForce GT 730, 4 GB DDR3, 128 bits, 700 MHz, Tarjeta de vídeo GPU para PC Gaming, DVI, HDMI, VGA, PCI Express 2.0, Compatible con Dir ( VIENE - CON PERFIL BAJO )",
        "orderCount":  70,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZGvGgLKgHG2nVuRD0X75RAVl4jcWiwBFasTHnhZcYWQpfVJP6mKqmqxxF6Mb5LW3umZ3u562kEYJDopaBVVUF8gQLy06CHmrAZLCNW6DjdgJvYsyEoEjj-BnYcCWKx9RSKof8OqE-m3ScJpsr8apf61l6YLDHJgA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZGvGgLKgHG2nVuRD0X75RAVl4jcWiwBFasTHnhZcYWQpfVJP6mKqmqxxF6Mb5LW3umZ3u562kEYJDopaBVVUF8gQLy06CHmrAZLCNW6DjdgJvYsyEoEjj-BnYcCWKx9RSKof8OqE-m3ScJpsr8apf61l6YLDHJgA=s2048"
                   ],
        "sortOrder":  109
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZGvGgLKgHG2nVuRD0X75RAVl4jcWiwBFasTHnhZcYWQpfVJP6mKqmqxxF6Mb5LW3umZ3u562kEYJDopaBVVUF8gQLy06CHmrAZLCNW6DjdgJvYsyEoEjj-BnYcCWKx9RSKof8OqE-m3ScJpsr8apf61l6YLDHJgA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZGvGgLKgHG2nVuRD0X75RAVl4jcWiwBFasTHnhZcYWQpfVJP6mKqmqxxF6Mb5LW3umZ3u562kEYJDopaBVVUF8gQLy06CHmrAZLCNW6DjdgJvYsyEoEjj-BnYcCWKx9RSKof8OqE-m3ScJpsr8apf61l6YLDHJgA=s2048"
                   ],
        "sortOrder":  110
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYi5OJXjzTnLcX29HshyVl-ffkCfuDEmo8vAyEXBr_W9V7dwUy9yVY4oEo-zJVLTcT6KTl5vxuO8F8R57iwltAa9WGD1Qzk90SLKcEwSvaYMC9bkTxv6_xFUB4iPTxPEdvdoBYdAsX7-JVZmJvfdnLzkSMqN54AGg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYi5OJXjzTnLcX29HshyVl-ffkCfuDEmo8vAyEXBr_W9V7dwUy9yVY4oEo-zJVLTcT6KTl5vxuO8F8R57iwltAa9WGD1Qzk90SLKcEwSvaYMC9bkTxv6_xFUB4iPTxPEdvdoBYdAsX7-JVZmJvfdnLzkSMqN54AGg=s2048"
                   ],
        "sortOrder":  111
    },
    {
        "id":  "prod-113",
        "name":  "RX 5500 PELAND 8GD6 Gaming Graphics Card",
        "category":  "Tarjetas de Video",
        "price":  720,
        "badge":  "",
        "inStock":  true,
        "description":  "RX 5500 XT 8GD6 Gaming Graphics Card Product Series RX 5000 Graphics chip Navi 14 Chipset Process 7 nm Base frequency 1717MHz Memory Capacity 8G Memory Type GDDR6 Memory Clock 1750 MHz Bus Width 128 bit",
        "fullDescription":  "RX 5500 XT 8GD6 Gaming Graphics Card Product Series RX 5000 Graphics chip Navi 14 Chipset Process 7 nm Base frequency 1717MHz Memory Capacity 8G Memory Type GDDR6 Memory Clock 1750 MHz Bus Width 128 bit",
        "orderCount":  67,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYE-9Vm1RwMsNFBdU-MOfIdoExPG3u_vyz54ucfMWfJPn61v2Bk7KE1btZcGIDAJhU6NJ14KtWwrbZyzvyiNaUmmC-ZkYSYEzt3ETjWsC2rQO-BE_14KjJjpg5TUYpO1s2TerDDK-W2RYGpZaA4EoEQ9r8LbXk=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYE-9Vm1RwMsNFBdU-MOfIdoExPG3u_vyz54ucfMWfJPn61v2Bk7KE1btZcGIDAJhU6NJ14KtWwrbZyzvyiNaUmmC-ZkYSYEzt3ETjWsC2rQO-BE_14KjJjpg5TUYpO1s2TerDDK-W2RYGpZaA4EoEQ9r8LbXk=s2048"
                   ],
        "sortOrder":  112
    },
    {
        "id":  "prod-114",
        "name":  "TARJETA DE VIDEO TEROS RX 580 8GB GDDR5 ( 256 BIT)",
        "category":  "Tarjetas de Video",
        "price":  615,
        "badge":  "",
        "inStock":  true,
        "description":  "Tarjeta de video TEROS AMD Radeon RX 580 8GB GDDR5, PCI Express Gen 3.0 x16",
        "fullDescription":  "Tarjeta de video TEROS AMD Radeon RX 580 8GB GDDR5, PCI Express Gen 3.0 x16",
        "orderCount":  66,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYVyWTH0XlZX8FnKohnM8rDZze96RgxRaOgXC37Ul3NKBYUGbARshYGNKijjHn-zTY0uvgvotTdkxTtKrxgz_kMGp7NmJ82eP-1znMEv6YmEXiaW-x8GQCc8aqwVzR53Kd11mX2Ef6pKXktJtYXvC-pMZ_E0Uc=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYVyWTH0XlZX8FnKohnM8rDZze96RgxRaOgXC37Ul3NKBYUGbARshYGNKijjHn-zTY0uvgvotTdkxTtKrxgz_kMGp7NmJ82eP-1znMEv6YmEXiaW-x8GQCc8aqwVzR53Kd11mX2Ef6pKXktJtYXvC-pMZ_E0Uc=s2048"
                   ],
        "sortOrder":  113
    },
    {
        "id":  "prod-115",
        "name":  "T. VIDEO ASUS GEFORCE NVIDIA RTX 3050 DUAL 6GB GDDR6",
        "category":  "Tarjetas de Video",
        "price":  925,
        "badge":  "",
        "inStock":  true,
        "description":  "TARJETA DE VIDEO ASUS GEFORCE RTX 3050 DUAL 6GB GDDR6 (90YV0K60-M0AA00) GEFORCE NVIDIA 96 BITS, 2 VENTILADORES",
        "fullDescription":  "TARJETA DE VIDEO ASUS GEFORCE RTX 3050 DUAL 6GB GDDR6 (90YV0K60-M0AA00) GEFORCE NVIDIA 96 BITS, 2 VENTILADORES",
        "orderCount":  65,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaAAxVviudjqUrsuh1o0nBIMJekcf3zer5mkP2rGvQY5u8tUcr-usvxszPcJDltPsaLTjUOjBA1bRoUF3_M1nPpGlcACHZ1ICrIWkK8XzOKforswfFRITvdaxb1YGrlHwIFwXE1S3D7Y4WfYhlu_DleCxkcqxIu2g=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaAAxVviudjqUrsuh1o0nBIMJekcf3zer5mkP2rGvQY5u8tUcr-usvxszPcJDltPsaLTjUOjBA1bRoUF3_M1nPpGlcACHZ1ICrIWkK8XzOKforswfFRITvdaxb1YGrlHwIFwXE1S3D7Y4WfYhlu_DleCxkcqxIu2g=s2048"
                   ],
        "sortOrder":  114
    },
    {
        "id":  "prod-116",
        "name":  "PALIT GEFORCE PALIT RTX 3050 StormX 6GB",
        "category":  "Tarjetas de Video",
        "price":  855,
        "badge":  "",
        "inStock":  true,
        "description":  "VGA PALIT GEFORCE RTX 3050 StormX 6GB GDDR6 1 FANS",
        "fullDescription":  "VGA PALIT GEFORCE RTX 3050 StormX 6GB GDDR6 1 FANS",
        "orderCount":  64,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaAAxVviudjqUrsuh1o0nBIMJekcf3zer5mkP2rGvQY5u8tUcr-usvxszPcJDltPsaLTjUOjBA1bRoUF3_M1nPpGlcACHZ1ICrIWkK8XzOKforswfFRITvdaxb1YGrlHwIFwXE1S3D7Y4WfYhlu_DleCxkcqxIu2g=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaAAxVviudjqUrsuh1o0nBIMJekcf3zer5mkP2rGvQY5u8tUcr-usvxszPcJDltPsaLTjUOjBA1bRoUF3_M1nPpGlcACHZ1ICrIWkK8XzOKforswfFRITvdaxb1YGrlHwIFwXE1S3D7Y4WfYhlu_DleCxkcqxIu2g=s2048"
                   ],
        "sortOrder":  115
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ2mw2dIfI5WTb2lagMsmMs1zTtkhhUijRrZIwrsciDIslMNGoMcf-1PEI0AdFKP0Fb022aXRrEMsKGwUIrcx5G8151YjUHx_9nwiNRDczvq6HLegH6U5aZ1TJSErovPSS7NMOfVMmh0LVFBT_9U1FYQWvp2Wlzkg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ2mw2dIfI5WTb2lagMsmMs1zTtkhhUijRrZIwrsciDIslMNGoMcf-1PEI0AdFKP0Fb022aXRrEMsKGwUIrcx5G8151YjUHx_9nwiNRDczvq6HLegH6U5aZ1TJSErovPSS7NMOfVMmh0LVFBT_9U1FYQWvp2Wlzkg=w800-h800"
                   ],
        "sortOrder":  116
    },
    {
        "id":  "prod-118",
        "name":  "Placa Base MSI B550M PRO-VDH WIFI",
        "category":  "Placas Madres",
        "price":  355,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Placa Base MSI B550M PRO-VDH WIFI - ATX, Soporta 128 GB DDR4, 4400 MHz, HDMI y DisplayPort",
        "fullDescription":  "Placa Base MSI B550M PRO-VDH WIFI - ATX, Soporta 128 GB DDR4, 4400 MHz, HDMI y DisplayPort",
        "orderCount":  62,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa_5Z4PlzWtNcE4fGLfNa8gOEFkMFNkYcpRmLrgh3M7M-jaM2J23TQ-fpwfO8lkQb4gArQMa6xcsHepEpBhDPPdqwcxJhLaqHwD4Sga6m7jpJyVeptxstqEwj_4xSrn1_gsqznk42UAzErdElajgnQl0BxhTis=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa_5Z4PlzWtNcE4fGLfNa8gOEFkMFNkYcpRmLrgh3M7M-jaM2J23TQ-fpwfO8lkQb4gArQMa6xcsHepEpBhDPPdqwcxJhLaqHwD4Sga6m7jpJyVeptxstqEwj_4xSrn1_gsqznk42UAzErdElajgnQl0BxhTis=w800-h800"
                   ],
        "sortOrder":  117
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY_THt_7_-7qR_ArvRRfo8Qd56g3oU9CNew4bRH1JigE2QdZJEHChruobhJMnwel-qUNSBdvanntMh8sBgkjtXiD3naP0Yc97Cxwip4tWcPGfErre87Denf-sk7jjFEUIFcbaGe9_Rdd2Bfw-5q7UeLYEOiFJFoPg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY_THt_7_-7qR_ArvRRfo8Qd56g3oU9CNew4bRH1JigE2QdZJEHChruobhJMnwel-qUNSBdvanntMh8sBgkjtXiD3naP0Yc97Cxwip4tWcPGfErre87Denf-sk7jjFEUIFcbaGe9_Rdd2Bfw-5q7UeLYEOiFJFoPg=s2048"
                   ],
        "sortOrder":  118
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
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  119
    },
    {
        "id":  "prod-121",
        "name":  "PLACA GIGABYTE H610M K DRR4",
        "category":  "Placas Madres",
        "price":  283,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA GIGABYTE H610M K DRR4",
        "fullDescription":  "PLACA GIGABYTE H610M K DRR4",
        "orderCount":  59,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaRnG9z1emxlZ9oQqNQCSX__TLNPuSg_AB2ZagKtGW4kcsnizfc6k_l-ZKED76l2Vwue5MTztrSLhsLwCd4qsKoyXID2yfL-h5UxxwjEAQYD68iLsPK_MbBRLo81IMoZvNvlPevuJzjyRp7dzzayxeQnD_dgUk=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaRnG9z1emxlZ9oQqNQCSX__TLNPuSg_AB2ZagKtGW4kcsnizfc6k_l-ZKED76l2Vwue5MTztrSLhsLwCd4qsKoyXID2yfL-h5UxxwjEAQYD68iLsPK_MbBRLo81IMoZvNvlPevuJzjyRp7dzzayxeQnD_dgUk=w800-h800"
                   ],
        "sortOrder":  120
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZZmP502Yr9J4DQ0iYklumRlebqTolQY4nKLjsZ_CaA-2OmjcOlUAwFKefxO1hu3P6Ftv7AiWUo05YpgEBstClwYGoexkBm4EjPeTwnTWHCfhDePDjgO8zCeXOIbhzyJi3TKD6lk059nWuLqSF6vRL4dAq08Txegw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZZmP502Yr9J4DQ0iYklumRlebqTolQY4nKLjsZ_CaA-2OmjcOlUAwFKefxO1hu3P6Ftv7AiWUo05YpgEBstClwYGoexkBm4EjPeTwnTWHCfhDePDjgO8zCeXOIbhzyJi3TKD6lk059nWuLqSF6vRL4dAq08Txegw=w800-h800"
                   ],
        "sortOrder":  121
    },
    {
        "id":  "prod-123",
        "name":  "Asus H610 DDR5 LGA 1700",
        "category":  "Placas Madres",
        "price":  268,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Asus H610 DDR5 LGA 1700 PARA 12VA,13VA,14VA GEN",
        "fullDescription":  "Asus H610 DDR5 LGA 1700 PARA 12VA,13VA,14VA GEN",
        "orderCount":  57,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbILR931SwU5Y59t6JVCtBXn9rPxYhgcKfUA5hqgib3umYzF0urknsiTBXFfMCHVMvxJ03RrdZ1xejVGxRiwucnjdVTN1JlcCTvfZjZBjbACRwo5Y98rDZxE6PQxFjAvhuTfPl1I-qXwxWjkPNar79aP01BxVID2Q=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbILR931SwU5Y59t6JVCtBXn9rPxYhgcKfUA5hqgib3umYzF0urknsiTBXFfMCHVMvxJ03RrdZ1xejVGxRiwucnjdVTN1JlcCTvfZjZBjbACRwo5Y98rDZxE6PQxFjAvhuTfPl1I-qXwxWjkPNar79aP01BxVID2Q=w800-h800"
                   ],
        "sortOrder":  122
    },
    {
        "id":  "prod-124",
        "name":  "PLACA MADRE H110 WINNFOX DDR4 PARA 6TA A 9NA GEN",
        "category":  "Placas Madres",
        "price":  225,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "PLACA WINNFOX H110 DDR4 LGA 1151 PARA 6TA \u0026 9NA GENERACION",
        "fullDescription":  "PLACA WINNFOX H110 DDR4 LGA 1151 PARA 6TA \u0026 9NA GENERACION",
        "orderCount":  56,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZi_oyi6n4AGrMqKLolb1u6r94H5fpnbT4M3prKaKq3UJHhI6BvZxHttrHpynheb6ZOHiVuiNQGoSDAGMxFlbnyFEKUO9EZk2M_cWzmvM1zZbh3b727n2cCjT4k1f_yXp9d0da4m0ZU-HrtbXMFd0DKoCjYvUBJww=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZi_oyi6n4AGrMqKLolb1u6r94H5fpnbT4M3prKaKq3UJHhI6BvZxHttrHpynheb6ZOHiVuiNQGoSDAGMxFlbnyFEKUO9EZk2M_cWzmvM1zZbh3b727n2cCjT4k1f_yXp9d0da4m0ZU-HrtbXMFd0DKoCjYvUBJww=s2048"
                   ],
        "sortOrder":  123
    },
    {
        "id":  "prod-125",
        "name":  "PLACA ASTROM AST B450-2 DE MICRONICS BY DE 1000 A 5000 MIL",
        "category":  "Placas Madres",
        "price":  190,
        "badge":  "Oferta",
        "inStock":  true,
        "description":  "Procesador B450 -2 DE MICRONICS Socke AMD AM4 Compatible Procesadores: Ryzen 1000 al 5000 DDR4 2 Ranuras Frecuencias 2133 - 2400 - 2666 - 2933 - 3200 MHz Capacidad máxima 64 GB, Puertos 1 HDMI - 1 VGA - 1 RJ-45 - 2 USB 2.0 - 4 USB 3.0. Conectores de Audio: 3 Line IN - Line OUT - MIC IN",
        "fullDescription":  "Procesador B450 -2 DE MICRONICS Socke AMD AM4 Compatible Procesadores: Ryzen 1000 al 5000 DDR4 2 Ranuras Frecuencias 2133 - 2400 - 2666 - 2933 - 3200 MHz Capacidad máxima 64 GB, Puertos 1 HDMI - 1 VGA - 1 RJ-45 - 2 USB 2.0 - 4 USB 3.0. Conectores de Audio: 3 Line IN - Line OUT - MIC IN",
        "orderCount":  55,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYkKY04dwFICwY6ETmNanNrdlfQOG-Tny46wD7NR3Ycm6A0QTPzspVKEMQeR50UMFWL0sYACvXyVihdv9EdPB70cdaxDqR1uqiCk_LZjo8FchxMchg5cKYaNsDSejsuGyM77wzbEMkCwQFu_0-Qe_A_gtMPkMKFqg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYkKY04dwFICwY6ETmNanNrdlfQOG-Tny46wD7NR3Ycm6A0QTPzspVKEMQeR50UMFWL0sYACvXyVihdv9EdPB70cdaxDqR1uqiCk_LZjo8FchxMchg5cKYaNsDSejsuGyM77wzbEMkCwQFu_0-Qe_A_gtMPkMKFqg=s2048"
                   ],
        "sortOrder":  124
    },
    {
        "id":  "prod-126",
        "name":  "PLACA WINNFOX A320 | AM4 | DDR4 | M.2 NVME | USB 3.0 | HDMI-VGA | RYZEN 1RA-3RA GEN",
        "category":  "Procesadores",
        "price":  215,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA WINNFOX A320 | AM4 | DDR4 | M.2 NVME | USB 3.0 | HDMI-VGA | RYZEN 1RA-3RA GEN",
        "fullDescription":  "PLACA WINNFOX A320 | AM4 | DDR4 | M.2 NVME | USB 3.0 | HDMI-VGA | RYZEN 1RA-3RA GEN",
        "orderCount":  54,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZf2uSDTKlTwB4JefxLlwG2l9emVEV9jk-q9sXv2v2DTpId60b438nn9MHEBDZAi2QcMQMf477HFm9kGTzx7Dz1pi6b2Kb81hCu0bYxE5jjR12t2TKKL7-BFwoIxsZiM1i0VFBS33WC4xEHGv4dtIOT1MXnL8UoRg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZf2uSDTKlTwB4JefxLlwG2l9emVEV9jk-q9sXv2v2DTpId60b438nn9MHEBDZAi2QcMQMf477HFm9kGTzx7Dz1pi6b2Kb81hCu0bYxE5jjR12t2TKKL7-BFwoIxsZiM1i0VFBS33WC4xEHGv4dtIOT1MXnL8UoRg=w800-h800"
                   ],
        "sortOrder":  125
    },
    {
        "id":  "prod-127",
        "name":  "PLACA ESONIC H81DA DDR3 LGA 1150 4TA GEN",
        "category":  "Placas Madres",
        "price":  150,
        "badge":  "",
        "inStock":  true,
        "description":  "PLACA ESONIC H81DA DDR3 LGAN 1150 4TA GENERACION SATA /NV ME M.2 SSD",
        "fullDescription":  "PLACA ESONIC H81DA DDR3 LGAN 1150 4TA GENERACION SATA /NV ME M.2 SSD",
        "orderCount":  53,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ7JhGtR4juQmxUPpCBMDgfAy5Tku4M-uuHXVNUvMgvUhRjU31wAgiWITMrcnS0qY3qtsvtm-x_9TfgmqaIiso_TF-I_AABLt2gojZPPc-nCbSKugU-N1AZdOsWkc0AhT08XkVRKhwzDTvlXr6QqF3Zce-mj9I=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ7JhGtR4juQmxUPpCBMDgfAy5Tku4M-uuHXVNUvMgvUhRjU31wAgiWITMrcnS0qY3qtsvtm-x_9TfgmqaIiso_TF-I_AABLt2gojZPPc-nCbSKugU-N1AZdOsWkc0AhT08XkVRKhwzDTvlXr6QqF3Zce-mj9I=s2048"
                   ],
        "sortOrder":  126
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ7JhGtR4juQmxUPpCBMDgfAy5Tku4M-uuHXVNUvMgvUhRjU31wAgiWITMrcnS0qY3qtsvtm-x_9TfgmqaIiso_TF-I_AABLt2gojZPPc-nCbSKugU-N1AZdOsWkc0AhT08XkVRKhwzDTvlXr6QqF3Zce-mj9I=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ7JhGtR4juQmxUPpCBMDgfAy5Tku4M-uuHXVNUvMgvUhRjU31wAgiWITMrcnS0qY3qtsvtm-x_9TfgmqaIiso_TF-I_AABLt2gojZPPc-nCbSKugU-N1AZdOsWkc0AhT08XkVRKhwzDTvlXr6QqF3Zce-mj9I=s2048"
                   ],
        "sortOrder":  127
    },
    {
        "id":  "prod-129",
        "name":  "PLACA HA310DA ESONIC DDR4",
        "category":  "Placas Madres",
        "price":  225,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "H310 Placa base de escritorio Esonic LGA1151 Placa base Matx para Intel 6TA - 7MA- 8VA- 9NA Generación",
        "fullDescription":  "H310 Placa base de escritorio Esonic LGA1151 Placa base Matx para Intel 6TA - 7MA- 8VA- 9NA Generación",
        "orderCount":  51,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  128
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZijwGDggAWY0CmrdNrwrfSOe-v-dhoa_ADvloNevtzVHvFfbifsTB16og0UtQQ7QI2cmAke2Tcg46oszJOFDgYIMcuCTTTpjl2VQFqesV0PQQMb_g2J5stvcK-eJxGgEGW0sPvQI6JWKXrMc1MEw-rtwB81lU=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZijwGDggAWY0CmrdNrwrfSOe-v-dhoa_ADvloNevtzVHvFfbifsTB16og0UtQQ7QI2cmAke2Tcg46oszJOFDgYIMcuCTTTpjl2VQFqesV0PQQMb_g2J5stvcK-eJxGgEGW0sPvQI6JWKXrMc1MEw-rtwB81lU=w800-h800"
                   ],
        "sortOrder":  129
    },
    {
        "id":  "prod-131",
        "name":  "FUENTE DE PODER SEASONIC FOCUS GX-1000W 80 PLUS GOLD ( WHITE )",
        "category":  "Fuente de Poder",
        "price":  524,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER SEASONIC FOCUS GX-1000W 80PLUS GOLD FULL MODULAR SSR-102-A5A32SF Totalmente compatible con ATX 3.1 y PCIe Normas 5.1. Modularidad total para las mejores opciones de gestión de cables. Se agregó un cable 12V-2×6 para cumplir con las nuevas tarjetas gráficas. Cojinete dinámico de fluidos de 135 mm ( FDB ) Ventilador para un funcionamiento silencioso.",
        "fullDescription":  "FUENTE DE PODER SEASONIC FOCUS GX-1000W 80PLUS GOLD FULL MODULAR SSR-102-A5A32SF Totalmente compatible con ATX 3.1 y PCIe Normas 5.1. Modularidad total para las mejores opciones de gestión de cables. Se agregó un cable 12V-2×6 para cumplir con las nuevas tarjetas gráficas. Cojinete dinámico de fluidos de 135 mm ( FDB ) Ventilador para un funcionamiento silencioso.",
        "orderCount":  49,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbDVusX_sz76X6qqW__o94HQZ436SpsO1AHgSJ1d9yQGk36puAcfiKNUA5Q5owHSchR6Klc7L5OHBT0eRWgg7B2tt31UsHpBR4KnK_b9uuKireSwOPXR02Q9JkeRQCDz7AARsFFdkNzSsA3-_zSCyKotfRDCVij_A=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbDVusX_sz76X6qqW__o94HQZ436SpsO1AHgSJ1d9yQGk36puAcfiKNUA5Q5owHSchR6Klc7L5OHBT0eRWgg7B2tt31UsHpBR4KnK_b9uuKireSwOPXR02Q9JkeRQCDz7AARsFFdkNzSsA3-_zSCyKotfRDCVij_A=s2048"
                   ],
        "sortOrder":  130
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb3sWHb627TUVXzoT7QMtVWFQyLoDB9kouVto2fYrqNAuQmDXyleVbMNUl1F5qerhqLo_E69y-V99TcwhCwm-5QeoEuhuanI1p75qnWAkiGErpXzYX4FBXEmh2pTbPcPbUj8u-cIHitQgzlQQR7HCv3GG3RXIPrRQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb3sWHb627TUVXzoT7QMtVWFQyLoDB9kouVto2fYrqNAuQmDXyleVbMNUl1F5qerhqLo_E69y-V99TcwhCwm-5QeoEuhuanI1p75qnWAkiGErpXzYX4FBXEmh2pTbPcPbUj8u-cIHitQgzlQQR7HCv3GG3RXIPrRQ=s2048"
                   ],
        "sortOrder":  131
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb3sWHb627TUVXzoT7QMtVWFQyLoDB9kouVto2fYrqNAuQmDXyleVbMNUl1F5qerhqLo_E69y-V99TcwhCwm-5QeoEuhuanI1p75qnWAkiGErpXzYX4FBXEmh2pTbPcPbUj8u-cIHitQgzlQQR7HCv3GG3RXIPrRQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb3sWHb627TUVXzoT7QMtVWFQyLoDB9kouVto2fYrqNAuQmDXyleVbMNUl1F5qerhqLo_E69y-V99TcwhCwm-5QeoEuhuanI1p75qnWAkiGErpXzYX4FBXEmh2pTbPcPbUj8u-cIHitQgzlQQR7HCv3GG3RXIPrRQ=s2048"
                   ],
        "sortOrder":  132
    },
    {
        "id":  "prod-134",
        "name":  "Fuente De Poder Corsair Cv450 450w 80 Plus Bronze",
        "category":  "Fuente de Poder",
        "price":  110,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "Fuente De Poder Corsair Cv450 450w 80 Plus Bronze",
        "fullDescription":  "Fuente De Poder Corsair Cv450 450w 80 Plus Bronze",
        "orderCount":  46,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbx38e9DJ1OI6f_9TumuS4uzz2b70aplE_euv2OH_Ii5I5TKOKcK90hTEdmNTRygguG1CBNdhSFr5T6Xl1rRnMxjKMjq5mV8Mo9P829WbI6OGnrDIS6Rka2vx_zLEEH5Os7X2LsKDUeQ_ZB3Hr9PPgT0KVcgjB5kg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbx38e9DJ1OI6f_9TumuS4uzz2b70aplE_euv2OH_Ii5I5TKOKcK90hTEdmNTRygguG1CBNdhSFr5T6Xl1rRnMxjKMjq5mV8Mo9P829WbI6OGnrDIS6Rka2vx_zLEEH5Os7X2LsKDUeQ_ZB3Hr9PPgT0KVcgjB5kg=s2048"
                   ],
        "sortOrder":  133
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbJoJVuL7BSwAnLA7knFiFY7gApjscY2BYWHb3M_SNGJ8KRGwosUqX33MGLav7LL4t70aswVXi0Exuw9SuWfxttdY64rDlFrGGzhWMPQI3VZtgFT7BIMvysQAoqUmza4_FazFnCokW_oxoRpeg7dtDDcA5ccUQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbJoJVuL7BSwAnLA7knFiFY7gApjscY2BYWHb3M_SNGJ8KRGwosUqX33MGLav7LL4t70aswVXi0Exuw9SuWfxttdY64rDlFrGGzhWMPQI3VZtgFT7BIMvysQAoqUmza4_FazFnCokW_oxoRpeg7dtDDcA5ccUQ=w800-h800"
                   ],
        "sortOrder":  134
    },
    {
        "id":  "prod-136",
        "name":  "FUENTE XPG PYLON 650W 80 PLUS BRONZE",
        "category":  "Fuente de Poder",
        "price":  224,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE XPG PYLON 650W 80PLUS BRONCE PYLON",
        "fullDescription":  "FUENTE XPG PYLON 650W 80PLUS BRONCE PYLON",
        "orderCount":  44,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZdbtGPgKepd_1l3FxSgavP7taON6tqApgif_JmdGO-shDy1JzHlnIxbfmqLjdFBQS_cHttjkZDuODThXeLSsE5Qg1mAMOwTzff8IhDUrNcbmb5v3o46OHBkk7B5nyF4RpRnYNKcQP5I-BNeV-_uUyasF0xavs=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZdbtGPgKepd_1l3FxSgavP7taON6tqApgif_JmdGO-shDy1JzHlnIxbfmqLjdFBQS_cHttjkZDuODThXeLSsE5Qg1mAMOwTzff8IhDUrNcbmb5v3o46OHBkk7B5nyF4RpRnYNKcQP5I-BNeV-_uUyasF0xavs=w800-h800"
                   ],
        "sortOrder":  135
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbOTMYsQS_OYbNk9BslT6dX8BRXqVhkE67vMT2Mk2RayVY4_YhVJbvIxe3GqWDwjgy7RNfopGuDGGx18c87wfU7bghybgQeWRMLyrGK0sTRwvpqK2qzj_qBysN0xciS_GTz2jlIXeGMNJPGboEHLIUtOlqAFPY=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbOTMYsQS_OYbNk9BslT6dX8BRXqVhkE67vMT2Mk2RayVY4_YhVJbvIxe3GqWDwjgy7RNfopGuDGGx18c87wfU7bghybgQeWRMLyrGK0sTRwvpqK2qzj_qBysN0xciS_GTz2jlIXeGMNJPGboEHLIUtOlqAFPY=s2048"
                   ],
        "sortOrder":  136
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbcqn_-BPmBP-HjlSMCsaFkZYPJVPaCc44f8rqCU_ZYPasgnJBn7DpRRX5oE6Q0MZkPWfhddn8s_qML__csRlfCK0E1jmQaSL6kxa0yREInh16tOXnIzXGWGiebHbrBgfoFYhULP35wWaMhNhpRbceaWEGisuOebQ=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbcqn_-BPmBP-HjlSMCsaFkZYPJVPaCc44f8rqCU_ZYPasgnJBn7DpRRX5oE6Q0MZkPWfhddn8s_qML__csRlfCK0E1jmQaSL6kxa0yREInh16tOXnIzXGWGiebHbrBgfoFYhULP35wWaMhNhpRbceaWEGisuOebQ=s2048"
                   ],
        "sortOrder":  137
    },
    {
        "id":  "prod-139",
        "name":  "FUENTE MICRONICS GAMER MACHINE 80 PLUS BRONZE 650w",
        "category":  "Fuente de Poder",
        "price":  150,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE MICRONICS GAMER MACHINE 80 PLUS BRONZE Fuente de poder de 650w. APFC (Active Power Factor Controller). Cable de alimentación incluido. Conectores con cables planos 1 Ventilador de 12 cm 1 Conector ATX 20 + 4 pines / Cable plano de 680 mm 2 Conector P8 (4 + 4) pines / Longitudes: 830 mm - 690 mm",
        "fullDescription":  "FUENTE MICRONICS GAMER MACHINE 80 PLUS BRONZE Fuente de poder de 650w. APFC (Active Power Factor Controller). Cable de alimentación incluido. Conectores con cables planos 1 Ventilador de 12 cm 1 Conector ATX 20 + 4 pines / Cable plano de 680 mm 2 Conector P8 (4 + 4) pines / Longitudes: 830 mm - 690 mm",
        "orderCount":  41,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ-Tz_oPOFj_VppFoLoG7JGtclgFH3R9caxJDkb7MUVgQDgvF9USbdigG2pN1jyhnSU016k6la3UKDsbAzCWMNyH8rKkzJT-O85Fmu9fGicGKsKA4BNns1HXIE83GS_4HlVv1Udfj_2gYC-eq2BTzsNDC_3CS0=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ-Tz_oPOFj_VppFoLoG7JGtclgFH3R9caxJDkb7MUVgQDgvF9USbdigG2pN1jyhnSU016k6la3UKDsbAzCWMNyH8rKkzJT-O85Fmu9fGicGKsKA4BNns1HXIE83GS_4HlVv1Udfj_2gYC-eq2BTzsNDC_3CS0=s2048"
                   ],
        "sortOrder":  138
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ-Tz_oPOFj_VppFoLoG7JGtclgFH3R9caxJDkb7MUVgQDgvF9USbdigG2pN1jyhnSU016k6la3UKDsbAzCWMNyH8rKkzJT-O85Fmu9fGicGKsKA4BNns1HXIE83GS_4HlVv1Udfj_2gYC-eq2BTzsNDC_3CS0=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ-Tz_oPOFj_VppFoLoG7JGtclgFH3R9caxJDkb7MUVgQDgvF9USbdigG2pN1jyhnSU016k6la3UKDsbAzCWMNyH8rKkzJT-O85Fmu9fGicGKsKA4BNns1HXIE83GS_4HlVv1Udfj_2gYC-eq2BTzsNDC_3CS0=s2048"
                   ],
        "sortOrder":  139
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYL6jAHIK2QYW92NxFE3TM7o1wdROm4So_0yMTASa9-ldZ97H_P8rbOPgKe0sWCPZXQIz1g8on5dJIk-X_mdXLpO7z_huF_Wb8TV8EYK4CY_8BXuPgKfyGr_wS4acYqr1MeFP-PZAI0ibLUNIUI4KY5u51tFKR3Pg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYL6jAHIK2QYW92NxFE3TM7o1wdROm4So_0yMTASa9-ldZ97H_P8rbOPgKe0sWCPZXQIz1g8on5dJIk-X_mdXLpO7z_huF_Wb8TV8EYK4CY_8BXuPgKfyGr_wS4acYqr1MeFP-PZAI0ibLUNIUI4KY5u51tFKR3Pg=s2048"
                   ],
        "sortOrder":  140
    },
    {
        "id":  "prod-142",
        "name":  "FUENTE MSI MAG 650W 80 PLUS BROZE",
        "category":  "Fuente de Poder",
        "price":  171,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER MSI MAG A650W 80 PLUS BRONZE CERTIFICADA",
        "fullDescription":  "FUENTE DE PODER MSI MAG A650W 80 PLUS BRONZE CERTIFICADA",
        "orderCount":  38,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbdLLv1NQYQID03lWOT3_s7Ol3YLs-UvkBQMkB-MLEFhnv8kEm958OoWam6Qhzs7ISOsU4AeMQt8Ptz3VFL61mUbg1Glns8PuX2y03PTWYoPdHU7zzkPVZnG1s_ZyQxuehJlLKbbQffZMc56ItfdcrxWAThiQ9vdA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbdLLv1NQYQID03lWOT3_s7Ol3YLs-UvkBQMkB-MLEFhnv8kEm958OoWam6Qhzs7ISOsU4AeMQt8Ptz3VFL61mUbg1Glns8PuX2y03PTWYoPdHU7zzkPVZnG1s_ZyQxuehJlLKbbQffZMc56ItfdcrxWAThiQ9vdA=w800-h800"
                   ],
        "sortOrder":  141
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaPB60p8GRjcp9NM-4rV4VZraswAquQThdhQZaSgy0kfgwLDKXn0rUQupO4wpStA9_3h9M88W7maC5BhYJn4dtcA-kHc6ESJIiEyOUS1lfpxsMNW5VsaXOWXPR8KNsP0r9UcmtCtdXdeCNCllG_2gPBI_1nDME=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaPB60p8GRjcp9NM-4rV4VZraswAquQThdhQZaSgy0kfgwLDKXn0rUQupO4wpStA9_3h9M88W7maC5BhYJn4dtcA-kHc6ESJIiEyOUS1lfpxsMNW5VsaXOWXPR8KNsP0r9UcmtCtdXdeCNCllG_2gPBI_1nDME=w800-h800"
                   ],
        "sortOrder":  142
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
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  143
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbma_gnWxPoCMo4WviHIzJTo64BZt7wDLBwOefALaV20VBS0xfjtMC32LYjOqqus4JSbdsLcLWg0oU-NMSElbhzLaQbTR6DP67PnbBgOMW5i71ZE1HBnNcQs--lPA2zPps2ToCg4prYMxktnvEWal-VaGyduGMq0w=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbma_gnWxPoCMo4WviHIzJTo64BZt7wDLBwOefALaV20VBS0xfjtMC32LYjOqqus4JSbdsLcLWg0oU-NMSElbhzLaQbTR6DP67PnbBgOMW5i71ZE1HBnNcQs--lPA2zPps2ToCg4prYMxktnvEWal-VaGyduGMq0w=w800-h800"
                   ],
        "sortOrder":  144
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbXbZqRpYmbI0HidDRUB5T9wuAnvVYHLJaFHm8WKpPk6UxJhe0IbZ5boZX3WrjGyZie7bN_QhytGnFu6KenOQZD7m2VWjVpF5ydKdsnLExd87KzVAOxqCGNlh0nAJqs5OHIDeJ4VwZrrXSt7XA52LJkINxwjfX2ig=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbXbZqRpYmbI0HidDRUB5T9wuAnvVYHLJaFHm8WKpPk6UxJhe0IbZ5boZX3WrjGyZie7bN_QhytGnFu6KenOQZD7m2VWjVpF5ydKdsnLExd87KzVAOxqCGNlh0nAJqs5OHIDeJ4VwZrrXSt7XA52LJkINxwjfX2ig=w800-h800"
                   ],
        "sortOrder":  145
    },
    {
        "id":  "prod-147",
        "name":  "FUENTE ROG GAMING X GX850 80 PLUS 850 BRONZE",
        "category":  "Fuente de Poder",
        "price":  211,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER ROG GAMING X GX850 80+ BRONZE CON CONECTOR PCI E GEN5",
        "fullDescription":  "FUENTE DE PODER ROG GAMING X GX850 80+ BRONZE CON CONECTOR PCI E GEN5",
        "orderCount":  33,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaPXnycnwV0f_WUVplfqUJQqA0NY_wX-TMF0deII3rCSOqoxJSprur1_N65QkeAdbCu1NHmVfzJ9peYOM4uODaBkXeu_zfjbTrGdJ_IR87JSTC760hezLwF2NpnIK_letIzxCttZhMmTm-AG-KmdRM0GYNymrXocA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaPXnycnwV0f_WUVplfqUJQqA0NY_wX-TMF0deII3rCSOqoxJSprur1_N65QkeAdbCu1NHmVfzJ9peYOM4uODaBkXeu_zfjbTrGdJ_IR87JSTC760hezLwF2NpnIK_letIzxCttZhMmTm-AG-KmdRM0GYNymrXocA=w800-h800"
                   ],
        "sortOrder":  146
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaeU-cJBI8enmwyG79atradnL_KFwXaWHPqm13lOTjpw6eV_SCswty108h4KzN4u4TUmLqRwp-k2RH0JKcTvowAynv-tVbIPukSmNXTOk9PCWXZNyplytCDsGt5yperCL9ZfPH6dBNBHfuACQlzwYyLEkLxfrs2xg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaeU-cJBI8enmwyG79atradnL_KFwXaWHPqm13lOTjpw6eV_SCswty108h4KzN4u4TUmLqRwp-k2RH0JKcTvowAynv-tVbIPukSmNXTOk9PCWXZNyplytCDsGt5yperCL9ZfPH6dBNBHfuACQlzwYyLEkLxfrs2xg=w800-h800"
                   ],
        "sortOrder":  147
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYQgw8fCqmDLUG86DZdKrY145vz8OO9iSPheyHj6ebpoiFm_QD7dJSE0cDl3PGenOdEch_LvcDt3DgUVOFGMQxPKxSq3how0m88HsPe7SjYo9y-5eDiUVe3uL3EAlPnVgX0HrvsvdwdJKnA3Denh4CjekxCIo-Yew=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYQgw8fCqmDLUG86DZdKrY145vz8OO9iSPheyHj6ebpoiFm_QD7dJSE0cDl3PGenOdEch_LvcDt3DgUVOFGMQxPKxSq3how0m88HsPe7SjYo9y-5eDiUVe3uL3EAlPnVgX0HrvsvdwdJKnA3Denh4CjekxCIo-Yew=s2048"
                   ],
        "sortOrder":  148
    },
    {
        "id":  "prod-150",
        "name":  "FUENTE PODER ATX 250W MICRONICS LONG CABLE",
        "category":  "Fuente de Poder",
        "price":  69,
        "badge":  "",
        "inStock":  true,
        "description":  "FUENTE DE PODER MICRONINC 250W 1 Ventilador de 12 cm 1 Conector ATX 20 + 4 pines / Cable LARGO PLANO de 580 mm 1 Conector P8 (4 + 4) pines / Longitudes: 610 mm 1 conectores ATA / IDE (535 mm) 3 conectores SATA (805 mm - 72 mm - 580mm) Disipador grande",
        "fullDescription":  "FUENTE DE PODER MICRONINC 250W 1 Ventilador de 12 cm 1 Conector ATX 20 + 4 pines / Cable LARGO PLANO de 580 mm 1 Conector P8 (4 + 4) pines / Longitudes: 610 mm 1 conectores ATA / IDE (535 mm) 3 conectores SATA (805 mm - 72 mm - 580mm) Disipador grande",
        "orderCount":  30,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYQgw8fCqmDLUG86DZdKrY145vz8OO9iSPheyHj6ebpoiFm_QD7dJSE0cDl3PGenOdEch_LvcDt3DgUVOFGMQxPKxSq3how0m88HsPe7SjYo9y-5eDiUVe3uL3EAlPnVgX0HrvsvdwdJKnA3Denh4CjekxCIo-Yew=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYQgw8fCqmDLUG86DZdKrY145vz8OO9iSPheyHj6ebpoiFm_QD7dJSE0cDl3PGenOdEch_LvcDt3DgUVOFGMQxPKxSq3how0m88HsPe7SjYo9y-5eDiUVe3uL3EAlPnVgX0HrvsvdwdJKnA3Denh4CjekxCIo-Yew=s2048"
                   ],
        "sortOrder":  149
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY17hBnZgJH0wYhrKcWRx7A1cvkJdIPXgDz8vG-pQPeksmK763rbu8rSqmj36utjuNF3f1weu87JsN7kvS3Jma9fBDhS94Gv26VxaTmAUL6HYOmZL7nQuXCyGa-tLJIAvsH7XYubbmumAUfy_6D2DhGlW0tL9n4JQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY17hBnZgJH0wYhrKcWRx7A1cvkJdIPXgDz8vG-pQPeksmK763rbu8rSqmj36utjuNF3f1weu87JsN7kvS3Jma9fBDhS94Gv26VxaTmAUL6HYOmZL7nQuXCyGa-tLJIAvsH7XYubbmumAUfy_6D2DhGlW0tL9n4JQ=w800-h800"
                   ],
        "sortOrder":  150
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLauXx7Xbw2TixYu7CcWXBsP0KbrINC_Dd4pbYEuBWDwAbuhldkpcm70gVhMEXGPSmmD5Z1K3h4DDHL1zW3hVYZMwukIly91Tqb4ALP9eXtLcf1_PQVXwRcxTNVRy9S97-W6yfq-Rs85xXx0yZCi-VFeUa4vtZw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLauXx7Xbw2TixYu7CcWXBsP0KbrINC_Dd4pbYEuBWDwAbuhldkpcm70gVhMEXGPSmmD5Z1K3h4DDHL1zW3hVYZMwukIly91Tqb4ALP9eXtLcf1_PQVXwRcxTNVRy9S97-W6yfq-Rs85xXx0yZCi-VFeUa4vtZw=w800-h800"
                   ],
        "sortOrder":  151
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
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  152
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaUNglv1lLqNFdjuOBTYt6D2XSrSwfnBNnDG0XZ_ILYCGfV-b9yBqSFGOYVtVQOe1o5TRjB9PT0dVuieOieV2iFaRBxISvCxZTwz1dU88eS3Dv_UDZHKs4rHdBNJT0JcYEgGIFuD9RACbE19_6-pgpkNA_xtGeABQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaUNglv1lLqNFdjuOBTYt6D2XSrSwfnBNnDG0XZ_ILYCGfV-b9yBqSFGOYVtVQOe1o5TRjB9PT0dVuieOieV2iFaRBxISvCxZTwz1dU88eS3Dv_UDZHKs4rHdBNJT0JcYEgGIFuD9RACbE19_6-pgpkNA_xtGeABQ=w800-h800"
                   ],
        "sortOrder":  153
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLaiTKbfQad8kFfJJSgL2a3F5cc1D_UZ4jIJqNQ_rSy5bQ-T7r1pwSp-oxrIiCOBzBpVSzPFXOGQR9ZIYkEmLOITtYJUqq89GXkEXTRoVZAGUzLbqeCMRGYyoqadxlDggKs5jq8i9CzpCI_UMwWA3DQOxhIY61ET0A=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLaiTKbfQad8kFfJJSgL2a3F5cc1D_UZ4jIJqNQ_rSy5bQ-T7r1pwSp-oxrIiCOBzBpVSzPFXOGQR9ZIYkEmLOITtYJUqq89GXkEXTRoVZAGUzLbqeCMRGYyoqadxlDggKs5jq8i9CzpCI_UMwWA3DQOxhIY61ET0A=w800-h800"
                   ],
        "sortOrder":  154
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLY5ZVEuRXPALnyGGpdapM5SGcdVs0hVgFH3MMYMzvTUSwaOsjfUr1IJdwS1KG_MtHFCochOsrOdc6lDT2AFbPftzrM6QqpVYekF_J36qWhNLRKHqF72QbykE7vQ9z1WAlaM-Ya6kpn-QsPNEemPl1JqBgIvoqv2uw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLY5ZVEuRXPALnyGGpdapM5SGcdVs0hVgFH3MMYMzvTUSwaOsjfUr1IJdwS1KG_MtHFCochOsrOdc6lDT2AFbPftzrM6QqpVYekF_J36qWhNLRKHqF72QbykE7vQ9z1WAlaM-Ya6kpn-QsPNEemPl1JqBgIvoqv2uw=w800-h800"
                   ],
        "sortOrder":  155
    },
    {
        "id":  "prod-157",
        "name":  "FUENTE DE PODER ABKO COREMAX CM-700B BLACK 700W BRONZE",
        "category":  "Fuente de Poder",
        "price":  134,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE DE PODER ABKO COREMAX CM-700B BLACK 700W CYBENETICS 230EU BRONZE (PN:CM-700B)",
        "fullDescription":  "FUENTE DE PODER ABKO COREMAX CM-700B BLACK 700W CYBENETICS 230EU BRONZE (PN:CM-700B)",
        "orderCount":  23,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLb0TXw8TomEk3aXNKw55mOH1-2v0uoGKjGxPEMRTqChCyq4Ql6a5K-uKofuiS6vEBetUmprJvX4xDmKOQ-jjOvPrxt9I2k9UvFVn4A_2_2Nizkn8plcUZp3y9wbl4ogrdZ5CbZA9ubjnjPRYaMf75Q7X8wp8vr4rg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLb0TXw8TomEk3aXNKw55mOH1-2v0uoGKjGxPEMRTqChCyq4Ql6a5K-uKofuiS6vEBetUmprJvX4xDmKOQ-jjOvPrxt9I2k9UvFVn4A_2_2Nizkn8plcUZp3y9wbl4ogrdZ5CbZA9ubjnjPRYaMf75Q7X8wp8vr4rg=s2048"
                   ],
        "sortOrder":  156
    },
    {
        "id":  "prod-158",
        "name":  "FUENTE 800W ABKO SETTLER HYBRID PCIE5.1 BRONZE 800W",
        "category":  "Fuente de Poder",
        "price":  164,
        "badge":  "Nuevo Ingreso",
        "inStock":  true,
        "description":  "FUENTE 800W ABKO SETTLER HYBRID PCIE5.1 BRONZE 800W WHITE PCIE5.1 STH-800B",
        "fullDescription":  "FUENTE 800W ABKO SETTLER HYBRID PCIE5.1 BRONZE 800W WHITE PCIE5.1 STH-800B",
        "orderCount":  22,
        "image":  "assets/images/logo.jpg",
        "images":  [
                       "assets/images/logo.jpg"
                   ],
        "sortOrder":  157
    },
    {
        "id":  "prod-159",
        "name":  "PARLANTE INALAMBRICO TEROS 6045",
        "category":  "Periféricos",
        "price":  179,
        "badge":  "",
        "inStock":  true,
        "description":  "PARLANTE INALAMBRICO TEROS 6045N LUCES LED, RESISTENTE AL AGUA 60W",
        "fullDescription":  "PARLANTE INALAMBRICO TEROS 6045N LUCES LED, RESISTENTE AL AGUA 60W",
        "orderCount":  21,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbC6nB0zBV9YeSBKywPm2dcQFS2de7cVtWXehdrm4EWiOnE0AQ3jIdd357W46uyekB7IjKDqvYgks6JoAN3RlgEauAKsjWfEd1Juc2MOavWSB6t4MBL1miDUUif2r9dhHr24oByRseOsz4nfgpKiNk85g_Oxu1Oiw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbC6nB0zBV9YeSBKywPm2dcQFS2de7cVtWXehdrm4EWiOnE0AQ3jIdd357W46uyekB7IjKDqvYgks6JoAN3RlgEauAKsjWfEd1Juc2MOavWSB6t4MBL1miDUUif2r9dhHr24oByRseOsz4nfgpKiNk85g_Oxu1Oiw=w800-h800"
                   ],
        "sortOrder":  158
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZtT37Xt-j5OnHYPe8i0F0v8WjVptrypJXuITX1p1sBYUX2kDL9bAeKZaI_79XbZZVGNgZmR8MY7mZPokqrJpQtfHtOmChIXuN21vxng_DMfD9tPPYocXxeTHSVeXLUjkyWa3FHYCGNUTG6yp0YCmYAPT5PrsraXw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZtT37Xt-j5OnHYPe8i0F0v8WjVptrypJXuITX1p1sBYUX2kDL9bAeKZaI_79XbZZVGNgZmR8MY7mZPokqrJpQtfHtOmChIXuN21vxng_DMfD9tPPYocXxeTHSVeXLUjkyWa3FHYCGNUTG6yp0YCmYAPT5PrsraXw=w800-h800"
                   ],
        "sortOrder":  159
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa2M-BzMGSAoEo2e8RsI4iX_d4ikUNOCW2W4BgUPhJNdIN8YgfCPM_g2dyhvY_CZOsgm1A1wGGbpovCHpDj0lLohwKTTi-vm-yyC756HyK7j6R3q-UwkSWJiZgQhGvXIRHO-j9yzKk4yLSH8YB-xLnbnQIRYVwzmw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa2M-BzMGSAoEo2e8RsI4iX_d4ikUNOCW2W4BgUPhJNdIN8YgfCPM_g2dyhvY_CZOsgm1A1wGGbpovCHpDj0lLohwKTTi-vm-yyC756HyK7j6R3q-UwkSWJiZgQhGvXIRHO-j9yzKk4yLSH8YB-xLnbnQIRYVwzmw=w800-h800"
                   ],
        "sortOrder":  160
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbGHtaP1UNWu6JFEabtr4kzaeacIpZ5nt2L3pVOj-gUqDbUCXEtX8I9rhi2OkcpcWnGFH1Nu3BQdEjPOo48X74JUSgIFLw8oBedu_KjHCOynTnhklsP3lv2IdyqLCubnF37u6xKRQeMUSb4KiWRxf50fhKLfa0Ajg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbGHtaP1UNWu6JFEabtr4kzaeacIpZ5nt2L3pVOj-gUqDbUCXEtX8I9rhi2OkcpcWnGFH1Nu3BQdEjPOo48X74JUSgIFLw8oBedu_KjHCOynTnhklsP3lv2IdyqLCubnF37u6xKRQeMUSb4KiWRxf50fhKLfa0Ajg=w800-h800"
                   ],
        "sortOrder":  161
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZvVW-zpmk_XrMVnYAH89SCjn2O2QEcyD0LMLCyTnfGbicmWvwVAdIBO2njPBXbv5V_VMYGujBG3ycqM_0zLpahzTrf20-dtr5Ip-_U7AJXayLKgBY9yqk_9o7ZMytK4XptLfF630nPvC391ULbTnvLsmcxveobxw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZvVW-zpmk_XrMVnYAH89SCjn2O2QEcyD0LMLCyTnfGbicmWvwVAdIBO2njPBXbv5V_VMYGujBG3ycqM_0zLpahzTrf20-dtr5Ip-_U7AJXayLKgBY9yqk_9o7ZMytK4XptLfF630nPvC391ULbTnvLsmcxveobxw=w800-h800"
                   ],
        "sortOrder":  162
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZ1eOQnUJ-GltCUHLQTTNMSFdZUX9WNTskuLJEyPvZ0uh1QfkTBOpqqOPjDkIa02n8_wkjF0iZ3KFXz1qqTYo0UnJIb3618Cc8Xw9j1B_awWN0352FeSvBLiCr1PjGJzecFnjx5g_0YWotVhX6R-GXCPRi5qklNiA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZ1eOQnUJ-GltCUHLQTTNMSFdZUX9WNTskuLJEyPvZ0uh1QfkTBOpqqOPjDkIa02n8_wkjF0iZ3KFXz1qqTYo0UnJIb3618Cc8Xw9j1B_awWN0352FeSvBLiCr1PjGJzecFnjx5g_0YWotVhX6R-GXCPRi5qklNiA=w800-h800"
                   ],
        "sortOrder":  163
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZh10cnUoSSBDwKJIAcMA3KOeJqnkHVK1rT0rJ4sB5o-sFtBxv4lNm7DI3G-8Py9ZtZ1v5irQoSWCwbjHdhhirpBKoQLoLfxQ9aY9fCfyf8zbizxcrm0Y9bi4P44VdZIf_J94kaWcifBh209gzHuWepyOm4dOp2rA=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZh10cnUoSSBDwKJIAcMA3KOeJqnkHVK1rT0rJ4sB5o-sFtBxv4lNm7DI3G-8Py9ZtZ1v5irQoSWCwbjHdhhirpBKoQLoLfxQ9aY9fCfyf8zbizxcrm0Y9bi4P44VdZIf_J94kaWcifBh209gzHuWepyOm4dOp2rA=w800-h800"
                   ],
        "sortOrder":  164
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbPXIK-tlfhh8mD6eEpEf4z1hbgXh_yMMMd2l1tT41f2XEUsqxBO2gH464ibhAUBIM3KOcB1pxIpuw0RfexuuJZ88xZ5DkMfcgoav2eI8bl9zOvghcdqCVO4ouAMcJwb70sHe__gXSvd39m1tytytPR79yto81YgQ=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbPXIK-tlfhh8mD6eEpEf4z1hbgXh_yMMMd2l1tT41f2XEUsqxBO2gH464ibhAUBIM3KOcB1pxIpuw0RfexuuJZ88xZ5DkMfcgoav2eI8bl9zOvghcdqCVO4ouAMcJwb70sHe__gXSvd39m1tytytPR79yto81YgQ=w800-h800"
                   ],
        "sortOrder":  165
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbw44Q4lcuyU8LlgmQHy9fD9gybArJOuNbosmccTC-sb51FO7X8JPgHI5hkdPJH2sem4o0VqOj_UMizEJizVUz3oFIvjjVq2CDqstDq0nU1CWIStkxFVvsFPYu0bRSY34u6OoRJW2TtcYWuIn97a42i7jc953oaAw=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbw44Q4lcuyU8LlgmQHy9fD9gybArJOuNbosmccTC-sb51FO7X8JPgHI5hkdPJH2sem4o0VqOj_UMizEJizVUz3oFIvjjVq2CDqstDq0nU1CWIStkxFVvsFPYu0bRSY34u6OoRJW2TtcYWuIn97a42i7jc953oaAw=w800-h800"
                   ],
        "sortOrder":  166
    },
    {
        "id":  "prod-168",
        "name":  "COMBO GAMER 3 EN 1 MICRONICS GAMER MACHINE MIRAGE BLACK RGB GTX2003-3K",
        "category":  "Periféricos",
        "price":  164,
        "badge":  "",
        "inStock":  true,
        "description":  "COMBO GAMER 4 EN 1 MICRONICS GAMER MACHINE MIRAGE BLACK RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "fullDescription":  "COMBO GAMER 4 EN 1 MICRONICS GAMER MACHINE MIRAGE BLACK RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "orderCount":  12,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLbsczzvpFLTl9iFq7PpNQg_qMd6eY93qqdsuEn6ULT3JT-dthKfP39L6JpZe4sUY7jSoU2jNJp8J52KulGJU8SRpuQreCPRy7DuCC4ZTWhJJQU7rOk1a8fJSFG2wWafxbCnP6cxXKxivjxH-kNrHLGOoyPJq64=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLbsczzvpFLTl9iFq7PpNQg_qMd6eY93qqdsuEn6ULT3JT-dthKfP39L6JpZe4sUY7jSoU2jNJp8J52KulGJU8SRpuQreCPRy7DuCC4ZTWhJJQU7rOk1a8fJSFG2wWafxbCnP6cxXKxivjxH-kNrHLGOoyPJq64=s2048"
                   ],
        "sortOrder":  167
    },
    {
        "id":  "prod-169",
        "name":  "COMBO GAMER 4 EN 1 MICRONICS GAMER MACHINE MIRAGE WHITE RGB",
        "category":  "Periféricos",
        "price":  170,
        "badge":  "",
        "inStock":  true,
        "description":  "COMBO GAMER 4 EN 1 MICRONICS GAMER MACHINE MIRAGE WHITE RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "fullDescription":  "COMBO GAMER 4 EN 1 MICRONICS GAMER MACHINE MIRAGE WHITE RGB ( AUDIFONO, TECLADO, MOUSE, PAD MOUSE)",
        "orderCount":  11,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYlsC9IMNyPIiraQ3YxE6KBJcL0Or4vWh6HsnCRZkuhBsxa_iCV9nhCQlF2n_7yL29g3EJxvfRfhMxJ1_BTZq0e-763JNJ76FBOs9aEAAle3mw3gnutXnw2EvgvZXyojafyd2n-dVKaPhIFYaHxaqg8a8ThBbSA2Q=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYlsC9IMNyPIiraQ3YxE6KBJcL0Or4vWh6HsnCRZkuhBsxa_iCV9nhCQlF2n_7yL29g3EJxvfRfhMxJ1_BTZq0e-763JNJ76FBOs9aEAAle3mw3gnutXnw2EvgvZXyojafyd2n-dVKaPhIFYaHxaqg8a8ThBbSA2Q=s2048"
                   ],
        "sortOrder":  168
    },
    {
        "id":  "prod-170",
        "name":  "KIT 4 EN 1 TEROS TE-5014S RGB ( AUDIFONO, MOUSE, PAD MOUSE, TECLADO )",
        "category":  "Periféricos",
        "price":  84,
        "badge":  "",
        "inStock":  true,
        "description":  "KIT 4 EN 1 TEROS TE-5014S RGB ( AUDIFONO, MOUSE, PAD MOUSE, TECLADO )",
        "fullDescription":  "KIT 4 EN 1 TEROS TE-5014S RGB ( AUDIFONO, MOUSE, PAD MOUSE, TECLADO )",
        "orderCount":  10,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLZNUxwusxPT4jlCiLht9W0NoMjO6cerOehGFTp_SjDwWJj3_uY1rgXzQmZwu_ylYR_R5hImi3BbWkE3-ceziAiKkvNI61hgN4tYSoj3Jlr9O_dtBLa5_FViY6QIcHEZwpF7g2Na1T5cuPLAo9JKOLhm9sqmtIujXA=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLZNUxwusxPT4jlCiLht9W0NoMjO6cerOehGFTp_SjDwWJj3_uY1rgXzQmZwu_ylYR_R5hImi3BbWkE3-ceziAiKkvNI61hgN4tYSoj3Jlr9O_dtBLa5_FViY6QIcHEZwpF7g2Na1T5cuPLAo9JKOLhm9sqmtIujXA=s2048"
                   ],
        "sortOrder":  169
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLa0Hm22MgsJZGIEoUuVCbBsvQ-6eVa-G5mAm8KbCyLK47igUKZ6EXyQAwTmyZoa8Ol1XxRfNsKwGM89Tj52P8RJw6vXuHI-FuOHksTJ3t0z7m_MiP2RaAp_sI4HM-VhfBw2uxFcWc7SInyNmay1gJbl69-EgzJA6w=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLa0Hm22MgsJZGIEoUuVCbBsvQ-6eVa-G5mAm8KbCyLK47igUKZ6EXyQAwTmyZoa8Ol1XxRfNsKwGM89Tj52P8RJw6vXuHI-FuOHksTJ3t0z7m_MiP2RaAp_sI4HM-VhfBw2uxFcWc7SInyNmay1gJbl69-EgzJA6w=s2048"
                   ],
        "sortOrder":  170
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYnhy98gEFVX0Pf9oa3jm0-UlGvHfHJPAnV16WFL1_LiLv73DpIW0NHmmm91iEHC6oIqu-1KWUo3SxqZia7Uk9hTVvIhgYECTvWDsK7ry3eL_3Ked5dCv4W9-2xSI5OuLvuuQDc8pZFjc3IXQvtvo8sO5q_3Vy7fg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYnhy98gEFVX0Pf9oa3jm0-UlGvHfHJPAnV16WFL1_LiLv73DpIW0NHmmm91iEHC6oIqu-1KWUo3SxqZia7Uk9hTVvIhgYECTvWDsK7ry3eL_3Ked5dCv4W9-2xSI5OuLvuuQDc8pZFjc3IXQvtvo8sO5q_3Vy7fg=s2048"
                   ],
        "sortOrder":  171
    },
    {
        "id":  "prod-173",
        "name":  "PASTA TERMICA Z10 DEEPCOOL",
        "category":  "Periféricos",
        "price":  55,
        "badge":  "",
        "inStock":  true,
        "description":  "PASTA TERMICA Z10 DEEPCOOL El valor térmico principal de la pasta térmica DeepCool Z10 es una conductividad de 6,5 W/m·K y una impedancia de 0,08 °C·cm²/W",
        "fullDescription":  "PASTA TERMICA Z10 DEEPCOOL El valor térmico principal de la pasta térmica DeepCool Z10 es una conductividad de 6,5 W/m·K y una impedancia de 0,08 °C·cm²/W",
        "orderCount":  7,
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLYnhy98gEFVX0Pf9oa3jm0-UlGvHfHJPAnV16WFL1_LiLv73DpIW0NHmmm91iEHC6oIqu-1KWUo3SxqZia7Uk9hTVvIhgYECTvWDsK7ry3eL_3Ked5dCv4W9-2xSI5OuLvuuQDc8pZFjc3IXQvtvo8sO5q_3Vy7fg=s2048",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLYnhy98gEFVX0Pf9oa3jm0-UlGvHfHJPAnV16WFL1_LiLv73DpIW0NHmmm91iEHC6oIqu-1KWUo3SxqZia7Uk9hTVvIhgYECTvWDsK7ry3eL_3Ked5dCv4W9-2xSI5OuLvuuQDc8pZFjc3IXQvtvo8sO5q_3Vy7fg=s2048"
                   ],
        "sortOrder":  172
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
        "image":  "https://docs.google.com/sheets-images-rt/AO43MLblnxJIgRTy5dL1zvXs9X5tmlv5z7-_46CTY652hDKov34wFoYReNye2d5GEEG0wusV8gzSUKUwrou5HKldcNbJ5rgJtMQjOguX_CtE9hnNgvPO3NvMSDWHDim0P300uyPcHPu2JBz-M_GqJW33n5XTMyIFMHlkSg=w800-h800",
        "images":  [
                       "https://docs.google.com/sheets-images-rt/AO43MLblnxJIgRTy5dL1zvXs9X5tmlv5z7-_46CTY652hDKov34wFoYReNye2d5GEEG0wusV8gzSUKUwrou5HKldcNbJ5rgJtMQjOguX_CtE9hnNgvPO3NvMSDWHDim0P300uyPcHPu2JBz-M_GqJW33n5XTMyIFMHlkSg=w800-h800"
                   ],
        "sortOrder":  173
    }
]
;

// Exportar datos a window para su uso en la app
window.STORE_DATA = {
    OFFICIAL_CATEGORIES,
    PAYMENT_METHODS,
    DEFAULT_CONFIG,
    DEFAULT_PRODUCTS
};