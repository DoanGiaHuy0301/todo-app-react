const loadState = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return [];
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

export { loadState, saveState };
