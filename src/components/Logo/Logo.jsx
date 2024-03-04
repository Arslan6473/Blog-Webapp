import React from "react";
import { Tornado } from "lucide-react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <Tornado width={width} size={45} color="#023047" />
    </div>
  );
}

export default Logo;
