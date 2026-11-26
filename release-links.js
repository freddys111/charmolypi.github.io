/*
  Add the exact public URL for each platform once your release is live there.
  Leave a value as an empty string until you have its real release page.
*/
const RELEASE_LINKS = {
  "Spotify": "",
  "Apple Music": "",
  "YouTube Music": "",
  "Amazon Music": "",
  "Deezer": "",
  "TIDAL": "",
  "Pandora": "",
  "SoundCloud": ""
};

const platformContainer = document.getElementById("platforms");
const availableLinks = Object.entries(RELEASE_LINKS).filter(([, url]) => url.trim());

if (availableLinks.length) {
  platformContainer.innerHTML = "";
  for (const [name, url] of availableLinks) {
    const link = document.createElement("a");
    link.className = "platform";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `<span>${name}</span><span aria-hidden="true">↗</span>`;
    platformContainer.appendChild(link);
  }
}
