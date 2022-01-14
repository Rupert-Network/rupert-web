<script>
import Fa from 'svelte-fa/src/fa.svelte'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

</script>
<div id="funny">
  <div class = "icon-box">
    <a href="https://github.com/Rupert-Network" target="_blank">
      <Fa style = "color: white;" icon={faGithub} size="lg"/>
    </a>
    <a href = "https://twitter.com/?lang=en" target="_blank">
      <Fa style = "color: white;" icon={faTwitter} size="lg"/>
    </a>
    <a href = "https://www.instagram.com/" target="_blank">
      <Fa style = "color: white;" icon={faInstagram} size="lg"/>
    </a>
  </div>
</div>


<style>


.icon-box{
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items:center;
}
.github-icon{
  color: white !important;
}
#funny{
  height: 100px;
  background-color: #EB5E28;
  display: flex;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  position: relative;
}
</style>
