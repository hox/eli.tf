const fastify = require('fastify');
const f = fastify();

f.all('*', (req, res) => {
  res.header('Content-Type', 'text/html').code(200).send(`
      <body>
        <span>
          eli is too lazy to make his site so were just gonna redirect you to his twitter in 
            <span id="yes">
              5
            </span>
          (:
        </span>
        <script>
          let num = 4;
          setInterval(() => {
            document.getElementById("yes").innerText = num--;
          }, 1000);
          setTimeout(() => {
            window.location="https://go.eli.tf/twitter"
          }, 5000)
        </script>
      </body>
    `);
});

f.listen(3000, '0.0.0.0', () => console.log('online'));
