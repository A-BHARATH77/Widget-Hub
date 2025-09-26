import { useState } from 'react'
import TableOfContents from './components/TableOfContents'
import ChatSection from './components/ChatSection'
import { flutterWidgets } from './data/flutterWidgets'
import './App.css'

function App() {
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (index) => {
    setSelectedStage(index);
    // Scroll to the stage
    const element = document.getElementById(`stage-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-indigo-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/20 to-transparent"></div>
      <div className="relative z-10">
        <div className="container mx-auto p-6 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-20 mt-5">
            <img src="/logo.svg" alt="Widget Hub Logo" className="h-40 w-auto" />
            <p className="text-lg text-gray-600 max-w-2xl mt-6">
              Master Flutter development with this comprehensive guide to 100 essential widgets, organized by stages for easy learning. Get AI-powered widget suggestions and explore interactive examples.
            </p>
          </div>
        </header>
        <TableOfContents stages={flutterWidgets} onStageClick={handleStageClick} />
        <div className="space-y-16">
          {flutterWidgets.map((stage, stageIndex) => (
            <section key={stageIndex} id={`stage-${stageIndex}`} className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
                  {stage.stage}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {stage.widgets.map((widget) => (
                    <div key={widget.number} className="bg-gradient-to-br from-white via-blue-50 to-purple-50 border-2 border-gradient-to-r from-blue-200 to-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                            {widget.number}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{widget.name}</h3>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">{widget.description}</p>
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto text-sm font-mono shadow-inner border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                          <pre className="whitespace-pre-wrap">{widget.code}</pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      </div>
      <ChatSection />
    </div>
  )
}

export default App
