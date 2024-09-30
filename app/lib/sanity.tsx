import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; 

export const client = createClient ({
    projectId: "jii1f3ov",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});

const imgBuilder = imageUrlBuilder (client);

export function urlFor(source : string) {
    return imgBuilder.image(source);
}

export const getPopularItemData = async (slug: string) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories->{name},
    }`;
    const data = await client.fetch(query);
    return data;
}

export const getPopularData = async () => {

  
    const query = `*[_type== 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {

  _id,
    name,
    description,
    images , 
    price,
    price_id,
    "slug":slug.current,
    "categories": categories[]-> {
    name
    }

  }`;
  
    const data = await client.fetch(query);
    return data;  
  
  
  }
export const getAllBikes = async () => {

  
    const query = `*[_type== 'product'] {

    _id,
    name,
    description,
    images , 
    price,
    price_id, 
    "slug":slug.current,
    "categories": categories[]-> {
    name
    }

  }`;
  
    const data = await client.fetch(query);
    return data;  
  
  
  }


