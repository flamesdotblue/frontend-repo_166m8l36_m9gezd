import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer id="contact" className="relative z-10 bg-neutral-950 pb-24 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Ready to find your next home?</h3>
              <p className="mt-2 max-w-xl text-white/70">
                Schedule a private tour or speak with our property specialists today.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center md:w-auto">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-neutral-900 transition hover:bg-white/90"
              >
                <Phone className="h-4 w-4" />
                Call us
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Book a tour
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Residency — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterCTA;
