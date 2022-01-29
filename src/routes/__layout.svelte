<script>
  import Footer from "$lib/Footer.svelte"
  import Header from "$lib/Header.svelte"
</script>


<div class="page">
  <div class="top">
    <Header/>
  </div>
  <div style="height: 6rem; width: 100%;"/>
  <slot></slot>
  <div class="god-kill-me">
    <Footer/> </div>
</div>

<style>
  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .god-kill-me {
    flex-shrink: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .content {
    flex-grow: 1;
  }
  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: #403D39;
    padding: 0;
    position: relative;
  }
  .header{
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
    top:0;
    left: 0;
  /* original background-color: #FFFCF2; */
    background-color: #FFFCF2;
    padding: 10px;
    -webkit-box-shadow: -1px 12px 46px -5px rgba(0,0,0,0.62);
    box-shadow: -1px 12px 46px -5px rgba(0,0,0,0.62);
    color: #403D39;
    font-family: 'Poppins';
    padding-left: 3rem;
    padding-right: 3rem;

  }
  h1{
    list-style-type: none;

  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li a {
    color: #403D39 ;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #EB5E28;
    color: #FFFCF2;
  }
</style>
