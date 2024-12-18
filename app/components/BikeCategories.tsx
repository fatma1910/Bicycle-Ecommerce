'use client';

import { useState, useEffect, useCallback, useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import Bike from "./Bike";
import { Slider } from "./ui/slider";
import { BikeProps } from "@/types";

interface BikeProp_ {
  bikes: BikeProps[];
}

const BikeCategories = ({ bikes }: BikeProp_) => {
    const [category, setCategory] = useState<string>("all");
    const [filterBikes, setFilterBikes] = useState<BikeProps[]>([]);
    const [price, setPrice] = useState<number>(900);

    // UseCallback for handleCategoryChange
    const handleCategoryChange = useCallback((category: string) => {
      setCategory(category);
    }, []);

    // UseCallback for handlePriceChange
    const handlePriceChange = useCallback((value: number[]) => {
      setPrice(value[0]);
    }, []);

    // Memoize filtered bikes
    const filteredBikes = useMemo(() => {
      return bikes.filter((bike) => {
        const categoryMatch =
          category === "all" ? true : bike.categories.some((categ) => categ.name === category);
        const priceMatch = bike.price <= price;
        return categoryMatch && priceMatch;
      });
    }, [category, price, bikes]);

    useEffect(() => {
      setFilterBikes(filteredBikes);
    }, [filteredBikes]);

    return (
        <section className="py-10 min-h-screen">
            <div className=" mx-8">
                <div className="flex flex-col md:flex-row">
                    <aside className="w-full p-4 md:pl-1 mb-8 md:w-[300px]  md:sticky md:top-28 md:h-full ">
                        <RadioGroup defaultValue="all" className="flex flex-col gap-6 mb-12">
                            <div className="flex items-center space-x-2 ">
                                <RadioGroupItem value="all" id="all" onClick={() => handleCategoryChange("all")} />
                                <label htmlFor="all">All</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="extreme" id="extreme" onClick={() => handleCategoryChange("extreme")} />
                                <label htmlFor="extreme">Extreme</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="professional" id="professional" onClick={() => handleCategoryChange("professional ")} />
                                <label htmlFor="professional">Professional</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="road" id="road" onClick={() => handleCategoryChange("road")} />
                                <label htmlFor="road">Road</label>
                            </div>
                        </RadioGroup>

                        <div className="max-w-56">
                            <div className="text-lg mb-4 font-medium">
                                Max Price:{" "}
                                <span className="text-accent font-semibold ml-2">${price}</span>
                                <span className="ml-2">
                                    ({filterBikes.length > 1 ? `${filterBikes.length} items` : `${filterBikes.length} item`})
                                </span>
                            </div>
                            <Slider defaultValue={[900]} max={1000} step={1} onValueChange={handlePriceChange} />
                        </div>
                    </aside>

                    <div className="w-full">
                        {filterBikes.length === 0 ? (
                            <p>No items match your filter.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                                {filterBikes.map((bike) => {
                                    return <Bike bike={bike} key={bike.price_id} />;
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BikeCategories;
