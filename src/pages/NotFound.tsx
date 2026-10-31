import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-xl">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400">
            Navigation Lost • 404
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Off-Radar Coordinates
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The flight path you're requesting could not be located in our agricultural grid. Let's redirect you back to base.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Krishi Udaan Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
