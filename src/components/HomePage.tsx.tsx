import { useState } from "react";

import { CardGrid } from "./HomePage/CardGrid";
import TopImage from "./HomePage/TopImage";

function App() {
  const [selectedHouse] = useState<number | null>(null);
  return (
    <>
      <TopImage />
      <CardGrid selectedHouse={selectedHouse} />
    </>
  );
}

export default App;
