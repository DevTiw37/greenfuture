type ProgramCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ProgramCard({
  icon,
  title,
  description,
}: ProgramCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition group-hover:bg-green-700">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-bold text-green-950">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      {/* Link */}
      <div className="mt-6">
        <span className="text-sm font-semibold text-green-700">
          Learn more →
        </span>
      </div>
    </article>
  );
}