chrome.runtime.onInstalled.addListener(() => {

    chrome.contextMenus.create({
        id: "readText",
        title: "Read with Reader Extension",
        contexts: ["selection"]
    });

});

chrome.contextMenus.onClicked.addListener((info, tab) => {

    if (info.menuItemId === "readText") {

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (selectedText) => {

                speechSynthesis.cancel();

                const speech = new SpeechSynthesisUtterance(selectedText);

                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1.2;

                const voices = speechSynthesis.getVoices();

                speech.voice = voices.find(v =>
                    v.name.includes("Google US English")
                );

                speechSynthesis.speak(speech);

            },
            args: [info.selectionText]
        });

    }

});