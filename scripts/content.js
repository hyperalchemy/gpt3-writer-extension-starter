function insert(content) {
  // Select the editable area
  const elements = document.getElementsByClassName('ql-editor');

  if (elements.length === 0) {
    return;
  }
  
  const element = elements[0];

element.textContent = content;

}


chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
            
      // Call this insert function
      const result = insert(content);
            
      // If something went wrong, send a failed status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
  );
  