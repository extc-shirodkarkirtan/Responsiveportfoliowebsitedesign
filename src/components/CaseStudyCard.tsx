import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

interface CaseStudyCardProps {
  category: string;
  title: string;
  summary: string;
  metric: string;
  thumbnail?: string;
  onClick?: () => void;
}

export function CaseStudyCard({
  category,
  title,
  summary,
  metric,
  thumbnail,
  onClick,
}: CaseStudyCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--surface)] rounded-2xl border border-[var(--border-200)] overflow-hidden transition-all hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.01] text-left w-full group"
    >
      {/* Thumbnail */}
      <div className="aspect-[4/3] bg-[var(--subsurface)] overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-[var(--border-200)] rounded-lg transform rotate-45"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <Badge
          variant="secondary"
          className="mb-3 bg-[var(--subsurface)] text-[var(--ink-700)] rounded-lg"
        >
          {category}
        </Badge>
        <h4 className="mb-2">{title}</h4>
        <p className="text-[var(--ink-700)] mb-4 line-clamp-2">{summary}</p>
        <div className="flex items-center justify-between">
          <small className="text-[var(--muted-500)]">{metric}</small>
          <span className="text-[var(--accent-600)] group-hover:text-[var(--accent-700)] flex items-center gap-1">
            <small>Read Case Study</small>
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}
