import  { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const EditPost = () => {
  const { id } = useParams(); // get post id from URL
  const navigate = useNavigate();

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [coverFile, setCoverFile] = useState(null);

  // fetch post data when component mounts
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/post/${id}`);
        setTitle(res.data.title);
        setSummary(res.data.summary);
        setContent(res.data.content);
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to load post data", "error");
      }
    };
    fetchPost();
  }, [id]);

  // initialize Quill editor
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Edit your content...",
        modules: { toolbar: true },
      });
      quillRef.current.root.innerHTML = content;

      quillRef.current.on("text-change", () => {
        setContent(quillRef.current.root.innerHTML);
      });
    }
  }, [editorRef, content]);

  const handleFileChange = (e) => setCoverFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !summary || !content) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("content", content);
      if (coverFile) formData.append("cover", coverFile);

      const res = await axios.put(
        `http://localhost:5000/api/v1/post/${id}`,
        formData
      );

      Swal.fire("Success", res.data.message || "Post updated!", "success");
      navigate(`/post/${id} `);
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to update post",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#911D1D] to-[#8329AB] p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Edit Post
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Summary
            </label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Content / Quill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <div className="border border-gray-300 rounded-lg h-56">
              <div ref={editorRef} className="h-full p-2" />
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-1.5 file:px-3 file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
            />
          </div>

          {/* Update button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
