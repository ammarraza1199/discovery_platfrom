

export const WebinarBanner = () => {
  return (
    <div className="bg-gradient text-white px-4 py-2 text-center text-sm font-medium flex flex-col md:flex-row items-center justify-center gap-2 lg:gap-4">
      <span><strong className="font-bold">Pharma.ai Webinar</strong> — 2026 Q1 Spring Kickoff</span>
      <span className="hidden md:inline">•</span>
      <span>Tuesday, April 14, 10:00 – 11:00 am EST</span>
      <button className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all ml-0 md:ml-4">
        Register for On-Demand Access
      </button>
    </div>
  );
};
