import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white text-slate-900 min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-md">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Navigation Lost • 404
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Off-Radar Coordinates
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The flight path you're requesting could not be located in our agricultural grid. Let's redirect you back to base.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Krishi Udaan Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}