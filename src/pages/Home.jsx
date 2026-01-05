import React from "react";
import Post from "./Post";
import PostService from "../services/post.service";

const mockPosts = [
  {
    id: 1,
    title:
      "ซีอีโอบริหารมากกว่า Intel บอก ซีอีโอคนใหม่ต้องมีพื้นฐานในกระบวนการผลิตชิป",
    author: "wuttha2",
    date: "05 December 2024 - 23:26",
    summary:
      "หลังจากงานเลี้ยงโดยซีอีโอใหม่ของ Intel Pat Gelsinger นายคนใหม่ประกาศแนวใหม่ พร้อมเน้นย้ำความสำคัญของพื้นฐานการผลิตชิปที่บริษัทควรกลับมาถือเอง...",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title:
      "KBTG วางเป้าโตด้วย Agentic AI ในปี 2025 ทำงานร่วมกับ AI เหมือนเป็นคน ๆ หนึ่ง",
    author: "wuttha",
    date: "05 December 2024 - 21:11",
    summary:
      "ในช่วงที่ผ่านมามีการพูดถึงแนวทาง AI ยุคใหม่ที่ผสานเทคโนโลยีเข้ากับบทบาทเปลี่ยนแปลงองค์กรอย่างรวดเร็ว และที่สำคัญคือมีการนำไปใช้ในหลากหลายอุตสาหกรรม...",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "อนาคตของเทคโนโลยี Quantum Computing ในปี 2030",
    author: "jittaporn",
    date: "10 มกราคม 2026 - 14:30",
    summary:
      "Quantum Computing กำลังจะปฏิวัติวงการเทคโนโลยีและวิทยาศาสตร์ ด้วยพลังการประมวลผลที่เหนือกว่าคอมพิวเตอร์ทั่วไปหลายเท่า ส่งผลต่อหลากหลายอุตสาหกรรมตั้งแต่การแพทย์จนถึงการเงิน...",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    content:
      "Quantum Computing คือเทคโนโลยีใหม่ที่ใช้หลักการควอนตัมฟิสิกส์ในการประมวลผลข้อมูล ซึ่งสามารถแก้ปัญหาที่ซับซ้อนมาก ๆ ได้อย่างรวดเร็ว ในปี 2030 คาดว่า Quantum Computers จะมีบทบาทสำคัญในวงการวิทยาศาสตร์ เช่น การค้นคว้าทางการแพทย์ การพัฒนายาใหม่ ๆ และระบบความปลอดภัยทางไซเบอร์...",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#911D1D] to-[#8329AB] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {mockPosts.map((post, index) => (
          <article
            key={post.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="md:w-2/5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 md:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-5 md:p-6 flex flex-col">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {post.title}
              </h2>

              <div className="text-xs text-gray-500 mb-2">
                <span className="mr-2">{post.author}</span> |{" "}
                <span className="ml-2">{post.date}</span>
              </div>

              <p className="text-sm text-gray-700 line-clamp-4">
                {post.summary}
              </p>

              <div className="mt-4">
                <a
                  href="/post/1"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-200 text-xs mt-10">
        © 2024 Software Engineering, NPRU. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
