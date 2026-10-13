// builds the dashboard from data.js. every KPI is calculated here, nothing is typed in.
var DEAD_DAYS = 90;
var FAST_DAYS = 30;
var branch = "both";
var charts = {};

function rand(n) { return "R" + Math.round(n).toLocaleString("en-ZA"); }
function pct(n) { return (n * 100).toFixed(1) + "%"; }

// days unsold for a branch. if that branch has no value yet, use the other branch's value
function daysFor(row, b) {
  if (b === "vdbp") return row.daysUnsoldVdbp != null ? row.daysUnsoldVdbp : row.daysUnsoldVer;
  return row.daysUnsoldVer != null ? row.daysUnsoldVer : row.daysUnsoldVdbp;
}

function branchesInView() {
  if (branch === "both") return ["vdbp", "ver"];
  return [branch];
}

function deadValue(row) {
  var total = 0;
  var list = branchesInView();
  for (var i = 0; i < list.length; i++) {
    var b = list[i];
    if (daysFor(row, b) > DEAD_DAYS) total += row[b] * row.cost;
  }
  return total;
}

// transfer candidate: one branch below its reorder level while the other branch is above it.
// if reorder levels are missing, fall back to the action text
function isTransfer(row) {
  if (row.reorderLevel != null) {
    var lowV = row.vdbp < row.reorderLevel, lowE = row.ver < row.reorderLevel;
    return (lowV && row.ver > row.reorderLevel) || (lowE && row.vdbp > row.reorderLevel);
  }
  return /transfer/i.test(row.action);
}

function tagFor(row) {
  if (/dead/i.test(row.action)) return "red";
  if (isTransfer(row) || /reorder/i.test(row.action)) return "amber";
  return "green";
}

function updateKpis() {
  var now = MONTHLY[MONTHLY.length - 1];
  var prev = MONTHLY[MONTHLY.length - 2];
  var change = (now.revenue - prev.revenue) / prev.revenue;
  var margin = (now.revenue - now.costOfSales) / now.revenue;
  var storeWide = branch === "both" ? "" : " (store-wide figure)";

  document.getElementById("k-turnover").textContent = rand(now.revenue);
  document.getElementById("k-turnover-sub").textContent =
    "Target " + rand(now.target) + " | " + (change >= 0 ? "up " : "down ") + pct(Math.abs(change)) + " vs last month" + storeWide;
  document.getElementById("k-margin").textContent = pct(margin);
  document.getElementById("k-margin-sub").textContent = "Revenue minus cost of sales" + storeWide;

  var dead = 0, deadCount = 0, transfers = 0;
  for (var i = 0; i < STOCK.length; i++) {
    var v = deadValue(STOCK[i]);
    if (v > 0) { dead += v; deadCount++; }
    if (isTransfer(STOCK[i])) transfers++;
  }
  document.getElementById("k-dead").textContent = rand(dead);
  document.getElementById("k-dead-sub").textContent = deadCount + " product lines unsold for over " + DEAD_DAYS + " days";
  document.getElementById("k-transfer").textContent = transfers;
}

function drawBranchChart() {
  var labels = [], v = [], e = [];
  for (var i = 0; i < STOCK.length; i++) {
    var r = STOCK[i];
    if (!isTransfer(r)) continue; // only show products that are out of balance between branches
    labels.push(r.name.split(" ").slice(0, 3).join(" "));
    v.push(r.vdbp); e.push(r.ver);
  }
  var sets = [];
  if (branch !== "ver") sets.push({ label: "Vanderbijlpark", data: v, backgroundColor: "#1d6f6a" });
  if (branch !== "vdbp") sets.push({ label: "Vereeniging", data: e, backgroundColor: "#e08a2c" });
  if (charts.branch) charts.branch.destroy();
  charts.branch = new Chart(document.getElementById("c-branch"), {
    type: "bar", data: { labels: labels, datasets: sets },
    options: { indexAxis: "y", responsive: true, maintainAspectRatio: false,
               scales: { x: { beginAtZero: true, title: { display: true, text: "Units on hand" } } } }
  });
}

function drawWeeklyChart() {
  if (charts.weekly) return; // weekly figures are store-wide, so they don't change with the filter
  var labels = [], rev = [], mar = [];
  for (var i = 0; i < WEEKLY.length; i++) {
    labels.push(WEEKLY[i].week.split(" (")[0]);
    rev.push(WEEKLY[i].revenue);
    mar.push(((WEEKLY[i].revenue - WEEKLY[i].costOfSales) / WEEKLY[i].revenue * 100).toFixed(1));
  }
  charts.weekly = new Chart(document.getElementById("c-weekly"), {
    data: { labels: labels, datasets: [
      { type: "bar", label: "Revenue (R)", data: rev, backgroundColor: "#1d6f6a", yAxisID: "y" },
      { type: "line", label: "Margin %", data: mar, borderColor: "#e08a2c", backgroundColor: "#e08a2c", yAxisID: "y1", tension: 0.3 }
    ] },
    options: { responsive: true, scales: {
      y: { beginAtZero: true, title: { display: true, text: "Revenue (R)" } },
      y1: { position: "right", min: 20, max: 35, grid: { drawOnChartArea: false }, title: { display: true, text: "Margin %" } }
    } }
  });
}

function drawDeadChart() {
  var byCat = {};
  for (var i = 0; i < STOCK.length; i++) {
    var v = deadValue(STOCK[i]);
    if (v > 0) byCat[STOCK[i].category] = (byCat[STOCK[i].category] || 0) + v;
  }
  var cats = Object.keys(byCat).sort(function (a, b) { return byCat[b] - byCat[a]; });
  var vals = cats.map(function (c) { return byCat[c]; });
  if (charts.dead) charts.dead.destroy();
  charts.dead = new Chart(document.getElementById("c-dead"), {
    type: "bar", data: { labels: cats, datasets: [{ label: "Value at cost (R)", data: vals, backgroundColor: "#c0392b" }] },
    options: { indexAxis: "y", responsive: true, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true } } }
  });
}

function fillTable() {
  var body = document.querySelector("#t-stock tbody");
  var html = "";
  for (var i = 0; i < STOCK.length; i++) {
    var r = STOCK[i];
    var m = (r.price - r.cost) / r.price;
    html += "<tr><td>" + r.sku + "</td><td>" + r.name + "</td><td>" + r.category + "</td><td>" + r.vdbp +
            "</td><td>" + r.ver + "</td><td>" + pct(m) + '</td><td><span class="tag ' + tagFor(r) + '">' + r.action + "</span></td></tr>";
  }
  body.innerHTML = html;
}

function render() {
  updateKpis();
  drawBranchChart();
  drawWeeklyChart();
  drawDeadChart();
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      for (var j = 0; j < buttons.length; j++) buttons[j].classList.remove("on");
      this.classList.add("on");
      branch = this.getAttribute("data-branch");
      render();
    });
  }
  fillTable();
  render();
});
