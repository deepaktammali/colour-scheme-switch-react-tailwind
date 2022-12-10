const POSSIBLE_COLOR_SCHEMES = ["light", "dark"];

const prefersDarkColorScheme = window.matchMedia(
  "(prefers-color-scheme:dark)"
).matches;
const localStoragePreferredColorScheme = localStorage.getItem(
  "preferred-color-scheme"
);

if (
  localStoragePreferredColorScheme &&
  POSSIBLE_COLOR_SCHEMES.includes(localStoragePreferredColorScheme)
) {
  // If there is a value in the local storage that means the user has a preference then respect it.
  document.documentElement.setAttribute(
    "data-theme",
    localStoragePreferredColorScheme
  );
} else if (prefersDarkColorScheme) {
  //   If the user doesn't have any preference then work according to the match media.
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  // Light is the default color scheme that we would use.
  document.documentElement.setAttribute("data-theme", "light");
}
