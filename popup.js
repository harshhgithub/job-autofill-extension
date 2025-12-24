document.getElementById("autofillBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  // Inject content script
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });

  // Send message AFTER injection
  chrome.tabs.sendMessage(tab.id, { action: "AUTOFILL_FORM" });
});
