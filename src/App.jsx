import React from 'react';
import {
  Menu, Bell, Flame, ShieldCheck, TrendingUp, Plus,
  ChevronRight, RefreshCw, Plane, Car, Laptop, Award,
  Home, Target, FileText, BarChart2, Shield, Calendar, Banknote
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafc] pb-24 font-sans text-slate-800">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00895c] rounded-lg flex items-center justify-center text-white font-bold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="font-bold text-xl text-[#006e49]">Vault</span>
        </div>
        <div className="font-semibold text-[17px] text-slate-800 absolute left-1/2 -translate-x-1/2">Goals</div>
        <div>
          <img src="https://i.pravatar.cc/100?img=47" alt="Profile" className="w-9 h-9 rounded-full border border-slate-200" />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-4 space-y-4 max-w-lg mx-auto">

        {/* Top Banners */}
        <div className="flex gap-3">
          <div className="flex-1 bg-[#ffdfba] rounded-full px-3 py-2 flex items-center justify-center gap-1.5 shadow-sm">
            <Flame className="w-4 h-4 text-[#bf5e00]" />
            <span className="text-xs font-bold text-[#803d00]">14-week savings streak!</span>
          </div>
          <div className="flex-1 bg-white rounded-full px-3 py-2 flex items-center justify-center gap-1.5 shadow-sm border border-slate-100">
            <ShieldCheck className="w-4 h-4 text-[#00895c]" />
            <span className="text-xs font-bold text-slate-700">Auto-pilot Active</span>
          </div>
        </div>

        {/* Total Stashed Balance Card */}
        <div className="bg-[#1e2e38] rounded-2xl p-5 text-white shadow-md relative overflow-hidden">

          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-[#3edfa4] text-[11px] font-bold tracking-widest mb-1 uppercase">Total Stashed Balance</p>
              <div className="flex items-baseline gap-1">
                <h1 className="text-4xl font-bold">$34,850</h1>
                <span className="text-slate-400 text-sm font-medium ml-1">/ $50k goal</span>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="relative w-14 h-14 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-slate-600/50" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                <path className="text-[#3edfa4]" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-[#3edfa4]">70%</span>
              </div>
            </div>
          </div>

          <div className="mb-6 relative z-10">
            <div className="w-full bg-slate-700/50 rounded-full h-2.5 mb-2">
              <div className="bg-[#3edfa4] h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-300">
              <span>Overall completion</span>
              <span className="text-white font-bold">$15,150 remaining</span>
            </div>
          </div>

          <div className="flex justify-between items-end relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#174636] flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#3edfa4]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Automated Pace</p>
                <p className="font-bold text-sm">+$1,450 / month</p>
              </div>
            </div>
            <button className="bg-[#00895c] hover:bg-[#007a52] text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 transition-colors">
              <Plus className="w-4 h-4" /> New Goal
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-2 scrollbar-hide">
          <button className="whitespace-nowrap bg-[#006e49] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">All Goals (4)</button>
          <button className="whitespace-nowrap bg-[#eff2f9] text-slate-600 px-5 py-2.5 rounded-full text-sm font-semibold">High Priority</button>
          <button className="whitespace-nowrap bg-[#eef3fb] text-slate-600 px-5 py-2.5 rounded-full text-sm font-semibold">Long Term</button>
          <button className="whitespace-nowrap bg-[#eef3fb] text-slate-600 px-5 py-2.5 rounded-full text-sm font-semibold">Short Term</button>
        </div>

        {/* Goals List */}
        <div className="space-y-4">

          {/* Round-Up Booster */}
          <div className="bg-[#f5f6fc] rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#a3f3cc] rounded-[18px] flex items-center justify-center mt-1 border border-emerald-100">
                  <RefreshCw className="w-6 h-6 text-[#006e49]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Round-Up Booster</h3>
                  <p className="text-slate-500 text-[13px] leading-snug mt-1">Stashed <span className="font-bold text-[#00895c]">$64.80</span> this week from<br/>spare change</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 mt-1">
                <span className="bg-[#5ce1a1] text-[#005a3b] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Active</span>
                <button className="bg-white text-[#006e49] text-[13px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 border border-slate-100">
                  <Flame className="w-3.5 h-3.5" /> +$50 Boost
                </button>
              </div>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2 mt-2">
              <div className="bg-[#00895c] h-1.5 rounded-full" style={{ width: '64.8%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500">
              <span>Weekly Round-Up Target ($100.00)</span>
              <span className="text-[#00895c]">$35.20 to target</span>
            </div>
          </div>

          {/* Emergency Buffer */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#e0faee] rounded-[18px] flex items-center justify-center mt-1">
                  <Shield className="w-6 h-6 text-[#006e49]" />
                </div>
                <div>
                  <h3 className="font-bold text-[19px] text-slate-800">Emergency Buffer</h3>
                  <p className="text-slate-500 text-[13px] leading-snug mt-0.5">Liquid safety cushion • 6<br/>months</p>
                </div>
              </div>
              <div className="bg-[#7ef1ba] text-[#005a3b] text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 mt-1 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" /> 4.85% APY
              </div>
            </div>

            <div className="flex items-baseline gap-1.5 mb-2 mt-2">
              <span className="text-2xl font-bold text-slate-800">$12,400</span>
              <span className="text-slate-400 text-[15px]">/ $15,000</span>
              <span className="ml-auto text-[#006e49] font-bold text-sm">82%</span>
            </div>
            <div className="w-full bg-[#f0f2f5] rounded-full h-2 mb-4">
              <div className="bg-[#006e49] h-2 rounded-full" style={{ width: '82%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-[#eaf1fb] text-[#1c3f60] text-[13px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" /> Auto-transfer: +$350/mo
              </div>
              <button className="text-[#006e49] font-bold text-[13px] flex items-center">
                Deposit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Kyoto Trip 2025 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#d1ddf8] rounded-[18px] flex items-center justify-center mt-1">
                  <Plane className="w-6 h-6 text-[#4a5a7b]" />
                </div>
                <div>
                  <h3 className="font-bold text-[19px] text-slate-800">Kyoto Trip 2025</h3>
                  <p className="text-slate-500 text-[13px] leading-snug mt-0.5">Autumn foliage • Target: Oct<br/>2025</p>
                </div>
              </div>
              <div className="bg-[#d1e0fc] text-[#1c3f60] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 leading-snug mt-1 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00895c]" /> Flights<br/>booked
              </div>
            </div>

            <div className="mb-4 rounded-[14px] overflow-hidden h-28 relative mt-2">
              <img src="/kyoto.png" alt="Kyoto" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                <span className="text-white text-[11px] font-bold">Autumn Journey • 8 months left</span>
              </div>
            </div>

            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-2xl font-bold text-slate-800">$3,800</span>
              <span className="text-slate-400 text-[15px]">/ $5,000</span>
              <span className="ml-auto text-[#4a5a7b] font-bold text-sm">76%</span>
            </div>
            <div className="w-full bg-[#eaf1fb] rounded-full h-2 mb-4">
              <div className="bg-[#6b7c9e] h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-[#eef3fb] text-[#4a5a7b] text-[13px] font-bold px-3 py-1.5 rounded-[10px] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> +$200/mo needed pace
              </div>
              <button className="text-[#006e49] font-bold text-[13px] flex items-center">
                Deposit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tesla Model Y */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#fbdfb7] rounded-[18px] flex items-center justify-center mt-1">
                  <Car className="w-6 h-6 text-[#613601]" />
                </div>
                <div>
                  <h3 className="font-bold text-[19px] text-slate-800 leading-snug">Tesla Model Y<br/>Downpayment</h3>
                  <p className="text-slate-500 text-[13px] leading-snug mt-1">Long-term asset • Target: Dec<br/>2025</p>
                </div>
              </div>
              <div className="bg-[#ebd1b3] text-[#784d12] text-[11px] font-bold px-3 py-1.5 rounded-full leading-snug text-center mt-1 shadow-sm">
                High<br/>Priority
              </div>
            </div>

            <div className="flex items-baseline gap-1.5 mb-2 mt-3">
              <span className="text-2xl font-bold text-slate-800">$14,200</span>
              <span className="text-slate-400 text-[15px]">/ $20,000</span>
              <span className="ml-auto text-[#9e4a00] font-bold text-sm">71%</span>
            </div>
            <div className="w-full bg-[#f0f2f5] rounded-full h-2 mb-4">
              <div className="bg-[#a86500] h-2 rounded-full" style={{ width: '71%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-[#eef3fb] text-[#4a5a7b] text-[13px] font-bold px-3 py-1.5 rounded-[10px] flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-[#a86500]" /> Saved $5,800 to milestone
              </div>
              <button className="text-[#006e49] font-bold text-[13px] flex items-center">
                Deposit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MacBook Pro M4 Max */}
          <div className="bg-[#f0f4fb] rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#d1ddf8] rounded-[18px] flex items-center justify-center mt-1">
                  <Laptop className="w-6 h-6 text-[#294c6f]" />
                </div>
                <div>
                  <h3 className="font-bold text-[19px] text-slate-800">MacBook Pro M4 Max</h3>
                  <p className="text-slate-500 text-[13px] leading-snug mt-0.5">Creator setup • Target: March<br/>2025</p>
                </div>
              </div>
              <div className="bg-[#b7efd7] text-[#00472f] text-[11px] font-bold px-3 py-1.5 rounded-full leading-snug text-center mt-1 shadow-sm">
                Almost<br/>There
              </div>
            </div>

            <div className="flex items-baseline gap-1.5 mb-2 mt-3">
              <span className="text-2xl font-bold text-slate-800">$2,450</span>
              <span className="text-slate-400 text-[15px]">/ $3,200</span>
              <span className="ml-auto text-[#006e49] font-bold text-sm">76%</span>
            </div>
            <div className="w-full bg-[#d1ddf8] rounded-full h-2 mb-4">
              <div className="bg-[#00895c] h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-[#e4ebf8] text-[#345b80] text-[13px] font-bold px-3 py-1.5 rounded-[10px] flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                </div>
                +$750 left for checkout
              </div>
              <button className="text-[#006e49] font-bold text-[13px] flex items-center">
                Deposit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#f8f9fc] rounded-2xl p-4 flex items-center gap-3 mt-4 border border-slate-100 shadow-sm">
            <div className="w-11 h-11 bg-[#b7efd7] rounded-full flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#006e49]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-[14px]">You are $750 away from next milest...</h4>
              <p className="text-slate-500 text-[13px] mt-0.5">MacBook goal completes in 2 weeks at...</p>
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-[#f8f9fa] border-t border-slate-200 px-6 py-2 flex justify-between items-center z-50 pb-safe">
        <div className="flex flex-col items-center gap-1 text-slate-500 mt-1">
          <Home className="w-[26px] h-[26px]" />
          <span className="text-[11px] font-semibold">Dashboard</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#006e49] relative mt-1">
          <Target className="w-[26px] h-[26px] fill-[#006e49] text-white stroke-[1.5]" />
          <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
            <RefreshCw className="w-3 h-3 text-[#006e49]" />
          </div>
          <span className="text-[11px] font-bold">Goals</span>
        </div>

        {/* Floating Action Button */}
        <div className="relative -top-5 flex flex-col items-center">
          <div className="w-14 h-14 bg-[#006e49] rounded-full flex items-center justify-center shadow-lg shadow-[#006e49]/30 text-white border-[3px] border-white">
            <Plus className="w-7 h-7" strokeWidth="2.5" />
          </div>
          <span className="text-[11px] font-semibold text-slate-600 mt-0.5">Deposit</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-slate-500 mt-1">
          <FileText className="w-[26px] h-[26px]" />
          <span className="text-[11px] font-semibold">Activity</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500 mt-1">
          <BarChart2 className="w-[26px] h-[26px]" />
          <span className="text-[11px] font-semibold">Analytics</span>
        </div>
      </nav>

    </div>
  );
}

export default App;
