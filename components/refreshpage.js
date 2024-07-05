// Refresh the page
"use client";

export default function RefreshPage(index) {
  // Update the page with a new game
  sessionStorage.clear();
  location.reload(true);
}
