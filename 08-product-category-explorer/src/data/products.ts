import { Product, CategoryItem } from "../types";

export const categories: CategoryItem[] = [
  {
    slug: "electronics",
    name: "Electronics & Audio",
    icon: "⚡",
    description: "High-fidelity audio monitors, mechanical peripherals, and productivity electronics.",
  },
  {
    slug: "audio",
    name: "Headphones & Audio",
    icon: "🎧",
    parentSlug: "electronics",
    description: "Studio-grade wireless headphones, condenser microphones, and spatial desktop monitors.",
  },
  {
    slug: "workstation",
    name: "Workstation Peripherals",
    icon: "⌨️",
    parentSlug: "electronics",
    description: "Custom mechanical keyboards, vertical ergonomic mice, and precision desk accessories.",
  },
  {
    slug: "office",
    name: "Desk & Lighting",
    icon: "🪑",
    description: "Architectural lighting, monitor mounts, and solid hardwood desk organizers.",
  },
  {
    slug: "lighting",
    name: "Desk Lamps & Screenbars",
    icon: "💡",
    parentSlug: "office",
    description: "Glare-free asymmetric monitor bars and ambient dimmable brass work lamps.",
  },
  {
    slug: "organization",
    name: "Hardwood Desk Organizers",
    icon: "🪵",
    parentSlug: "office",
    description: "Dual-tier walnut risers, cable trays, and wool felt desk mats.",
  },
];

export const products: Product[] = [
  {
    id: "ps-studio-headphones-pro",
    name: "Studio ANC Wireless Headphones Pro",
    categoryPath: ["electronics", "audio"],
    categoryName: "Headphones & Audio",
    price: 299,
    currency: "$",
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    stockCount: 18,
    badge: "Best Seller",
    emoji: "🎧",
    description: "Reference-grade planar audio drivers with adaptive active noise cancellation, ultra-low distortion, ambient transparency, and memory foam cushions engineered for marathon creative focus.",
    features: [
      "45mm bespoke planar magnetic transducers",
      "Tri-mode hybrid active noise cancellation (42dB reduction)",
      "Lossless 24-bit/96kHz wireless streaming via LDAC & aptX HD",
      "Up to 45 hours playback with rapid USB-C fast charge",
      "Dual noise-canceling beamforming microphones for crystal-clear calls",
    ],
    specs: [
      { label: "Frequency Response", value: "10 Hz - 40,000 Hz" },
      { label: "Driver Size", value: "45mm Planar Magnetic" },
      { label: "Battery Life", value: "45 hours (ANC On)" },
      { label: "Weight", value: "260 grams" },
      { label: "Connectivity", value: "Bluetooth 5.4, 3.5mm, USB-C Audio" },
    ],
  },
  {
    id: "ps-condenser-usb-mic",
    name: "Precision Broadcast USB Condenser Mic",
    categoryPath: ["electronics", "audio"],
    categoryName: "Headphones & Audio",
    price: 149,
    currency: "$",
    rating: 4.8,
    reviewCount: 88,
    inStock: true,
    stockCount: 12,
    badge: "Creator Pick",
    emoji: "🎙️",
    description: "A zero-latency cardioid condenser microphone tailored for podcasters, vocal recording, and daily team calls. Includes hardware gain dial and capacitive tap-to-mute.",
    features: [
      "Custom-tuned 14mm cardioid capsule",
      "Integrated analog compressor and high-pass rumble filter",
      "Heavy weighted magnetic desktop isolation stand",
      "Direct headphone monitoring with zero-latency zero-lag DAC",
    ],
    specs: [
      { label: "Sample Rate", value: "24-bit / 96 kHz" },
      { label: "Capsule", value: "14mm Electret Condenser" },
      { label: "Polar Pattern", value: "Cardioid" },
      { label: "Connector", value: "USB-C to USB-A / USB-C" },
      { label: "Weight", value: "410 grams" },
    ],
  },
  {
    id: "ps-mechanical-keeb-75",
    name: "Alloy 75% Custom Mechanical Keyboard",
    categoryPath: ["electronics", "workstation"],
    categoryName: "Workstation Peripherals",
    price: 189,
    currency: "$",
    rating: 4.95,
    reviewCount: 230,
    inStock: true,
    stockCount: 7,
    badge: "Staff Pick",
    emoji: "⌨️",
    description: "CNC-milled solid anodized aluminum chassis with gasket mount damping, south-facing RGB, hot-swappable pre-lubricated tactile switches, and PBT dye-sub keycaps.",
    features: [
      "Full CNC 6063 aluminum chassis with ceramic coating",
      "Dual silicon sound dampening pads and poron switch foam",
      "Hot-swappable 5-pin PCB compatible with Cherry, Gateron, Kailh",
      "Custom programmable knob for volume, zoom, or media scrub",
    ],
    specs: [
      { label: "Layout", value: "75% Compact (82 Keys)" },
      { label: "Switches", value: "Pre-lubed Tactile Pro (55g actuation)" },
      { label: "Keycaps", value: "Cherry Profile Double-shot PBT" },
      { label: "Battery", value: "4,000 mAh rechargeable lithium" },
      { label: "Polling Rate", value: "1,000 Hz in wired / 2.4G mode" },
    ],
  },
  {
    id: "ps-ergonomic-mouse-v2",
    name: "Precision Vertical Ergonomic Mouse",
    categoryPath: ["electronics", "workstation"],
    categoryName: "Workstation Peripherals",
    price: 79,
    currency: "$",
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    stockCount: 25,
    badge: "Ergonomic",
    emoji: "🖱️",
    description: "Engineered with an upright 57-degree natural handshake posture to eliminate wrist pronation and relieve repetitive strain during long development sessions.",
    features: [
      "Natural 57° ergonomic handshake angle",
      "Whisper-quiet magnetic click switches rated for 20M clicks",
      "Dual thumb navigation buttons and precision DPI cycle button",
      "Pairs with up to 3 devices simultaneously with easy switch button",
    ],
    specs: [
      { label: "Sensor Resolution", value: "Up to 4,000 DPI Optical" },
      { label: "Battery Life", value: "Up to 90 days on single USB-C charge" },
      { label: "Weight", value: "115 grams" },
      { label: "Connectivity", value: "Bluetooth Low Energy & 2.4G Receiver" },
    ],
  },
  {
    id: "ps-screenbar-light",
    name: "Asymmetric Monitor Screenbar Lamp",
    categoryPath: ["office", "lighting"],
    categoryName: "Desk Lamps & Screenbars",
    price: 119,
    currency: "$",
    rating: 4.85,
    reviewCount: 97,
    inStock: true,
    stockCount: 15,
    badge: "Eye Care",
    emoji: "💡",
    description: "Patented asymmetric optical engineering casts bright, uniform illumination across your entire desk without reflecting on your monitor screen or entering your eyes.",
    features: [
      "Zero screen glare asymmetric light guide",
      "Stepless color temperature adjustment from warm 2700K to cool 6500K",
      "Auto-dimming ambient light sensor balances desk luminance",
      "Weighted clamp balances securely on curved and flat monitors",
    ],
    specs: [
      { label: "Color Temperature", value: "2700K - 6500K Stepless" },
      { label: "Color Rendering Index", value: "CRI Ra > 95" },
      { label: "Illuminance", value: "900 Lux at center desk" },
      { label: "Power Input", value: "5V USB-C (5W - 10W)" },
    ],
  },
  {
    id: "ps-walnut-desk-shelf",
    name: "Solid American Walnut Dual-Tier Desk Shelf",
    categoryPath: ["office", "organization"],
    categoryName: "Hardwood Desk Organizers",
    price: 160,
    currency: "$",
    rating: 4.9,
    reviewCount: 115,
    inStock: true,
    stockCount: 9,
    badge: "Handcrafted",
    emoji: "🪵",
    description: "Elevate dual monitors to comfortable ergonomic eye level while creating clean storage space below for your keyboard, mouse, audio interface, and notebook.",
    features: [
      "100% solid American walnut wood with natural grain variation",
      "Precision powder-coated heavy steel support legs with cork padding",
      "Integrated aluminum accessory tray for pens and stylus",
      "Supports up to 45kg load without deflection or bowing",
    ],
    specs: [
      { label: "Dimensions", value: "110 cm (L) × 23 cm (W) × 11.5 cm (H)" },
      { label: "Weight Capacity", value: "45 kg (100 lbs)" },
      { label: "Material", value: "Solid Black Walnut & Powder-Coated Steel" },
      { label: "Finish", value: "Hand-rubbed natural matte oil" },
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

export function getProductsByCategoryPath(pathSegments: string[]): Product[] {
  if (!pathSegments || pathSegments.length === 0) {
    return products;
  }

  return products.filter((p) => {
    // Check if the product's categoryPath starts with or matches pathSegments
    return pathSegments.every((seg, idx) => p.categoryPath[idx] && p.categoryPath[idx].toLowerCase() === seg.toLowerCase());
  });
}

export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
