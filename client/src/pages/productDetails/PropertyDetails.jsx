import React, { useEffect, useState } from "react";
import PropertyItem from "../../components/PropertyItem";
import { useParams } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";
import Spinner from "../../components/Spinner";

const PropertyDetails = () => {
  const { id } = useParams();
  console.log("Id is ", id);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch single list
  const fetchSingleListing = async (id) => {
    setLoading(true);
    try {
      const res = await apiRequest.get(`/api/single-listing/${id}`);
      if (res.data.success) {
        setProperty(res.data.singleList);
        console.log("SINGLE LIST", res.data.singleList);
        console.log("Property value is ", property);
        setLoading(false);
      } else {
        console.log("Error singel list all listing", res.data.message);
      }
    } catch (error) {
      console.log("Error fetching all list", error);
    }
  };
  useEffect(() => {
    fetchSingleListing(id);
  }, [id]);

  return (
    <section className="pt-20 h-full w-full">
      <div className="container">
        <div className="">
          {loading ? (
            <Spinner />
          ) : (
            <PropertyItem
              key={property && property._id}
              id={property && property._id}
              title={property && property.title}
              img1={property && property.image[0]}
              img2={property && property.image[1]}
              img3={property && property.image[2]}
              bedroom={property && property.bedroom}
              bathroom={property && property.bathroom}
              loc={property && property.loc}
              contact={property && property.contact}
              price={property && property.price}
              description={property && property.description}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
