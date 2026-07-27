interface GradientStop {
  offset: string;
  color: string;
  opacity: number;
}

export interface AmphitheaterTheme {
  idPrefix: string;
  grad1: [GradientStop, GradientStop, GradientStop, GradientStop];
  grad2: [GradientStop, GradientStop, GradientStop];
  grad3: [GradientStop, GradientStop, GradientStop];
  fill: [GradientStop, GradientStop, GradientStop];
  glow: [GradientStop, GradientStop, GradientStop, GradientStop];
}

function Stops({ stops }: { stops: GradientStop[] }) {
  return (
    <>
      {stops.map((s) => (
        <stop key={s.offset} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity} />
      ))}
    </>
  );
}

// Dev yuvarlak konsantrik kemerler — mikro-run/jump/fly hero'larında paylaşılan
// dekoratif arkaplan. Sadece renk teması sayfadan sayfaya değişir, geometri sabit.
export default function AmphitheaterRingsBackground({ theme }: { theme: AmphitheaterTheme }) {
  const id = (name: string) => `${theme.idPrefix}${name}`;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute right-0 bottom-0 w-full h-full max-w-none pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax slice"
      >
        <defs>
          <linearGradient id={id('ArchGrad1')} x1="1440" y1="900" x2="100" y2="50" gradientUnits="userSpaceOnUse">
            <Stops stops={theme.grad1} />
          </linearGradient>

          <linearGradient id={id('ArchGrad2')} x1="1440" y1="900" x2="250" y2="150" gradientUnits="userSpaceOnUse">
            <Stops stops={theme.grad2} />
          </linearGradient>

          <linearGradient id={id('ArchGrad3')} x1="1440" y1="900" x2="400" y2="250" gradientUnits="userSpaceOnUse">
            <Stops stops={theme.grad3} />
          </linearGradient>

          <linearGradient id={id('ArchFill')} x1="1440" y1="900" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <Stops stops={theme.fill} />
          </linearGradient>

          <radialGradient id={id('OriginGlow')} cx="1350" cy="850" r="800" gradientUnits="userSpaceOnUse">
            <Stops stops={theme.glow} />
          </radialGradient>

          <filter id={id('NeonGlow')} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect x="0" y="0" width="1440" height="900" fill={`url(#${id('OriginGlow')})`} />

        <path d="M 1650 1050 C 1180 250, 650 50, -250 150 L -250 1050 Z" fill={`url(#${id('ArchFill')})`} />

        <path
          d="M 1650 1050 C 1180 250, 650 50, -250 150"
          stroke={`url(#${id('ArchGrad1')})`}
          strokeWidth="4"
          filter={`url(#${id('NeonGlow')})`}
        />

        <path
          d="M 1620 1030 C 1150 230, 630 30, -270 130"
          stroke={`url(#${id('ArchGrad1')})`}
          strokeWidth="1.5"
          strokeDasharray="10 8"
          opacity="0.8"
        />

        <path d="M 1560 1070 C 1110 320, 610 110, -220 220" stroke={`url(#${id('ArchGrad2')})`} strokeWidth="3" />
        <path
          d="M 1530 1050 C 1090 300, 590 90, -240 200"
          stroke={`url(#${id('ArchGrad2')})`}
          strokeWidth="1.2"
          strokeDasharray="6 6"
          opacity="0.6"
        />

        <path d="M 1470 1090 C 1050 390, 570 180, -180 290" stroke={`url(#${id('ArchGrad3')})`} strokeWidth="2.5" />

        <path
          d="M 1390 1120 C 990 460, 540 240, -140 360"
          stroke={`url(#${id('ArchGrad3')})`}
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M 1310 1150 C 930 520, 500 300, -100 430"
          stroke={`url(#${id('ArchGrad1')})`}
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
