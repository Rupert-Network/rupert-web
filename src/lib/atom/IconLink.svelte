<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
  export let link = "#"
  export let size = "lg"

  let icon = faGithub;
  if (link.indexOf("instagram") >= 0) {
    icon = faInstagram;
  }
  else if (link.indexOf("twitter") >= 0) {
    icon = faTwitter;
  }

</script>

<a href={link} target="_blank">
  <Fa style = "color: white;" {icon} size="lg"/>
</a>
