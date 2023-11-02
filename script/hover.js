onst makeCssStyles = type =>
  `#rainbow{-webkit-filter:url(#${type});-moz-filter:(#${type});-ms-filter:(#${type});-o-filter:(#${type});filter:(#${type});}`;
const makeSVGFilter = (type, filterValues) =>
  `<svg id="colorblind-filters" style="display: none"> <defs> <filter id="${type}" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="${filterValues}" in="SourceGraphic" /> </filter> </defs> </svg>`;

const filters = {
  achromatomalySVG: makeSVGFilter(
    "achromatomaly",
    "0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0"
  ),
  achromatomalyStyles: makeCssStyles("achromatomaly"),

  achromatopsiaSVG: makeSVGFilter(
    "achromatopsia",
    "0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0"
  ),
  achromatopsiaStyles: makeCssStyles("achromatopsia"),

  deuteranomalySVG: makeSVGFilter(
    "deuteranomaly",
    "1.2, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 0.8, 0, 0,0, 0, 0, 1, 0"
  ),
  deuteranomalyStyles: makeCssStyles("deuteranomaly"),

  deuteranopiaSVG: makeSVGFilter(
    "deuteranopia",
    "1, 0.7, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 1, 0"
  ),
  deuteranopiaStyles: makeCssStyles("deuteranopia"),

  protanomalySVG: makeSVGFilter(
    "protanomaly",
    "1, 0.5, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 1, 0"
  ),
  protanomalyStyles: makeCssStyles("protanomaly"),

  protanopiaSVG: makeSVGFilter(
    "protanopia",
    "1, 0, 0, 0, 0,0.5, 1, 0, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 1, 0"
  ),
  protanopiaStyles: makeCssStyles("protanopia"),

  tritanomalySVG: makeSVGFilter(
    "tritanomaly",
    "0.75, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1.25, 0, 0,0, 0, 0, 1, 0"
  ),
  tritanomalyStyles: makeCssStyles("tritanomaly"),

  tritanopiaSVG: makeSVGFilter(
    "tritanopia",
    "0.5, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1.5, 0, 0,0, 0, 0, 1, 0"
  ),
  tritanopiaStyles: makeCssStyles("tritanopia")
};

function applyFilter(filter) {

  if (filter === "normal")
    return removeFilter({ target: { id: window.selectedFilter } });

 
  if (
    document.getElementById("styleID") &&
    document.getElementById("filterID")
  ) {
    document.getElementById("styleID").remove();
    document.getElementById("filterID").remove();
  }
  stylingID = document.createElement("style");
  stylingID.id = "styleID";
  document.body.appendChild(stylingID);

  filterID = document.createElement("div");
  filterID.id = "filterID";
  filterID.setAttribute(
    "style",
    "height: 0; padding: 0; margin: 0; line-height: 0;"
  );
  document.body.appendChild(filterID);


  filterID.innerHTML = filters[filter + "SVG"];
  stylingID.innerHTML = filters[filter + "Styles"];

  setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}


function selectFilter(evt) {
  if (!evt) return;

  const filter = getID(evt.target);
  console.log("applying filter ", filter);
  if (!filter) return;
  applyFilter(filter);
}

function getID(element) {
  let filterID = element.id.replace("option-", "");

  return !!filterID ? filterID : getID(element.parentNode);
}


function removeFilter(evt) {
  if (!evt) return;

  const filter = getID(evt.target);
  console.log("removing filter ", filter);
  if (!filter) return;

  stylingID = document.getElementById("styleID");
  filterID = document.getElementById("filterID");
  if (stylingID && filterID) {
    stylingID.remove();
    filterID.remove();
  }
}


const options = document.querySelectorAll('[id^="option-"]');


options.forEach(option => {
  option.addEventListener("mouseover", selectFilter, false);
  option.addEventListener(
    "mouseout",
    evt => {
      removeFilter(evt);

      if (window.selectedFilter) applyFilter(window.selectedFilter);
    },
    false
  );
});
