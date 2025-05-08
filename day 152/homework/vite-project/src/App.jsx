import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";
import Text from "./components/Text";
import Profile from "./components/Profile";

export default function App() {
  const names = ["Daviti", "Luka", "Lasha", "Nika"];

  const randomBoxes = Array.from({ length: 10 }, () => ({
    number: Math.floor(Math.random() * 100),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  }));

  const [text, setText] = useState("");
  const bools = Array.from({ length: 100 }, () => Math.random() < 0.5);
  const profiles = [
    {
      name: "Daviti",
      phone: "599-448-960",
      email: "data.poshki2020@gmail.com",
      isFavorite: true,
    },
    {
      name: "Luka",
      phone: "555-123-456",
      email: "Luka.Tskhvara@gmail.com",
      isFavorite: true,
    },
    {
      name: "Lasha",
      phone: "555-999-888",
      email: "lasha.Lomi@gmail.com",
      isFavorite: true,
    },
    {
      name: "Nika",
      phone: "555-345-457",
      email: "Nika.GOAT@gmail.com",
      isFavorite: true,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* ამოცანა 1 */}
      <section>
        <h2 className="text-xl font-bold">ამოცანა 1: H1 თეგები</h2>
        {names.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </section>

      {/* ამოცანა 2 */}
      <section>
        <h2 className="text-xl font-bold">ამოცანა 2: რენდომ Box-ები</h2>
        <div className="flex flex-wrap">
          {randomBoxes.map((box, index) => (
            <Box key={index} number={box.number} color={box.color} />
          ))}
        </div>
      </section>

      {/* ამოცანა 3 */}
      <section>
        <h2 className="text-xl font-bold">ამოცანა 3: Input + Text</h2>
        <Input onChange={setText} />
        <Text value={text} />
      </section>

      {/* ამოცანა 4 */}
      <section>
        <h2 className="text-xl font-bold">ამოცანა 4: True/False (0/1)</h2>
        <div className="flex flex-wrap gap-1">
          {bools.map((value, index) => (
            <span key={index} className="text-sm">
              {value ? "1" : "0"}
            </span>
          ))}
        </div>
      </section>

      {/* ამოცანა 5 */}
      <section>
        <h2 className="text-xl font-bold">ამოცანა 5: პროფილები და ვარსკვლავი</h2>
        {profiles.map((p, i) => (
          <Profile key={i} profile={p} />
        ))}
      </section>
    </div>
  );
}
