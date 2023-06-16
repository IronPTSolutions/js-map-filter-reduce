const root = document.getElementById("root");
const btn = document.getElementById("generate-btn");
const s1Filter = document.getElementById("s-1");
const s2Filter = document.getElementById("s-2");

let generated = false;

function generateEpsiodes(episodesToGenerate) {
  root.innerHTML = "";

  episodesToGenerate.forEach((episode) => {
    const div = document.createElement("div");
    div.className = "episode";

    div.innerHTML = `
                    <img src='${episode.image.medium}'/>
                    <h3>${episode.name}</h3>
                    <p>E${episode.number} S${episode.season}</p>
                  `;

    root.appendChild(div);
  });
}

s1Filter.onclick = () => {
  generateEpsiodes(episodes.filter((e) => e.season === 1));
};

s2Filter.onclick = () => {
  generateEpsiodes(episodes.filter((e) => e.season === 2));
};

btn.onclick = () => {
  if (generated) {
    root.innerHTML = "";
    generated = false;
  } else {
    generateEpsiodes(episodes);
    generated = true;
  }
};
