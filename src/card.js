export default function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/random"
        alt="Random"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Tailwind CSS 练习</h2>
        <p className="text-gray-700 mb-4">
          使用 Tailwind 快速创建美观的 UI 组件！
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          了解更多
        </button>
      </div>
    </div>
  );
}
