import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";

const CreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch categories from backend
    const getAllCategories = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories`);
            if (data) {
                setCategories(data);
            }
        } catch (error) {
            toast.error("Failed to load categories");
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    // Handle product form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !price || !quantity || !description || !category) {
            toast.error("Please fill all fields");
            return;
        }
        if (!image) {
            toast.error("Please upload a product image");
            return;
        }
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("quantity", quantity);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("image", image);

            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/products`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (data) {
                toast.success(`${name} created successfully`);
                // Reset form
                setName("");
                setPrice("");
                setQuantity(1);
                setDescription("");
                setCategory("");
                setImage(null);
            } else {
                toast.error("Failed to create product");
            }
        } catch (error) {
            toast.error("Something went wrong while creating product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title={"Dashboard - Create Product"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Create Product</h1>
                        <form onSubmit={handleSubmit} className="p-3 w-75">
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    min="0"
                                    step="0.01"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                    min="1"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((c) => (
                                        <option key={c._id} value={c._id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Creating..." : "Create Product"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateProduct;
