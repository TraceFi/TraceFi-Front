interface Props {
  name: string;
  setName: (val: string) => void;
  address: string;
  setAddress: (val: string) => void;
}

export default function WalletInput({ name, setName, address, setAddress }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm mb-2 block text-white">Wallet Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border border-white/10 text-white p-2 rounded-xl outline-none"
          placeholder="Ex: My Wallet"
        />
      </div>

      <div>
        <label className="text-sm mb-2 block text-white">Wallet Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-transparent border border-white/10 text-white p-2 rounded-xl outline-none"
          placeholder="Ex: A3vX...JTu"
        />
      </div>
    </div>
  );
}
