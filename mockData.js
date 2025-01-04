const PRODUCT_CATEGORIES = [
    { id: 'fruits', name: 'Frutas e Verduras' },
    { id: 'bakery', name: 'Padaria' },
    { id: 'dairy', name: 'Laticínios' },
    { id: 'meat', name: 'Carnes' },
    { id: 'drinks', name: 'Bebidas' },
    { id: 'cleaning', name: 'Limpeza' },
    { id: 'grains', name: 'Grãos e Cereais' }
];

const mockProducts = [
    {
        id: 1,
        name: "Banana Prata",
        description: "Banana prata fresca e madura",
        price: 5.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Banana",
        category: "fruits",
        stock: 100
    },
    {
        id: 2,
        name: "Maçã Fuji",
        description: "Maçã fuji fresca e suculenta",
        price: 8.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Maca",
        category: "fruits",
        stock: 150
    },
    {
        id: 3,
        name: "Pão Francês",
        description: "Pão francês fresquinho",
        price: 0.50,
        imageUrl: "https://via.placeholder.com/200x200?text=Pao",
        category: "bakery",
        stock: 200
    },
    {
        id: 4,
        name: "Leite Integral",
        description: "Leite integral 1L",
        price: 4.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Leite",
        category: "dairy",
        stock: 80
    },
    {
        id: 5,
        name: "Arroz Integral",
        description: "Arroz integral 1kg",
        price: 6.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Arroz",
        category: "grains",
        stock: 120
    },
    {
        id: 6,
        name: "Feijão Carioca",
        description: "Feijão carioca 1kg",
        price: 7.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Feijao",
        category: "grains",
        stock: 90
    },
    {
        id: 7,
        name: "Contra Filé",
        description: "Contra filé bovino (kg)",
        price: 49.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Carne",
        category: "meat",
        stock: 50
    },
    {
        id: 8,
        name: "Água Sanitária",
        description: "Água sanitária 2L",
        price: 8.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Limpeza",
        category: "cleaning",
        stock: 70
    },
    {
        id: 9,
        name: "Refrigerante Cola",
        description: "Refrigerante cola 2L",
        price: 7.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Refrigerante",
        category: "drinks",
        stock: 100
    }
];

const mockDailyOffers = [
    {
        id: 10,
        name: "Cerveja Pilsen",
        description: "Pack com 12 latas",
        price: 36.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Cerveja",
        category: "drinks",
        discount: 0.2,
        stock: 60
    },
    {
        id: 11,
        name: "Detergente",
        description: "Detergente líquido 500ml",
        price: 2.99,
        imageUrl: "https://via.placeholder.com/200x200?text=Detergente",
        category: "cleaning",
        discount: 0.15,
        stock: 110
    }
];

const mockStores = [
    {
        id: 1,
        name: "Loja Centro",
        address: "Rua Principal, 123",
        city: "São Paulo",
        state: "SP",
        coordinates: { lat: -23.5505, lng: -46.6333 }
    },
    {
        id: 2,
        name: "Loja Zona Sul",
        address: "Av. Santo Amaro, 456",
        city: "São Paulo",
        state: "SP",
        coordinates: { lat: -23.6182, lng: -46.6395 }
    }
];
