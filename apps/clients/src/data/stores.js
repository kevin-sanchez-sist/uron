import heladeriaLogo from '../assets/logos/heladeria.png'
import empanatinLogo from '../assets/logos/empanadas-13.png'
import salchipapasLogo from '../assets/logos/salchipapas-13.png'
import tiendaLogo from '../assets/logos/tienda-a14.png'

import heladoBrownie from '../assets/products/helado-brownie.jpg'
import heladoVainilla from '../assets/products/helado-vainilla.png'
import heladoFrutosRojos from '../assets/products/helado-frutos-rojos.jpg'
import heladoChicle from '../assets/products/helado-chicle.jpg'
import heladoMandarina from '../assets/products/helado-mandarina.jpg'
import heladoArtesanal from '../assets/products/helado-artesanal.jpg'
import chococono from '../assets/products/chococono.jpg'
import polet from '../assets/products/polet.png'
import bocatto from '../assets/products/bocatto.jpg'

import empanadaTradicional from '../assets/products/empanada-tradicional.jpg'
import empanadaPolloChicharron from '../assets/products/empanada-pollo-chicharron.jpg'
import empanadaBBQ from '../assets/products/empanada-bbq.jpg'
import empanadaRanchera from '../assets/products/empanada-ranchera.jpeg'

import salchipapa from '../assets/products/salchipapa.jpg'
import cuadripizzaCarne from '../assets/products/cuadripizza-carne.webp'
import cuadripizzaPollo from '../assets/products/cuadripizza-pollo.webp'
import cuadripizzaHawaina from '../assets/products/cuadripizza-hawaina.webp'
import dorilococsPequeños from '../assets/products/dorilocos-pequeños.jpg'
import dorilocosGrandes from '../assets/products/dorilocos-grandes.jpg'

import agua from '../assets/products/agua.webp'
import gaseosa from '../assets/products/gaseosa.webp'
import jugoHit from '../assets/products/jugo-hit.webp'
import papasMargarita from '../assets/products/papas-margarita.webp'
import chocolatinaJet from '../assets/products/chocolatina-jet.webp'
import galletasFestival from '../assets/products/galletas-festival.jpg'
import yogurAlpina from '../assets/products/yogurt-alpina.webp'
import chicles from '../assets/products/chicles.png'
import servilletas from '../assets/products/servilletas.webp'

export const STORES = [
  {
    id: 1,
    name: "Heladería",
    category: "Helados",
    coords: [4.793194, -75.688971],
    emoji: "🍦",
    image: heladeriaLogo,
    rating: 4.8,
    time: "5-8 min",
    distance: "100m",
    open: true,
    tag: "Popular",
    tagVariant: "brand",
    products: [
      { id: 101, name: "Helado de brownie",      price: 4500, desc: "Brownie con helado de vainilla",           emoji: "🍫", image: heladoBrownie },
      { id: 102, name: "Helado de vainilla",      price: 3500, desc: "Clásico, cremoso y suave",                emoji: "🍦", image: heladoVainilla },
      { id: 103, name: "Helado de frutos rojos",  price: 3800, desc: "Fresa, mora y frambuesa",                 emoji: "🍓", image: heladoFrutosRojos },
      { id: 104, name: "Helado de chicle",        price: 3500, desc: "Sabor chicle, color azul",                emoji: "🫧", image: heladoChicle },
      { id: 105, name: "Helado de mandarina",     price: 3800, desc: "Cítrico y refrescante",                   emoji: "🍊", image: heladoMandarina },
      { id: 107, name: "Helado artesanal",        price: 5000, desc: "Receta casera, sabor del día",            emoji: "🍨", image: heladoArtesanal },
      { id: 108, name: "Chococono",               price: 4200, desc: "Cono bañado en chocolate",                emoji: "🍦", image: chococono },
      { id: 109, name: "Polet",                   price: 2500, desc: "Paleta helada tradicional",               emoji: "🧊", image: polet },
      { id: 110, name: "Bocatto",                 price: 4800, desc: "Helado tipo italiano en vaso",            emoji: "🍮", image: bocatto },
    ],
  },
  {
    id: 2,
    name: "Empanatin",
    category: "Empanadas",
    emoji: "🥟",
    image: empanatinLogo,
    coords: [4.795568, -75.687613],
    rating: 4.7,
    time: "8-12 min",
    distance: "130m",
    open: true,
    tag: "Rápido",
    tagVariant: "success",
    products: [
      { id: 201, name: "Empanada tradicional",          price: 2500, desc: "Rellena de papa y carne molida",          emoji: "🥟", image: empanadaTradicional },
      { id: 202, name: "Empanada pollo con chicharrón", price: 3000, desc: "Pollo desmechado y chicharrón crujiente",  emoji: "🍗", image: empanadaPolloChicharron },
      { id: 203, name: "Empanada carne BBQ",            price: 3200, desc: "Carne en salsa BBQ ahumada",              emoji: "🥩", image: empanadaBBQ },
      { id: 206, name: "Empanada ranchera",             price: 3000, desc: "Con chorizo, maíz y maduro",              emoji: "🌶️", image: empanadaRanchera },
    ],
  },
  {
    id: 3,
    name: "Salchipapas del 13",
    category: "Comidas rápidas",
    emoji: "🍟",
    image: salchipapasLogo,
    coords: [4.790757, -75.690338],
    rating: 4.6,
    time: "10-15 min",
    distance: "130m",
    open: true,
    tag: "Nuevo",
    tagVariant: "warning",
    products: [
      { id: 301, name: "Salchipapa",             price: 8000, desc: "Papa frita con salchicha y salsas",        emoji: "🍟", image: salchipapa },
      { id: 302, name: "Cuadripizza de carne",   price: 4500, desc: "Mini pizzas de carne al estilo street",    emoji: "🍕", image: cuadripizzaCarne },
      { id: 303, name: "Cuadripizza de pollo",   price: 4500, desc: "Mini pizzas de pollo con champiñones",     emoji: "🍕", image: cuadripizzaPollo },
      { id: 304, name: "Cuadripizza hawaiana",   price: 4500, desc: "Mini pizzas con piña y jamón",             emoji: "🍕", image: cuadripizzaHawaina },
      { id: 305, name: "Dorilocos pequeños",     price: 5000, desc: "Doritos con toppings y salsas",            emoji: "🌮", image: dorilococsPequeños },
      { id: 306, name: "Dorilocos grandes",      price: 8000, desc: "Porción grande con más toppings",          emoji: "🌮", image: dorilocosGrandes },
    ],
  },
  {
    id: 4,
    name: "Tienda A14",
    category: "Tienda",
    emoji: "🛍️",
    image: tiendaLogo,
    coords: [4.790527, -75.690273],
    rating: 4.4,
    time: "3-5 min",
    distance: "50m",
    open: true,
    tag: "Cerca",
    tagVariant: "neutral",
    products: [
      { id: 401, name: "Agua 600ml",        price: 2000, desc: "Agua fría",                    emoji: "💧", image: agua },
      { id: 402, name: "Gaseosa personal",  price: 3000, desc: "Coca-Cola, Pepsi o Sprite",    emoji: "🥤", image: gaseosa },
      { id: 403, name: "Jugo Hit",          price: 2500, desc: "Varios sabores",               emoji: "🧃", image: jugoHit },
      { id: 404, name: "Papas margarita",   price: 2500, desc: "Bolsa personal",               emoji: "🥔", image: papasMargarita },
      { id: 405, name: "Chocolatina Jet",   price: 2000, desc: "Clásica colombiana",           emoji: "🍫", image: chocolatinaJet },
      { id: 406, name: "Galletas Festival", price: 1500, desc: "Rellenas de fresa o vainilla", emoji: "🍪", image: galletasFestival },
      { id: 408, name: "Yogur Alpina",      price: 3500, desc: "Fresa, durazno o mora",        emoji: "🥛", image: yogurAlpina },
      { id: 409, name: "Chicles",           price: 500,  desc: "Trident o Bubblegum",          emoji: "🫧", image: chicles },
      { id: 410, name: "Servilletas",       price: 500,  desc: "Paquete x10",                  emoji: "🧻", image: servilletas },
    ],
  },
]

export const CATEGORIES = ["Todos", "Helados", "Empanadas", "Comidas rápidas", "Tienda"]

export const BUILDING_COORDS = {
  "Edificio 1":  [4.795574, -75.688072],
  "Edificio 2":  [4.796257, -75.687472],
  "Edificio 3":  [4.795323, -75.688075],
  "Edificio 4":  [4.795248, -75.688882],
  "Edificio 5":  [4.794992, -75.688646],
  "Edificio 6":  [4.793898, -75.688716],
  "Edificio 7":  [4.793310, -75.688914],
  "Edificio 8":  [4.792990, -75.689042],
  "Edificio 9":  [4.792565, -75.689460],
  "Edificio 10": [4.792012, -75.689808],
  "Edificio 11": [4.791674, -75.689487],
  "Edificio 12": [4.789371, -75.690153],
  "Edificio 13": [4.790715, -75.690108],
  "Edificio 14": [4.792105, -75.690506],
  "Edificio 15": [4.795753, -75.691048],
  "Edificio 16": [4.791772, -75.690849],
  "Edificio 17": [4.799015, -75.686183],
}