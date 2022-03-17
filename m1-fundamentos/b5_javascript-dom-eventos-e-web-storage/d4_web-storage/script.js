window.onload = () => {
  /* Ref:
   * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * Como converter RGB para HEX
   */

  function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  // Pegando os valores padrão e colocando nos inputs
  let input_bg_color = document.getElementById("bg_color");
  let default_bg_color =
    document.defaultView.getComputedStyle(body).backgroundColor;
  input_bg_color.value = rgbToHex(
    ...default_bg_color.replace(/[^\d,]/g, "").split(",")
  );

  let input_font_color = document.getElementById("font_color");
  let p = document.querySelector("article p");
  let default_font_color = 
    document.defaultView.getComputedStyle(p).color;
  input_font_color.value = rgbToHex(
    ...default_font_color.replace(/[^\d,]/g, "").split(",")
  );

  let input_font_size = document.getElementById('font_size')
  let default_font_size =
    document.defaultView.getComputedStyle(p).fontSize;
  input_font_size.value = default_font_size.replace(/\D/g,'')

  let input_line_height = document.getElementById('line_height')
  input_line_height.value = default_font_size.replace(/\D/g,'')

  let input_font_family = document.getElementById('font_family')
  let default_font_family = 
    document.defaultView.getComputedStyle(p).fontFamily;
  input_font_family.value = default_font_family

  // Definindo event listeners
  let handleBgColorChange = e => {
    body.style.backgroundColor = e.target.value
  }
  input_bg_color.addEventListener('change',handleBgColorChange)

  let handleFontColorChange = e => {
    let text = document.querySelectorAll('p, h1, h2, h3, hr')
    for(let i = 0; i < text.length; i += 1){
      text[i].style.color = e.target.value
    }
  }
  input_font_color.addEventListener('change',handleFontColorChange)
};
