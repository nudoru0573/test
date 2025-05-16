document.getElementById('submitForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  fetch('http://localhost:8080/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(msg => {
      document.getElementById('response').textContent = msg;
    })
    .catch(err => {
      console.error(err);
      document.getElementById('response').textContent = "エラーが発生しました。";
    });
});

