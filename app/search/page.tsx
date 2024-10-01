'use client'
import { useEffect, useState } from "react";
import { getAllBikes } from "../lib/sanity";  
import Bike from "../components/Bike";
import { BikeProps } from "@/types"; 

const SearchPage = () => {

    const [bikes, setBikes] = useState<BikeProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true); 
    const [query, setQuery] = useState<string>(''); 

    useEffect(() => {
        const fetchBikes = async () => {
        const data = await getAllBikes();  
        setBikes(data);
        setLoading(false);
        };
        fetchBikes();  
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setQuery(urlParams.get('query') || '');  
    }, []);

    const filteredBikes = bikes.filter((bike: BikeProps) =>
        bike.name.toLowerCase().includes(query.toLowerCase())  
    );

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;  

    return (
        <div className="container mx-auto py-10 min-h-screen  ml-3">
        <h1 className="text-2xl font-bold mb-4">
            Search Results for: "<span className="text-accent">{query}</span>"
        </h1>
        {filteredBikes.length === 0 ? (
            <p className="flex items-center justify-center">No bikes found.</p> 
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {filteredBikes.map((bike: BikeProps) => (
                <Bike bike={bike} key={bike.price_id} />  
            ))}
            </div>
        )}
        </div>
    );
};

export default SearchPage;
