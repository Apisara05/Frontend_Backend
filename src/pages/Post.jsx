import React from "react";
import { FaPen } from "react-icons/fa";

const Post = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#911D1D] to-[#8329AB] p-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-3">
          KBTG วางเป้าโตด้วย Agentic AI ในปี 2025 ทำงานร่วมกับ AI เหมือนเป็นคน ๆ
          หนึ่ง
        </h1>

        {/* Date + By */}
        <p className="text-center text-sm text-gray-500">
          05 December 2024 21:11
        </p>
        <p className="text-center text-sm text-gray-700 mb-5">
          By <span className="font-semibold">@wuttha</span>
        </p>

        {/* Edit Button */}
        <div className="flex justify-center mb-8">
          <a
            href="/edit-post"
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm"
          >
            <FaPen /> Edit Post
          </a>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center mb-8">
          <a
            href="/delete-post"
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm"
          >
            <FaPen /> Delete Post
          </a>
        </div>

        {/* Content */}
        <div className="prose max-w-none text-gray-800 leading-relaxed mb-6">
          <p>
            ในช่วงที่ผ่านมาการเปลี่ยนผ่านของเทคโนโลยีด้าน AI
            ถือเป็นแนวโน้มที่เข้ามาเปลี่ยนแปลงองค์กรขนาดรวดเร็ว
            และที่สำคัญคือมีการนำไปใช้ในการดำเนินธุรกิจหลากหลายอุตสาหกรรม
            คุณเกรียงไกร บุญธนนท์ รองประธาน Group Chairman, KASIKORN
            Business-Technology Group (KBTG) ให้มุมมองว่าในปีหน้า 2025 งานกว่า
            30% ถึง 75% จะสามารถทำงานร่วมกับ AI
            ได้ในระดับที่เหมือนเป็นเพื่อนร่วมงานจริง ๆ
            และจะกลายเป็นทักษะจำเป็นของพนักงานในอนาคต
          </p>

          <p>
            ภายในเวทีงาน KBTG The Year of Agentic AI 2025 คุณเกรียงไกร KBTG
            สรุปยุทธศาสตร์ใหม่ในการนำ AI
            เข้ามาปรับใช้ในกระบวนการทำงานขององค์กรและการพัฒนาแพลตฟอร์มธุรกิจ
            เพื่อก้าวทันเทคโนโลยีในปี 2025 อย่างเต็มตัว
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://www.blognone.com/sites/default/files/news-feature-image/2025/2025-12/gemini_generated_image_p9zo4sp9zo4sp9zo.jpg"
            alt="post"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
