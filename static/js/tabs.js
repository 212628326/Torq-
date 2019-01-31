
  
    mdc.autoInit();

    const tabBarRef = document.querySelector('.mdc-tab-bar');
    tabBarRef.MDCTabBar.focusOnActivate = false;
    var path = window.location.pathname;
    path = path.replace (/\/$/, "");
    path = decodeURIComponent(path);
    var tabRefArray = document.querySelectorAll('header .mdc-tab');
    if (path == "") {
      tabBarRef.MDCTabBar.foundation_.adapter_.activateTabAtIndex(0);
    }
    tabRefArray.forEach(function (p, i) {
      console.log(p.id);
      if (path.indexOf(p.id) > -1 && i > 0 || p.id == "/" && path == "") {
        tabBarRef.MDCTabBar.foundation_.adapter_.activateTabAtIndex(i);
      }
      else {
        tabBarRef.MDCTabBar.foundation_.adapter_.deactivateTabAtIndex(i);
      }
    });
