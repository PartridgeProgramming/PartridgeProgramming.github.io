const toggleAssignments = () => {
    document.getElementById("assignments-view").classList.toggle("hidden");
    if (!document.getElementById("project-view").classList.contains("hidden")) {
        document.getElementById("project-view").classList.toggle("hidden");
    }
};

const toggleProject = () => {
    document.getElementById("project-view").classList.toggle("hidden");
    if (!document.getElementById("assignments-view").classList.contains("hidden")) {
        document.getElementById("assignments-view").classList.toggle("hidden");
    }
};
window.onload = () => {
    document.getElementById("assignment-link").onclick = toggleAssignments;
    document.getElementById("project-link").onclick = toggleProject;
};