import React, { useEffect, useState } from "react";
import { dummyData } from "../../utils/DummyData";
import PropertyItem from "../../components/PropertyItem";

const PropertyDetails = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const singleproduct = dummyData.slice(0, 1);
    setProperty(singleproduct);
    console.log(property);
  }, []);
  return (
    <section className="pt-20 h-full w-full">
      <div className="container">
        <div className="">
          {property?.map((item) => (
            <PropertyItem
              key={item.id}
              title={item.title}
              img1={item.imgUrl[0]}
              img2={item.imgUrl[1]}
              img3={item.imgUrl[2]}
              bedroom={item.bedroom}
              bathroom={item.bathroom}
              loc={item.loc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
