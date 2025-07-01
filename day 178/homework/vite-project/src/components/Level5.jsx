import { useColor } from "../context/ColorContext";

function Level5() {
  const { isDark } = useColor();

  return (
    <div
      className={`p-6 rounded-xl transition-all duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p className="text-center font-semibold">დაბოლოებითი კომპონენტი</p>
    </div>
  );
}

export default Level5;
