window.selectedFilter = null;
var filtersObj = {}


//achromatomaly
filtersObj.achromatomaly = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#achromatomaly);-moz-filter:(#achromatomaly);-ms-filter:(#achromatomaly);-o-filter:(#achromatomaly);filter:(#achromatomaly);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//normal
filtersObj.normal = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  stylingID.innerHTML = 'html{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}';
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}


//achromatopsia
filtersObj.achromatopsia = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter>  </defs> </svg>';
  

  stylingID.innerHTML = 'html { filter: contrast(150%) brightness(120%); }';

  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//deuteranopia
filtersObj.deuteranopia = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="1.2, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 0.8, 0, 0,0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranopia);-moz-filter:(#deuteranopia);-ms-filter:(#deuteranopia);-o-filter:(#deuteranopia);filter:(#deuteranopia);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//deduteranomaly
filtersObj.deuteranomaly = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="1, 0.7, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//protanomaly
filtersObj.protanomaly = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanomaly" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="1, 0.5, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#protanomaly);-moz-filter:(#protanomaly);-ms-filter:(#protanomaly);-o-filter:(#protanomaly);filter:(#protanomaly);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//protanopia
filtersObj.protanopia = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="1, 0, 0, 0, 0,0.5, 1, 0, 0, 0,0, 0, 1, 0, 0,0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#protanopia);-moz-filter:(#protanopia);-ms-filter:(#protanopia);-o-filter:(#protanopia);filter:(#protanopia);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//tritanomaly
filtersObj.tritanomaly = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanomaly" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.75, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1.25, 0, 0,0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#tritanomaly);-moz-filter:(#tritanomaly);-ms-filter:(#tritanomaly);-o-filter:(#tritanomaly);filter:(#tritanomaly);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

//tritanopia
filtersObj.tritanopia = () => {
  if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = "styleID612481";
  document.body.appendChild(stylingID);

  filterID = document.createElement('div');
  filterID.id = "filterID471924";
  filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
  document.body.appendChild(filterID);

  filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.5, 0, 0, 0, 0,0, 1, 0, 0, 0,0, 0, 1.5, 0, 0,0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
  stylingID.innerHTML = 'html{-webkit-filter:url(#tritanopia);-moz-filter:(#tritanopia);-ms-filter:(#tritanopia);-o-filter:(#tritanopia);filter:(#tritanopia);}'
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}


window.onload = function () {
  if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function (result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};


function setSelected(value) {
  try {
    chrome.storage.local.set({ key: value }, function () {
      document.getElementById(value).checked = true;
    });
  } catch { }
}

async function injectFilter(filter) {
  let tabs = await chrome.tabs.query({});
  //console.log(tabs);
  let tabActive = undefined;
  for (let tab of tabs) {
    if (tab.active) {
      tabActive = tab;
    }
  }
  if (tabActive) {
    injectScript(tabActive, filtersObj[filter])
  }
}

async function injectScript(tab, f, ...args) {
  var r = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: f,
    args: args
  });
  return r[0].result
}

async function registerScript(id, ...files) {
  try {
    await chrome.scripting.registerContentScripts([{
      id: id,
      js: files,
      matches: ['http://*/*', 'https://*/*'],
      runAt: "document_idle",
      world: 'MAIN'
    }]);

    return true;
  } catch { }

  return false;
}


document.querySelectorAll(['[id^="radio"]']).forEach(radioButton => {
  const filter = radioButton.parentElement.id.replace("option-", "");
  radioButton.addEventListener("click", function () {

    setSelected(radioButton.id);
    injectFilter(filter);

    applyFilter((window.selectedFilter = filter));
  });
});
