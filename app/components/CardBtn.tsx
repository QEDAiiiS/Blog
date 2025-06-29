import React from "react";



// * =======================  CARD BUTTON COMPONENT =======================
export default function CardBtn({ title, color }: { title: string, color: string }) {
  const textColor: string  = `var(--${color})`
  return (
    <button className="bg-[var(--btn-bg)] border-0 py-1 px-3 rounded-3xl"
    style={{
      color: textColor
    }}>
      {title}
    </button>
  );
}
