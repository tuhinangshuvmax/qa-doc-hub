import { useEffect } from 'react';
import '../styles/qa-doc-hub.css';

const Index = () => {
  useEffect(() => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const moonIcon = darkModeToggle?.querySelector('.moon');
    const sunIcon = darkModeToggle?.querySelector('.sun');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      moonIcon?.classList.add('hidden');
      sunIcon?.classList.remove('hidden');
    }
    
    // Toggle theme
    darkModeToggle?.addEventListener('click', () => {
      const isDarkMode = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      // Toggle icons
      moonIcon?.classList.toggle('hidden');
      sunIcon?.classList.toggle('hidden');
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card-link');
    
    searchInput?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const searchTerm = target.value.toLowerCase();
      
      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardText = cardElement.innerText.toLowerCase();
        const cardCategory = cardElement.dataset.category?.toLowerCase() || '';
        
        if (cardText.includes(searchTerm) || cardCategory.includes(searchTerm)) {
          cardElement.style.display = 'block';
        } else {
          cardElement.style.display = 'none';
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-900 dark:to-blue-800">
      <div className="max-w-6xl mx-auto">
        {/* Dark mode toggle and search */}
        <div className="flex justify-between mb-8 items-center">
          <button 
            id="darkModeToggle"
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
            aria-label="Toggle dark mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 moon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sun hidden" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="relative">
            <input
              type="text"
              id="searchInput"
              placeholder="Search resources..."
              className="py-1 px-4 pl-10 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white drop-shadow-lg">
          QA Documentation Hub
        </h1>
        
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-white">VMax 1.0</h2>
            <div className="h-0.5 bg-white/30 flex-grow ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="vmax1Container">
            <a href="https://vmaxhealthtech.sharepoint.com/:x:/r/sites/techdepartment/_layouts/15/Doc.aspx?sourcedoc=%7B90F8BB4C-ED52-4647-83D9-E8971D111546%7D&file=iOS.xlsx&action=default&mobileredirect=true" target="_blank" className="card-link" data-category="bug-tracker">
              <div className="card">
                <div className="card-tag">Bug Tracker</div>
                <h3>iOS Bug Tracker</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
              </div>
            </a>
            
            <a href="https://vmaxhealthtech.sharepoint.com/:x:/r/sites/techdepartment/_layouts/15/Doc.aspx?sourcedoc=%7BE6413674-BC2A-4919-96A2-0DB15280330E%7D&file=Android.xlsx&action=default&mobileredirect=true" target="_blank" className="card-link" data-category="bug-tracker">
              <div className="card">
                <div className="card-tag">Bug Tracker</div>
                <h3>Android Bug Tracker</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://vmaxhealthtech.sharepoint.com/:x:/r/sites/techdepartment/Shared%20Documents/General/002%20Testing/Test%20Document%20from%20September%202024/Bug%20List/CRM.xlsx?d=w975c06b9b2274f008fae1fdd79539c73&csf=1&web=1&e=D1643t" target="_blank" className="card-link" data-category="bug-tracker">
              <div className="card">
                <div className="card-tag">Bug Tracker</div>
                <h3>CRM Bug Tracker</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://vmaxhealthtech.sharepoint.com/:x:/r/sites/techdepartment/_layouts/15/Doc.aspx?sourcedoc=%7BD5D50BCD-1905-49EE-9E08-2F566FBFB607%7D&file=Mobile%20Issues%20%26%20Bugs%20-%20July%202024.xlsx&action=default&mobileredirect=true&wdsle=0" target="_blank" className="card-link" data-category="bug-tracker">
              <div className="card">
                <div className="card-tag">Bug Tracker</div>
                <h3>OLD Bug Tracker (All)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://vmaxhealthtech.sharepoint.com/:x:/r/sites/techdepartment/_layouts/15/Doc.aspx?sourcedoc=%7BA2E4D2C1-FAEA-4BA2-9FD5-E7E49F7AEE58%7D&file=Test%20Cases%20-%20From%20September%202024.xlsx&action=default&mobileredirect=true" target="_blank" className="card-link" data-category="test-case">
              <div className="card">
                <div className="card-tag">Test Case</div>
                <h3>OLD Test Cases (Sep 2024)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://vmaxhealthtech.sharepoint.com/sites/techdepartment/Shared%20Documents/Forms/AllItems.aspx?newTargetListUrl=%2Fsites%2Ftechdepartment%2FShared%20Documents&viewpath=%2Fsites%2Ftechdepartment%2FShared%20Documents%2FForms%2FAllItems%2Easpx&id=%2Fsites%2Ftechdepartment%2FShared%20Documents%2FGeneral%2F002%20Testing%2FTest%20Document%20from%20September%202024&viewid=964e5c08%2D5f01%2D44e2%2D863c%2D16dd168b194c" target="_blank" className="card-link" data-category="folder">
              <div className="card">
                <div className="card-tag">Folder</div>
                <h3>QA Master Folder</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://vmaxhealthtech.sharepoint.com/:f:/s/techdepartment/EkhW7HcSIjBBtGLw7cAE80EBsS8L2SomwfQTtf-kCqhqgQ?email=Ramesh%40vmaxhealthtech.com&e=CQ07mM" target="_blank" className="card-link" data-category="folder">
              <div className="card">
                <div className="card-tag">Folder</div>
                <h3>Test Case Master Folder</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://vmaxhealthtech.sharepoint.com/:f:/s/techdepartment/EudizYRlqz1HrB6N7-phKtwBTg00-Vd6TTqRgIF6h3y-_Q?email=Ramesh%40vmaxhealthtech.com&e=cHE137/vmaxhealthtech.sharepoint.com/:f:/s/techdepartment/EkhW7HcSIjBBtGLw7cAE80EBsS8L2SomwfQTtf-kCqhqgQ?email=Ramesh%40vmaxhealthtech.com&e=CQ07mM" target="_blank" className="card-link" data-category="folder">
              <div className="card">
                <div className="card-tag">Folder</div>
                <h3>Requirement Master Folder</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://www.figma.com/design/WrUpmN7fLEWGmDTgr8uWLY/VMax-Mobile-App-Development-Design-1.0?node-id=7118-3306&node-type=canvas&t=q297Gj2zO62ZUZnz-0" target="_blank" className="card-link" data-category="design">
              <div className="card">
                <div className="card-tag">Design</div>
                <h3>Figma</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://forms.vmax.fit/vmaxwellness/form/FitmomclubEnquiryForm/formperma/2RPj9VElDPsF1Jl8AMdKUv4EHJ8EmOA17_9BCQkpUJI" target="_blank" className="card-link" data-category="form">
              <div className="card">
                <div className="card-tag">Form</div>
                <h3>Zoho Form (Consultation)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://forms.absoluhealthcare.com/" target="_blank" className="card-link" data-category="form">
              <div className="card">
                <div className="card-tag">Form</div>
                <h3>Referral Form (Live)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="http://164.52.200.111:8086/" target="_blank" className="card-link" data-category="form">
              <div className="card">
                <div className="card-tag">Form</div>
                <h3>Referral Form Development</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://live.session.absoluhealthcare.com./" target="_blank" className="card-link" data-category="web-app">
              <div className="card">
                <div className="card-tag">Web App</div>
                <h3>Shape Up Studio (Live)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://live.session.dev.absoluhealthcare.com./" target="_blank" className="card-link" data-category="web-app">
              <div className="card">
                <div className="card-tag">Web App</div>
                <h3>Shape Up Studio (Development)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://miro.com/app/board/uXjVKC6PtOg=/" target="_blank" className="card-link" data-category="design">
              <div className="card">
                <div className="card-tag">Design</div>
                <h3>Test Board (Miro)</h3>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>

            <a
