const nodes = [
  { label: "Company", className: "node node-company" },
  { label: "Technology", className: "node node-technology" },
  { label: "Products", className: "node node-products" },
  { label: "Platforms", className: "node node-platforms" },
];

export function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Jeclazon company architecture illustration">
      <div className="visual-orbit" aria-hidden="true" />
      <div className="visual-core">
        <span className="core-mark">J</span>
        <span>Jeclazon</span>
      </div>
      {nodes.map((node) => (
        <div className={node.className} key={node.label}>
          <span className="node-dot" aria-hidden="true" />
          {node.label}
        </div>
      ))}
    </div>
  );
}
