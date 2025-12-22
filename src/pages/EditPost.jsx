import React from "react";

const EditPost = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#911D1D] to-[#8329AB] p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-8">Edit Post</h1>

        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              defaultValue="KBTG ร่วมเปิดสมอง Agentic AI ในปี 2025 ทำงานร่วมกับ AI เหมือนเป็นคน ๆ หนึ่ง"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Summary
            </label>
            <input
              type="text"
              defaultValue="ในเวทีที่ผ่านมามีการพูดถึงแนวทาง AI ยุคใหม่ที่ผสานเทคโนโลยีเข้ากับบทบาทเปลี่ยนแปลงองค์กรอย่างรวดเร็ว..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>

            <div className="border border-gray-300 rounded-md">
              {/* Toolbar mock */}
              <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 bg-gray-50 text-sm text-gray-600">
                <button type="button" className="font-bold">
                  B
                </button>
                <button type="button" className="italic">
                  I
                </button>
                <button type="button" className="underline">
                  U
                </button>
                <span className="h-5 w-px bg-gray-300 mx-2" />
                <button type="button">H1</button>
                <button type="button">H2</button>
                <span className="h-5 w-px bg-gray-300 mx-2" />
                <button type="button">•</button>
                <button type="button">1.</button>

                <div className="ml-auto flex items-center gap-2">
                  <span>Normal</span>
                  <span>Normal</span>
                </div>
              </div>

              <textarea
                className="w-full h-48 p-3 text-sm border-0 rounded-b-md focus:outline-none focus:ring-0 resize-none"
                defaultValue={`ในช่วงที่ผ่านมาภาพ AI ยุคใหม่ได้เปลี่ยนแปลงอย่างรวดเร็วและมีผลต่อธุรกิจจำนวนมาก ...
(ใส่เนื้อหาบทความเต็ม ๆ ของคุณตรงนี้)`}
              />
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-1.5 file:px-3 file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
            />
          </div>

          {/* Update button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
