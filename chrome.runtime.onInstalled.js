chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensión de Alerta de Phishing instalada.");
  });
  
  function checkForPhishingLinks(emailContent) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = emailContent.match(urlRegex);
    if (urls) {
      urls.forEach(url => {
        if (isPhishingLink(url)) {
          sendAlert(url);
          logPhishingAttempt(url);
        }
      });
    }
  }
  
  function isPhishingLink(url) {
    // Placeholder for phishing detection logic
    return url.includes("phishing");
  }
  
  function sendAlert(phishingUrl) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Alerta de Phishing",
      message: `Se detectó un enlace de phishing: ${phishingUrl}`
    });
  }
  
  function logPhishingAttempt(url) {
    // Log the phishing attempt (could be extended to store in storage)
    console.log(`Phishing attempt logged: ${url}`);
  }