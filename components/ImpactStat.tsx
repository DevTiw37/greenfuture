type ImpactStatProps = {
  value: string;
  label: string;
};

export default function ImpactStat({
  value,
  label,
}: ImpactStatProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">
        {value}
      </p>

      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
        {label}
      </p>
    </div>
  );
}