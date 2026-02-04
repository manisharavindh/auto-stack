export interface Car {
    id: string;
    name: string;
    year: number;
    price: string;
    kms: string;
    fuelType: string;
    exteriorColor?: string;
    interiorColor?: string;
    engine?: string;
    bhp?: number;
    torque?: number;
    imageUrl: string;
    galleryInstructions?: string[]; // Placeholder for gallery images
}

export const inventoryCars: Car[] = [
    {
        id: "1",
        name: "Lamborghini Huracan",
        year: 2022,
        price: "₹ 3.50 Cr",
        kms: "2,500 km",
        fuelType: "Petrol",
        exteriorColor: "Verde Mantis",
        interiorColor: "Nero Ade",
        engine: "5.2L V10",
        bhp: 631,
        torque: 600,
        imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "2",
        name: "Ferrari 488 GTB",
        year: 2021,
        price: "₹ 3.25 Cr",
        kms: "4,200 km",
        fuelType: "Petrol",
        exteriorColor: "Rosso Corsa",
        interiorColor: "Beige Tradizione",
        engine: "3.9L Twin-Turbo V8",
        bhp: 660,
        torque: 760,
        imageUrl: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "3",
        name: "Porsche 911 GT3",
        year: 2023,
        price: "₹ 2.75 Cr",
        kms: "1,100 km",
        fuelType: "Petrol",
        exteriorColor: "Shark Blue",
        interiorColor: "Black Race-Tex",
        engine: "4.0L Flat-6",
        bhp: 502,
        torque: 469,
        imageUrl: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        name: "Audi R8 V10",
        year: 2020,
        price: "₹ 1.85 Cr",
        kms: "9,000 km",
        fuelType: "Petrol",
        exteriorColor: "Kemora Gray",
        interiorColor: "Express Red",
        engine: "5.2L V10",
        bhp: 562,
        torque: 550,
        imageUrl: "https://images.unsplash.com/photo-1603584173870-7b299f589889?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "5",
        name: "Mercedes-AMG G63",
        year: 2023,
        price: "₹ 3.30 Cr",
        kms: "5,000 km",
        fuelType: "Petrol",
        exteriorColor: "Obsidian Black",
        interiorColor: "Bengal Red",
        engine: "4.0L V8 Biturbo",
        bhp: 577,
        torque: 850,
        imageUrl: "https://images.unsplash.com/photo-1520031441872-dd59c0f52d9b?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        name: "Bentley Continental GT",
        year: 2021,
        price: "₹ 4.10 Cr",
        kms: "3,500 km",
        fuelType: "Petrol",
        exteriorColor: "Beluga Black",
        interiorColor: "Cricket Ball",
        engine: "6.0L W12",
        bhp: 626,
        torque: 900,
        imageUrl: "https://images.unsplash.com/photo-1621509623868-80415a995393?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "7",
        name: "McLaren 720S",
        year: 2020,
        price: "₹ 3.95 Cr",
        kms: "6,200 km",
        fuelType: "Petrol",
        exteriorColor: "Memphis Red",
        interiorColor: "Jet Black",
        engine: "4.0L V8 Twin-Turbo",
        bhp: 710,
        torque: 770,
        imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "8",
        name: "Rolls-Royce Ghost",
        year: 2019,
        price: "₹ 5.50 Cr",
        kms: "12,000 km",
        fuelType: "Petrol",
        exteriorColor: "Diamond Black",
        interiorColor: "Arctic White",
        engine: "6.75L V12",
        bhp: 563,
        torque: 850,
        imageUrl: "https://images.unsplash.com/photo-1631295868223-6326585125bc?auto=format&fit=crop&q=80&w=800",
    },
];
