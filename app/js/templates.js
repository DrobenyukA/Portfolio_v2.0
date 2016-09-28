// **Github:** https://github.com/teambition/gulp-ejs-template
//
// **License:** MIT
/* global module, define, setImmediate, window */

;(function(root, factory) {
  'use strict';

  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else root.templates = factory();
}(typeof window === 'object' ? window : this, function() {
  'use strict';
  var templates = {};

  templates['portfolio']  = templates['portfolio.ejs'] = function(it) {
    var locals = it, __output = "";
    ;__output += "<div class=\"col-md-3 col-sm-6 col-xs-12 ";;__output += escape(it.className);__output += ">\">\n    <div class=\"portfolio__item\">\n        <div class=\"portfolio__item--description\">\n            <h3>";;__output += escape(it.project);__output += "</h3>\n            <a href=\"#\">";;__output += escape(it.firstCategory);__output += "</a>\n            <a href=\"#\">";;__output += escape(it.secondCategory);__output += "</a>\n            <a href=\"";;__output += escape(it.link);__output += "\" class=\"button\">view project</a>\n        </div>\n    </div>\n</div>";
    return __output.trim();
  };

  var ejs = {
    locals: {},
    get: getTpl,
    render: render
  };
  return ejs;

  function render(tplName, data) {
    var it  = copy({}, ejs.locals);
    return getTpl(tplName)(copy(it, data));
  }

  function getTpl(tplName) {
    return templates[tplName];
  }

  function escape(markup) {
    if (!markup) return '';
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');
  }

  function copy(to, from) {
    from = from || {};
    for (var key in from) to[key] = from[key];
    return to;
  }
}));
