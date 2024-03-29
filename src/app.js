import "../src/app.scss";
import { updateExpression } from "babel-types";

var strWindowFeatures;

/*  strWindowFeatures = `left=${posX},top=${posY},outerWidth=${width},outerHeight=${height},menubar=0,toolbar=0,location=0,personalbar=0,resizable=0,scrollbars=0,alwaysRaised`;
window.open("", "", strWindowFeatures);*/

function start(width, height, velocity, tick, quantity, format, url) {
  let array = [];
  if (format === "youtube") url = url.slice(url.indexOf("?v=") + 3);
  for (let i = 0; i < quantity; i++) {
    let l = getRandomInt(1, screen.width);
    let t = getRandomInt(1, screen.height);
    strWindowFeatures = `left=${l},top=${t},width=${width},height=${height},menubar=0,toolbar=0,location=0,personalbar=0,resizable=0,scrollbars=0,alwaysRaised`;
    array.push[i] = window.open("", "", strWindowFeatures);
    array.push[i].document.body.style.margin = 0;
    if (format === "youtube") {
      console.log(url);
      array.push[
        i
      ].document.body.innerHTML = `<iframe src="https://www.youtube.com/embed/${url}?autoplay=1&modestbranding=1&loop=1&&playlist=${url}&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&controls=0" width="100%" height="100%" frameborder="0"></iframe>`;
    } else if (format === "image")
      array.push[
        i
      ].document.body.innerHTML = `<img src=${url} width="100%" height="100%">`;
    else if (format === "file")
      array.push[i].document.body.innerHTML = `<img src=${URL.createObjectURL(
        url
      )} width="100%" height="100%">`;
    update(array.push[i], velocity, tick);
  }
}

function update(bar, v, t) {
  let vx = v * (Math.random() > 0.5 ? 1 : -1);
  let vy = v * (Math.random() > 0.5 ? 1 : -1);
  bar.setInterval(() => {
    const x = bar.screenX;
    const y = bar.screenY;
    const width = bar.outerWidth;
    const height = bar.outerHeight;

    if (x <= screen.availLeft) vx = Math.abs(vx);
    if (x + width + 1 >= screen.availWidth) vx = -1 * Math.abs(vx);
    if (y <= screen.availTop) vy = Math.abs(vy);
    if (y + height + 1 >= screen.availHeight) vy = -1 * Math.abs(vy);
    bar.moveBy(vx, vy);
  }, t);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/*showValue(document.getElementById("width").value, "widthValue");
document.getElementById("width").oninput = () =>
  showValue(document.getElementById("width").value, "widthValue");
showValue(document.getElementById("height").value, "heightValue");
document.getElementById("height").oninput = () =>
  showValue(document.getElementById("height").value, "heightValue");
showValue(document.getElementById("quantity").value, "quantityValue");
document.getElementById("quantity").oninput = () =>
  showValue(document.getElementById("quantity").value, "quantityValue");
function showValue(v, id) {
  document.getElementById(id).innerHTML = v;
}*/
const input = document.getElementById("input");
const element = input.querySelector("input");
const label = input.querySelector("label");

function loadInputForFormat(format) {
  switch (format) {
    case "image":
      element.type = "url";
      label.textContent = "Image Link";
      break;

    case "youtube":
      element.type = "url";
      label.textContent = "Youtube Link";
      break;

    case "file":
      element.type = "file";
      element.accept = "image/*";
      label.textContent = "File";
      break;
  }
}

const radios = document.getElementsByName("format");
radios.forEach(e =>
  e.addEventListener("change", e => loadInputForFormat(e.target.value))
);
for (const radio of radios)
  if (radio.checked) {
    loadInputForFormat(radio.value);
    break;
  }

document.getElementById("submit").onclick = () => {
  let w = Number(document.getElementById("width").value);
  let h = Number(document.getElementById("height").value);
  let v = Number(document.getElementById("velocity").value);
  let t = Number(document.getElementById("tick").value);
  let q = Number(document.getElementById("quantity").value);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      var f = radios[i].value;
      break;
    }
  }
  let u =
    f === "file"
      ? document.getElementById("url").files[0]
      : document.getElementById("url").value;
  start(w, h, v, t, q, f, u);
};

window.mobilecheck = function() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (window.mobilecheck()) {
  document.getElementById("main").innerHTML =
    "<p style='padding:1rem'>This web page doesn't work on mobile devices, only on PC... *inserts sad face*</p>";
}
