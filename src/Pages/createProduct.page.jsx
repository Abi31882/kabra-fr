import { useState } from "react";
import { createProduct } from "../config/store/apis/main";

const CreateProduct = () => {
  const [name, setName] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const quantity = 1;
  const [previewSource, setPreviewSource] = useState();

  const data = { name, image, description, price, quantity };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleInputChange1 = (e) => {
    const file = e.target.value;
    setName(file);
  };
  const handleInputChange2 = (e) => {
    const file = e.target.files[0];
    setImage(file);
    previewFile(file);
  };
  const handleInputChange3 = (e) => {
    const file = e.target.value;
    setDescription(file);
  };
  const handleInputChange4 = (e) => {
    const file = e.target.value;
    setPrice(file);
  };

  const submit = (e) => {
    e.preventDefault();
    createProduct(data).then((r) => {
      alert("product created successfully");
      window.location.href = "/";
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="name"
          className="form-control"
          placeholder="Enter name"
          onChange={(e) => handleInputChange1(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Image</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
          onChange={(e) => handleInputChange2(e)}
        />
      </div>
      {previewSource && (
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <div>Preview</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "40px", borderRadius: "9999px" }}
              src={previewSource}
              alt="chosen"
            />
          </div>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          onChange={(e) => handleInputChange3(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleCheck1">Price</label>
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => handleInputChange4(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Quantity</label>
        <input
          type="text"
          className="form-control"
          placeholder="Quantity"
          value={quantity}
        />
      </div>

      <button
        onClick={(e) => submit(e)}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProduct;
