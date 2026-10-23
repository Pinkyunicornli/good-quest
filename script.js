/*
  Good Quest
  - OPPORTUNITIES is the list you can edit.
  - Only links and emails from the school volunteer sheet are included.
  - Saved quest IDs are stored in this browser with localStorage.
*/

(function () {
  const STORAGE_SAVED = "goodquest-saved";
  const STORAGE_CUSTOM = "goodquest-custom";
  const STORAGE_GOAL = "goodquest-goal";
  const STORAGE_LOGS = "goodquest-logs";

  /* Edit this array to add or change listings. */
  const OPPORTUNITIES = [
    {
      id: "fit-fun",
      title: "Fit & Fun",
      organization: "JCC Special Needs Department",
      description: "Partner with children and teens with special needs in yoga and fitness activities. Led by trainers.",
      cause: "Special needs",
      location: "Levis JCC, Boca Raton",
      minAge: null,
      when: "weekend",
      schedule: "Sundays, 12:00–1:30 PM",
      hours: "About 1.5 per session",
      extra: "6-week commitment. Dates: Oct 11, 18, 25 and Nov 1, 8, 15. Address: 21050 95th Ave S, Boca Raton, FL 33428.",
      contact: "Ali Landman",
      email: "AliL@levisjcc.org",
    },
    {
      id: "trunk-or-treat",
      title: "Adopt-A-Family Trunk or Treat",
      organization: "Adopt-A-Family",
      description: "Decorate a car trunk, bring games or activities, and give out candy for children at the campus.",
      cause: "Community",
      location: "Adopt-A-Family campus",
      minAge: null,
      when: "weekday",
      schedule: "Friday, Oct 23",
      hours: "Not listed",
      extra: "Email Mrs. Sanchez to host a vehicle. She will connect you to reserve a spot.",
      contact: "Mrs. Sanchez",
      email: "kelli.sanchez@saintandrews.net",
    },
    {
      id: "thanksgiving-boxes",
      title: "Thanksgiving box packing",
      organization: "Boca Helping Hands",
      description: "Sort and pack items from the Thanksgiving Box Drive.",
      cause: "Hunger",
      location: "Mariani Great Hall",
      minAge: null,
      when: "weekday",
      schedule: "Friday, Nov 13, 3:00–6:00 PM",
      hours: "Up to 3",
      extra: "Sign-up not yet available. No contact email was on the sheet.",
      contact: "Not listed yet",
      email: "",
    },
    {
      id: "movie-night",
      title: "Adopt-A-Family Movie Night",
      organization: "Adopt-A-Family of the Palm Beaches",
      description: "Help run activities and crafts with children.",
      cause: "Community",
      location: "Lake Worth",
      minAge: null,
      when: "weekday",
      schedule: "Friday, Dec 4, 4:00–10:00 PM",
      hours: "Up to 6",
      extra: "Email Mrs. Sanchez directly.",
      contact: "Mrs. Sanchez",
      email: "kelli.sanchez@saintandrews.net",
    },
    {
      id: "heart-walk",
      title: "Congenital Heart Walk & 5K",
      organization: "Children’s Heart Foundation",
      description: "Help with event roles at the West Palm Beach walk.",
      cause: "Health",
      location: "West Palm Beach",
      minAge: null,
      when: "weekend",
      schedule: "Saturday, Feb 7, morning",
      hours: "Not listed",
      extra: "Nurse Brittanie is an organizer of this event.",
      contact: "Nurse Brittanie Lazarte",
      email: "brittanie.lazarte@saintandrews.net",
      link: "https://secure.qgiv.com/for/chwcommitteesignup/event/westpalmbeach/",
    },
    {
      id: "pep-club",
      title: "Lower School Enrichment — Pep Club",
      organization: "Lower School",
      description: "Support Lower School cheer enrichment and the homecoming performance.",
      cause: "School",
      location: "Campus",
      minAge: null,
      when: "weekday",
      schedule: "Mondays after school",
      hours: "Not listed",
      extra: "Multi-week. Dates: Aug 31, Sep 14, Sep 28, Oct 5, Oct 9 Homecoming. Commit to all dates.",
      contact: "Ellen Gottsegen",
      email: "ellen.gottsegen@saintandrews.net",
    },
    {
      id: "ms-mentorship",
      title: "Middle School Mentorship",
      organization: "Grade 8 Community Project",
      description: "Assist with the Grade 8 Community Project.",
      cause: "Education",
      location: "Campus",
      minAge: null,
      when: "weekday",
      schedule: "Ongoing",
      hours: "Not listed",
      extra: "Multi-week commitment.",
      contact: "Dr. Prieto",
      email: "alexandria.prieto@saintandrews.net",
    },
    {
      id: "basketball-timekeeper",
      title: "Youth basketball timekeepers",
      organization: "Local recreational league",
      description: "Serve as a timekeeper for youth basketball games.",
      cause: "Sports",
      location: "Local league",
      minAge: null,
      when: "weekend",
      schedule: "Saturdays through October",
      hours: "Not listed",
      extra: "Multi-week. You can also email the league at info@playbrbc.com",
      contact: "Mrs. Sanchez",
      email: "kelli.sanchez@saintandrews.net",
    },
    {
      id: "buddy-sports",
      title: "Parkland Buddy Sports",
      organization: "Parkland Buddy Sports",
      description: "Help with youth sports for children with special needs. Sports change by season.",
      cause: "Special needs",
      location: "Parkland",
      minAge: null,
      when: "weekend",
      schedule: "Saturdays",
      hours: "Not listed",
      extra: "Multi-week. You can also use the Buddy Sports volunteer page.",
      contact: "Mrs. Sanchez",
      email: "kelli.sanchez@saintandrews.net",
      link: "https://reggie.parklandbuddysports.org/reggie/volunteer-login.cfm",
    },
    {
      id: "top-soccer",
      title: "TOP Soccer buddy",
      organization: "TOP Soccer",
      description: "Be a Soccer Buddy for children and adults with special needs on game days.",
      cause: "Special needs",
      location: "See Top Soccer calendar",
      minAge: null,
      when: "weekend",
      schedule: "Saturdays, Jan 16–Mar 13, 2027. Check in by 2:30 PM",
      hours: "Not listed",
      extra: "Multi-week. Check their calendar for locations. No email was on the sheet.",
      contact: "TOP Soccer website",
      email: "",
      link: "https://sabrsoccer.net/top-soccer/#buddies",
    },
    {
      id: "breakthrough",
      title: "Breakthrough Miami",
      organization: "Breakthrough Miami",
      description: "Help run classes and activities. Students-teaching-students model.",
      cause: "Education",
      location: "Miami area",
      minAge: null,
      when: "weekend",
      schedule: "Select Saturdays, 8:30 AM–2:30 PM",
      hours: "About 6",
      extra: "Sign up at Club Fair for more information. No email was on the sheet.",
      contact: "Club Fair signup",
      email: "",
    },
    {
      id: "cros-gleaning",
      title: "CROS Ministries Gleaning",
      organization: "CROS Ministries",
      description: "Gather surplus produce from farms so it does not go to waste.",
      cause: "Hunger",
      location: "Palm Beach, Martin, and Hendry Counties",
      minAge: null,
      when: "weekend",
      schedule: "Select Saturdays, November–July",
      hours: "Not listed",
      extra: "Dates depend on harvests. Use the Sign-up Genius on the school sheet. No email was listed.",
      contact: "CROS Sign-up Genius",
      email: "",
    },
  ];

  const views = {
    quests: document.getElementById("view-quests"),
    saved: document.getElementById("view-saved"),
    hours: document.getElementById("view-hours"),
  };
  const viewTriggers = document.querySelectorAll("[data-view]");
  const navButtons = document.querySelectorAll(".nav-link[data-view]");
  const questList = document.getElementById("quest-list");
  const savedList = document.getElementById("saved-list");
  const noResults = document.getElementById("no-results");
  const causeFilter = document.getElementById("filter-cause");
  const whenFilter = document.getElementById("filter-when");
  const addForm = document.getElementById("add-form");
  const addError = document.getElementById("add-error");
  const deckCount = document.getElementById("deck-count");
  const deckActions = document.getElementById("deck-actions");
  const toast = document.getElementById("toast");
  const xpGoalInput = document.getElementById("xp-goal");
  const xpTotal = document.getElementById("xp-total");
  const xpBar = document.getElementById("xp-bar");
  const logForm = document.getElementById("log-form");
  const logError = document.getElementById("log-error");
  const logList = document.getElementById("log-list");
  let browseIndex = 0;
  let toastTimer = null;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function blankToListed(value) {
    const trimmed = String(value || "").trim();
    return trimmed || "Not listed";
  }

  function loadCustom() {
    try {
      const raw = localStorage.getItem(STORAGE_CUSTOM);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function storeCustom(list) {
    localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(list));
  }

  function allQuests() {
    return loadCustom().concat(OPPORTUNITIES);
  }

  function showView(viewName) {
    const nextView = views[viewName];
    if (!nextView) {
      return;
    }

    Object.keys(views).forEach(function (name) {
      const view = views[name];
      const isActive = name === viewName;
      view.classList.toggle("is-visible", isActive);
      view.hidden = !isActive;
    });

    navButtons.forEach(function (button) {
      const isCurrent = button.getAttribute("data-view") === viewName;
      button.classList.toggle("is-active", isCurrent);
      if (isCurrent) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }

  viewTriggers.forEach(function (button) {
    button.addEventListener("click", function () {
      showView(button.getAttribute("data-view"));
    });
  });

  function loadSavedIds() {
    try {
      const raw = localStorage.getItem(STORAGE_SAVED);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function storeSavedIds(ids) {
    localStorage.setItem(STORAGE_SAVED, JSON.stringify(ids));
  }

  function findQuest(id) {
    return allQuests().filter(function (quest) {
      return quest.id === id;
    })[0];
  }

  function fillCauseFilter() {
    const current = causeFilter.value;
    causeFilter.innerHTML = '<option value="">All</option>';
    const causes = [];
    allQuests().forEach(function (quest) {
      if (causes.indexOf(quest.cause) === -1) {
        causes.push(quest.cause);
      }
    });
    causes.sort();
    causes.forEach(function (cause) {
      const option = document.createElement("option");
      option.value = cause;
      option.textContent = cause;
      causeFilter.appendChild(option);
    });
    causeFilter.value = current;
  }

  function matchesFilters(quest) {
    const cause = causeFilter.value;
    const when = whenFilter.value;

    if (cause && quest.cause !== cause) {
      return false;
    }
    if (when && quest.when !== when) {
      return false;
    }
    return true;
  }

  function contactBlock(quest) {
    const who = escapeHtml(quest.contact || "Not listed");
    if (quest.email) {
      return (
        '<p class="contact"><span>Contact</span> ' +
        who +
        " — " +
        '<a href="mailto:' +
        escapeHtml(quest.email) +
        '">' +
        escapeHtml(quest.email) +
        "</a></p>"
      );
    }
    return '<p class="contact"><span>Contact</span> ' + who + "</p>";
  }

  function cardHtml(quest, showSaveBox) {
    const savedIds = loadSavedIds();
    const isSaved = savedIds.indexOf(quest.id) !== -1;

    let extra = "<p>" + escapeHtml(quest.extra || "") + "</p>";
    if (quest.link) {
      extra +=
        '<p><a href="' +
        escapeHtml(quest.link) +
        '" target="_blank" rel="noopener noreferrer">Open listed signup page</a></p>';
    }

    const saveBox = showSaveBox
      ? '<label class="save-box">' +
        '<input type="checkbox" data-id="' +
        escapeHtml(quest.id) +
        '"' +
        (isSaved ? " checked" : "") +
        " />" +
        "<span>Save</span>" +
        "</label>"
      : "";

    return (
      '<article class="quest-card">' +
      saveBox +
      '<div class="card-body">' +
      (quest.custom ? '<p class="demo-badge">New</p>' : "") +
      "<h2>" +
      escapeHtml(quest.title) +
      "</h2>" +
      '<p class="org">' +
      escapeHtml(quest.organization) +
      "</p>" +
      '<p class="desc">' +
      escapeHtml(quest.description) +
      "</p>" +
      '<ul class="meta">' +
      "<li><span>Cause</span> " +
      escapeHtml(quest.cause) +
      "</li>" +
      "<li><span>Location</span> " +
      escapeHtml(quest.location) +
      "</li>" +
      "<li><span>When</span> " +
      escapeHtml(quest.schedule) +
      "</li>" +
      "<li><span>Hours</span> " +
      escapeHtml(quest.hours) +
      "</li>" +
      "</ul>" +
      contactBlock(quest) +
      extra +
      "</div>" +
      "</article>"
    );
  }

  function filteredQuests() {
    return allQuests().filter(matchesFilters);
  }

  function goNext() {
    browseIndex += 1;
    render();
  }

  function showToast(message) {
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.hidden = true;
    }, 900);
  }

  function saveCurrent() {
    const list = filteredQuests();
    const quest = list[browseIndex];
    if (!quest) {
      return;
    }
    const ids = loadSavedIds();
    if (ids.indexOf(quest.id) === -1) {
      ids.push(quest.id);
      storeSavedIds(ids);
    }
    showToast("Saved");
    goNext();
  }

  function renderDeck() {
    const list = filteredQuests();
    noResults.hidden = true;
    deckActions.hidden = false;

    if (list.length === 0) {
      questList.innerHTML = "";
      deckCount.textContent = "";
      deckActions.hidden = true;
      noResults.hidden = false;
      return;
    }

    if (browseIndex >= list.length) {
      questList.innerHTML =
        '<div class="empty-card"><p>Quest complete. No more cards in this list.</p>' +
        '<button class="btn btn-primary" type="button" id="btn-restart">Play again</button></div>';
      deckCount.textContent = "";
      deckActions.hidden = true;
      return;
    }

    deckCount.textContent = browseIndex + 1 + " of " + list.length;
    questList.innerHTML = cardHtml(list[browseIndex], false);
  }

  function render() {
    fillCauseFilter();
    renderDeck();

    const savedIds = loadSavedIds();
    const savedQuests = savedIds
      .map(findQuest)
      .filter(function (quest) {
        return Boolean(quest);
      });

    if (savedQuests.length === 0) {
      savedList.innerHTML =
        '<p class="lede">Save a quest on the map to see it here.</p>';
    } else {
      savedList.innerHTML = savedQuests
        .map(function (quest) {
          return cardHtml(quest, true);
        })
        .join("");
    }

    renderHours();
  }

  function loadGoal() {
    const value = Number(localStorage.getItem(STORAGE_GOAL));
    return value > 0 ? value : 0;
  }

  function loadLogs() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_LOGS) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function totalHours() {
    return loadLogs().reduce(function (sum, item) {
      return sum + Number(item.hours);
    }, 0);
  }

  function fillActivityOptions() {
    const select = document.getElementById("log-activity");
    const current = select.value;
    select.innerHTML = '<option value="">Pick a quest</option>';
    allQuests().forEach(function (quest) {
      const option = document.createElement("option");
      option.value = quest.title;
      option.textContent = quest.title;
      select.appendChild(option);
    });
    const other = document.createElement("option");
    other.value = "Other";
    other.textContent = "Other";
    select.appendChild(other);
    if (current) {
      select.value = current;
    }
  }

  function renderHours() {
    fillActivityOptions();
    const goal = loadGoal();
    const total = totalHours();
    if (goal && xpGoalInput.value === "") {
      xpGoalInput.value = String(goal);
    }
    xpTotal.innerHTML =
      escapeHtml(String(total)) +
      ' <span id="xp-goal-label">/ ' +
      escapeHtml(String(goal || 0)) +
      "</span>";
    const percent = goal > 0 ? Math.min(100, (total / goal) * 100) : 0;
    xpBar.style.width = percent + "%";

    const logs = loadLogs();
    if (logs.length === 0) {
      logList.innerHTML = "";
      return;
    }
    logList.innerHTML = logs
      .map(function (item) {
        return (
          '<div class="log-item"><div>' +
          escapeHtml(item.activity) +
          "<br />" +
          escapeHtml(item.date) +
          " · " +
          escapeHtml(String(item.hours)) +
          " hrs</div>" +
          '<button class="btn btn-secondary" type="button" data-log="' +
          escapeHtml(item.id) +
          '">Delete</button></div>'
        );
      })
      .join("");
  }

  function onSaveToggle(event) {
    const box = event.target;
    if (!box.matches('input[type="checkbox"][data-id]')) {
      return;
    }

    const id = box.getAttribute("data-id");
    let ids = loadSavedIds();
    if (box.checked) {
      if (ids.indexOf(id) === -1) {
        ids.push(id);
      }
    } else {
      ids = ids.filter(function (savedId) {
        return savedId !== id;
      });
    }
    storeSavedIds(ids);
    render();
  }

  addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("add-title").value.trim();
    if (!title) {
      addError.hidden = false;
      addError.textContent = "Add a title first.";
      return;
    }

    addError.hidden = true;
    const custom = loadCustom();
    custom.unshift({
      id: "custom-" + Date.now(),
      custom: true,
      title: title,
      organization: blankToListed(document.getElementById("add-org").value),
      description: blankToListed(document.getElementById("add-desc").value),
      cause: blankToListed(document.getElementById("add-cause").value),
      location: blankToListed(document.getElementById("add-location").value),
      when: document.getElementById("add-when").value,
      schedule: blankToListed(document.getElementById("add-schedule").value),
      hours: blankToListed(document.getElementById("add-hours").value),
      extra: "Added by you. Stays in this browser.",
      contact: blankToListed(document.getElementById("add-contact").value),
      email: document.getElementById("add-email").value.trim(),
    });
    storeCustom(custom);
    addForm.reset();
    browseIndex = 0;
    render();
  });

  document.getElementById("btn-skip").addEventListener("click", goNext);
  document.getElementById("btn-save").addEventListener("click", saveCurrent);
  questList.addEventListener("click", function (event) {
    if (event.target.id === "btn-restart") {
      browseIndex = 0;
      render();
    }
  });
  savedList.addEventListener("change", onSaveToggle);
  causeFilter.addEventListener("change", function () {
    browseIndex = 0;
    render();
  });
  whenFilter.addEventListener("change", function () {
    browseIndex = 0;
    render();
  });
  document.getElementById("clear-filters").addEventListener("click", function () {
    causeFilter.value = "";
    whenFilter.value = "";
    browseIndex = 0;
    render();
  });

  xpGoalInput.addEventListener("change", function () {
    const goal = Number(xpGoalInput.value);
    if (!goal || goal <= 0) {
      localStorage.removeItem(STORAGE_GOAL);
      renderHours();
      return;
    }
    localStorage.setItem(STORAGE_GOAL, String(goal));
    renderHours();
  });

  logForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const activity = document.getElementById("log-activity").value.trim();
    const date = document.getElementById("log-date").value;
    const hours = Number(document.getElementById("log-hours").value);

    if (!activity || !date) {
      logError.hidden = false;
      logError.textContent = "Add an activity and a date.";
      return;
    }
    if (!hours || hours <= 0 || isNaN(hours)) {
      logError.hidden = false;
      logError.textContent = "Hours must be a number greater than 0.";
      return;
    }

    logError.hidden = true;
    const logs = loadLogs();
    logs.unshift({
      id: "log-" + Date.now(),
      activity: activity,
      date: date,
      hours: hours,
    });
    localStorage.setItem(STORAGE_LOGS, JSON.stringify(logs));
    logForm.reset();
    showToast("XP up");
    renderHours();
  });

  logList.addEventListener("click", function (event) {
    const button = event.target.closest("[data-log]");
    if (!button) {
      return;
    }
    const id = button.getAttribute("data-log");
    const logs = loadLogs().filter(function (item) {
      return item.id !== id;
    });
    localStorage.setItem(STORAGE_LOGS, JSON.stringify(logs));
    renderHours();
  });

  document.addEventListener("keydown", function (event) {
    const questsOpen = !views.quests.hidden;
    if (!questsOpen || deckActions.hidden) {
      return;
    }
    const typing =
      event.target.tagName === "INPUT" || event.target.tagName === "SELECT" || event.target.tagName === "TEXTAREA";
    if (typing) {
      return;
    }
    if (event.key === "ArrowLeft") {
      goNext();
    }
    if (event.key === "ArrowRight") {
      saveCurrent();
    }
  });

  render();
})();
