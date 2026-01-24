import Button from '../ui/Button';

export default function DashboardLayout({ children }) {
  const navItems = ["Dashboard", "Market Screener", "Validations", "Settings"];

  return (
    // Flex Column: Header (Fixed height) -> Main Content (Fills rest)
    <div className="flex flex-col h-screen bg-[#050505] text-[#e5e5e5] selection:bg-white selection:text-black antialiased overflow-hidden">
      
      {/* FULL-WIDTH HEADER WRAPPER (This handles the screen-wide underline) */}
      <div className="w-full border-b border-[#262626] bg-[#050505]/80 backdrop-blur-md z-50">
        
        {/* TOP NAVIGATION BAR (This keeps your content layout constrained) */}
        <header className="flex-none h-16 px-6 flex items-center justify-between mx-auto max-w-[1900px] w-full">
          
          {/* LEFT: Logo & Brand */}
          <div className="flex items-center gap-8 ">
            {/* Logo */}
            <div className="flex items-center gap-3 pb-2">
              <div className="h-6 w-6 bg-white/10 rounded-sm flex items-center justify-center">
                 <div className="h-3 w-3 bg-white rotate-45"></div>
              </div>
              <h1 className="text-xl font-bold tracking-tighter uppercase font-sans text-white">
                ALT-V <span className="font-mono ml-2 font-normal text-sm text-[#737373]">// Terminal</span>
              </h1>
            </div>

            {/* Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button 
                  key={item} 
                  variant="ghost" 
                  className="text-sm font-mono text-[#a3a3a3] hover:text-white hover:bg-[#262626] px-4 py-1.5"
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>

          {/* RIGHT: Status & Profile */}
          <div className="flex items-center gap-4">
              {/* System Status Indicator */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-[#0a0a0a] border border-[#262626]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-mono text-[10px] text-green-500 tracking-wider">SYSTEM ONLINE</span>
              </div>

              <div className="h-8 w-8 rounded-full bg-[#262626] border border-[#404040] hover:border-[#737373] transition cursor-pointer"></div>
          </div>
        </header>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto bg-[#050505] p-6 scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
        {/* We wrap children in a max-width container to stop it from getting too wide on huge monitors */}
        <div className="mx-auto max-w-[1600px] w-full">
          {children}
        </div>
      </main>

    </div>
  );
}