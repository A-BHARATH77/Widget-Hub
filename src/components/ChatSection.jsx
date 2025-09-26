import React, { useState, useEffect } from 'react';

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle paste events for images
  useEffect(() => {
    const handlePaste = (e) => {
      if (!isExpanded) return;

      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.type.indexOf('image') !== -1) {
          e.preventDefault();
          const file = item.getAsFile();
          setImage(file);
          break;
        }
      }
    };

    if (isExpanded) {
      document.addEventListener('paste', handlePaste);
    }

    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, [isExpanded]);

  const formatGeminiResponse = (response, isImageAnalysis = false) => {
    // Clean up the response by removing markdown formatting
    let cleanResponse = response
      .replace(/\*\*/g, '') // Remove bold markdown
      .replace(/\*/g, '')   // Remove bullet points
      .replace(/`/g, '');   // Remove backticks
    
    // If it's a simple response without structured widgets, just return it
    if (!cleanResponse.includes('Widget Name:')) {
      return `<div class="p-3 bg-gray-50 rounded">${cleanResponse.replace(/\n/g, '<br/>')}</div>`;
    }
    
    // Parse the structured response
    const lines = cleanResponse.split('\n').filter(line => line.trim());
    let formattedWidgets = [];
    let currentWidget = {};
    let isImageAnalysisLocal = isImageAnalysis; // Store for use in parsing
    
    for (let line of lines) {
      line = line.trim();
      
      // Check for widget name line (e.g., "1. Widget Name: Text")
      if (line.match(/^\d+\.\s*Widget Name:/)) {
        // Save previous widget if exists
        if (currentWidget.name) {
          formattedWidgets.push(currentWidget);
        }
        // Start new widget
        const nameMatch = line.match(/Widget Name:\s*(.+)$/);
        currentWidget = {
          name: nameMatch ? nameMatch[1].trim() : 'Unknown Widget',
          description: ''
        };
      }
      // Check for brief description
      else if (line.includes('Brief Description:')) {
        let description = line.replace('Brief Description:', '').trim();
        // For image analysis, limit description to 2-3 lines
        if (isImageAnalysisLocal) {
          const sentences = description.split('.').filter(s => s.trim());
          description = sentences.slice(0, 2).join('.');
          if (sentences.length > 2) description += '.';
        }
        currentWidget.description = description;
      }
    }
    
    // Add the last widget
    if (currentWidget.name) {
      formattedWidgets.push(currentWidget);
    }
    
    if (formattedWidgets.length === 0) {
      return `<div class="p-3 bg-gray-50 rounded">${cleanResponse.replace(/\n/g, '<br/>')}</div>`;
    }
    
    // Different formatting for image analysis vs text description
    if (isImageAnalysis) {
      // For image analysis, show widgets in a more visual, structured way
      const widgetList = formattedWidgets.map(widget => 
        `<code class="bg-blue-100 px-2 py-1 rounded text-sm font-mono text-blue-800">${widget.name}</code>`
      ).join(', ');
      
      return `<div class="space-y-3">
        <div class="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
          <div class="font-semibold text-blue-800 mb-2">🎨 Recommended Widgets for this UI:</div>
          <div class="text-gray-700 mb-3">${widgetList}</div>
        </div>
        ${formattedWidgets.map(widget => 
          `<div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                ${widget.name.charAt(0)}
              </div>
              <h4 class="font-semibold text-gray-800">${widget.name}</h4>
            </div>
            <p class="text-gray-600 ml-11">${widget.description}</p>
          </div>`
        ).join('')}
      </div>`;
    } else {
      // For text description, use the simpler format
      const formattedLines = formattedWidgets.map(widget => 
        `<div class="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <div class="font-semibold text-blue-800 mb-2">Widget: <code class="bg-blue-100 px-2 py-1 rounded text-sm font-mono">${widget.name}</code></div>
          <div class="text-gray-700"><strong>Description:</strong> ${widget.description}</div>
        </div>`
      );
      
      return `<div class="space-y-2">${formattedLines.join('')}</div>`;
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !image) return;

    // Clear input immediately when send is clicked
    const currentInput = input;
    const currentImage = image;
    setInput('');
    setImage(null);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Gemini API key not found. Please set VITE_GEMINI_API_KEY in your .env file.' }]);
      return;
    }

    const userMessage = { role: 'user', content: currentInput, image: currentImage ? URL.createObjectURL(currentImage) : null };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      // Use REST API directly with gemini-2.5-flash model
      const model = 'gemini-2.5-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

      let promptText = `Based on this description: "${currentInput}". Suggest appropriate Flutter widgets from the cheat sheet. Provide the widget name, a brief description.`;

      if (image) {
        promptText = `Look at this image and the description is 'What are the widgets used in this given image?' : "${currentInput}". Suggest all the appropriate Flutter widgets from the cheat sheet. Provide the widget name, a brief description for only two lines .`;
      }

      const requestBody = {
        contents: [{
          parts: [{ text: promptText }]
        }]
      };

      // Add image if present
      if (currentImage) {
        const base64Image = await toBase64(currentImage);
        const imageData = base64Image.split(',')[1]; // Remove data:image/...;base64, prefix
        
        requestBody.contents[0].parts.push({
          inline_data: {
            mime_type: image.type,
            data: imageData
          }
        });
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-goog-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API error:', errorData);
        throw new Error(`API request failed: ${response.status} - ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid response format from Gemini API');
      }

      const aiResponse = data.candidates[0].content.parts[0].text;
      
      // Format the Gemini response for better readability
      const formattedResponse = formatGeminiResponse(aiResponse, !!currentImage);
      
      setMessages(prev => [...prev, { role: 'assistant', content: formattedResponse }]);

    } catch (error) {
      console.error('Error in handleSend:', error);
      let errorMessage = 'Sorry, there was an error processing your request.';

      if (error.message.includes('429') || error.message.includes('quota')) {
        errorMessage = 'You have exceeded your Gemini API quota. Please try again later or upgrade your plan.';
      } else if (error.message.includes('API_KEY') || error.message.includes('403')) {
        errorMessage = 'Invalid API key. Please check your VITE_GEMINI_API_KEY in the .env file.';
      } else if (error.message.includes('404')) {
        errorMessage = 'Model not found. Please check if your API key has access to the Gemini 2.5 Flash model.';
      }

      setMessages(prev => [...prev, { role: 'assistant', content: `${errorMessage}\n\nError details: ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl shadow-2xl p-6 border border-gray-200 w-[40rem] max-w-[95vw] max-h-[95vh] overflow-hidden backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Widget Hub AI Assistant</h2>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              ×
            </button>
          </div>
          <div className="h-[30rem] overflow-y-auto mb-6 p-4 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 shadow-inner">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-4 rounded-2xl max-w-[80%] shadow-lg ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                } transition-all duration-200 hover:shadow-xl`}>
                  {msg.image && <img src={msg.image} alt="User uploaded" className="max-w-32 max-h-32 mb-3 rounded-xl shadow-md" />}
                  {msg.role === 'assistant' ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.content }} className="prose prose-sm max-w-none" />
                  ) : (
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-center py-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent mr-2"></div>
                  <span className="text-blue-700 text-sm font-medium">Analyzing...</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe what you want to build..."
              className="flex-1 p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm transition-all duration-200"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl cursor-pointer hover:from-gray-200 hover:to-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
              📷
            </label>
            <button
              onClick={handleSend}
              disabled={loading}
              className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md font-medium"
            >
              Send
            </button>
          </div>
          {image && (
            <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl flex items-center justify-between border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                  className="w-12 h-12 object-cover rounded-xl shadow-sm"
                />
                <span className="text-sm text-gray-700 font-medium">
                  {image.name || 'Pasted image'}
                </span>
              </div>
              <button
                onClick={() => setImage(null)}
                className="text-red-500 hover:text-red-700 text-lg p-2 rounded-full hover:bg-red-50 transition-all duration-200"
              >
                ×
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-white text-2xl hover:scale-110 animate-pulse"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatSection;