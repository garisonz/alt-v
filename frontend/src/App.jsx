import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      
      {/* This is the "children" passed to the layout */}
      <div className="space-y-6">
        
        {/* Page Title */}
        <div className="flex items-end justify-between border-b border-[#262626] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Macro Overview</h2>
            <p className="font-mono text-sm text-[#737373] mt-1">Real-time lagging vs. leading indicators</p>
          </div>
          <div className="font-mono text-xs text-[#525252]">
            LAST UPDATE: <span className="text-[#e5e5e5]">10:42:05 UTC</span>
          </div>
        </div>

        {/* Content Placeholder (Where we will put Metric Cards later) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-32 rounded border border-[#262626] bg-[#0a0a0a] p-4">
            <span className="font-mono text-xs text-[#525252]">GDP (OFFICIAL)</span>
          </div>
          <div className="h-32 rounded border border-[#262626] bg-[#0a0a0a] p-4">
             <span className="font-mono text-xs text-[#525252]">GDP (ALT-V PREDICTION)</span>
          </div>
          <div className="h-32 rounded border border-[#262626] bg-[#0a0a0a] p-4">
             <span className="font-mono text-xs text-[#525252]">VOLATILITY INDEX</span>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default App;