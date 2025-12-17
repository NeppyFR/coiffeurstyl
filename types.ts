export interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface Barber {
  name: string;
  role: string;
  image: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
}