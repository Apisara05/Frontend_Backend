import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";

const CreatePost = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [coverFile, setCoverFile] = useState(null);

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write your content...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            [{ align: [] }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ size: [] }],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        setContent(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleFileChange = (e) => {
    setCoverFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !summary || !content || !coverFile) {
      Swal.fire("Error", "Please fill all fields and upload an image", "error");
      return;
    }

    try {
      // สร้าง FormData สำหรับส่งไฟล์
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("content", content);
      formData.append("cover", coverFile);

      // ส่ง request ไป backend
      const response = await axios.post(
        "http://localhost:5000/api/v1/post",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Swal.fire("Success", "Post created successfully", "success");
      // reset form
      setTitle("");
      setSummary("");
      setContent("");
      setCoverFile(null);
      quillRef.current.root.innerHTML = "";
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        error.response?.data?.message || "Failed to create post",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B4DFF] to-[#3A8DFF] p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Create New Post
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Summary
            </label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Content / Quill Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <div className="border rounded-md">
              <div ref={editorRef} className="h-48"></div>
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:mr-4 file:px-3 file:py-1 file:bg-gray-100 file:border-0"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
