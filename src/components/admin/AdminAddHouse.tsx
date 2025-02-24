import { Button } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import { useNavigate } from "react-router-dom";

export const AdminAddHouse = () => {
  const navigateRoute = useNavigate();
  return (
    <Tooltip content="This is the tooltip content">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateRoute("/admin/input")}
      >
        Add
      </Button>
    </Tooltip>
  );
};
