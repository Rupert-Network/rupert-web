<script>
  import IconLink from "$lib/atom/IconLink.svelte";
</script>

<div class="footer">
  <div class = "social-links">
    <IconLink link="https://www.instagram.com"/>
    <IconLink link="https://www.twitter.com"/>
    <IconLink link="https://github.com/Rupert-Network"/>
  </div>
</div>


<style>
  .social-links {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items:center;
  }

  .footer {
    height: 6rem;
    background-color: #EB5E28;
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    position: relative;
  }
</style>
