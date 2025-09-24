import { useThemeStore } from "../store/useThemeStore.js";
import { Send, Sun, Moon, Palette } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-300">
      <div className="container mx-auto px-4 pt-20 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 shadow-lg">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Appearance Settings
          </h1>
          <p className="text-base-content/60 text-lg">
            Customize your chat experience
          </p>
        </div>

        {/* Theme Toggle Card */}
        <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-base-content mb-2">Theme Mode</h2>
                <p className="text-base-content/60">
                  Choose between light and dark appearance
                </p>
              </div>
              
              {/* Creative Toggle Switch */}
              <div className="relative">
                <button
                  onClick={toggleTheme}
                  className={`
                    relative w-24 h-12 rounded-full transition-all duration-500 ease-in-out
                    ${isDark 
                      ? "bg-gradient-to-r from-slate-800 to-slate-900 shadow-inner" 
                      : "bg-gradient-to-r from-amber-200 to-orange-300 shadow-lg"
                    }
                    
                    hover:scale-105 transform
                  `}
                >
                  {/* Toggle Circle */}
                  <div
                    className={`
                      absolute top-1 w-10 h-10 rounded-full transition-all duration-500 ease-in-out
                      flex items-center justify-center shadow-lg
                      ${isDark 
                        ? "left-1 bg-gradient-to-r from-slate-600 to-slate-700" 
                        : "left-12 bg-gradient-to-r from-white to-gray-100"
                      }
                    `}
                  >
                    {isDark ? (
                      <Moon className="w-5 h-5 text-blue-300" />
                    ) : (
                      <Sun className="w-5 h-5 text-amber-500" />
                    )}
                  </div>
                  
                  {/* Background Icons */}
                  <div className="absolute inset-0 flex items-center justify-between px-3">
                    <Sun className={`w-4 h-4 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-0"}`} />
                    <Moon className={`w-4 h-4 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-0"}`} />
                  </div>
                </button>
                
                {/* Mode Labels */}
                <div className="flex justify-between mt-3 text-sm font-medium">
                  <span className={`transition-colors duration-300 ${!isDark ? "text-primary" : "text-base-content/50"}`}>
                    Light
                  </span>
                  <span className={`transition-colors duration-300 ${isDark ? "text-primary" : "text-base-content/50"}`}>
                    Dark
                  </span>
                </div>
              </div>
            </div>

            {/* Theme Preview Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Light Theme Preview */}
              <div 
                className={`
                  relative rounded-2xl overflow-hidden transition-all duration-300
                  ${!isDark ? "ring-2 ring-primary shadow-lg scale-105" : "opacity-60 hover:opacity-80"}
                `}
                data-theme="light"
              >
                <div className="bg-base-100 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-base-content">Light Mode</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-base-300 rounded-full"></div>
                    <div className="h-2 bg-base-300 rounded-full w-3/4"></div>
                    <div className="h-6 bg-primary rounded-lg w-1/2 opacity-80"></div>
                  </div>
                </div>
              </div>

              {/* Dark Theme Preview */}
              <div 
                className={`
                  relative rounded-2xl overflow-hidden transition-all duration-300
                  ${isDark ? "ring-2 ring-primary shadow-lg scale-105" : "opacity-60 hover:opacity-80"}
                `}
                data-theme="dark"
              >
                <div className="bg-base-100 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-base-content">Dark Mode</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-base-300 rounded-full"></div>
                    <div className="h-2 bg-base-300 rounded-full w-3/4"></div>
                    <div className="h-6 bg-primary rounded-lg w-1/2 opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-base-300">
            <h3 className="text-xl font-bold text-base-content flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live Preview
            </h3>
            <p className="text-base-content/60 mt-1">See how your chat will look</p>
          </div>
          
          <div className="p-6">
            <div className="max-w-lg mx-auto">
              {/* Mock Chat UI */}
              <div className="bg-base-200/50 rounded-2xl shadow-inner overflow-hidden backdrop-blur-sm">
                {/* Chat Header */}
                <div className="px-6 py-4 bg-gradient-to-r from-base-100 to-base-200 border-b border-base-300">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-content font-bold shadow-lg">
                        J
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-base-100"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base-content">John Doe</h4>
                      <p className="text-xs text-success flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 min-h-[180px] bg-gradient-to-b from-base-100/50 to-base-200/30">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"} animate-fade-in`}
                    >
                      <div
                        className={`
                          max-w-[85%] rounded-2xl p-4 shadow-lg backdrop-blur-sm
                          ${message.isSent 
                            ? "bg-gradient-to-r from-primary to-primary/90 text-primary-content ml-12" 
                            : "bg-base-100/80 text-base-content mr-12 border border-base-300"
                          }
                        `}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 ${message.isSent ? "text-primary-content/70" : "text-base-content/50"}`}>
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-gradient-to-r from-base-100 to-base-200 border-t border-base-300">
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-12 bg-base-100/80 backdrop-blur-sm border-base-300 focus:border-primary transition-all duration-200"
                      placeholder="Type your message..."
                      value="This is a live preview! ✨"
                      readOnly
                    />
                    <button className="btn btn-primary h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-primary/90">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;