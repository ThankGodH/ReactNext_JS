document.getElementById('conditional').innerHTML = `
  <h2>Conditional Rendering</h2>
  <button onclick="toggleMember()">Toggle Membership</button>
  <p id="memberStatus">Welcome back, member!</p>
`;

let isMember = true;

function toggleMember() {
  isMember = !isMember;
  document.getElementById('memberStatus').textContent = isMember
    ? "Welcome back, member!"
    : "Please sign up to become a member.";
}
