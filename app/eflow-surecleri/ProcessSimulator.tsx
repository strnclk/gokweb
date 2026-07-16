'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Coins,
  Cpu,
  Database,
  FileCheck,
  FileText,
  Layers,
  Settings,
  Smartphone,
  ArrowRightLeft,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { processes, type IconKey } from './processes';

const ICONS: Record<IconKey, LucideIcon> = {
  smartphone: Smartphone,
  cpu: Cpu,
  check: CheckCircle2,
  database: Database,
  file: FileText,
  swap: ArrowRightLeft,
  fileCheck: FileCheck,
  coins: Coins,
  layers: Layers,
  users: Users,
  settings: Settings,
};

const QUERY_KEY = 'surec';

export default function ProcessSimulator() {
  const [activeProcess, setActiveProcess] = useState<string>(processes[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Derin bağlantı desteği. useSearchParams yerine mount sonrası okuma
  // yapılıyor: aksi halde Suspense sınırına kadarki ağaç istemcide render
  // edilir ve süreç içerikleri ilk HTML'den (dolayısıyla taramadan) düşerdi.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get(QUERY_KEY);
    if (requested && processes.some((p) => p.id === requested)) {
      setActiveProcess(requested);
    }
  }, []);

  const selectProcess = (id: string) => {
    setActiveProcess(id);
    const url = new URL(window.location.href);
    url.searchParams.set(QUERY_KEY, id);
    window.history.replaceState(null, '', url);
  };

  // WAI-ARIA tabs deseni: ok tuşlarıyla dolaş, Home/End ile uçlara git.
  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const lastIndex = processes.length - 1;
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = lastIndex;

    if (nextIndex === null) return;
    event.preventDefault();
    selectProcess(processes[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <>
      {/* Sekmeler */}
      <div
        role="tablist"
        aria-label="E-Flow süreçleri"
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {processes.map((proc, index) => {
          const isSelected = activeProcess === proc.id;
          return (
            <button
              key={proc.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`tab-${proc.id}`}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={`panel-${proc.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => selectProcess(proc.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xl scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {proc.name}
            </button>
          );
        })}
      </div>

      {/* Paneller. Tümü DOM'da: pasif olanlar `hidden` ile gizlenir, böylece
          dört sürecin metni de ilk HTML'de yer alır ve taranabilir. */}
      {processes.map((process) => {
        const isSelected = activeProcess === process.id;
        return (
          <div
            key={process.id}
            id={`panel-${process.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${process.id}`}
            hidden={!isSelected}
            tabIndex={0}
            className={
              isSelected
                ? 'animate-fade-up bg-slate-50 border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-sm relative overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'
                : undefined
            }
          >
            {/* Yumuşak arka plan parıltısı */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
              {/* Sol sütun: açıklama ve temel faydalar */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-black text-purple-600 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full inline-block">
                  Süreç Detayları
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 leading-snug">
                  {process.name}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">{process.longDesc}</p>

                <div className="space-y-3.5 pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wide">
                    Bu Sürecin Temel Faydaları
                  </h4>
                  {process.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ sütun: adım adım iş akışı */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest block text-center lg:text-left mb-2">
                  Adım Adım İş Akışı
                </span>

                <ol className="relative pl-4 border-l-2 border-slate-200/80 ml-2 grid gap-5 list-none">
                  {process.steps.map((step, idx) => {
                    const IconComponent = ICONS[step.icon];
                    return (
                      <li
                        key={step.title}
                        className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row items-start gap-4 relative group"
                      >
                        {/* Sol kenardaki adım işaretçisi */}
                        <div
                          className={`absolute -left-[27px] top-[26px] w-4.5 h-4.5 rounded-full ${step.color} border-4 border-white shadow-sm`}
                          aria-hidden="true"
                        />

                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color} shadow-md`}
                        >
                          <IconComponent size={20} aria-hidden="true" />
                        </div>

                        <div className="space-y-1 text-left">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-extrabold text-slate-500">
                              ADIM {idx + 1}
                            </span>
                            <span
                              className="w-1 h-1 bg-slate-300 rounded-full"
                              aria-hidden="true"
                            />
                            <span className="text-xs font-extrabold text-slate-500 uppercase">
                              Rol: {step.role}
                            </span>
                          </div>
                          <h4 className="text-base font-black text-slate-900">{step.title}</h4>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
