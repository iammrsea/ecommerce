import Vue from "vue";
import "materialize-css";

Vue.prototype.$initMaterialize = (nameOfComponent, options = {}) => {
  let name = nameOfComponent.toLowerCase();
  switch (name) {
    case "modal":
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, options);

      break;
    case "tooltipped":
      var elems = document.querySelectorAll(".tooltipped");
      return M.Tooltip.init(elems, options);

      break;
    case "carousel":
      var elems = document.querySelectorAll(".carousel");
      return M.Carousel.init(elems, options);
      break;
    case "parallax":
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, options);
      break;
    case "materialboxed":
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems, options);
      break;
    case "sidenav":
      var elems = document.querySelector(".sidenav");
      return M.Sidenav.init(elems, options);

      break;
    case "tabs":
      var elems = document.querySelectorAll(".tabs");
      var instances = M.Tabs.init(elems, options);

      break;
    case "datepicker":
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, options);
      break;
    case "dropdown-trigger":
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, options);
      break;
    default:
      M.AutoInit();
      break;
  }

  // M.AutoInit()
};
