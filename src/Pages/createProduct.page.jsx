import { useState } from "react";
import { beginTheBar } from "../config/loadingBarService";
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

  const submit = (e) => {
    beginTheBar();
    e.preventDefault();
    createProduct(data);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name *</label>
        <input
          type="name"
          className="form-control"
          placeholder="Enter name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Image *</label>
        <input
          type="file"
          className="form-control-file"
          required
          id="exampleFormControlFile1"
          onChange={(e) => {
            setImage(e.target.files[0]);
            previewFile(e.target.files[0]);
          }}
        />
      </div>
      {previewSource && (
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <div>Preview</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "9999px",
              }}
              src={previewSource}
              alt="chosen"
            />
          </div>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description *</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleCheck1">Price *</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Quantity</label>
        <input
          type="text"
          className="form-control"
          placeholder="Quantity"
          required
          value={quantity}
        />
      </div>

      <button
        onClick={(e) => submit(e)}
        type="button"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProduct;
