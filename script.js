/* =============================================
   script.js — all the logic for the users table
   ============================================= */

// ── 50 Fake Users (hardcoded, no API needed) ─
const fakeUsers = [
  {
    name: "Akash Aykaç",
    email: "Akash.aykac@example.com",
    username: "angrygoose177",
    country: "Turkey",
  },
  {
    name: "Ridwan Khan",
    email: "ridwan.khan@example.com",
    username: "beautifulbutterfly746",
    country: "Norway",
  },
  {
    name: "Bhumii",
    email: "bhumii.yilmazer@example.com",
    username: "beautifuldog454",
    country: "Turkey",
  },
  {
    name: "Julie Fisher",
    email: "julie.fisher@example.com",
    username: "beautifuldog913",
    country: "Ireland",
  },
  {
    name: "Ekapad Nair",
    email: "ekapad.nair@example.com",
    username: "beautifulpanda877",
    country: "India",
  },
  {
    name: "Ana Navarro",
    email: "ana.navarro@example.com",
    username: "beautifulwolf225",
    country: "Spain",
  },
  {
    name: "Marta Parra",
    email: "marta.parra@example.com",
    username: "bigcat577",
    country: "Spain",
  },
  {
    name: "Noah Taylor",
    email: "noah.taylor@example.com",
    username: "bigduck962",
    country: "Ireland",
  },
  {
    name: "Lincoln Jones",
    email: "lincoln.jones@example.com",
    username: "bigfrog717",
    country: "New Zealand",
  },
  {
    name: "Arnold Morrison",
    email: "arnold.morrison@example.com",
    username: "organicpanda523",
    country: "Australia",
  },
  {
    name: "Melvin Watkins",
    email: "melvin.watkins@example.com",
    username: "bluekoala740",
    country: "United States",
  },
  {
    name: "Alicia Menard",
    email: "alicia.menard@example.com",
    username: "happyelephant476",
    country: "Switzerland",
  },
  {
    name: "Brian Phillips",
    email: "brian.phillips@example.com",
    username: "redzebra971",
    country: "United States",
  },
  {
    name: "Beau Roberts",
    email: "beau.roberts@example.com",
    username: "redwolf976",
    country: "New Zealand",
  },
  {
    name: "Muhammad",
    email: "muhammad.ateeq@example.com",
    username: "goldenswan681",
    country: "Turkey",
  },
  {
    name: "Chloe Mckinney",
    email: "chloe.mckinney@example.com",
    username: "smallbutterfly394",
    country: "United Kingdom",
  },
  {
    name: "Mark Holmes",
    email: "mark.holmes@example.com",
    username: "tinywolf893",
    country: "United Kingdom",
  },
  {
    name: "Sara Jensen",
    email: "sara.jensen@example.com",
    username: "happyfish301",
    country: "Denmark",
  },
  {
    name: "Alman",
    email: "Alman.sufii@example.com",
    username: "brightlion482",
    country: "Mexico",
  },
  {
    name: "Amara Osei",
    email: "amara.osei@example.com",
    username: "wildbird903",
    country: "Ghana",
  },
  {
    name: "Fatima Al-Rashid",
    email: "fatima.alrashid@example.com",
    username: "quietmoon512",
    country: "UAE",
  },
  {
    name: "Hina",
    email: "hina.irfan@example.com",
    username: "lazypenguin234",
    country: "Italy",
  },
  {
    name: "Hana Kobayashi",
    email: "hana.kobayashi@example.com",
    username: "silentriver789",
    country: "Japan",
  },
  {
    name: "James O'Brien",
    email: "james.obrien@example.com",
    username: "clevercat102",
    country: "Ireland",
  },
  {
    name: "Mawiya",
    email: "mawiya.ali@example.com",
    username: "frozenowl447",
    country: "Russia",
  },
  {
    name: "Omar Farouq",
    email: "omar.farouq@example.com",
    username: "goldenfalcon331",
    country: "Egypt",
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    username: "sunflower672",
    country: "India",
  },
  {
    name: "Saman",
    email: "saman.sheikh@example.com",
    username: "fastdragon915",
    country: "China",
  },
  {
    name: "Sofia Andersen",
    email: "sofia.andersen@example.com",
    username: "coldbreeze258",
    country: "Sweden",
  },
  {
    name: "Daniel Müller",
    email: "daniel.muller@example.com",
    username: "ironbear640",
    country: "Germany",
  },
  {
    name: "Aisha Kamara",
    email: "aisha.kamara@example.com",
    username: "moonrabbit773",
    country: "Sierra Leone",
  },
  {
    name: "Muzzamil",
    email: "muzzamil.qureshi@example.com",
    username: "greenparrot183",
    country: "Brazil",
  },
  {
    name: "Nour El-Din",
    email: "nour.eldin@example.com",
    username: "sandstorm494",
    country: "Jordan",
  },
  {
    name: "Ingrid Larsen",
    email: "ingrid.larsen@example.com",
    username: "bluemoose827",
    country: "Norway",
  },
  {
    name: "Kofi Mensah",
    email: "kofi.mensah@example.com",
    username: "tallelephant356",
    country: "Ghana",
  },
  {
    name: "Mei Lin",
    email: "mei.lin@example.com",
    username: "softpanda119",
    country: "Taiwan",
  },
  {
    name: "Tariq Hassan",
    email: "tariq.hassan@example.com",
    username: "desertfox528",
    country: "Pakistan",
  },
  {
    name: "Valentina Rossi",
    email: "valentina.rossi@example.com",
    username: "pinksparrow864",
    country: "Italy",
  },
  {
    name: "Aleksei Petrov",
    email: "aleksei.petrov@example.com",
    username: "snowwolf237",
    country: "Russia",
  },
  {
    name: "Yuki Tanaka",
    email: "yuki.tanaka@example.com",
    username: "cherryblossom541",
    country: "Japan",
  },
  {
    name: "Chiara Bianchi",
    email: "chiara.bianchi@example.com",
    username: "lazyfox392",
    country: "Italy",
  },
  {
    name: "Ayesha",
    email: "ayesha.shahid@example.com",
    username: "lonelylion748",
    country: "Nigeria",
  },
  {
    name: "Mubeen",
    email: "mubeen.shahid@example.com",
    username: "icybear103",
    country: "Denmark",
  },
  {
    name: "Ahmed Khalil",
    email: "ahmed.khalil@example.com",
    username: "quietdune617",
    country: "Egypt",
  },
  {
    name: "Laura",
    email: "laura.gonzalez@example.com",
    username: "tropicbird229",
    country: "Argentina",
  },
  {
    name: "Faria",
    email: "faria.fahad@example.com",
    username: "greyhound853",
    country: "Ireland",
  },
  {
    name: "Muna",
    email: "muna.mughal@example.com",
    username: "starrynight466",
    country: "Turkey",
  },
  {
    name: "Ravi Patel",
    email: "ravi.patel@example.com",
    username: "yellowtiger334",
    country: "India",
  },
  {
    name: "Hania",
    email: "hania.mughal@example.com",
    username: "frostedleaf791",
    country: "Sweden",
  },
  {
    name: "Paulo Salave'a",
    email: "paulo.salavea@example.com",
    username: "oceanwave155",
    country: "New Zealand",
  },
];

// ── App State ─────────────────────────────────

let allUsers = fakeUsers; // all 50 users
let currentPage = 1; // which page we are on
let rowsPerPage = 10; // rows shown per page
let sortColumn = ""; // which column to sort by
let sortDirection = "asc"; // 'asc' = A to Z, 'desc' = Z to A
let isDarkMode = false; // current theme state

// ── Sorting ───────────────────────────────────
// Called when a column header is clicked.

function sortTable(column) {
  if (sortColumn === column) {
    // Same column clicked — flip the direction
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
  } else {
    // New column clicked — default to A to Z
    sortColumn = column;
    sortDirection = "asc";
  }

  currentPage = 1; // always go back to page 1 after sorting

  updateSortIcons();
  renderTable();
  renderPagination();
}

// Returns a sorted copy of allUsers (does not change the original array)
function getSortedUsers() {
  if (!sortColumn) return allUsers;

  return allUsers.slice().sort(function (a, b) {
    const valueA = a[sortColumn].toLowerCase();
    const valueB = b[sortColumn].toLowerCase();

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
}

// Updates the little arrow icons (↕ ↑ ↓) next to each column header
function updateSortIcons() {
  const columns = ["name", "email", "username", "country"];

  columns.forEach(function (col) {
    const icon = document.getElementById("icon-" + col);

    if (col === sortColumn) {
      icon.textContent = sortDirection === "asc" ? "↑" : "↓";
    } else {
      icon.textContent = "↕"; // unsorted column gets the neutral icon
    }
  });
}

// ── Render Table Rows ─────────────────────────

function renderTable() {
  const tableBody = document.getElementById("table-body");
  const sortedUsers = getSortedUsers();

  // Calculate which rows belong on the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageUsers = sortedUsers.slice(startIndex, endIndex);

  // Clear old rows
  tableBody.innerHTML = "";

  // Build and add a row for each user on this page
  pageUsers.forEach(function (user) {
    const row = document.createElement("tr");

    row.innerHTML =
      "<td>" +
      escapeHTML(user.name) +
      "</td>" +
      "<td>" +
      escapeHTML(user.email) +
      "</td>" +
      "<td>" +
      escapeHTML(user.username) +
      "</td>" +
      "<td>" +
      escapeHTML(user.country) +
      "</td>";

    tableBody.appendChild(row);
  });
}

// ── Render Pagination Controls ────────────────

function renderPagination() {
  const paginationDiv = document.getElementById("pagination");
  const totalPages = Math.ceil(allUsers.length / rowsPerPage);

  paginationDiv.innerHTML = "";

  // ‹ Previous button
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "‹";
  prevBtn.classList.add("page-btn", "page-arrow");
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = function () {
    goToPage(currentPage - 1);
  };
  paginationDiv.appendChild(prevBtn);

  // Page number buttons — show a window of 5 pages around the current page
  const pageRange = getPageRange(currentPage, totalPages);

  pageRange.forEach(function (page) {
    const btn = document.createElement("button");
    btn.textContent = page;
    btn.classList.add("page-btn");

    if (page === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = function () {
      goToPage(page);
    };
    paginationDiv.appendChild(btn);
  });

  // › Next button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "›";
  nextBtn.classList.add("page-btn", "page-arrow");
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = function () {
    goToPage(currentPage + 1);
  };
  paginationDiv.appendChild(nextBtn);
}

// Returns an array of page numbers to display (up to 5, centered on current page)
function getPageRange(current, total) {
  const maxVisible = 5;
  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > total) {
    end = total;
    start = Math.max(1, end - maxVisible + 1);
  }

  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

// Navigates to a page and re-renders
function goToPage(page) {
  const totalPages = Math.ceil(allUsers.length / rowsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderTable();
  renderPagination();
}

// ── Dark / Light Mode Toggle ──────────────────

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById("theme-btn");

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    button.textContent = "Light Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    button.textContent = "Dark Mode";
  }
}

// ── Helper: Escape HTML ───────────────────────
// Prevents XSS — turns < > & into safe display characters

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ── Start Everything ──────────────────────────
// These two calls run immediately when the page loads.
renderTable();
renderPagination();
