declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "@/components/ui/Dither" {
  import * as React from "react";
  const Dither: React.ComponentType<any>;
  export default Dither;
}
