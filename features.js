document.getElementById('features').innerHTML = `
  <h2>Features Page</h2>
  <button onclick="toggleText()">Toggle Message</button>
  <p id="message" style="display:none;">This message is now visible!</p>

  <h3>Form Section</h3>
  <form onsubmit="handleForm(event)">
    <input id="formInput" type="text" placeholder="Enter text..." />
    <button type="submit">Submit</button>
  </form>
  <p id="formMsg"></p>
`;

function toggleText() {
  const msg = document.getElementById('message');
  msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
}

function handleForm(e) {
  e.preventDefault();
  const val = document.getElementById('formInput').value;
  const msg = document.getElementById('formMsg');
  msg.textContent = val ? `You entered: ${val}` : 'Please enter something!';
}
