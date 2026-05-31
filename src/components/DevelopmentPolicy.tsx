const policies = [
  '状態遷移を明確にし、バグを追いやすくする',
  '役割ごとに処理を分け、変更しやすい構造にする',
  'チームメンバーが読みやすいコードを書く',
  'プレイヤー体験を意識して、操作感や演出を調整する',
];

export default function DevelopmentPolicy() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Development Policy</p>
        <h2>開発で意識していること</h2>
      </div>
      <div className="policy-list">
        {policies.map((policy) => (
          <p key={policy}>{policy}</p>
        ))}
      </div>
    </section>
  );
}
