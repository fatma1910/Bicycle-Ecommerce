
export interface BikeProps {
    filter: any;
    _id: string;
    name: string;
    description: string;
    images: string[];  
    price: number;
    price_id: string;
    slug: string;
    categories: {
      name: string;
    }[];
    
}

export interface Params {
  slug: string;
}



export interface AddToCartProps {
  btnStyle?: string;
  text?: string;
  icon?: React.ReactNode; 
  id?: string;
  currency: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  price_id: string;
}
