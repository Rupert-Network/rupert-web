<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet">

<script>
  let color = "#403D39"
</script>

<div class="header">
  <h1 class="title">Rupert</h1>
  <ul>
    <li style="--t-color: {color}"><a href="/">Home</a></li>
    <li style="--t-color: {color}"><a href="/pages/whitepages">WhitePages</a></li>
    <li style="--t-color: {color}"><a href="/pages/contact">Contact</a></li>
    <li style="--t-color: {color}"><a href="/pages/about">About</a></li>
  </ul>
</div>

<style>
  .header {
    height: 6rem;
    font-family: Poppins;
    display: inline-flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
    top:0;
    left: 0;
  }

  .title {
    margin-left: 2rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2rem;
  }

  li a {
    color: --t-color;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
</style>
