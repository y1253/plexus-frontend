import { useState } from "react";

import { CardGrid } from "./HomePage/CardGrid";

function App() {
  const [selectedHouse] = useState<number | null>(null);
  return (
    <>
      <CardGrid selectedHouse={selectedHouse} />
    </>
  );
}

export default App;
