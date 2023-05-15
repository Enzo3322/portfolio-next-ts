async function getProjects() {
  const res = await fetch("http://localhost:5000/projects");

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default getProjects;
