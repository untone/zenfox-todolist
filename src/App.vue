<template>
  <router-view />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  color: #333;
}

main {
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 60%;
}

a {
  color: #00b0fb;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

ul li span:first-of-type {
  position: absolute;
  margin-left: -20px;
}

ol {
  margin: 30px 0;
  padding: 15px 0;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

ol li {
  padding: 0 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th,
td {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

section {
  display: flex;
  width: 100%;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
