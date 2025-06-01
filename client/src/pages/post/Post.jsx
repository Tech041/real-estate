import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import apiRequest from "../../utils/apiRequest";

const Post = () => {
  // STATE FOR STORING IMAGES FOR UPLOAD
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  // state for the products
  const [title, setTitle] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [price, setPrice] = useState("");
  const [loc, setLoc] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const formRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(formRef.current);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);

      const res = await apiRequest.post("/api/create-list", formData);
      console.log("Createdlist is", res.data);

      if (res.data.success) {
        toast.success(res.data.message);
        setTitle("");
        setContact("");
        setPrice("");
        setBathroom("");
        setBedroom("");
        setDescription("");
        setLoc("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <section className="w-full h-full mb-10  pt-20 ">
      <div className="container">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-sm py-4 font-semibold  text-red-700">
            In the input below, you are required to provide one Exterior view
            and two interior views before upload.
          </h1>
          <div className=" flex gap-2">
            <div className="">
              <label htmlFor="image1" className="">
                <img
                  src={!image1 ? assets.upload : URL.createObjectURL(image1)}
                  alt=""
                  className=" w-20"
                />
                <input
                  onChange={(e) => setImage1(e.target.files[0])}
                  type="file"
                  id="image1"
                  className=""
                  hidden
                />
              </label>
              <p className="py-1 text-xs text-orange-900">Exterior</p>
            </div>
            <div className="">
              <label htmlFor="image2" className="">
                <img
                  src={!image2 ? assets.upload : URL.createObjectURL(image2)}
                  alt=""
                  className=" w-20"
                />
                <input
                  onChange={(e) => setImage2(e.target.files[0])}
                  type="file"
                  id="image2"
                  className=""
                  hidden
                />
              </label>
              <p className="py-1 text-xs text-green-700">Interior </p>
            </div>
            <div className="">
              <label htmlFor="image3" className="">
                <img
                  src={!image3 ? assets.upload : URL.createObjectURL(image3)}
                  alt=""
                  className=" w-20"
                />
                <input
                  onChange={(e) => setImage3(e.target.files[0])}
                  type="file"
                  id="image3"
                  className=""
                  hidden
                />
              </label>
              <p className="py-1 text-xs text-green-700 ">Interior</p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={onSubmitHandler}
          className="flex flex-col w-full full items-center"
        >
          <div className="w-full h-full">
            <div className="w-full ">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="title"
                value={title}
                required
                id="title"
                placeholder="Type eg: Duplex"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="w-full py-2 ">
              <input
                onChange={(e) => setBathroom(e.target.value)}
                type="text"
                required
                id="bathroom"
                value={bathroom}
                name="bathroom"
                placeholder="Number of bathroom"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="w-full py-2 ">
              <input
                onChange={(e) => setBedroom(e.target.value)}
                id="bedroom"
                type="text"
                value={bedroom}
                name="bedroom"
                required
                placeholder="Number of bedroom"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="w-full py-2">
              <input
                onChange={(e) => setLoc(e.target.value)}
                id="loc"
                name="loc"
                value={loc}
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="Location"
                required
              />
            </div>{" "}
            <div className="w-full py-2">
              <input
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                id="price"
                value={price}
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="Price"
                required
              />
            </div>
            <div className="w-full py-2">
              <textarea
                id="description"
                name="description"
                value={description}
                className="w-full p-3 border rounded-md"
                placeholder="Describe the property ..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full py-2">
              <input
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                name="contact"
                id="contact"
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="Your contact"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8"></div>
            <div className="flex w-full justify-center  items-center">
              <button
                type="submit"
                className="w-28 py-3 mt-4 bg-black text-white"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Post;
