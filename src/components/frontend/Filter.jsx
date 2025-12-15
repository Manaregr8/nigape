// components/FilterBar.jsx
export default function FilterBar({ categories, selectedCategory, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-5 py-2.5 rounded-full font-medium transition-all ${
            selectedCategory === cat.id
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100 border"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}