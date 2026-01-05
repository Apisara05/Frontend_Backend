import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import PostService from "../services/post.service";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const [post, setPost] = useState({
    id: "",
    title: "",
    createdAt: " ",
    author: {},
    content: "",
  });

  // โหลดโพสต์
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getById(id);
        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchPost();
  }, [id]);

  // ฟังก์ชันลบโพสต์
   const handleDelete = async () => {
     const isSubmitted = window.confirm("Please Confirm To Delete Your Book!");
     if (!isSubmitted) return;
     try {
       const response = await PostService.deletePost(post._id);
       if (response.status === 200) {
         alert("Post deleted successfully!");
         navigate("/");
       }
     } catch (error) {
       console.log(error);
     }
   };

  return (
    <div className="post-page min-h-full min-w-full items-center justify-center p-4 pt-20">
      <div className="bg-white p-8 rounded-b-lg shadow-lg max-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-grey-800">{post.title}</h1>

        <div className="text-grey-600 mb-4 text-center">
          <time className="block mb-2">{post.createdAt}</time>
          <div className="author mb-2">
            By{" "}
            <span className="text-blue-500">
              @{" "}
              <a href={`/author/${post.author?._id}`}>
                {post?.author?.username}
              </a>
            </span>
          </div>

          {userInfo?.id === post.author._id && (
            <div className="edit-row mb-4 text-center flex justify-center gap-4">
              <a
                href={`/edit-post/${post._id}`}
                className="text-sm text-gray-500 hover:underline"
              >
                Edit Post
              </a>
              {/* Delete ใช้ปุ่มและเรียก handleDelete */}
              <button
                onClick={handleDelete}
                className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Delete Post
              </button>
            </div>
          )}
        </div>

        <div className="content text-grey-700">
          {post.content}
          <img
            className="flex items-center justify-center mt-4"
            src="https://www.blognone.com/sites/default/files/news-feature-image/2025/2025-12/gemini_generated_image_p9zo4sp9zo4sp9zo.jpg"
            alt={post.title}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
