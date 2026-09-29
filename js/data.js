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

// Catálogo de productos oficial de Tecnosistemas MDOS
const DEFAULT_PRODUCTS = [
    {
        id: "prod-1",
        name: "Procesador AMD Ryzen 7 5700X 3.4GHz 8 Cores / 16 Hilos AM4",
        category: "Procesadores",
        description: "Arquitectura Zen 3 de alto rendimiento para gaming competitivo y creación de contenido.",
        fullDescription: "Procesador desbloqueado para overclocking con 32MB de caché L3, socket AM4. Rendimiento brutal para tareas pesadas y streaming.",
        price: 720.00,
        badge: "Más Pedido",
        inStock: true,
        orderCount: 18,
        image: "assets/images/logo.jpg",
        images: [
            "assets/images/logo.jpg",
            "assets/images/header-banner.jpg",
            "assets/images/logo.jpg",
            "assets/images/header-banner.jpg"
        ]
    },
    {
        id: "prod-2",
        name: "Procesador Intel Core i5-12400F 2.5GHz a 4.4GHz LGA1700 (OEM)",
        category: "Procesadores OEM",
        description: "6 núcleos / 12 hilos, ideal para ensambles gamer de alto costo-beneficio.",
        fullDescription: "Versión OEM certificada de alta fiabilidad. Requiere tarjeta gráfica dedicada. Compatible con chipsets Intel serie 600 y 700.",
        price: 490.00,
        badge: "Económico",
        inStock: true,
        orderCount: 15,
        image: "assets/images/logo.jpg",
        images: [
            "assets/images/logo.jpg"
        ]
    },
    {
        id: "prod-3",
        name: "Tarjeta de Video ASUS Dual GeForce RTX 4060 8GB GDDR6",
        category: "Tarjetas de Video",
        description: "Ray Tracing, DLSS 3, ventiladores Axial-tech y placa trasera protectora.",
        fullDescription: "Juega en 1080p y 1440p con los ajustes al máximo con tecnología de generación de fotogramas por IA DLSS 3 y refrigeración silenciosa.",
        price: 1390.00,
        badge: "Top Ventas",
        inStock: true,
        orderCount: 12,
        image: "assets/images/header-banner.jpg",
        images: [
            "assets/images/header-banner.jpg",
            "assets/images/logo.jpg",
            "assets/images/header-banner.jpg",
            "assets/images/logo.jpg"
        ]
    },
    {
        id: "prod-4",
        name: "Memoria RAM Corsair Vengeance RGB RS 16GB (2x8GB) DDR4 3200MHz",
        category: "Memoria Ram",
        description: "Disipador de aluminio negro con iluminación RGB direccionable por software.",
        fullDescription: "Módulos optimizados para placas base Intel y AMD con perfil XMP 2.0 para máxima estabilidad y velocidades ultra rápidas.",
        price: 185.00,
        badge: "Recomendado",
        inStock: true,
        orderCount: 14,
        image: "assets/images/logo.jpg"
    },
    {
        id: "prod-5",
        name: "Disco Sólido SSD NVMe Kingston NV2 1TB M.2 PCIe 4.0",
        category: "Almacenamiento",
        description: "Lectura hasta 3500MB/s y escritura 2100MB/s. Carga instantánea de Windows y juegos.",
        fullDescription: "Unidad SSD de alta velocidad con factor de forma M.2 2280. Ideal para laptops ultradelgadas y PCs de alto desempeño.",
        price: 260.00,
        badge: "Indispensable",
        inStock: true,
        orderCount: 22,
        image: "assets/images/logo.jpg"
    },
    {
        id: "prod-6",
        name: "Placa Madre MSI B550M PRO-VDH WIFI Socket AM4",
        category: "Placas Madres",
        description: "Wi-Fi y Bluetooth integrado, PCIe 4.0, dual M.2 y soporte hasta 128GB RAM.",
        fullDescription: "Placa base micro-ATX de alta calidad para procesadores AMD Ryzen serie 3000, 4000 y 5000. Disipador térmico robusto.",
        price: 430.00,
        badge: "Con Wi-Fi",
        inStock: true,
        orderCount: 9,
        image: "assets/images/header-banner.jpg"
    },
    {
        id: "prod-7",
        name: "Fuente de Poder Corsair CV650 650W 80 Plus Bronze",
        category: "Fuente de Poder",
        description: "Eficiencia certificada 80+ Bronze, ventilador de 120mm con control térmico.",
        fullDescription: "Suministro de energía continuo y fiable para tarjetas gráficas de gama media y alta. Cableado mallado en color negro.",
        price: 245.00,
        badge: "Garantía Oficial",
        inStock: true,
        orderCount: 8,
        image: "assets/images/logo.jpg"
    },
    {
        id: "prod-8",
        name: "Case Gamer Antryx FX-850 Black con 4 Ventiladores ARGB",
        category: "Case",
        description: "Panel frontal mallado de alto flujo de aire y panel lateral de vidrio templado.",
        fullDescription: "Chasis espacioso compatible con placas ATX y Micro-ATX, soporte para refrigeración líquida de 240mm y 360mm, e iluminación ARGB sincronizable.",
        price: 215.00,
        badge: "Flujo Óptimo",
        inStock: true,
        orderCount: 7,
        image: "assets/images/header-banner.jpg"
    },
    {
        id: "prod-9",
        name: "Refrigeración Líquida DeepCool LE520 240mm ARGB",
        category: "Refrigeración",
        description: "Bomba silenciosa con tecnología antifugas y 2 ventiladores PWM de alto flujo.",
        fullDescription: "Mantiene tu procesador Intel o AMD en temperaturas óptimas incluso en sesiones intensas de juego o renderizado.",
        price: 280.00,
        badge: "Silencioso",
        inStock: true,
        orderCount: 6,
        image: "assets/images/header-banner.jpg"
    },
    {
        id: "prod-10",
        name: "Monitor Gamer AOC 24 Pulgadas IPS 165Hz 1ms Full HD FreeSync",
        category: "Monitores",
        description: "Panel IPS sin bordes, 165Hz de tasa de refresco, HDMI y DisplayPort.",
        fullDescription: "Fluidez absoluta en juegos competitivos. Colores nítidos y ángulos de visión de 178°. Soporte ajustable en inclinación.",
        price: 520.00,
        badge: "165Hz Gamer",
        inStock: true,
        orderCount: 11,
        image: "assets/images/header-banner.jpg"
    },
    {
        id: "prod-11",
        name: "Laptop Lenovo IdeaPad 3 15.6\" FHD Ryzen 5 5500U 16GB RAM 512GB SSD",
        category: "Laptop",
        description: "Pantalla antirreflejo, teclado numérico en español y batería de larga duración.",
        fullDescription: "Excelente laptop para trabajo de oficina, programación, estudios universitarios y diseño ligero. Incluye cargador original y garantía.",
        price: 1890.00,
        badge: "Laptop Pro",
        inStock: true,
        orderCount: 5,
        image: "assets/images/header-banner.jpg"
    },
    {
        id: "prod-12",
        name: "Combo Gamer Teclado Mecánico + Mouse RGB Redragon S101",
        category: "Periféricos",
        description: "Teclado mecánico con switches táctiles, mouse de 3200 DPI y cable trenzado.",
        fullDescription: "Kit gamer completo y resistente para largas sesiones de juego o trabajo diario. Iluminación RGB personalizable.",
        price: 135.00,
        badge: "Combo Gamer",
        inStock: true,
        orderCount: 10,
        image: "assets/images/logo.jpg"
    },
    {
        id: "prod-13",
        name: "Estabilizador Sólido Forza FVR-1202USB 1200VA / 600W 8 Tomas",
        category: "Estabilizadores / UPS",
        description: "Protección contra sobretensiones y picos de voltaje con puertos USB de carga.",
        fullDescription: "Protege tu computadora, monitor y equipos electrónicos contra fluctuaciones eléctricas de la red domiciliaria. 8 tomas de corriente protegidas.",
        price: 75.00,
        badge: "Protección Total",
        inStock: true,
        orderCount: 13,
        image: "assets/images/logo.jpg"
    }
];

window.STORE_DATA = {
    DEFAULT_CONFIG,
    DEFAULT_PRODUCTS,
    OFFICIAL_CATEGORIES,
    PAYMENT_METHODS
};
