import React, { useState } from "react";

export function StudentInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Thanavich Chaida
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold">Student Information</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ปิด
          </button>
        </div>
        <div className="p-4">
          <p>ชื่อ: Thanavich Chaida</p>
          <p>อายุ: 19</p>
          <p>เมเจอร์: Computer Engineering</p>
          <p>รหัสนักศึกษา: 680610678</p>
          <p>IG: t.ch_kj</p>
          <p>งานอดิเรก: เล่นเกม</p>
        </div>
      </div>
    </div>
  );
}
