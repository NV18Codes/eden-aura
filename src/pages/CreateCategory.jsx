import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !slug) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
        name,
        slug,
      });
      if (data) {
        toast.success(`${name} category created successfully`);
        setName("");
        setSlug("");
      } else {
        toast.error("Failed to create category");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
            <form onSubmit={handleSubmit} className="p-3 w-50">
              <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Creating..." : "Create Category"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
