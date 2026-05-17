import { useEffect, useState } from "react";

export function useDevice() {
  const [device, setDevice] = useState<"mobile" | "sm" | "md" | "lg" | "xl">(
    "mobile",
  );

  useEffect(() => {
    const updateDevice = () => {
      const WindowWidth = window.innerWidth;
      if (WindowWidth < 376) setDevice("mobile");
      else if (WindowWidth < 768) setDevice("sm");
      else if (WindowWidth < 1290) setDevice("md");
      else if (WindowWidth < 1290) setDevice("lg");
      else setDevice("xl");
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return device;
}
