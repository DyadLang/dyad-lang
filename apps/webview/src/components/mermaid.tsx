import mermaid from "mermaid";
import { useEffect } from "react";

mermaid.initialize({});

export const Mermaid = ({ chart, id }: { chart: string; id: string }) => {
  useEffect(() => {
    document.getElementById(id)?.removeAttribute("data-processed");
    mermaid.contentLoaded();
  }, [chart, id]);

  return (
    <div
      className="mermaid"
      id={id}
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ccc",
        justifyContent: "center",
      }}
    >
      {chart}
    </div>
  );
};
