const slider = document.getElementById('slider');
const valDisplay = document.getElementById('val');
slider.oninput = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Check if the URL starts with http or https before executing
  if (tab.url.startsWith('http')) {
    const volume = slider.value / 100;
    valDisplay.innerText = slider.value;

    chrome.scripting.executeScript({ 
      target: { tabId: tab.id },
      func: setVolumeBoost,
      args: [volume]
    });
  } else {
    console.warn("Volume boost not available on internal Chrome pages.");
  }
};

slider.oninput = async () => {
  const volume = slider.value / 100;
  valDisplay.innerText = slider.value;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setVolumeBoost,
    args: [volume]
  });
};

function setVolumeBoost(multiplier) {
  // Use a global variable to ensure we don't create multiple contexts on the same page
  if (!window.audioCtx) {
    const videoElement = document.querySelector('video') || document.querySelector('audio');
    if (!videoElement) return;

    window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    window.source = window.audioCtx.createMediaElementSource(videoElement);
    window.gainNode = window.audioCtx.createGain();
    
    window.source.connect(window.gainNode);
    window.gainNode.connect(window.audioCtx.destination);
  }
  window.gainNode.gain.value = multiplier;
}
