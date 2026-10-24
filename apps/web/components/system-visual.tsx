export function SystemVisual() {
  return (
    <div className="system-visual" role="img" aria-label="Abstract diagram showing shared foundations supporting independent technology initiatives">
      <div className="visual-orbit" aria-hidden="true" />
      <div className="visual-core" aria-hidden="true"><span className="core-mark">P</span><span>Shared foundation</span></div>
      <span className="node node-company" aria-hidden="true">Engineering</span>
      <span className="node node-technology" aria-hidden="true">Design</span>
      <span className="node node-products" aria-hidden="true">Systems</span>
      <span className="node node-platforms" aria-hidden="true">Security</span>
    </div>
  );
}
