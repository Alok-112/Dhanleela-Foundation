import React from "react";

export default function Stats() {
  const stats = [
    { label: "Meals Served", value: "1.2M+" },
    { label: "Children Helped", value: "8,000+" },
    { label: "Districts Covered", value: "25+" },
  ];

  return (
    <section className="bg-green-50 py-8 px-4 grid md:grid-cols-3 gap-4 text-center">
      {stats.map((item, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold text-green-700">{item.value}</h2>
          <p className="text-gray-700">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
