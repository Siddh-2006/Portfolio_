import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isVisible: boolean;
  onToggle: () => void;
}

interface TerminalLine {
  command: string;
  output?: string;
  timestamp: string;
}

const Terminal: React.FC<TerminalProps> = ({ currentPage, onNavigate, isVisible, onToggle }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      command: 'welcome',
      output: 'Welcome to Miten\'s Portfolio Terminal! Type "help" for available commands.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    'help': {
      description: 'Show available commands',
      action: () => `
Available commands:
├─ cd <page>      Navigate to page (home, about, experience, projects, skills, contact)
├─ cd ..          Go back to previous page
├─ ls             List current page contents
├─ pwd            Show current location
├─ whoami         Display user information
├─ clear          Clear terminal
├─ exit           Close terminal
└─ skills --list  Display technical skills

Examples:
> cd about       # Navigate to about page
> cd projects    # View projects
> cd ..          # Go back
      `
    },
    'cd': {
      description: 'Navigate to different pages',
      action: (args: string[]) => {
        const page = args[0]?.toLowerCase();
        const validPages = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
        
        if (page === '..') {
          const pages = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
          const currentIndex = pages.indexOf(currentPage);
          const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : 'home';
          onNavigate(prevPage);
          return `Navigated to ${prevPage}`;
        }
        
        if (validPages.includes(page)) {
          onNavigate(page);
          return `Navigated to ${page}`;
        }
        
        return `cd: cannot access '${page}': No such directory\nTry: ${validPages.join(', ')}`;
      }
    },
    'ls': {
      description: 'List contents of current page',
      action: () => {
        const contents = {
          home: ['intro.md', 'navigation.js', 'terminal.exe'],
          about: ['education.json', 'personal-info.txt', 'interests.md'],
          experience: ['internships/', 'projects/', 'achievements.log'],
          projects: ['financio/', 'web-projects/', 'ai-models/', 'README.md'],
          skills: ['technical-skills.json', 'certifications/', 'tools.config'],
          contact: ['social-links.json', 'resume.pdf', 'contact-form.html']
        };
        return contents[currentPage as keyof typeof contents]?.join('  ') || 'Directory contents unavailable';
      }
    },
    'pwd': {
      description: 'Show current directory',
      action: () => `/home/miten/portfolio/${currentPage}`
    },
    'whoami': {
      description: 'Display current user info',
      action: () => `miten-gandhi
B.Tech AI Student at SVNIT Surat
CGPA: 9.72 | Roll No: U23AI017
Cyber Security Enthusiast | Full Stack Developer`
    },
    'clear': {
      description: 'Clear terminal screen',
      action: () => {
        setHistory([]);
        return '';
      }
    },
    'exit': {
      description: 'Close terminal',
      action: () => {
        onToggle();
        return 'Terminal closed';
      }
    },
    'skills': {
      description: 'Display technical skills',
      action: (args: string[]) => {
        if (args[0] === '--list') {
          return `
Technical Skills:
├─ Languages     Python, C++, JavaScript, TypeScript, HTML5, CSS
├─ Frameworks    React, Next.js, Node.js, TensorFlow, PyTorch
├─ Tools         Git, Docker, VS Code, Volatility, Wireshark
├─ Databases     MySQL, PostgreSQL
└─ Specialties   AI/ML, Cyber Security, Web Development
          `;
        }
        onNavigate('skills');
        return 'Navigated to skills page';
      }
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.split(' ');
    const timestamp = new Date().toLocaleTimeString();

    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const commandObj = commands[command.toLowerCase() as keyof typeof commands];
    let output = '';

    if (commandObj) {
      if (typeof commandObj.action === 'function') {
        output = commandObj.action(args);
      }
    } else {
      output = `Command '${command}' not found. Type 'help' for available commands.`;
    }

    if (command.toLowerCase() !== 'clear') {
      setHistory(prev => [...prev, { command: trimmedCmd, output, timestamp }]);
    }

    setInput('');
    setSuggestions([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Generate suggestions
    if (value) {
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => 
        cmd.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matches.slice(0, 3));
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
    }
  };

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  if (!isVisible) {
    return (
      <motion.button
        onClick={onToggle}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg font-mono text-sm transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Open Terminal
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-8 right-8 w-96 h-80 bg-black/90 backdrop-blur-md border border-green-500/30 rounded-lg overflow-hidden z-50 shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-green-500/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-green-400 text-xs font-mono">miten@portfolio:~/{currentPage}</span>
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-white text-xs"
          >
            ✕
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="h-56 overflow-y-auto p-4 font-mono text-sm scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-transparent"
        >
          {history.map((line, index) => (
            <div key={index} className="mb-2">
              <div className="text-green-400">
                <span className="text-blue-400">miten@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-purple-400">~/{currentPage}</span>
                <span className="text-white">$ {line.command}</span>
              </div>
              {line.output && (
                <pre className="text-gray-300 whitespace-pre-wrap text-xs mt-1 leading-relaxed">
                  {line.output}
                </pre>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="px-4 py-2 bg-gray-900/50 border-t border-green-500/30">
          <div className="flex items-center text-sm">
            <span className="text-blue-400">miten@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-purple-400">~/{currentPage}</span>
            <span className="text-white mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-green-400 outline-none font-mono"
              placeholder="Type 'help' for commands..."
            />
          </div>
          
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="mt-1 text-xs text-gray-500">
              Suggestions: {suggestions.join(', ')} (Tab to complete)
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Terminal;