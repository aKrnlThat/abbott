/*! Abbott - abbreviation library 1.0.0 - GNU GPLv3.0 - github.com/aKrnlThat/abbott */
let abbottConfig = {
  unabbreviatedVerTooltip: true,
  hasDynamicElements: false,
};

(function () {
  function abbreviate(parsedNum) {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;

    while (parsedNum >= 1000 && suffixIndex < suffixes.length - 1) {
      parsedNum /= 1000;
      suffixIndex++;
    }

    return Math.round(parsedNum) + suffixes[suffixIndex];
  }

  // use old method for compatibility with older browsers
  document
    .getElementsByClassName("abbott--abbreviate")
    .forEach(function (element) {
      let oldHtml = element.innerHTML;
      element.innerHTML = abbreviate(parseInt(oldHtml));
      if (abbottConfig.unabbreviatedVerTooltip)
        element.setAttribute("title", oldHtml);
    });

  if (abbottConfig.hasDynamicElements) {
    setInterval(function () {
      document
        .getElementsByClassName("abbott--abbreviate")
        .forEach(function (element) {
          let oldHtml = element.innerHTML;
          element.innerHTML = abbreviate(parseInt(oldHtml));
          if (abbottConfig.unabbreviatedVerTooltip)
            element.setAttribute("title", oldHtml);
        });
    }, 2000);
  }
})();
