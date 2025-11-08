interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  result?: string;
  logo?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  result,
  logo,
}: TestimonialCardProps) {
  return (
    <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border-200)] shadow-[var(--shadow-card)] h-full flex flex-col">
      {logo && (
        <div className="mb-6 h-8 flex items-center">
          <img src={logo} alt={company} className="h-full w-auto opacity-60" />
        </div>
      )}
      
      <blockquote className="mb-6 flex-grow">
        <p className="text-[var(--ink-700)] italic">"{quote}"</p>
      </blockquote>

      <div className="mt-auto">
        <p className="text-[var(--ink-900)] font-medium">{name}</p>
        <p className="text-[var(--muted-500)]">
          <small>{role}, {company}</small>
        </p>
        {result && (
          <p className="mt-3 text-[var(--accent-600)]">
            <small>{result}</small>
          </p>
        )}
      </div>
    </div>
  );
}
