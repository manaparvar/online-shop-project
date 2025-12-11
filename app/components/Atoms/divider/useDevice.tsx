import { useEffect, useState } from "react";

export function useDevice() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );

  useEffect(() => {
    const updateDevice = () => {
      const WindowWidth = window.innerWidth;
      if (WindowWidth < 376) setDevice("mobile");
      else if (WindowWidth < 1023) setDevice("tablet");
      else setDevice("desktop");
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return device;
}
