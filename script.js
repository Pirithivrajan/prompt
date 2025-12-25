function analyze() {
  const file = document.getElementById("imageUpload").files[0];
  const img = URL.createObjectURL(file);
  document.getElementById("preview").innerHTML = `<img src="${img}" width="250">`;

  // Simulated AI style analysis
  const style = {
    color: "Royal Blue",
    fabric: "Cotton Silk",
    fit: "Slim Fit",
    type: "Traditional Kurti"
  };

  document.getElementById("style").innerHTML =
    `Color: ${style.color}<br>
     Fabric: ${style.fabric}<br>
     Fit: ${style.fit}<br>
     Type: ${style.type}`;

  const aiPrompt =
    `Modern trendy ${style.type} in ${style.color} color, ${style.fabric} fabric, slim fit, high fashion, studio lighting, 4K, fashion photoshoot`;

  document.getElementById("prompt").innerHTML =
    `<h3>AI Prompt</h3>${aiPrompt}`;

  generateImage(aiPrompt);
}
