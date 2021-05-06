const githubID = 'kimcoding'

const app = {
  server: `http://localhost:3000/messages`,
  init: () => {
    app.addEventHandlers();
    app.fetch((json) => {
      json.results.forEach(app.renderMessage);
    });
  },
  fetchAndRender: () => {
    app.fetch(data => {
      data.results.forEach(app.renderMessage);
    });
  },
  addEventHandlers: () => {
    let submit = document.querySelector('#send .submit');
    if (submit) {
      submit.addEventListener('submit', app.handleSubmit);
    }
  },
  fetch: callback => {
    window
      .fetch(app.server)
      .then(resp => {
        return resp.json();
      })
      .then(callback);
  },
  send: (data, callback) => {
    window
      .fetch(app.server, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => {
        return resp.json();
      })
      .then(callback);
  },
  clearMessages: () => {
    document.querySelector('#chats').innerHTML = '';
  },
  clearForm: () => {
    document.querySelector('.inputUser').value = '';
    document.querySelector('.inputChat').value = '';
  },
  renderMessage: ({ username, text, date, roomname }) => {
    const tmpl = `<div class="chat">
      <div class="username">${username
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
      <div>${text
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
      <div>${date}</div>
      <div>${roomname
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
    </div>`;

    document.querySelector('#chats').innerHTML =
      tmpl + document.querySelector('#chats').innerHTML;
  },
  handleSubmit: e => {
    e.preventDefault();
    app.clearMessages();
    app.send(
      {
        username: document.querySelector('.inputUser').value,
        text: document.querySelector('.inputChat').value,
        date: String(new Date()),
        roomname: '코드스테이츠'
      },
      () => {
        app.fetchAndRender();
        app.clearForm();
      }
    );
  }
};

app.init();
// 테스트를 위한 코드입니다.
if(window.isNodeENV){
  module.exports = app;
}