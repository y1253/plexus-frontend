import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { defaultSystem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "bootstrap/dist/css/bootstrap.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routs.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
