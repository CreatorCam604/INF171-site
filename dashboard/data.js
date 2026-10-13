// SAMPLE DATA from Junior's mock workbook (hardware_store_MockData.xlsx).
// every KPI on the dashboard is calculated from these three lists.
var STOCK = [
  { sku: "CEM-AFR-50", name: "AfriSam All Purpose Cement 50kg", category: "Building Materials", vdbp: 8, ver: 142, reorderLevel: 50, cost: 110, price: 135, daysUnsoldVdbp: 1, daysUnsoldVer: 2, action: "Transfer to VDBP" },
  { sku: "TIM-PIN-38", name: "SABS Pine Timber 38x114 3.6m", category: "Timber", vdbp: 4, ver: 65, reorderLevel: 25, cost: 85, price: 120, daysUnsoldVdbp: 3, daysUnsoldVer: 5, action: "Transfer to VDBP" },
  { sku: "PLM-PVC-50", name: "PVC Pipe 50mm x 6m", category: "Plumbing", vdbp: 6, ver: 85, reorderLevel: 20, cost: 62, price: 98, daysUnsoldVdbp: 15, daysUnsoldVer: 98, action: "Transfer to VDBP" },
  { sku: "BRK-MAX-01", name: "Maxi Building Bricks Pallet 500", category: "Building Materials", vdbp: 2, ver: 18, reorderLevel: 8, cost: 1200, price: 1650, daysUnsoldVdbp: 2, daysUnsoldVer: 4, action: "Transfer to VDBP" },
  { sku: "ELE-CAB-25", name: "Twin and Earth Cable 2.5mm 100m", category: "Electrical", vdbp: 3, ver: 24, reorderLevel: 10, cost: 820, price: 1150, daysUnsoldVdbp: 5, daysUnsoldVer: 6, action: "Transfer to VDBP" },
  { sku: "PNT-ENM-05", name: "Gloss Enamel Black 5L", category: "Paint", vdbp: 28, ver: 4, reorderLevel: 12, cost: 220, price: 340, daysUnsoldVdbp: 7, daysUnsoldVer: 9, action: "Transfer to VER" },
  { sku: "FAS-DRY-01", name: "Drywall Screws 3.5x25mm 1000pk", category: "Fasteners", vdbp: 5, ver: 35, reorderLevel: 15, cost: 75, price: 125, daysUnsoldVdbp: 4, daysUnsoldVer: 8, action: "Transfer to VDBP" },
  { sku: "PLM-COP-15", name: "Copper Pipe 15mm x 5.5m", category: "Plumbing", vdbp: 32, ver: 3, reorderLevel: 15, cost: 140, price: 210, daysUnsoldVdbp: 11, daysUnsoldVer: 14, action: "Transfer to VER" },
  { sku: "SEC-PAD-50", name: "Brass Padlock 50mm", category: "Hardware", vdbp: 4, ver: 42, reorderLevel: 15, cost: 65, price: 105, daysUnsoldVdbp: 6, daysUnsoldVer: 10, action: "Transfer to VDBP" },
  { sku: "ROF-COR-03", name: "Corrugated Iron Sheet 0.4mm 3m", category: "Building Materials", vdbp: 48, ver: 5, reorderLevel: 20, cost: 160, price: 235, daysUnsoldVdbp: 9, daysUnsoldVer: 12, action: "Transfer to VER" },
  { sku: "TLS-DRL-13", name: "Impact Drill 13mm 650W", category: "Power Tools", vdbp: 2, ver: 16, reorderLevel: 8, cost: 390, price: 599, daysUnsoldVdbp: 4, daysUnsoldVer: 7, action: "Transfer to VDBP" },
  { sku: "SAN-RIV-01", name: "River Sand Bulk Cubic Metre", category: "Building Materials", vdbp: 1, ver: 22, reorderLevel: 10, cost: 280, price: 420, daysUnsoldVdbp: 1, daysUnsoldVer: 3, action: "Transfer to VDBP" },
  { sku: "ELE-CON-20", name: "PVC Conduit 20mm x 4m", category: "Electrical", vdbp: 80, ver: 8, reorderLevel: 30, cost: 18, price: 32, daysUnsoldVdbp: 12, daysUnsoldVer: 15, action: "Transfer to VER" },
  { sku: "TIL-ADH-20", name: "Ceramic Tile Adhesive 20kg", category: "Building Materials", vdbp: 6, ver: 55, reorderLevel: 25, cost: 55, price: 85, daysUnsoldVdbp: 3, daysUnsoldVer: 6, action: "Transfer to VDBP" },
  { sku: "TLS-ANG-75", name: "115mm Angle Grinder 750W", category: "Power Tools", vdbp: 14, ver: 12, reorderLevel: 10, cost: 480, price: 750, daysUnsoldVdbp: 115, daysUnsoldVer: 115, action: "Dead Stock - Markdown" },
  { sku: "TLS-ROH-80", name: "Rotary Hammer Drill 800W", category: "Power Tools", vdbp: 10, ver: 10, reorderLevel: 5, cost: 950, price: 1499, daysUnsoldVdbp: 120, daysUnsoldVer: 130, action: "Dead Stock - Markdown" },
  { sku: "PNT-TEX-20", name: "Exterior Textured Coat Terracotta 20L", category: "Paint", vdbp: 15, ver: 10, reorderLevel: 8, cost: 520, price: 790, daysUnsoldVdbp: 105, daysUnsoldVer: 110, action: "Dead Stock - Markdown" },
  { sku: "PLM-VAL-50", name: "Brass Ball Valve 50mm", category: "Plumbing", vdbp: 20, ver: 18, reorderLevel: 10, cost: 185, price: 295, daysUnsoldVdbp: 95, daysUnsoldVer: 102, action: "Dead Stock - Markdown" },
  { sku: "HRD-HNG-45", name: "Cast Iron Gate Hinges 450mm Pair", category: "Hardware", vdbp: 28, ver: 25, reorderLevel: 15, cost: 140, price: 225, daysUnsoldVdbp: 140, daysUnsoldVer: 150, action: "Dead Stock - Clearance" },
  { sku: "PNT-ACR-20", name: "Trade White PVA Paint 20L", category: "Paint", vdbp: 34, ver: 28, reorderLevel: 20, cost: 450, price: 680, daysUnsoldVdbp: 8, daysUnsoldVer: 12, action: "Adequate Stock" },
  { sku: "FAS-WIR-10", name: "100mm Wire Nails 5kg Box", category: "Fasteners", vdbp: 45, ver: 40, reorderLevel: 30, cost: 95, price: 145, daysUnsoldVdbp: 14, daysUnsoldVer: 18, action: "Adequate Stock" },
  { sku: "TIM-BAT-38", name: "Pine Brandering 38x38mm 3.0m", category: "Timber", vdbp: 50, ver: 60, reorderLevel: 30, cost: 28, price: 44, daysUnsoldVdbp: 4, daysUnsoldVer: 6, action: "Adequate Stock" },
  { sku: "SAN-BLD-01", name: "Building Plaster Sand Bulk m3", category: "Building Materials", vdbp: 18, ver: 25, reorderLevel: 12, cost: 260, price: 395, daysUnsoldVdbp: 2, daysUnsoldVer: 3, action: "Adequate Stock" },
  { sku: "PNT-RLR-22", name: "Paint Roller Set with Tray 225mm", category: "Paint", vdbp: 40, ver: 35, reorderLevel: 20, cost: 48, price: 85, daysUnsoldVdbp: 9, daysUnsoldVer: 14, action: "Adequate Stock" },
  { sku: "ELE-SWI-01", name: "Single Light Switch 1-Way White", category: "Electrical", vdbp: 55, ver: 50, reorderLevel: 25, cost: 22, price: 42, daysUnsoldVdbp: 11, daysUnsoldVer: 16, action: "Adequate Stock" },
  { sku: "ELE-SKT-02", name: "Double Switched Wall Socket 16A", category: "Electrical", vdbp: 35, ver: 40, reorderLevel: 20, cost: 58, price: 99, daysUnsoldVdbp: 8, daysUnsoldVer: 10, action: "Adequate Stock" },
  { sku: "PLM-WST-40", name: "Waste Pipe 40mm x 6m White", category: "Plumbing", vdbp: 28, ver: 32, reorderLevel: 15, cost: 42, price: 68, daysUnsoldVdbp: 15, daysUnsoldVer: 18, action: "Adequate Stock" },
  { sku: "PLM-TAP-15", name: "Brass Bibtap 15mm Hose Union", category: "Plumbing", vdbp: 22, ver: 25, reorderLevel: 15, cost: 72, price: 119, daysUnsoldVdbp: 12, daysUnsoldVer: 19, action: "Adequate Stock" },
  { sku: "FAS-TEK-50", name: "Roofing Self-Drilling Tek Screws 100pk", category: "Fasteners", vdbp: 60, ver: 70, reorderLevel: 35, cost: 68, price: 115, daysUnsoldVdbp: 6, daysUnsoldVer: 9, action: "Adequate Stock" },
  { sku: "HRD-TAP-05", name: "Heavy Duty Measuring Tape 5m", category: "Hardware", vdbp: 30, ver: 28, reorderLevel: 15, cost: 35, price: 65, daysUnsoldVdbp: 14, daysUnsoldVer: 21, action: "Adequate Stock" },
  { sku: "TLS-CIR-18", name: "Circular Saw 185mm 1200W", category: "Power Tools", vdbp: 12, ver: 14, reorderLevel: 6, cost: 680, price: 1050, daysUnsoldVdbp: 25, daysUnsoldVer: 30, action: "Adequate Stock" },
  { sku: "SEC-CHN-08", name: "Galvanised Link Chain 8mm per m", category: "Hardware", vdbp: 45, ver: 50, reorderLevel: 20, cost: 38, price: 65, daysUnsoldVdbp: 18, daysUnsoldVer: 22, action: "Adequate Stock" },
  { sku: "TIL-GRP-05", name: "Tile Grout Light Grey 5kg", category: "Building Materials", vdbp: 38, ver: 42, reorderLevel: 20, cost: 42, price: 75, daysUnsoldVdbp: 7, daysUnsoldVer: 11, action: "Adequate Stock" },
  { sku: "WAT-SLT-05", name: "Bitumen Waterproofing Sealant 5L", category: "Paint", vdbp: 22, ver: 24, reorderLevel: 12, cost: 185, price: 285, daysUnsoldVdbp: 16, daysUnsoldVer: 20, action: "Adequate Stock" },
  { sku: "SAF-GLV-01", name: "Leather Chrome Working Gloves Pair", category: "Hardware", vdbp: 80, ver: 95, reorderLevel: 40, cost: 22, price: 45, daysUnsoldVdbp: 5, daysUnsoldVer: 7, action: "Adequate Stock" }
];

var MONTHLY = [
  { month: "September 2026", revenue: 400093.37, costOfSales: 290067.69, target: 400000 },
  { month: "October 2026 (MTD)", revenue: 428500, costOfSales: 305949, target: 400000 }
];

var WEEKLY = [
  { week: "Week 36 (01 Sep - 07 Sep)", revenue: 92450, costOfSales: 66800 },
  { week: "Week 37 (08 Sep - 14 Sep)", revenue: 98120, costOfSales: 71140 },
  { week: "Week 38 (15 Sep - 21 Sep)", revenue: 104520, costOfSales: 75250 },
  { week: "Week 39 (22 Sep - 28 Sep)", revenue: 105003.37, costOfSales: 76877.69 },
  { week: "Week 40 (29 Sep - 05 Oct)", revenue: 106200, costOfSales: 75830 },
  { week: "Week 41 (06 Oct - 12 Oct)", revenue: 108300, costOfSales: 77320 }
];
