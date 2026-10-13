// one place for the menu, page order and footer. every page loads this file.
var PAGES = [
  { file: "index.html", label: "Start Here",        title: "Start Here",              menu: true },
  { file: "data.html", label: "Your Data",         title: "Your Data",               menu: true,  group: "data", short: "A. Data vs information" },
  { file: "data-quality.html", title: "Data Quality",            group: "data", short: "B. Data quality" },
  { file: "data-systems.html", title: "From Spreadsheets to a System", group: "data", short: "C. Spreadsheets to a system" },
  { file: "dashboard.html",    title: "Sample Dashboard",        group: "data", short: "D. Dashboard" },
  { file: "popia.html", label: "POPIA",        title: "Customer Data and POPIA", menu: true },
  { file: "ai.html", label: "AI and Decisions",           title: "Smarter Decisions with AI", menu: true },
  { file: "systems.html", label: "Systems",      title: "Connecting Your Systems", menu: true },
  { file: "fit.html", label: "Make It Fit",          title: "Making It Fit Your Business", menu: true },
  { file: "glossary.html", label: "Glossary",     title: "Glossary",                menu: true },
  { file: "sources.html", label: "Sources",      title: "Sources",                 menu: true },
  { file: "about.html", label: "About",        title: "About Us",                menu: true }
];

var SITE_NAME = "BC Consulting";   // change to your consulting team name

function currentFile() {
  var f = location.pathname.split("/").pop();
  return f === "" ? "index.html" : f;
}

function buildHeader() {
  var here = currentFile();
  var hereInfo = PAGES.find(function (p) { return p.file === here; }) || {};
  var html = '<div class="wrap"><a class="logo" href="index.html"><span>&#9632;</span> ' + SITE_NAME + '</a>' +
             '<button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">Menu</button>' +
             '<nav class="main-nav" id="main-nav"><ul>';
  for (var i = 0; i < PAGES.length; i++) {
    var p = PAGES[i];
    if (!p.menu) continue;
    var active = (p.file === here) || (p.group && p.group === hereInfo.group);
    html += '<li><a href="' + p.file + '"' + (active ? ' class="active" aria-current="page"' : '') + '>' + (p.label || p.title) + '</a></li>';
  }
  html += '</ul></nav></div>';
  var header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = html;
  document.body.insertBefore(header, document.body.firstChild);

  var btn = header.querySelector(".nav-toggle");
  var nav = header.querySelector(".main-nav");
  btn.addEventListener("click", function () {
    nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
}

function buildSubnav() {
  var here = currentFile();
  var hereInfo = PAGES.find(function (p) { return p.file === here; });
  var slot = document.getElementById("subnav");
  if (!slot || !hereInfo || !hereInfo.group) return;
  var html = "";
  for (var i = 0; i < PAGES.length; i++) {
    var p = PAGES[i];
    if (p.group !== hereInfo.group) continue;
    html += '<a href="' + p.file + '"' + (p.file === here ? ' class="active"' : '') + '>' + p.short + '</a>';
  }
  slot.className = "subnav";
  slot.innerHTML = html;
}

function buildNextPrev() {
  var here = currentFile();
  var idx = PAGES.findIndex(function (p) { return p.file === here; });
  var slot = document.getElementById("next-prev");
  if (!slot || idx < 0) return;
  var html = "";
  if (idx > 0) html += '<a class="prev" href="' + PAGES[idx - 1].file + '">&larr; ' + PAGES[idx - 1].title + '</a>';
  else html += "<span></span>";
  if (idx < PAGES.length - 1) html += '<a href="' + PAGES[idx + 1].file + '">Next: ' + PAGES[idx + 1].title + ' &rarr;</a>';
  slot.className = "next-link";
  slot.innerHTML = html;
}

function buildFooter() {
  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = '<div class="wrap">' + SITE_NAME + ' | INF1781 student project, Belgium Campus. ' +
    'The client is fictional and all dashboard figures are sample data. Not legal or financial advice.</div>';
  document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", function () {
  buildHeader();
  buildSubnav();
  buildNextPrev();
  buildFooter();
});
