const nodes = [
  { label: "Company", className: "node node-company" },
  { label: "Technology", className: "node node-technology" },
  { label: "Products", className: "node node-products" },
  { label: "Platforms", className: "node node-platforms" },
];

export function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Pectrium company architecture illustration">
      <div className="visual-orbit" aria-hidden="true" />
      <div className="visual-core">
        <span className="core-mark">P</span>
        <span>Pectrium</span>
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
