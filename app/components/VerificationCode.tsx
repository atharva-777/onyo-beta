"use client";
import React, { useState } from "react";

function VerificationCode() {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input if current one is filled
      if (value !== "" && index < 3) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const previousInput = document.getElementById(`digit-${index - 1}`);
      previousInput?.focus();
    }
  };

  return (
    <div className="mt-5 flex flex-col">
      <label className="mb-1 text-sm text-black text-opacity-70">
        Enter Code
      </label>
      <div className="flex gap-2">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`digit-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="h-12 w-12 rounded-lg border border-gray-300 text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        ))}
      </div>
      <p className="mt-2 text-[10px] text-black">
        We have sent you a 4 digit code to your mail.{" "}
        <button className="cursor-pointer px-1 font-semibold text-blue-600 underline underline-offset-2">
          Resend
        </button>
      </p>
    </div>
  );
}

export default VerificationCode;
