<script setup>
  // Não é necessário nada no <script> para o footer
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHef3aYW5xeNg/company-logo_200_200/company-logo_200_200/0/1697397714063?e=1743033600&v=beta&t=gB2BNxwEoX5vwPJVT_LMWt-3G6TCP0-x5GM4bYVxytA" alt="logo lamsa" height="50">

      </div>
      <nav class="footer-nav">
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
      <div class="footer-social">
        <a href="https://github.com/lopesgustavo01" target="_blank">GitHub</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 - Luiz Gustavo S. Lopes | Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--cor-es);
  border-top: 1px solid var(--cor-contraste);
  padding: 0;
  margin: 0;
  max-width: 100%;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo h3 {
  margin: 0;
  font-size: 24px;
  color: black;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
}

.footer-nav li {
  margin: 10px 0;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
}

.footer-social a {
  color: #00b4d8;
  margin: 0 10px;
  text-decoration: none;
}

.footer-social a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 0px;
  padding: 0;
  font-size: 12px;
  color: #aaa;
}
.footer-bottom p {
    padding: 0 0 7px;
    margin: 0;
}


</style>
