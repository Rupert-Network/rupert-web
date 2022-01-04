<div class = "header">
  <h1>Rupert</h1>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/pages/whitepages">WhitePages</a></li>
    <li><a href="/pages/contact">Contact</a></li>
    <li><a href="/pages/about">About</a></li>
  </ul>
</div>
<style>
.header{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin: 0;
  overflow: hidden;
/* background-color: #FFFCF2; */
  background-color: transparent;
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

}

li {
  float: left;
}

li a {
  display: block;
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
<slot></slot>
