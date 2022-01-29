<script>
  export let color = "black";
  export let bgColor = "";
  export let pl = "";
  export let pr = "";
  export let pt = "";
  export let pd = "";
</script>

<li style={`--fg-color: {color}; --bg-color: {bgColor};`}><slot></slot></li>

<style>
  li {
    color: --fg-color;
    background-color: --bg-color;
    text-decoration: none;
  }
</style>
