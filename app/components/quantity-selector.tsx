"use client";

export default function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const decrease = () => {
    if (value > 1) onChange(value - 1);
  };

  const increase = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
      <span className="text-sm font-semibold text-slate-900">Jumlah</span>

      <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white">
        <button
          type="button"
          onClick={decrease}
          className="h-10 w-10 text-lg font-bold text-slate-700"
        >
          -
        </button>

        <div className="flex h-10 w-12 items-center justify-center border-x border-slate-200 text-sm font-bold">
          {value}
        </div>

        <button
          type="button"
          onClick={increase}
          className="h-10 w-10 text-lg font-bold text-slate-700"
        >
          +
        </button>
      </div>
    </div>
  );
}