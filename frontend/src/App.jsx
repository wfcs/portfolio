import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, Database, Activity, GitCommit, GitPullRequest, Layers, HardDrive } from 'lucide-react'

// Terminal-like Header for pages
const PageHeader = ({ title, subtitle, icon: Icon }) => (
  <div className="mb-8 pb-4 border-b border-zinc-800">
    <div className="flex items-center gap-3 text-cyan-400 mb-2">
      <Icon size={24} />
      <h1 className="text-3xl font-display font-medium tracking-tight uppercase text-zinc-100">{title}</h1>
    </div>
    <span className="text-sm font-mono text-zinc-500 block">/* {subtitle} */</span>
  </div>
)

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const Home = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
    <div className="panel-raw border-l-4 border-l-cyan-400">
      <span className="data-label">SYSTEM.STATUS</span>
      <h1 className="text-4xl md:text-6xl font-display font-bold text-zinc-100 mt-2 mb-4 leading-tight">
        DATA OPS &<br />
        <span className="text-cyan-400">ANALYTICS ENG</span>
      </h1>
      <p className="font-mono text-zinc-400 max-w-2xl leading-relaxed mb-8 text-sm">
        [PROFILE_LOAD] Senior BI Analyst transitioning to Analytics Engineering.
        Specializing in Microsoft Fabric, Dimensional Modeling, and high-performance DAX architectures.
        Transforming raw telemetry into governed, scalable decision engines.
      </p>
      <div className="flex flex-wrap gap-4">
        <MotionLink
          to="/experience"
          className="btn-structured btn-cyan flex items-center gap-2"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(0 240 255 / 0.8)", boxShadow: "0px 0px 15px rgb(0 240 255 / 0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Activity size={16} /> Execute: View_Timeline
        </MotionLink>
        <motion.a
          href="https://github.com/wfcs/"
          target="_blank"
          rel="noreferrer"
          className="btn-structured border-zinc-700 text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Terminal size={16} /> Init: GitHub
        </motion.a>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="panel-raw">
        <span className="data-label">CORE.NODE_01</span>
        <HardDrive size={20} className="text-yellow-400 mb-3" />
        <h3 className="font-display font-bold text-zinc-200 mb-2">Architectural Mapping</h3>
        <p className="text-xs text-zinc-500 font-mono">Star Schemas, DataVault, Semantic Layers</p>
      </div>
      <div className="panel-raw">
        <span className="data-label">CORE.NODE_02</span>
        <Layers size={20} className="text-cyan-400 mb-3" />
        <h3 className="font-display font-bold text-zinc-200 mb-2">Fabric Ecosystem</h3>
        <p className="text-xs text-zinc-500 font-mono">Lakehouse, Dataflows Gen2, Semantic Link</p>
      </div>
      <div className="panel-raw">
        <span className="data-label">CORE.NODE_03</span>
        <Database size={20} className="text-zinc-300 mb-3" />
        <h3 className="font-display font-bold text-zinc-200 mb-2">Engine Performance</h3>
        <p className="text-xs text-zinc-500 font-mono">DAX Optimization, SQL Server, Python</p>
      </div>
    </div>
  </motion.div>
)

const Experience = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <PageHeader title="Execution_Log" subtitle="Professional timeline and structural changes" icon={GitCommit} />

    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
      {/* Target API Payload Simulation */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-400 bg-zinc-900 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,240,255,0.2)] z-10">
          <Activity size={16} />
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] panel-raw p-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="data-label">ACTIVE_THREAD</span>
              <h3 className="font-display font-bold text-lg text-zinc-100">Sr. Center of Excellence Analyst</h3>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 border border-cyan-400/20">CURRENT</span>
          </div>
          <p className="text-sm font-display text-zinc-300 mb-3">Unidas Frotas // Oct 2024 - Present</p>
          <ul className="text-xs font-mono text-zinc-500 space-y-2 list-none">
            <li className="flex gap-2"><span className="text-cyan-400">&gt;</span> Modernizing analytics platform towards MS Fabric.</li>
            <li className="flex gap-2"><span className="text-cyan-400">&gt;</span> Developing strategic dashboards with advanced DAX.</li>
            <li className="flex gap-2"><span className="text-cyan-400">&gt;</span> Leading BI initiatives from scope to delivery.</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
)

const Projects = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <PageHeader title="System_Modules" subtitle="Structural assets and repository architecture" icon={GitPullRequest} />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="panel-raw group">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Database size={20} className="text-cyan-400" />
            <h3 className="font-display font-bold text-xl text-zinc-100">dCalendarioSimples</h3>
          </div>
          <span className="text-xs font-mono text-zinc-500">v1.0</span>
        </div>
        <div className="mb-4">
          <span className="data-label">PROBLEM_SPACE</span>
          <p className="text-xs text-zinc-400 font-mono mb-3">Inconsistent temporal analysis across disparate BI reports causing semantic fragmentation.</p>
          <span className="data-label">RESOLUTION</span>
          <p className="text-xs text-zinc-400 font-mono">A standardized, highly-performant DAX dimensional model ensuring absolute consistency in time-intelligence.</p>
        </div>
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-800">
          <div className="flex gap-2">
            <span className="px-2 py-1 text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">DAX</span>
            <span className="px-2 py-1 text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">Modelling</span>
          </div>
          <a href="https://github.com/wfcs/dCalendarioSimples" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">Inspect Source -&gt;</a>
        </div>
      </div>

      {/* Second module */}
      <div className="panel-raw group">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-yellow-400" />
            <h3 className="font-display font-bold text-xl text-zinc-100">semantic-link-labs</h3>
          </div>
          <span className="text-xs font-mono text-zinc-500">fork</span>
        </div>
        <div className="mb-4">
          <span className="data-label">PROBLEM_SPACE</span>
          <p className="text-xs text-zinc-400 font-mono mb-3">Bridging the gap between Power BI semantic models and Python data science workflows in Azure.</p>
          <span className="data-label">RESOLUTION</span>
          <p className="text-xs text-zinc-400 font-mono">Contributing to Microsoft Fabric's Semantic Link to expose enterprise data models to programmatic analysis.</p>
        </div>
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-800">
          <div className="flex gap-2">
            <span className="px-2 py-1 text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">Python</span>
            <span className="px-2 py-1 text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300">Fabric</span>
          </div>
          <a href="https://github.com/wfcs/semantic-link-labs" className="text-xs font-mono text-yellow-400 hover:text-yellow-300">Inspect Source -&gt;</a>
        </div>
      </div>
    </div>
  </motion.div>
)

function App() {
  const location = useLocation();

  const navLinks = [
    { name: 'INDEX', path: '/', icon: <Terminal size={18} /> },
    { name: 'EXEC_LOG', path: '/experience', icon: <GitCommit size={18} /> },
    { name: 'REQUIREMENTS', path: '/projects', icon: <Database size={18} /> },
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-72 bg-zinc-950/80 backdrop-blur-md border-r border-zinc-800 p-6 flex flex-col relative z-20">
        <div className="mb-12">
          <div className="w-12 h-12 bg-zinc-900 border-2 border-cyan-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="font-display font-bold text-xl text-cyan-400">FS</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-zinc-100 tracking-tight uppercase">Felipe Silva</h2>
          <p className="text-xs font-mono text-zinc-500 mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            SYS.ARCHITECT // DATA
          </p>
        </div>

        <nav className="flex-1 space-y-1">
          <span className="data-label mb-4">NAVIGATION_ROUTER</span>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <MotionLink
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-mono transition-all duration-200 border-l-2 ${isActive
                  ? 'border-cyan-400 bg-cyan-400/5 text-cyan-400'
                  : 'border-transparent text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-300'
                  }`}
                whileHover={{ x: 5, backgroundColor: "rgba(39, 39, 42, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.icon}
                {link.name}
              </MotionLink>
            )
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-800">
          <span className="data-label mb-3">EXTERNAL_LINKAGES</span>
          <div className="flex gap-4 text-zinc-500 font-mono text-xs">
            <motion.a
              href="https://linkedin.com/in/wfcs93"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors underline decoration-zinc-700 underline-offset-4"
              whileHover={{ y: -2, color: "#00f0ff" }}
            >
              LINKEDIN
            </motion.a>
            <motion.a
              href="https://github.com/wfcs/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors underline decoration-zinc-700 underline-offset-4"
              whileHover={{ y: -2, color: "#00f0ff" }}
            >
              GITHUB
            </motion.a>
          </div>
        </div>
      </aside>

      <main className="flex-1 relative z-10 w-full">
        {/* Glow effects simulating CRT or energy fields */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="p-6 md:p-12 md:max-w-5xl mx-auto h-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
