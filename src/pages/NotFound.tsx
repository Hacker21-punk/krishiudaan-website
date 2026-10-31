import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-[#080e15] text-slate-900 dark:text-slate-100 min-h-[70vh] flex items-center justify-center py-20 px-4 transition-colors duration-200">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800/60 shadow-md">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Navigation Lost • 404
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Off-Radar Coordinates
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The flight path you're requesting could not be located in our agricultural grid. Let's redirect you back to base.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Krishi Udaan Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
